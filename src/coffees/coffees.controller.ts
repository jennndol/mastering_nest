import { Controller, Get, Param, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';



@Controller('coffees')
export class CoffeesController {
    @Get()
    findAll():string{
        return 'This action returns all coffees';
    }

    @Get(':id')
    findOne(@Param('id') id: string):string{
        return `This action returns #${id} coffee`;
    }

    @Post()
    create(@Body() body) {
        return body
    }
}
