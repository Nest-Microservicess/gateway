import { Module } from '@nestjs/common';

import { OrdersController } from './orders.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'src/config';

@Module({
  controllers: [OrdersController],
  imports:[
      ClientsModule.register([
        { 
        name: 'ORDER_SERVICE',
        transport: Transport.TCP ,
        options: {
          host:envs.ordersMicroServiceHost,
          port: envs.ordersMicroServicePort
        }
      }
      ]),
    ]
})
export class OrdersModule {}