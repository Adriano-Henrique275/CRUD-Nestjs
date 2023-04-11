import { Controller, Delete, Get, Post, Put, Res, HttpStatus, Body, Param } from '@nestjs/common';
import { CreateClientDTO } from './dto/create-client.dto';
import { ClientService } from './client.service';


@Controller('client')
export class ClientController {

    constructor(private clientService: ClientService) {}

    @Post('/create')
    async createClient(@Res() res, @Body() createClientDTO: CreateClientDTO): Promise<JSON> {
        const createdClient = await this.clientService.createClient(createClientDTO);

        return res.status(HttpStatus.OK).json({
            data: createdClient,
            message: 'Client was successfully created.',
            status: HttpStatus.OK
        });
    }

    @Delete('/:id')
    async deleteClient(@Res() res, @Param('id') id): Promise<JSON> {
        let jsonResponse;

        try {
            const deletedClient = this.clientService.deleteClient(id);
            jsonResponse = {
                data: deletedClient,
                message: `Client with id ${id} was deleted.`,
                status: HttpStatus.OK
            }
        } catch(error) {
            jsonResponse = jsonResponse = {
                data: null,
                message: `Client with id ${id} was not found.`,
                status: HttpStatus.NOT_FOUND
            }
        }

        return res.status(jsonResponse.status).json(jsonResponse);
    }

    @Get('/getAll')
    async getAllClient(@Res() res): Promise<JSON> {
        const clients = await this.clientService.getClient;

        return res.status(HttpStatus.OK).json({
            data: clients,
            message: 'Returning all clients.',
            status: HttpStatus.OK
        });
    }

    @Get('/:id')
    async getClientById(@Res() res, @Param('id') id): Promise<JSON> {
        let jsonResponse;

        try {
            const client = await this.clientService.getClient(id);
            jsonResponse = {
                data: client,
                message: `Returning client ${id}.`,
                status: HttpStatus.OK
            }
        } catch(error) {
            jsonResponse = jsonResponse = {
                data: null,
                message: `Client with id ${id} was not found.`,
                status: HttpStatus.NOT_FOUND
            }
        }

        return res.status(jsonResponse.status).json(jsonResponse);
    }

    @Put(':id')
    async updateClient(@Res() res, @Body() createClientDTO: CreateClientDTO, @Param('id') id): Promise<JSON> {
        let jsonResponse;

        try {
            const client = await this.clientService.updateClient(id, createClientDTO);
            jsonResponse = {
                data: client,
                message: `Returning updated client ${id}.`,
                status: HttpStatus.OK
            }
        } catch(error) {
            jsonResponse = jsonResponse = {
                data: null,
                message: `Client with id ${id} was not found.`,
                status: HttpStatus.NOT_FOUND
            }
        }

        return res.status(jsonResponse.status).json(jsonResponse);
    }
}