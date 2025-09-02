import { basename as _basename, join } from "path"
import { readdirSync } from "fs"
import { Sequelize, DataTypes } from "sequelize"
import { env } from "process"
import { fileURLToPath } from "url"
import { dirname } from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const basename = _basename(__filename)
const environment = env.NODE_ENV || "development"

import configData from "../config/config.json" assert { type: "json" }
const dbConfig = configData[environment]
const db = {}

let sequelize
if (dbConfig.use_env_variable) {
    sequelize = new Sequelize(env[dbConfig.use_env_variable], dbConfig)
} else {
    sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig)
}

const loadModels = async () => {
    const files = readdirSync(__dirname).filter((file) => {
        return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js" && file.indexOf(".test.js") === -1
    })

    for (const file of files) {
        try {
            const module = await import(join(__dirname, file))
            const model = module.default(sequelize, DataTypes)
            db[model.name] = model
        } catch (error) {
            console.error(`Error importing model ${file}:`, error)
        }
    }

    // Set up associations
    Object.keys(db).forEach((modelName) => {
        if (db[modelName].associate) {
            db[modelName].associate(db)
        }
    })
}

// Load models
await loadModels()

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db
