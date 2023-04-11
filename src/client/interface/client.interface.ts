import { Document } from 'mongoose';

export interface Client extends Document {
    idClient: number;
    name: string;
    email: string;
    password: string;
    cpf: number;
}