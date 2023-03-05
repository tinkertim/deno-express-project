// @deno-types="npm:@types/express@4"
import express, { NextFunction, Request, Response } from "npm:express";
import demoData from "./data_blob.json" assert { type: "json" };

const app = express();
const port: number = Number(Deno.env.get("APP_PORT")) || 3000;

const reqLogger = function (req: Request, _res: Response, next: NextFunction) {
  console.info(`${req.method} request to "${req.url}" by ${req.hostname}`);
  next();
};

app.use(reqLogger);
app.get("/", (_req: Request, res: Response): void => {
  res.status(200).send("Hello from Deno and Express!");
});

app.get("/users", (_req: Request, res: Response): void => {
  res.send(demoData.users);
});

app.get("/users/:id", (req: Request, res: Response): void => {
  const idx = Number(req.params.id);
  for (const needle in demoData.users) {
    const haystack = demoData.users[needle];
    if (haystack.id === idx) {
      res.status(200).send(haystack);
    }
  }
  res.status(400).json({ msg: "User not found" });
});

app.listen(port, () => {
    console.log(`Listening on ${ port } ...`);
});