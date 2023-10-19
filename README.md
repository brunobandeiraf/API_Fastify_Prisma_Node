# 💻  API Node.JS
API Rest Node.JS


## 🛠 Tecnologias
As seguintes tecnologias foram utilizadas no desenvolvimento da API Rest do projeto:

- **[Node.JS](https://nodejs.org/en)**
- **[TypeScript.JS](https://www.typescriptlang.org/)**
- **[Fastify](https://fastify.dev/)**
- **[Prisma](https://www.prisma.io/)**
- **[Docker](https://www.docker.com/)**
- **[Vitest](https://vitest.dev/)**

## 📄 RFs (Requisitos funcionais)
- [ ] Deve ser possível cadastrar uma pessoa;
- [ ] Deve ser possível visualizar todas as pessoas;
- [ ] Deve ser possível visualizar uma pessoa;
- [ ] Deve ser possível editar uma pessoa;
- [ ] Deve ser possível excluir uma pessoa;

## Comando
- npm init -y
- npm i typescript @types/node tsx tsup -D
- npx tsc --init 
- npm i fastify
- npm i dotenv
- npm i zod
- npm i prisma -D 
- npx prisma init
- npx prisma generate
- npm i @prisma/cliente
- docker run --name api_prisma_node -e POSTGRESQL_USERNAME=docker -e POSTGRESQL_PASSWORD=docker -e POSTGRESQL_DATABASE=api_prisma_node -p 5432:5432 bitnami/postgresql
- npx prisma migrate dev
- npx prisma studio
<!-- Subir ou executar a aplicação docker-->
- docker compose up -d 
<!-- Parar a aplicação docker-->
- docker compose stop
