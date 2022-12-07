export const schema = gql`
  type User {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    email: String!
    name: String!
    password: String
    items: [Item]!
    categories: [Category]!
    rooms: [Room]!
    containers: [Container]!
    images: [Image]!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    email: String!
    name: String!
    password: String
  }

  input UpdateUserInput {
    email: String
    name: String
    password: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
