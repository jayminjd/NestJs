import { Module } from '@nestjs/common';
import { UsersEntity } from './entities/users.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotosEntity } from 'src/photos/entities/photos.entity';

@Module({
  imports :[TypeOrmModule.forFeature([UsersEntity,PhotosEntity])],
  controllers: [UsersController],
  providers:[UsersService],
})
export class UsersModule {}
