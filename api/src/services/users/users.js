import { db } from 'src/lib/db'

export const users = () => {
  return db.user.findMany()
}

export const user = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const createUser = ({ input }) => {
  return db.user.create({
    data: input,
  })
}

export const updateUser = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}

export const User = {
  items: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).items()
  },
  categories: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).categories()
  },
  rooms: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).rooms()
  },
  containers: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).containers()
  },
  images: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).images()
  },
}
