# Vue To-Do List

<p align="center">
  Uma aplicação de lista de tarefas simples e moderna construída com Vue.js e um ecossistema de ferramentas de ponta.
</p>

<p align="center">
  <img src="https://skillicons.dev/icons?i=vue,ts,vite,pinia,tailwind,pnpm" />
</p>

---

##  sobre o projeto

Este projeto é uma implementação de uma aplicação de "To-Do List" com o objetivo de demonstrar as melhores práticas de desenvolvimento com Vue 3, TypeScript e outras tecnologias modernas. A aplicação permite aos usuários adicionar, remover, marcar como concluída e filtrar tarefas.

## ✨ Features

- **Adicionar e Remover Tarefas:** Interface limpa para adicionar e remover itens da lista.
- **Marcar como Concluído:** Alterne o estado de uma tarefa entre pendente e concluída.
- **Animações Suaves:** Animações sutis ao adicionar ou remover tarefas, utilizando `@formkit/auto-animate`.
- **Validação de Schema:** Uso de Zod para garantir a integridade dos dados das tarefas.
- **Estado Centralizado:** Gerenciamento de estado eficiente com Pinia.

## 🛠️ Tech Stack

- **Framework:** [Vue.js](https://vuejs.org/) (v3)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Gerenciador de Estado:** [Pinia](https://pinia.vuejs.org/)
- **Estilização:** [TailwindCSS](https://tailwindcss.com/)
- **Validação de Schema:** [Zod](https://zod.dev/)
- **Animações:** [@formkit/auto-animate](https://auto-animate.formkit.com/)
- **Ícones:** [Lucide](https://lucide.dev/)
- **Linting & Formatting:** [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)
- **Gerenciador de Pacotes:** [pnpm](https://pnpm.io/)

## 🚀 Começando

Siga estas instruções para obter uma cópia do projeto em execução na sua máquina local para desenvolvimento e testes.

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) (versão `^20.19.0 || >=22.12.0`)
- [pnpm](https://pnpm.io/installation)

### Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/vue-todo-list.git
   ```
2. Navegue até o diretório do projeto:
   ```sh
   cd vue-todo-list
   ```
3. Instale as dependências:
   ```sh
   pnpm install
   ```

### Executando a Aplicação

Para iniciar o servidor de desenvolvimento:
```sh
pnpm dev
```
A aplicação estará disponível em `http://localhost:5173` (ou outra porta, se a 5173 estiver em uso).

## 📜 Scripts Disponíveis

- `pnpm dev`: Inicia o servidor de desenvolvimento.
- `pnpm build`: Compila a aplicação para produção.
- `pnpm lint`: Executa o linter para verificar erros de código.
- `pnpm format`: Formata todo o código do projeto com o Prettier.

## 📁 Estrutura do Projeto

```
/
├── public/          # Arquivos estáticos
├── src/
│   ├── assets/        # Recursos como imagens e fontes
│   ├── components/    # Componentes Vue reutilizáveis
│   ├── constants/     # Constantes da aplicação
│   ├── dtos/          # Data Transfer Objects
│   ├── entities/      # Entidades de negócio
│   ├── pages/         # Componentes de página (views)
│   ├── stores/        # Módulos da store (Pinia)
│   ├── types/         # Definições de tipos TypeScript
│   ├── utils/         # Funções utilitárias
│   ├── App.vue        # Componente raiz
│   └── main.ts        # Ponto de entrada da aplicação
├── .eslintrc.cjs    # Configuração do ESLint
├── package.json     # Dependências e scripts
└── vite.config.ts   # Configuração do Vite
```