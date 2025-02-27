import { Request, Response } from 'express';

import { BalanceService } from '../services/balance';

export class BalanceController {
    constructor(
        public readonly balanceService: BalanceService,
    ) { };

    checkBalance = async (req: Request, res: Response) => {
        // user obtenido a través del middleware
        // const user = req.body // Tengo que corregir el entity
        
        const idAccount: any = req.get('id_Account');

        this.balanceService.balanceAccount(idAccount)
            .then(balance => res.status(200).json(balance))
            .catch(() => res.status(404).json('Balnace not found'))
    }

}