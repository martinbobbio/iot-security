import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
    'postgres',
    'postgres',
    'admin',
    {
        host: process.env.DB_HOST || 'localhost',
        dialect:'postgres',
        pool:{
            max:5,
            min:0,
            idle:10000,
        },
        logging:false
    }
)