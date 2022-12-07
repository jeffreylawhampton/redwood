export const schema = gql`
  type Image {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    caption: String
    url: String!
    item: Item!
    itemId: Int!
    user: User!
    userId: Int!
  }

  type Query {
    images: [Image!]! @requireAuth
    image(id: Int!): Image @requireAuth
  }

  input CreateImageInput {
    caption: String
    url: String!
    itemId: Int!
    userId: Int!
  }

  input UpdateImageInput {
    caption: String
    url: String
    itemId: Int
    userId: Int
  }

  type Mutation {
    createImage(input: CreateImageInput!): Image! @requireAuth
    updateImage(id: Int!, input: UpdateImageInput!): Image! @requireAuth
    deleteImage(id: Int!): Image! @requireAuth
  }
`
