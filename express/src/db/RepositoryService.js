const { dataSource } = require("../config/typeorm");

const modelMapping = {
  users: "User",
};

class RepositoryService {
  static find(id) {
    const model = modelMapping[id];

    if (!model) {
      throw new Error(`repository ${id} not found`);
    }

    return dataSource.getRepository(id);
  }
}

module.exports = RepositoryService;
