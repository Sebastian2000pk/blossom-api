import { Request, Response, NextFunction } from "express";

export const logMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const startTime = Date.now();
  const { method, url } = req;
  const body = JSON.stringify(req.body);
  
  res.on("finish", () => {
    const endTime = Date.now();
    const elapsedTime = endTime - startTime;
    const statusCode = res.statusCode;
    console.log("🥑 ~ res.on ~ body:", body)
    console.log(`${method} ${url} ${statusCode} ${elapsedTime}ms`);
  });

  next();
};
