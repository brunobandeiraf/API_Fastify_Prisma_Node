import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { usersRegisterUseCase } from '@/use-cases/users-register'

export async function register(request: FastifyRequest, reply: FastifyReply) {
    // Valida os dados recebido com Zod
    const registerBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
    })
    const { name, email } = registerBodySchema.parse(request.body)

    // Executa a função do Use-Case
    try {
        await usersRegisterUseCase({
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