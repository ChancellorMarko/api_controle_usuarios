const config = {
    server: {
        port: process.env.PORT || 3000
    },
    db: {
        dialect: process.env.DB_DIALECT || 'postgres',
        url: process.env.DATABASE_URL || 'postgresql://postgres:password@localhost:5432/exemplo_node'
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'supersecretkey',
        expiresIn: process.env.JWT_EXPIRES_IN || '3h'
    },
    redis: {
        url: process.env.REDIS_URL || 'redis://localhost:6379',
        password: process.env.REDIS_PASSWORD || null
    }
};

export default config;