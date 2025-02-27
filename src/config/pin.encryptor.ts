import { compareSync, genSaltSync, hashSync } from 'bcryptjs';

export const pinEncritor = {

    hash: (pin: string) => {
        const salt = genSaltSync();
        return hashSync(pin, salt);
    },

    compare: (userPinInput: string, pinSaved: string) => {
        return compareSync(userPinInput, pinSaved);
    }

}