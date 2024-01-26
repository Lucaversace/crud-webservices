import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
import { Dish } from './entities/dish.entity';

@Injectable()
export class DishService {
  constructor(
    @InjectRepository(Dish)
    private dishRepository: Repository<Dish>,
  ) {}

  async create(createDishDto: CreateDishDto): Promise<Dish> {
    const newDish = this.dishRepository.create(createDishDto);
    return this.dishRepository.save(newDish);
  }

  async findAll(): Promise<Dish[]> {
    return this.dishRepository.find();
  }

  async findOne(id: number): Promise<Dish> {
    return this.dishRepository.findOneBy({ id });
  }

  async update(id: number, updateDishDto: UpdateDishDto): Promise<Dish> {
    await this.dishRepository.update(id, updateDishDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.dishRepository.delete(id);
  }
}
