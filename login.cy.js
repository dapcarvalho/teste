describe('Validação e Login no CyberShield', () => {

  beforeEach(() => {
    cy.visit('index.html');

    // Criar usuário no localStorage ANTES do teste de login
    cy.window().then((win) => {
      win.localStorage.setItem(
        "user",
        JSON.stringify({
          name: "Fulano Teste",
          email: "teste@teste.com",
          password: "123456",
          backups: []
        })
      );
    });
  });

  it('Campos vazios devem ser inválidos', () => {
    cy.get('#loginForm').submit();
    cy.get('#loginEmail:invalid').should('exist');
    cy.get('#loginPassword:invalid').should('exist');
  });

  it('Email inválido deve ser rejeitado', () => {
    cy.get('#loginEmail').type('errado');
    cy.get('#loginPassword').type('123456');
    cy.get('#loginForm').submit();

    cy.get('#loginEmail:invalid').should('exist');
  });

  it('Não deve logar com senha incorreta', () => {
    cy.get('#loginEmail').type('teste@teste.com');
    cy.get('#loginPassword').type('errada');
    cy.get('#loginForm').submit();

    cy.get('#login-container').should('be.visible');
    cy.get('#mainHeader').should('have.class', 'hidden');
  });

  it('Deve logar com credenciais corretas', () => {
    cy.get('#loginEmail').type('teste@teste.com');
    cy.get('#loginPassword').type('123456');
    cy.get('#loginForm').submit();

    cy.get('#mainHeader').should('not.have.class', 'hidden');
    cy.get('#content').should('not.have.class', 'hidden');
  });

});
