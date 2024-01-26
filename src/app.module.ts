import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { DishesModule } from './dishes/dishes.module';
import { User } from './users/entities/user.entity';
import { Order } from './orders/entities/order.entity';
import { Dish } from './dishes/entities/dish.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: '0602',
      database: 'crud-webservices',
      entities: [User, Order, Dish],
      synchronize: true,
    }),
    UsersModule,
    OrdersModule,
    DishesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
