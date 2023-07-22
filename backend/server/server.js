const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const schema = require('../src/schema');
const logger = require('../src/utils/logger');


const port = process.env.PORT || 4000;

module.exports = async(options = {}) => {

  const app = express();
  logger.info('Initialize GraphQL server');

  const server = new ApolloServer({
    schema,
    introspection: true,
    playground: true,
  });

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // CORS middleware
   app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE'
    );
    next();
  });

  const startServer = async () => {
    await server.start();
    server.applyMiddleware({ app, path: '/Variable' });

    app.listen(port, () => {
      logger.info(`Server started http://localhost:${port}/Variable`);
    });
  };

  startServer();

  return app;
};
