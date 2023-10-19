import 'dotenv/config'
import { z } from 'zod'

// Cria os schemas
// Definindo os valores padrões, caso não informado
const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  PORT: z.coerce.number().default(3333)
})

// Valida 
const _env = envSchema.safeParse(process.env)

// Verifica se deu erro na validação
if (_env.success === false) {
  console.error('❌ Invalid environment variables', _env.error.format())

  throw new Error('Invalid environment variables.')
}

export const env = _env.data