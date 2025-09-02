import { Sequelize } from "sequelize"
import config from "../../../config/index.js"

const sequelize = new Sequelize(config.db.url, {
    dialect: config.db.dialect,
    logging: false,
})

export default sequelize
