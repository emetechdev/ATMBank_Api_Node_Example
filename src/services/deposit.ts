import { AccountSchema } from "../db/account.schema";
import { convertToCurrencyNumber } from "../lib";

export class DepositService {
    constructor() { }
    public async deposit(idAccount: string, amount: number) {

        const accountUpdated = await AccountSchema.updateOne(
            { _id: idAccount },
            { $inc: { balance: amount } },
            { new: true }
        ); // 'new:true' no esta trayendo el documento modificado, buscar solucion

        if (accountUpdated?.modifiedCount >= 0) {
            const account = await AccountSchema.findById(idAccount);
            const balanceFormatted = convertToCurrencyNumber(account?.balance || 0);

            return {
                accountNumber: account?.accountNumber,
                accountType: account?.type,
                balnace: `${balanceFormatted}`
            }
        }

        return 'Error saving data.'
    }
}