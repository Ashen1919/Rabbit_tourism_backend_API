import { gql } from "apollo-server-express"

const destinationTypeDefs = gql `
    type Destination{
        id: ID!
        destination_name: String!
        destination_label: String!
        destination_image: String!
        destination_description: String!
        createdAt: String
        updatedAt: String
    }
    
    input DestinationInput {
        destination_name: String!
        destination_label: String!
        destination_image: String!
        destination_description: String!
    }
    
    extend type Query {
        destinations: [Destination!]!
        destination(id: ID!): Destination
    }

    extend type Mutation {
        createDestination(input: DestinationInput!) : Destination!
        createDestination(input: DestinationInput!) : Destination!
        deleteDestination(id:ID!) : Boolean!
    }
`;
module.exports = destinationTypeDefs;