# Testes E2E - EBAC

Repositório para automação de testes end-to-end com Cypress.

## Objetivo

Validar fluxos críticos da aplicação, como navegação, cadastro, login e interação com a interface do usuário.

## Tecnologias

- Cypress
- JavaScript
- Node.js

## Pré-requisitos

- Node.js
- npm
- Git

## Instalação

```bash
npm install
```

## Execução

### Abrir a interface do Cypress

```bash
npx cypress open
```

### Executar em modo headless

```bash
npx cypress run
```

### Executar com gravação

```bash
npx cypress run --record
```

## Estrutura do projeto

- `cypress/` — testes automatizados;
- `cypress.config.js` — configuração do Cypress;
- `package.json` — scripts e dependências do projeto.
