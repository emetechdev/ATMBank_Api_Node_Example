import mongoose from 'mongoose';

import { pinEncritor } from '../config';
import { UserSchema } from '../db';
import { AccountModel, UserModel } from '../model';

import { mock } from '../mock/users';
import { AccountSchema } from '../db/account.schema';

// separar varialbles de entorno y crear el config


export class CreateUserService {
    constructor() { };

    async saveAccount(account: AccountModel, userId: any) {
        const schema = await AccountSchema.create({
            fk_userId: userId,
            accountNumber: account.account_number,
            currency: account.currency,
            type: account.type,
            balance: account.balance,
            cbu: account.cbu,
        });
        console.log(`Account ${schema.accountNumber} is created.`)
    }

    async saveUser(user: UserModel, accounts: AccountModel[]) {
        const schema = await UserSchema.create({
            firstName: user.first_name,
            lastName: user.last_name,
            dni: user.dni,
            pin: pinEncritor.hash(user.pin)
        });
        console.log(`User ${schema.firstName} is created.`)
        try {
            accounts.map(i => {
                this.saveAccount(i, schema._id);
            });
        } catch {
            throw 'Error saving user accounts in mongo database.'
        }
    };


    public async create() {
        try {
            mock.map(i => this.saveUser(i.user, i.accounts));

        } catch {
            throw 'Error saving mongo database.'
        }

    };

};