import { Request, Response } from 'express';

import { AuthUserService } from "../services";
import { AuthenticationDTO } from '../model';


export class AuthUserController {
    constructor(
        public readonly authService: AuthUserService,
    ) { }

    authenticateUser = async (req: Request, res: Response) => {
        const [error, instanceDto] = AuthenticationDTO.validateCredentials(req.body);

        if (error) {
            /* () => res.status(401) */
           
        } else {
            this.authService.userAuthentication(instanceDto)
                .then(user => res.status(200).json(user))
                .catch(() => res.status(404).json('Invalid credentials.'));
        }
    }

};