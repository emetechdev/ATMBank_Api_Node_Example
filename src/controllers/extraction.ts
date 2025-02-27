import { Request, Response } from "express";
import { ExtractionService } from "../services/extraction";

export class ExtractionController {
    constructor(
        private readonly extractionService: ExtractionService,
    ) { }

    extractionOperation = async (req: Request, res: Response) => {
        const idAccount: any = req.get('id_Account');

        this.extractionService.extraction(idAccount, req.body.amount)
            .then(deposit => res.status(201).json(deposit))
            .catch(() => res.status(404));
    };
};