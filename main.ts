// @deno-types="npm:@types/express@4"
import express, { NextFunction, Request, Response } from "npm:express@4.18.2";
import demoData from "./data_blob.json" assert { type: "json" };

const app = express();
const port = Number(Deno.env.get("PORT")) || 3000;

const reqLogger = function (req, _res, next) {
  console.info(`${req.method} request to "${req.url}" by ${req.hostname}`);
  next();
};

app.use(reqLogger);

app.get("/users", (_req, res) => {
  res.status(200).json(demoData.users);
});

app.get("/users/:id", (req, res) => {
  const idx = Number(req.params.id);
  for (const needle in demoData.users) {
    const haystack = demoData.users[needle];
    if (haystack.id === idx) {
      res.status(200).json(haystack);
      return;
    }
  }
  res.status(400).json({ msg: "User not found" });
});

app.listen(port, () => {
  console.log(`Listening on ${port} ...`);
});
