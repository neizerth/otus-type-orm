import { Router } from "express";
import { dataSource } from "../config/typeorm";
import { User } from "../db/models/User";

const usersRouter = Router();

usersRouter.get("/user", async (req, res) => {
  console.log('new request')
  const repo = dataSource.getRepository(User)
  const result = await repo.find();
  res.send(result);
});


export { usersRouter };