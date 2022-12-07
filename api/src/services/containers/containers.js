import { db } from 'src/lib/db'

export const containers = () => {
  return db.container.findMany()
}

export const container = ({ id }) => {
  return db.container.findUnique({
    where: { id },
  })
}

export const createContainer = ({ input }) => {
  return db.container.create({
    data: input,
  })
}

export const updateContainer = ({ id, input }) => {
  return db.container.update({
    data: input,
    where: { id },
  })
}

export const deleteContainer = ({ id }) => {
  return db.container.delete({
    where: { id },
  })
}

export const Container = {
  user: (_obj, { root }) => {
    return db.container.findUnique({ where: { id: root?.id } }).user()
  },
  items: (_obj, { root }) => {
    return db.container.findUnique({ where: { id: root?.id } }).items()
  },
  room: (_obj, { root }) => {
    return db.container.findUnique({ where: { id: root?.id } }).room()
  },
  parentContainer: (_obj, { root }) => {
    return db.container
      .findUnique({ where: { id: root?.id } })
      .parentContainer()
  },
  childContainers: (_obj, { root }) => {
    return db.container
      .findUnique({ where: { id: root?.id } })
      .childContainers()
  },
}
