import { Router } from 'express';

/** Controllers */
import { BalanceController } from '../controllers';
import { BalanceService } from '../services';
import { AuthMiddleware } from '../auth';
import { DepositController } from '../controllers/deposit';
import { DepositService } from '../services/deposit';
import { ExtractionController } from '../controllers/extraction';
import { ExtractionService } from '../services/extraction';
import { LogRepository } from '../logs/log.repository';
import { FileSystemDatasource } from '../logs/file-system.datasource';

export class MonetaryOperationsRoutes {
    static get routes(): Router {
        const router = Router();

        const fileSystemLogRepository = new LogRepository(new FileSystemDatasource);

        const balanceController = new BalanceController(new BalanceService);
        const depositController = new DepositController(new DepositService);
        const extractionController = new ExtractionController(new ExtractionService(fileSystemLogRepository));

        router.get(
            '/balance',
            (req, res, next) => { AuthMiddleware.validateJWT(req, res, next) },
            balanceController.checkBalance);

        router.post('/deposit', depositController.depositOperation);

        router.post('/extraction', extractionController.extractionOperation);

        return router
    }
}