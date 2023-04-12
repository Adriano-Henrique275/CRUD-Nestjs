import { Schema } from 'mongoose';

export const ClientSchema = new Schema({
    idClient: {
        type: Number,
        // required: true
    },
    name: {
        type: String,
        // required: true
    },
    email: {
      type: String,
    //   required: true
    },
    password: {
        type: String,
        // required: true
    },
    cpf: {
        type: Number,
        // required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});