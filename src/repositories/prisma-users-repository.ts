import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

export class PrismaUsersRepository {
  
    // Create User
    // Tipando a função com o próprio Prima - Prisma.UserCreateInput
    async create(data: Prisma.UserCreateInput) {
        
        // Criando usuário com Prisma
        const user = await prisma.user.create({
            data,
        })

        return user
    }
}