const { v4: uuid, validate: isUuid } = require('uuid');

const repositories = [];

const repositoryController = {
    async getRepositories(req, res) {
        return res.json(repositories);
      },
      
      async saveRepository(req, res) {
        const { title, url, techs } = req.body;
        
        const repository = {id: uuid(), title, url, techs, likes: 0 };
        repositories.push(repository);
      
        return res.status(200).json(repository);
      },
      
      async updateRepository(req, res) {
        const { title, url, techs } = req.body;
        const { id } = req.params;
      
        const repositoryIndex = repositories.findIndex(item => item.id === id);
        
        if (repositoryIndex === -1 )
          return res.status(400).json({ error: "Repository does not exists."});
      
        const repository = { id, title, url, techs, likes : repositories[repositoryIndex].likes };
      
        repositories[repositoryIndex] = repository;
        
        return res.json(repository);
      },
      
      async deleteRespository(req, res) {
        const { id } = req.params;
      
        const repositoryIndex = repositories.findIndex(item => item.id == id);
      
        if (repositoryIndex <= 0)
          return res.status(400).json({ error: "Repository does not exist"});
      
        repositories.splice(repositoryIndex,1);
      
        return res.status(204).send();
      },
      
      async saveRepositoryLikes(req, res) {
        const { id } = req.params;
      
        const repositoryIndex = repositories.findIndex( item => item.id === id);
        
        if(repositoryIndex === -1)
          return res.status(400).json({error: "Repository does not exist."});
        
        repositories[repositoryIndex].likes += 1;
      
        return res.status(200).json(repositories[repositoryIndex]);
      
      }
};

module.exports = repositoryController;



