import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const AccountMongoModel = new Schema({
    accountId: ObjectId,
    fk_userId: { type: Schema.Types.ObjectId, ref: 'user' },

    accountNumber: String,
    currency: { type: String, enum: ['ARS', 'USD'] },
    type: { type: String, enum: ['CA', 'CC'] },
    balance: Number,
    cbu: String,
});

export const AccountSchema = mongoose.model('account', AccountMongoModel);