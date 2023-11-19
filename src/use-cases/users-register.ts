import { prisma } from '@/lib/prisma'

// Interface para validar/Esperar os tipos de Entrada
interface RegisterUseCaseRequest {
  name: string
  email: string
}

export class UsersRegisterUseCase {

    constructor(private usersRepository: any) {}
    
    async execute({ name, email }: RegisterUseCaseRequest) {

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

        // Criando usuário com Repositório (repositories) do Prisma (prisma-users-repository)
        await this.usersRepository.create({
            name,
            email
        })
    }
}