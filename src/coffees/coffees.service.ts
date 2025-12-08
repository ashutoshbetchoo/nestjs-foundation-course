import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffees.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavours: ['chololate', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find((item) => item.id === +id);

    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }

    return coffee;
  }

  create(createCoffeeDto: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    this.coffees.push(createCoffeeDto);
    return this.coffees;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    // eslint-disable-next-line no-empty
    if (existingCoffee) {
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);

    if (coffeeIndex > 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
