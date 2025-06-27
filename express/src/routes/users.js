const express = require("express");
const RepositoryService = require("../db/RepositoryService");

const router = express.Router();

router.get("/user", async (req, res) => {
  const repo = RepositoryService.find("users");
  const result = await repo.find();
  res.send(result);
});

module.exports = router;
