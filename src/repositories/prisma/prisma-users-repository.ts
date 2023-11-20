import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

import { UsersRepository } from '../users-repository'

export class PrismaUsersRepository implements UsersRepository {
    
    async findByEmail(email: string) {

        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        })
    
        return user
    }
    
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