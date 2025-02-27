import { UserModel } from './user.model';
import { AccountModel } from './account.model';

export interface ProfleBanckModel {
    user: UserModel;
    accounts: AccountModel[];
};