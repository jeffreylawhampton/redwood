export const schema = gql`
  type Container {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    user: User!
    userId: Int!
    items: [Item]!
    room: Room
    roomId: Int
    parentContainerId: Int
    parentContainer: Container
    childContainers: Container
  }

  type Query {
    containers: [Container!]! @requireAuth
    container(id: Int!): Container @requireAuth
  }

  input CreateContainerInput {
    name: String!
    userId: Int!
    roomId: Int
    parentContainerId: Int
  }

  input UpdateContainerInput {
    name: String
    userId: Int
    roomId: Int
    parentContainerId: Int
  }

  type Mutation {
    createContainer(input: CreateContainerInput!): Container! @requireAuth
    updateContainer(id: Int!, input: UpdateContainerInput!): Container!
      @requireAuth
    deleteContainer(id: Int!): Container! @requireAuth
  }
`
