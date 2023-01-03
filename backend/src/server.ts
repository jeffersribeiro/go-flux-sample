import "dotenv/config";
import "reflect-metadata";
import "express-async-errors";

import cors from "cors";
import morgan from "morgan";
import { ZodError } from "zod";
import { QueryFailedError } from "typeorm";
import express, { NextFunction, Request, Response } from "express";

import router from "./routes";

import AppError from "./common/errors/AppError";

import { AppDataSource } from "./config/data-source";

const { PORT, NODE_ENV } = process.env;

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(morgan("dev"));

app.use(router);

app.use(
  (
    error: Error,
    _request: Request,
    response: Response,
    _next: NextFunction
  ) => {
    console.error(error.message);

    if (error instanceof AppError) {
      return response.status(error.code).json({
        error,
      });
    } else if (error instanceof ZodError) {
      return response.status(422).json({
        errors: error.issues,
      });
    } else if (error instanceof QueryFailedError) {
      return response.status(400).json({
        message: error.message,
        name: error.name,
        error,
      });
    } else if (error instanceof Error) {
      return response.status(400).json({
        message: error.message,
        name: error.name,
        error,
      });
    }

    return response.status(500).json({
      error,
      status: "error",
      message: "Internal server error",
    });
  }
);

app.listen(PORT, async () => {
  try {
    await AppDataSource.initialize();

    console.info(`server started at PORT: ${PORT} | ENV: ${NODE_ENV}`);
  } catch (error) {
    console.error(error);
  }
});
