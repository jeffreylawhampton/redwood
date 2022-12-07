export const schema = gql`
  type CategoriesOnItem {
    id: Int!
    categoryId: Int!
    category: Category!
    itemId: Int!
    item: Item!
  }

  type Query {
    categoriesOnItems: [CategoriesOnItem!]! @requireAuth
    categoriesOnItem(id: Int!): CategoriesOnItem @requireAuth
  }

  input CreateCategoriesOnItemInput {
    categoryId: Int!
    itemId: Int!
  }

  input UpdateCategoriesOnItemInput {
    categoryId: Int
    itemId: Int
  }

  type Mutation {
    createCategoriesOnItem(
      input: CreateCategoriesOnItemInput!
    ): CategoriesOnItem! @requireAuth
    updateCategoriesOnItem(
      id: Int!
      input: UpdateCategoriesOnItemInput!
    ): CategoriesOnItem! @requireAuth
    deleteCategoriesOnItem(id: Int!): CategoriesOnItem! @requireAuth
  }
`
