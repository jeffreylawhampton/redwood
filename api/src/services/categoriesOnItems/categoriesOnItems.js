import { db } from 'src/lib/db'

export const categoriesOnItems = () => {
  return db.categoriesOnItem.findMany()
}

export const categoriesOnItem = ({ id }) => {
  return db.categoriesOnItem.findUnique({
    where: { id },
  })
}

export const createCategoriesOnItem = ({ input }) => {
  return db.categoriesOnItem.create({
    data: input,
  })
}

export const updateCategoriesOnItem = ({ id, input }) => {
  return db.categoriesOnItem.update({
    data: input,
    where: { id },
  })
}

export const deleteCategoriesOnItem = ({ id }) => {
  return db.categoriesOnItem.delete({
    where: { id },
  })
}

export const CategoriesOnItem = {
  category: (_obj, { root }) => {
    return db.categoriesOnItem
      .findUnique({ where: { id: root?.id } })
      .category()
  },
  item: (_obj, { root }) => {
    return db.categoriesOnItem.findUnique({ where: { id: root?.id } }).item()
  },
}
