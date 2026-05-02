describe('Teste de login com intercept', () => {
  it('Deve fazer login com sucesso usando intercept', () => {
    cy.intercept('POST', '/api/login', {
      statusCode: 200,
      body: {
        token: 'token123',
        name: 'Usuário de teste',
        email: 'usuario@teste.com',
      }
    }).as('loginMock')

    cy.login('usuario@teste.com', 'user123')
    cy.wait('@loginMock')
    cy.contains('Login realizado com sucesso').should('be.visible')
  })

  it('Deve mostrar erro do servidor usando intercept', () => {
    cy.intercept('POST', '/api/login', {
      statusCode: 500
    }).as('erroServer')

    cy.loginErro('usuario@teste.com', 'user123')
    cy.wait('@erroServer')
    cy.get('#alert-container').should('contain', 'Erro de conexão. Tente novamente.')
  })

  it('Deve mostrar erro do cliente usando intercept', () => {
    cy.intercept('POST', '/api/login', {
      statusCode: 400,
      body: {
        erro: 'erro do cliente'
      }
    }).as('erroClient')

    cy.loginErro('usuario@teste.com', 'user123')
    cy.wait('@erroClient')
    cy.get('#alert-container').should('contain', 'Erro ao fazer login')
  })

  it('Deve fazer login admin com AppAction simples', () => {
    cy.intercept('POST', '/api/login', {
      statusCode: 200,
      body: {
        token: 'admin-token',
        name: 'Administrador',
        email: 'admin@teste.com',
      }
    }).as('loginAdmin')

    cy.login('admin@teste.com', 'admin123', true)
    cy.wait('@loginAdmin')
    cy.contains('Login realizado com sucesso').should('be.visible')
  })
})
