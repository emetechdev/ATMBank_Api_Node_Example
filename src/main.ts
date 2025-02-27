import { Server } from './server';
import { RouterApp } from './router';
import { MongoConnection } from './db/connection';

// Mandar variables de entorno aparte
const MONGO_URL = 'mongodb://127.0.0.1';
const MONGO_DB_NAME = 'autoservice_terminal';

(async () => { main(); })();

async function main() {

    await MongoConnection.connect({
        url: MONGO_URL,
        databaseName: MONGO_DB_NAME
    });

    const server = new Server({
        port: 3000,
        router: RouterApp.routes,
        public_path: 'localhost'
    });
    server.start();
}
