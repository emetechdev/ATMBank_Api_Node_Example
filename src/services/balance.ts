import { AccountSchema } from "../db/account.schema"

export class BalanceService {
    constructor() { };

    public async balanceAccount(idAccout: string) {
        const account = await AccountSchema.findOne({ _id: idAccout });

        if (!account) throw 'Account not found.'

        const currency = account.currency === 'ARS' ? '$'
            : account.currency === 'USD' ? 'USD'
                : '';
        if (!currency) throw 'Currency error.'

        const balanceFormatted = new Intl.NumberFormat(
            "en-US",
            { style: "currency", currency: "USD" }
        ).format(account.balance || 0);

        return {
            accountNumber: account.accountNumber,
            accountType: account.type,
            balnace: `${balanceFormatted}`
        }
    }
}