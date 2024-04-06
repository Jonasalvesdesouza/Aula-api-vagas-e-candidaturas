import { Request, Response } from "express";
import { OpportunityServices } from "../services/opportunity.services";

export class OpportunityControllers{
    async create(req: Request, res: Response){
        const opportunitySercices = new OpportunityServices();

        const response = await opportunitySercices.create(req.body);

        return res.status(201).json(response);
    }

    async findMany(req: Request, res: Response){
        const opportunitySercices = new OpportunityServices();

        const response = await opportunitySercices.findMany();

        return res.status(200).json(response);
    }

    findOne(req: Request, res: Response){
        const opportunitySercices = new OpportunityServices();

        const response =  opportunitySercices.findOne(res.locals.opportunity);

        return res.status(200).json(response)
    }

    async update(req: Request, res: Response){
        const opportunitySercices = new OpportunityServices();

        const response = await opportunitySercices.update(Number(req.params.id), req.body);

        return res.status(200).json(response);
    }

    async delete(req: Request, res: Response){
        const opportunitySercices = new OpportunityServices();

        await opportunitySercices.delete(Number(req.params.id));

        return res.status(204).json();
    }
}