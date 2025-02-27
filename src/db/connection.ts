import mongoose from 'mongoose';

interface ConfigConection {
    url: string;
    databaseName: string;
}

export class MongoConnection {
    static async connect(config: ConfigConection) {
        const { url, databaseName } = config;
        try {
            await mongoose.connect(url, { dbName: databaseName });
            console.log('Mongo connection.');
            
        } catch (ex) {
            throw ex;
        };
    }

}