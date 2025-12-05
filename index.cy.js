describe('Validação e Cadastro no CyberShield', () => {

  beforeEach(() => {
    cy.visit('index.html');
    cy.get('#showRegister').click();
  });

  it('Campos obrigatórios não podem estar vazios', () => {
    cy.get('#registerForm').submit();

    cy.get('#registerName:invalid').should('exist');
    cy.get('#registerEmail:invalid').should('exist');
    cy.get('#registerPassword:invalid').should('exist');
  });

  it('Email inválido deve ser rejeitado', () => {
    cy.get('#registerName').type('Fulano Teste');
    cy.get('#registerEmail').type('invalidoemail');
    cy.get('#registerPassword').type('123456');

    cy.get('#registerForm').submit();

    cy.get('#registerEmail:invalid').should('exist');
  });

  it('Cadastro válido deve retornar para login', () => {
    cy.get('#registerName').type('Fulano Teste');
    cy.get('#registerEmail').type('teste@teste.com');
    cy.get('#registerPassword').type('123456');

    cy.get('#registerForm').submit();

    cy.get('#login-container').should('be.visible');
  });

});
