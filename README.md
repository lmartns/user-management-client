# User Management Client

## Apresentação da Proposta do Projeto

Este projeto é um cliente de gerenciamento de usuários construído com [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/) e [Vite](https://vitejs.dev/). A aplicação permite criar, atualizar, deletar e listar usuários, consumindo a API de gerenciamento de usuários.

## Bibliotecas Utilizadas 📚

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn](https://shadcn.com/)
- [Lucide React](https://lucide.dev/)
- [React Hook Form](https://react-hook-form.com/)

## Componentes Utilizados 🧩

- **UserTable**: Componente para exibir a tabela de usuários.
- **UserForm**: Componente para o formulário de criação de usuários.
- **UserUpdateForm**: Componente para o formulário de atualização de usuários.
- **UserDeleteDialog**: Componente para o diálogo de confirmação de exclusão de usuários.

## Funcionalidades 🚀

- **Criar Usuário**: Permite criar um novo usuário preenchendo um formulário com nome, e-mail e senha.
- **Atualizar Usuário**: Permite atualizar os dados de um usuário existente, como nome e senha.
- **Deletar Usuário**: Permite deletar um usuário existente com uma confirmação de exclusão.
- **Listar Usuários**: Exibe uma lista de todos os usuários cadastrados.
- **Buscar Usuário por ID**: Permite buscar um usuário específico pelo ID.

## Estrutura do Projeto 📁

```Markdown
└── 📁src
  ├── 📁components
  │   ├── UserTable.tsx
  │   ├── UserForm.tsx
  │   ├── UserUpdateForm.tsx
  │   └── UserDeleteDialog.tsx
  ├── 📁services
  │   ├── userService.ts
  │   └── userHandlers.ts
  ├── 📁types
  │   └── user.d.ts
  └── App.tsx
```

## Como Rodar o Projeto 🚀

Pré-requisitos: Node.js e npm

Instalar as dependências:

```bash
npm install
```

Rodar o projeto:

```bash
npm run dev
```

## Referências 📚

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn](https://shadcn.com/)
- [Lucide React](https://lucide.dev/)
- [React Hook Form](https://react-hook-form.com/)
