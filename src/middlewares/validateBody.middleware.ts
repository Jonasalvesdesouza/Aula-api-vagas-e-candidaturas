import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";

export class VailidateBody{
    static execute(scheam: ZodSchema){
        return(req: Request, res: Response, next: NextFunction) => {
            req.body = scheam.parse(req.body);

            return next();
        }
    }
}