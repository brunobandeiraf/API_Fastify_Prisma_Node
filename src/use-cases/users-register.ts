import { prisma } from '@/lib/prisma'

// Interface para validar/Esperar os tipos de Entrada
interface RegisterUseCaseRequest {
  name: string
  email: string
}

export async function usersRegisterUseCase({
  name,
  email,
}: RegisterUseCaseRequest) {
  
    // Verifica se o e-mail é único
    const userWithSameEmail = await prisma.user.findUnique({
        where: {
            email,
        },
    })

    // Error se e-mail do usuário já existe
    if (userWithSameEmail) {
        throw new Error('E-mail already exists.')
    }

    // Criando usuário com Prisma
    await prisma.user.create({
        data: {
            name,
            email,
        },
    })
}