import { Router } from 'express';

import { AuthRoute, MonetaryOperationsRoutes } from './routes';

import { CreateMockController } from './controllers';

export class RouterApp {

    static get routes(): Router {

        const router = Router();

        router.use('/api/auth', AuthRoute.routes);

        router.use('/api/operation', MonetaryOperationsRoutes.routes);

        router.post('/create-db-mock', (req, res) => {
            const createMock = new CreateMockController();
            createMock.createMock();
            res.status(201).json('Creating local db mock');
        })

        return router
    }
}