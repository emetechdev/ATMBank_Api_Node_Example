import { ENV } from './envs';

describe(
    'Ambiente local de desarrollo',
    () => {

        test(
            'Retorna el ambiente',
            () => {
                expect(ENV).toEqual({
                    SERVER_PORT: 3000,
                    PUBLIC_PATH: 'localhost',
                    MONGO_URL: 'mongodb://127.0.0.1',
                    MONGO_DB_NAME: 'NOC-TEST',
                    JWT_SECRET: 'SECRET'
                })
            }
        );
    }
);