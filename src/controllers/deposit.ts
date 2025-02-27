import { Request, Response } from "express";
import { DepositService } from "../services/deposit";

export class DepositController {
    constructor(
        private readonly depositService: DepositService,
    ) { }

    depositOperation = async (req: Request, res: Response) => {
        const idAccount: any = req.get('id_Account');

        this.depositService.deposit(idAccount, req.body.amount)
            .then(deposit => res.status(201).json(deposit))
            .catch(() => res.status(404));
    }
};