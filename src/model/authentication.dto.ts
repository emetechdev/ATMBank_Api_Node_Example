export class AuthenticationDTO {
    private constructor(
        public readonly dni: string,
        public readonly pin: string,
    ) { }

    /**
     * 
     * @param props { [key: string]:any } Representa el objeto body que recibe éste DTO
     * @returns [string?, AuthenticationDTO?] indica que va a devolver un arreglo que luego se
     * podrá desestructuras, ambos elementos son opcionales. Devuelve un string o la instancia
     * del DTO.
     */
    static validateCredentials(props: { [key: string]: any }): [string?, AuthenticationDTO?] {
        const { dni, pin } = props;
        let error: string = '404';

        // dni validations
        if ((dni.length === 7 || dni.length === 8) && pin.length === 4) {
            return [undefined, new AuthenticationDTO(dni, pin)]
        }

        return [error, undefined];
    }

}