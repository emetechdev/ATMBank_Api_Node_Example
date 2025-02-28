import { config } from 'dotenv';

/** Acá lo que se le dice es que cuando se levante la app, tiene que levantar
 * las variables de entorno de .env.test. Luego 'jest.congif' tambien se 
 * configura el parametro 'setupFiles'
 */
config({
    path: '.env.test'
});