Cypress.Commands.add('login', (email, senha, sucesso = true) => {
  cy.visit('http://localhost:3000/login')
  cy.get('#email').type(email)
  cy.get('#password').type(senha)
  cy.get('#login-btn').click()

  if (sucesso) {
    cy.contains('Login realizado com sucesso', { timeout: 5000 }).should('exist')
  }
})

Cypress.Commands.add('loginErro', (email, senha) => {
  cy.visit('http://localhost:3000/login')
  cy.get('#email').type(email)
  cy.get('#password').type(senha)
  cy.get('#login-btn').click()
})