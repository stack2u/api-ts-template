import { FastifyRequest, FastifyReply } from 'fastify'

export async function createUsers(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  return reply.send({ message: 'Post method' })
}

export async function listUsers(request: FastifyRequest, reply: FastifyReply) {
  return reply.send({ message: 'Get method' })
}

export async function updateUser(request: FastifyRequest, reply: FastifyReply) {
  return reply.send({ message: 'Put method' })
}

export async function deleteUser(request: FastifyRequest, reply: FastifyReply) {
  return reply.send({ message: 'Delete method' })
}

export async function showUser(request: FastifyRequest, reply: FastifyReply) {
  return reply.send({ message: 'Get method' })
}
