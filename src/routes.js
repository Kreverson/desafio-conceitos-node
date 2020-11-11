const express = require('express');
const routes = express.Router();
const repositoryController = require("./controllers/RepositoryController");


routes.get("/repositories", repositoryController.getRepositories);

routes.post("/repositories", repositoryController.saveRepository);

routes.put("/repositories/:id", repositoryController.updateRepository);

routes.delete("/repositories/:id", repositoryController.deleteRespository);

routes.post("/repositories/:id/like", repositoryController.saveRepositoryLikes);

module.exports = routes;
