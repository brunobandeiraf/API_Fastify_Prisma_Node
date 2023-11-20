import { UsersRepository } from '@/repositories/users-repository'

// Interface para validar/Esperar os tipos de Entrada
interface RegisterUseCaseRequest {
  name: string
  email: string
}

export class UsersRegisterUseCase {

    constructor(private usersRepository: UsersRepository) {}
    
    async execute({ name, email }: RegisterUseCaseRequest) {

        // Verifica se o e-mail é único
        const userWithSameEmail = await this.usersRepository.findByEmail(email)

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