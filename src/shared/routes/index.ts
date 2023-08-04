import { usersRoutes } from '@modules/users/infra/routes/users.routes'
import { FastifyInstance } from 'fastify'

export async function routes(app: FastifyInstance) {
  app.register(usersRoutes, { prefix: '/users' })
}
