import { Router } from 'express';

/** Controllers */
import { BalanceController } from '../controllers';
import { BalanceService } from '../services';
import { AuthMiddleware } from '../auth';

export class MonetaryOperationsRoutes {
    static get routes(): Router {
        const router = Router();

        const balanceController = new BalanceController(new BalanceService);

        router.get(
            '/balance',
            (req, res, next) => { AuthMiddleware.validateJWT(req, res, next) },
            balanceController.checkBalance);


        return router
    }
}