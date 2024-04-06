import "express-async-errors";
import express, { json } from "express";
import helmet from "helmet";
import { opportunityRouter } from "./routes/opportunity.route";
import { HandleErrors } from "./middlewares/handdleErrors.middleware";

export const app = express();

app.use(helmet());

app.use(json());

app.use("/opportunities", opportunityRouter);

app.use(HandleErrors.execute);