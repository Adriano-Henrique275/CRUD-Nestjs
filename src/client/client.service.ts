import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Client } from './interface/client.interface';
import { CreateClientDTO } from './dto/create-client.dto';

@Injectable()
export class ClientService {

    constructor(@InjectModel('Client') private clientModel: Model<Client>) { }

    async createClient(createClientDTO: CreateClientDTO): Promise<Client> {
        const client = new this.clientModel(createClientDTO);
        return await client.save();
    }

    async deleteClient(clientID: string): Promise<Client> {
        const deletedClient = await this.clientModel.findByIdAndDelete(clientID);
        return deletedClient;
    }

    async getClient(clientID: string): Promise<Client> {
        const client = await this.clientModel.findById(clientID);
        return client;
    }

    async getClients(): Promise<Client[]> {
        const clients = await this.clientModel.find();
        return clients;
    }

    async updateClient(clientID: string, createClinetDTO: CreateClientDTO): Promise<Client> {
        const updatedClient = await this.clientModel.findByIdAndUpdate(clientID,
                                                                   createClinetDTO,
                                                                   { new: true });
        return updatedClient;
    }
}