import { DataTypes } from "sequelize";
import sequelize from '../database';

const userModel = sequelize.define('User', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        // A string armazenará a hash da senha
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'users',
    timeStamps: true, // Permite a utilização de "created at" e "updated at"
});

module.exports = userModel;
