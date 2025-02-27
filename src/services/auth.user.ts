import { UserSchema } from '../db';
import { JWTGenerator, pinEncritor } from '../config';
import { AccountSchema } from '../db/account.schema';


export class AuthUserService {
    constructor() { };

    public async userAuthentication(credentials: any) {
        const user = await UserSchema.findOne({ dni: credentials.dni });

        if (user) {
            const pin: string = user.pin || '';
            const isMatch = pinEncritor.compare(credentials.pin, pin);

            if (!isMatch) throw 'Invalid credentials.'

            const accounts = await AccountSchema.find({ fk_userId: user.id })

            if (!accounts) throw 'Accounts failed.'

            let accountsFound: any = [];

            accounts.map(i => {
                const account = {
                    accountId: i._id,
                    accountNumber: i.accountNumber,
                    currency: i.currency,
                    type: i.type,
                    balance: i.balance,
                    cbu: i.cbu,
                }

                accountsFound.push(account)
            })

            const token = await JWTGenerator.generateToken(user.id);

            return {
                user: {
                    first_name: user.firstName,
                    last_name: user.lastName
                },
                accounts: accountsFound,
                token: token
            }

        } else { throw 'User not found' }


    }
};