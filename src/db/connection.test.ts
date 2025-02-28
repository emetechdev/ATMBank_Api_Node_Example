/** Testeo asincrono para comprobar conexion con la db */
import { ENV } from "../config";
import { MongoConnection } from "./connection";

describe(
    'Conexion de Mongo',
    () => {

        test(
            'Debe realizar la conecion con exito',
            async () => {

                try {
                    const connected = await MongoConnection.connect({
                        url: ENV.MONGO_URL!,
                        databaseName: ENV.MONGO_DB_NAME!
                    })

                    expect(connected).toBe(true);

                } catch (error) {

                }

            }
        );

    }
);