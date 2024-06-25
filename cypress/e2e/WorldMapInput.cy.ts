describe('World Map Tests', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should render properly', () => {
      cy.get('[data-cy=world-map]').should('be.visible');
    });
  
    it('should navigate URL to /clientCountry when selecting client country', () => {
      cy.get('[data-cy=country-France]').click();
      cy.url().should('include', '/France');
      cy.get('[data-cy=client-dropdown]').should('be.visible');
      cy.get('[data-cy=destination-dropdown]').should('be.visible');
    });
  
    it('should navigate URL to /clientCountry/destinationCountry when selecting destination country', () => {
      cy.get('[data-cy=country-France]').click();
      cy.url().should('include', '/France');
  
      cy.get('[data-cy=country-Germany]').click();
      cy.url().should('include', '/France/Germany');
      cy.get('[data-cy=country-details]').should('be.visible');
    });
})