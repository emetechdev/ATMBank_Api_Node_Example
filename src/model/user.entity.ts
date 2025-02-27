export class UserEntity {
    constructor(
        public first_name: string,
        public last_name: string,
        public dni: string,
        public pin: string,
    ) { }

    static fromObject(object: { [key: string]: any }) {
        const { id, _id, first_name, last_name, dni, pin } = object;

        // Agregar validaciones
        

        return new UserEntity(id || _id, first_name, last_name, dni);
    }

}