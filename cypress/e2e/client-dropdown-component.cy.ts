describe('Client Country Dropdown Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render the dropdown correctly', () => {
    
    cy.get('[data-cy=client-dropdown]').should('exist');

    cy.get('[data-cy=client-dropdown]').contains('Where are you based in?');
  });

  it('should open the dropdown and display options', () => {

    cy.get('[data-cy=client-dropdown] .react-select-client__control').click();


    cy.get('.react-select-client__menu-list', { timeout: 10000 }).should('exist').within(() => {
      cy.contains('France').should('exist');
      cy.contains('Germany').should('exist');
    });
  });

  it('should navigate to the correct URL on selecting an option', () => {

    cy.get('[data-cy=client-dropdown] .react-select-client__control').click();


    cy.get('.react-select-client__menu-list', { timeout: 10000 }).should('be.visible').contains('France').click();


    cy.url().should('include', '/France');
  });

  it('should show the additional message if client is not selected', () => {

    cy.get('[data-cy=client-dropdown]').contains("and we'll show you the ones with the least timezone difference");
  });
});
