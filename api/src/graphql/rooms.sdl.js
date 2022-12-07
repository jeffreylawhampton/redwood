export const schema = gql`
  type Room {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    user: User!
    userId: Int!
    items: [Item]!
    containers: [Container]!
  }

  type Query {
    rooms: [Room!]! @requireAuth
    room(id: Int!): Room @requireAuth
  }

  input CreateRoomInput {
    name: String!
    userId: Int!
  }

  input UpdateRoomInput {
    name: String
    userId: Int
  }

  type Mutation {
    createRoom(input: CreateRoomInput!): Room! @requireAuth
    updateRoom(id: Int!, input: UpdateRoomInput!): Room! @requireAuth
    deleteRoom(id: Int!): Room! @requireAuth
  }
`
