import { Controller, Get, Query, Post, Body, Put, Param, Delete, Res, HttpStatus, Header } from '@nestjs/common';
import { Response, Request } from 'express';
import { Observable, of } from 'rxjs';
import { CreateCat, UpdateCat, ListAllEntities } from './cat.dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(
        private catsService: CatsService
    ){

    }
    @Post()
    create(@Res() res: Response) {
        res.status(HttpStatus.CREATED).send();
    }

    @Get()
    findAll(@Res() res: Response) {
        res.status(HttpStatus.OK).json([])
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
