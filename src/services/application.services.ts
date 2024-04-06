import { prisma } from "../database/prisma";
import { TApplicationCreate } from "../schemas/application.schema";

export class ApplicationServices{
    async create(opportunityId: number, body: TApplicationCreate){
        const data = await prisma.application.create({ data: { opportunityId, ...body } });

        return data;
    }

    async findMany(opportunityId: number,){
        const data = await prisma.application.findMany( { where: { opportunityId } } );
        
        return data
    }
}