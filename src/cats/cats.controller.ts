import { Controller, Get, Query, Post, Body, Put, Param, Delete, Header } from '@nestjs/common';
import { Request } from 'express';
import { Observable, of } from 'rxjs';
import { CreateCat, UpdateCat, ListAllEntities } from './cat.dto';

@Controller('cats')
export class CatsController {
    @Post()
    @Header('Access-Control-Allow-Origin', '*')
    create(@Body() createCatDto: CreateCat) {
        return 'This action adds a new cat';
    }

    @Get()
    findAll(@Query() query: ListAllEntities) {
        return `This action returns all cats (limit: ${query.limit} items)`;
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} cat`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCat: UpdateCat) {
        return `This action updates a #${id} cat`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} cat`;
    }

}
