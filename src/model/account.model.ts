export interface AccountModel {
    account_number: String;
    currency: 'ARS' | 'USD';
    type: 'CA' | 'CC';
    balance: number;
    cbu: String;
};