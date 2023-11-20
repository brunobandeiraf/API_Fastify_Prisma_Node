import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { UsersRegisterUseCase } from '@/use-cases/users-register'

export async function register(request: FastifyRequest, reply: FastifyReply) {
    // Valida os dados recebido com Zod
    const registerBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
    })
    const { name, email } = registerBodySchema.parse(request.body)

    // Executa a função do Use-Case
    try {
        // Prisma - como repositório definido
        const usersRepository = new PrismaUsersRepository()

        // Use Case - utilizando o repositório Prisma
        const registerUseCase = new UsersRegisterUseCase(usersRepository)
        
        // Executando o Use Case
        await registerUseCase.execute({
            name,
            email,
        })
    } catch (err) { 
        // Se ocorrer algum erro 
        // Pecisaria tratar os erros com uma classe
        return reply.status(409).send()
    }

    // Em caso de sucesso
    return reply.status(201).send()
}