import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientModule } from './client/client.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/'),
ClientModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
