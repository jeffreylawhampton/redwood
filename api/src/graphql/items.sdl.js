export const schema = gql`
  type Item {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    description: String
    value: String
    serialNumber: String
    quantity: String
    images: [Image]!
    user: User!
    userId: Int!
    categories: [CategoriesOnItem]!
    room: Room
    roomId: Int
    container: Container
    containerId: Int
  }

  type Query {
    items: [Item!]! @requireAuth
    item(id: Int!): Item @requireAuth
  }

  input CreateItemInput {
    name: String!
    description: String
    value: String
    serialNumber: String
    quantity: String
    userId: Int!
    roomId: Int
    containerId: Int
  }

  input UpdateItemInput {
    name: String
    description: String
    value: String
    serialNumber: String
    quantity: String
    userId: Int
    roomId: Int
    containerId: Int
  }

  type Mutation {
    createItem(input: CreateItemInput!): Item! @requireAuth
    updateItem(id: Int!, input: UpdateItemInput!): Item! @requireAuth
    deleteItem(id: Int!): Item! @requireAuth
  }
`
