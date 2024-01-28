Projeto - Lista de Tarefas

Feito por Nalbert Santos Araujo

## Tecnologias utilizadas:
```bash
Next.Js
# 
Tailwind
# 
Prisma ORM
# 
MySQL
```

## Pre requisitos
Node.Js versão 18.17 ou mais
## Modo de utilização localmente

1 - Baixe o projeto

2 - Dentro da pasta do projeto no VScode, digite um dos seguintes comandos:

```bash
npm i
# ou
yarn i
# ou
pnpm i
# ou
bun i
```
3 - Vá até o arquivo .env e coloque uma conexão válida de um Banco de Dados MySQL(Como MySQL workbench ou phpMyAdmin)

Formato: DATABASE_URL= 'mysql://USER:PASSWORD@HOST:PORT/DATABASE'

Exemplo: DATABASE_URL= 'mysql://janedoe:mypassword@localhost:5432/mydb'


4 - Dê os seguintes comandos:

```bash
npx prisma generate
npx prisma db push
# ou
bunx prisma generate
bunx prisma db push
```
5 - inicie o projeto:
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```
## Modo de utilização Online

Deploy feito no Site: https://listadetarefas-ten.vercel.app

