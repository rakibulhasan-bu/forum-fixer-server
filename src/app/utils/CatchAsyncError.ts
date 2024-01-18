import { NextFunction, Request, RequestHandler, Response } from "express";

export const CatchAsyncError = (func: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(func(req, res, next)).catch((error) => next(error));
  };
};
