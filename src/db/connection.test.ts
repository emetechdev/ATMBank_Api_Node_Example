/** Testeo asincrono para comprobar conexion con la db */
import mongoose from "mongoose";
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

                    //console.log('oBJETO connected: ', connected)
                    expect(connected).toBe(true);

                } catch (error) {
                    //console.log('ERROR EN EL TEST DE CONEXION: ', error)

                }

            }
        );

    }
);