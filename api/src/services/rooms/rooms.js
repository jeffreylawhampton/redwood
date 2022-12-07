import { db } from 'src/lib/db'

export const rooms = () => {
  return db.room.findMany()
}

export const room = ({ id }) => {
  return db.room.findUnique({
    where: { id },
  })
}

export const createRoom = ({ input }) => {
  return db.room.create({
    data: input,
  })
}

export const updateRoom = ({ id, input }) => {
  return db.room.update({
    data: input,
    where: { id },
  })
}

export const deleteRoom = ({ id }) => {
  return db.room.delete({
    where: { id },
  })
}

export const Room = {
  user: (_obj, { root }) => {
    return db.room.findUnique({ where: { id: root?.id } }).user()
  },
  items: (_obj, { root }) => {
    return db.room.findUnique({ where: { id: root?.id } }).items()
  },
  containers: (_obj, { root }) => {
    return db.room.findUnique({ where: { id: root?.id } }).containers()
  },
}
