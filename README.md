# Sistema de Cadastro de Alunos

Projeto desenvolvido com o objetivo de praticar desenvolvimento web e integração com banco de dados MySQL.

O sistema permite realizar operações de cadastro, consulta, atualização e exclusão de alunos.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Node.js
- Express
- MySQL
- MySQL2

## Funcionalidades

- Cadastrar alunos com nome, e-mail e curso.
- Consultar todos os alunos cadastrados.
- Consultar um aluno específico pelo ID.
- Atualizar o curso de um aluno.
- Excluir alunos cadastrados.

## Estrutura do projeto

```text
sistema-cadastro/
│
├── public/
│   ├── index.html
│   └── style.css
│
├── .env
├── .gitignore
├── banco.sql
├── database.js
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

## Como executar o projeto

### 1. Pré-requisitos

- Node.js
- npm
- MySQL

### 2. Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Configurar o banco de dados

Execute o arquivo `banco.sql` no MySQL Workbench para criar o banco de dados e a tabela de alunos.

### 5. Configurar as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes informações:

```env
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=sistema_cadastro
```

Substitua os valores pelas credenciais do seu MySQL.

### 6. Iniciar o servidor

```bash
npm start
```

Acesse pelo navegador:

```text
http://localhost:3000
```

## Autor

Desenvolvido como projeto de estudo em desenvolvimento web e banco de dados.