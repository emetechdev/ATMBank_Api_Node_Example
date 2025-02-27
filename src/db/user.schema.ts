import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserMongoModel = new Schema({
    userId: ObjectId,
    firstName: String,
    lastName: String,
    dni: String,
    pin: String,
});

// 'user' en 'UserMongoModel' es el nombre de la coleccion
export const UserSchema = mongoose.model('user', UserMongoModel);
