import { FastifyInstance } from 'fastify'

import {
  createUsers,
  updateUser,
  showUser,
  listUsers,
  deleteUser,
} from '../controllers/users.controllers'

export async function usersRoutes(app: FastifyInstance) {
  app.get('/', listUsers)

  app.post('/', createUsers)

  app.put('/:id', updateUser)

  app.delete('/:id', deleteUser)

  app.get('/:id', showUser)
}
