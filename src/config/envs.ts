import 'dotenv/config';
import * as env from 'env-var';

export const ENV = {
    SERVER_PORT: env.get('SERVER_PORT').required().asPortNumber(),
    PUBLIC_PATH: env.get('PUBLIC_PATH').required().asString(),
    MONGO_URL: env.get('MONGO_URL').required().asUrlString(),
    MONGO_DB_NAME: env.get('MONGO_DB_NAME').required().asString(),
    JWT_SECRET: env.get('JWT_SECRET').required().asString(),
}