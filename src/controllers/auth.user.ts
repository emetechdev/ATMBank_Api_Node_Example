import { Request, Response } from 'express';

import { AuthUserService } from "../services";
import { json } from 'stream/consumers';

interface CredentialsDto {
    dni: string;
    pin: string;
};

export class AuthUserController {
    constructor(
        public readonly authService: AuthUserService,
    ) { }

    authenticateUser = (req: Request, res: Response) => {
        this.authService.userAuthentication(req.body)
            .then(user => res.status(200).json(user))
            .catch(() => res.status(404).json('Invalid credentials.'));
    }

};