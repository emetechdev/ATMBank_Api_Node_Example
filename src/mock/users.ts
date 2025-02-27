import { AccountModel, UserModel } from "../model";

const user1: UserModel = {
    "first_name": "Florencia",
    "last_name": "Perez",
    "dni": "30176294",
    "pin":"1563"
};
const accountsUser1: AccountModel[] = [
    { account_number: 'N° 1234-9876-332', type: 'CA', currency: 'ARS', balance: 70000, cbu: '0000023423487000234' },
];
const user2: UserModel = {
    "first_name": "Pedro",
    "last_name": "Sanchez",
    "dni": "3017621",
    "pin":"1234"
};
const accountsUser2: AccountModel[] = [
    { account_number: 'N° 1234-9876-332', type: 'CA', currency: 'ARS', balance: 70000, cbu: '0000023423487000234' },
    { account_number: 'N° 1234-9876-332', type: 'CC', currency: 'ARS', balance: 0, cbu: '0000023423487000234' },
    { account_number: 'N° 1234-9876-332', type: 'CA', currency: 'USD', balance: 5000, cbu: '0000023423487000234' },
    { account_number: 'N° 1234-9876-332', type: 'CA', currency: 'ARS', balance: 9900, cbu: '0000023423487000234' },
];
const user3: UserModel = {
    "first_name": "Juan",
    "last_name": "Perez",
    "dni": "30176295",
    "pin":"9873"
};
const accountsUser3: AccountModel[] = [
    { account_number: 'N° 1234-9876-332', type: 'CA', currency: 'ARS', balance: 70000, cbu: '0000023423487000234' },
    { account_number: 'N° 1234-9876-332', type: 'CC', currency: 'ARS', balance: 0, cbu: '0000023423487000234' },
    { account_number: 'N° 1234-9876-332', type: 'CA', currency: 'USD', balance: 5000, cbu: '0000023423487000234' },
    { account_number: 'N° 1234-9876-332', type: 'CA', currency: 'USD', balance: 0, cbu: '0000023423487000234' },
];

export const mock: { user: UserModel, accounts: AccountModel[] }[] = [
    { user: user1, accounts: accountsUser1 },
    { user: user2, accounts: accountsUser2 },
    { user: user3, accounts: accountsUser3 },
];