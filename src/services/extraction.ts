import { AccountSchema } from "../db/account.schema";
import { convertToCurrencyNumber } from "../lib";
import { LogRepository } from "../logs/log.repository";
import { LogEntity } from "../model";

export class ExtractionService {
    constructor(
        private readonly logRepository: LogRepository,
    ) { }

    public async extraction(idAccount: string, amount: number) {
        const accountUpdated = await AccountSchema.updateOne(
            { _id: idAccount },
            { $inc: { balance: -amount } },
            { new: true }
        ); // 'new:true' no esta trayendo el documento modificado, buscar solucion
        
        this.logRepository.saveLog(new LogEntity("low", 'prueba de logueo'));
        
        if (accountUpdated?.modifiedCount >= 0) {
            const account = await AccountSchema.findById(idAccount);
            const balanceFormatted = convertToCurrencyNumber(account?.balance || 0);
            
            return {
                accountNumber: account?.accountNumber,
                accountType: account?.type,
                balnace: `${balanceFormatted}`
            }
        }else{
            this.logRepository.saveLog(new LogEntity('high', 'error durante la extraccion'));
        }

        return 'Error saving data.'
    }
};