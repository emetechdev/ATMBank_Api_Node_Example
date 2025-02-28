import { LogEntity } from "./log.entity"

describe(
    'LoEntity',
    () => {

        test(
            'Debe poder crear una instancia de LogEntity',
            () => {
                const log = new LogEntity('low', 'mensage de un log');
                expect(log).toBeInstanceOf(LogEntity);
            }
        )
    }
)