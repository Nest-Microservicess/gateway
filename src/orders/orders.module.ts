import { Module } from '@nestjs/common';

import { OrdersController } from './orders.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'src/config';
import { NatsModule } from 'src/transport/nats.module';

@Module({
  controllers: [OrdersController],
  imports:[
      NatsModule
    ]
})
export class OrdersModule {}
