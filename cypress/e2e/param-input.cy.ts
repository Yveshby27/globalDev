describe('URL Parameter Tests', () => {
  it('should disregard wrong param inputs (client)', () => {
    cy.visit('/Francs');
    cy.url().should('not.include', '/Francs');
    cy.get('[data-cy=client-dropdown]').should('be.visible');
    cy.get('[data-cy=destination-dropdown]').should('not.exist');
    cy.get('[data-cy=country-details]').should('not.exist');
  });

  it('should disregard wrong param inputs (destination)', () => {
    cy.visit('/France/gormany');
    cy.url().should('include', '/France');
    cy.url().should('not.include', '/gormany');
    cy.get('[data-cy=client-dropdown]').should('be.visible');
    cy.get('[data-cy=destination-dropdown]').should('be.visible');
    cy.get('[data-cy=country-details]').should('not.exist');
  });

  it('should update component based on URL parameters (client)', () => {
    cy.visit('/France');
    cy.url().should('include', '/France');
    cy.get('[data-cy=client-dropdown]').should('be.visible');
    cy.get('[data-cy=destination-dropdown]').should('be.visible');
    cy.get('[data-cy=country-details]').should('not.exist');
  });

  it('should update component based on URL parameters (destination)', () => {
    cy.visit('/France/Germany');
    cy.url().should('include', '/France/Germany');
    cy.get('[data-cy=client-dropdown]').should('be.visible');
    cy.get('[data-cy=destination-dropdown]').should('be.visible');
    cy.get('[data-cy=country-details]').should('be.visible');
  });
});
 