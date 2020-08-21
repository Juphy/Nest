import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AppMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function) {
        console.log('111', req.query, req.body );
        console.log('222', res, res);
        next();
    }
} 