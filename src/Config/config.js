require('dotenv').config();

module.exports = {
  // Configuração do banco de dados postgres
  username: process.env.DB_USER || 'test',
  password: process.env.DB_PASS || 'test',
  database: process.env.DB_NAME || 'postgres-auth-api',
  dialect: 'postgres',
  logging: false,
  define: {
    underscored: true,
    timestamps: true
  },
  // Configuração do local do processo da aplicação
  host: process.env.DB_HOST || 'postgres',
  port: Number(process.env.DB_PORT || 5432)
};