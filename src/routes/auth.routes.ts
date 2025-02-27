import { Router } from 'express';

/** Controllers */
import { AuthUserController } from '../controllers';
import { AuthUserService } from '../services';

export class AuthRoute {
    static get routes(): Router {

        const router = Router();
        
        const authService = new AuthUserService()
        const userController = new AuthUserController(authService);

        router.post('/user', userController.authenticateUser);

        return router
    }
}