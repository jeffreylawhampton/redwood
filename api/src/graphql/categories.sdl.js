export const schema = gql`
  type Category {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    color: String
    user: User!
    userId: Int!
    items: [CategoriesOnItem]!
  }

  type Query {
    categories: [Category!]! @requireAuth
    category(id: Int!): Category @requireAuth
  }

  input CreateCategoryInput {
    name: String!
    color: String
    userId: Int!
  }

  input UpdateCategoryInput {
    name: String
    color: String
    userId: Int
  }

  type Mutation {
    createCategory(input: CreateCategoryInput!): Category! @requireAuth
    updateCategory(id: Int!, input: UpdateCategoryInput!): Category!
      @requireAuth
    deleteCategory(id: Int!): Category! @requireAuth
  }
`
