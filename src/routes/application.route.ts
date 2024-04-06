import { Router } from "express";
import { ApplicationControllers } from "../controllers/application.controllers";
import { VailidateBody } from "../middlewares/validateBody.middleware";
import { applicationCreateSchema } from "../schemas/application.schema";

export const applicationRouter = Router();

const applicationControllers = new ApplicationControllers();

applicationRouter.post(
    "/:id/applications", 
    VailidateBody.execute(applicationCreateSchema), 
    applicationControllers.create
)

applicationRouter.get(
    "/:id/applications", 
    applicationControllers.findMany
)