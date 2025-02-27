import jwt from 'jsonwebtoken';

export class JWTGenerator {

    static async generateToken(payload: string, duration: string = '3h') {
        return new Promise(resolve => {

            jwt.sign(payload, 'SECRET', (error, token) => {
                if (error) return resolve(null);
                resolve(token);
            });

        });
    }

    static validateToken<T>(token: string): Promise<T | null> {
        return new Promise(resolve => {
            jwt.verify(
                token,
                'SECRET',
                (error, decoded) => {
                    if (error) return resolve(null);
                    resolve(decoded as T);
                }
            );
        });
    }


}