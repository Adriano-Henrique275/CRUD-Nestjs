import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientModule } from './client/client.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/clients'),
ClientModule
  ],
  
})
export class AppModule {}
