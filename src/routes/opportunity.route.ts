import { Router } from "express";
import { OpportunityControllers } from "../controllers/opportunity.controllers";
import { applicationRouter } from "./application.route";
import { VailidateBody } from "../middlewares/validateBody.middleware";
import { opportunityCreateSchema, opportunityUpdateSchema } from "../schemas/opportunity.schemas";
import { IsOpportunityIdValid } from "../middlewares/isOpportunityIdValid.middleware";

export const opportunityRouter = Router()

const opportunityControllers = new OpportunityControllers()

opportunityRouter.post(
    "/",
    VailidateBody.execute(opportunityCreateSchema),
    opportunityControllers.create
);

opportunityRouter.get("/", opportunityControllers.findMany);

opportunityRouter.use("/:id", IsOpportunityIdValid.execute);

opportunityRouter.get("/:id", opportunityControllers.findOne);

opportunityRouter.patch(
    "/:id",
    VailidateBody.execute(opportunityUpdateSchema), 
    opportunityControllers.update
);

opportunityRouter.delete("/:id", opportunityControllers.delete);

opportunityRouter.use("/", applicationRouter)