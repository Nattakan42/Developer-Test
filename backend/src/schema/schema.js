const { makeExecutableSchema, gql } = require('apollo-server-express');


const schema = makeExecutableSchema({
  typeDefs: gql`
    type Query {
      GetVariables: VariablesOutput
    }

    type VariablesOutput {
      valueX: Float!
      valueY: Float!
      valueZ: Float!
    }

  `,
});

module.exports = schema;
