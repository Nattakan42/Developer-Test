const FindXYZ = require('../controllers/get_variables')


const resolvers = {
  Query: {
    GetVariables: () => {
      return FindXYZ();
    },
  },
};

module.exports = resolvers;
