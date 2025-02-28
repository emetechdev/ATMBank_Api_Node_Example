import { Server } from './server';
import { RouterApp } from './router';
import { MongoConnection } from './db/connection';
import { ENV } from './config';

(async () => { main(); })();

async function main() {

    await MongoConnection.connect({
        url: ENV.MONGO_URL,
        databaseName: ENV.MONGO_DB_NAME
    });

    const server = new Server({
        port: ENV.SERVER_PORT,
        router: RouterApp.routes,
        public_path: ENV.PUBLIC_PATH
    });
    server.start();
}
