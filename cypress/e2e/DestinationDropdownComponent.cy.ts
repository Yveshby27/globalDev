describe('Destination Country Dropdown Tests',()=>{
    beforeEach(()=>{
        cy.visit('/')
    })

it('should not render before client is selected',()=>{
    cy.get('[data-cy=destination-dropdown]').should('not.exist');
    cy.get('[data-cy=client-dropdown]').should('exist');
})

it('should render after client is selected and should navigate to the correct URL on selecting an option',()=>{
    cy.get('[data-cy=client-dropdown] .react-select-client__control').click();
    cy.get('.react-select-client__menu-list', { timeout: 20000 }).should('be.visible').contains('France').click();
    cy.url().should('include', '/France');
    cy.get('[data-cy=destination-dropdown]').should('exist');
    cy.get('[data-cy=destination-dropdown] .react-select-destination__control').click();


    cy.get('.react-select-destination__menu-list', { timeout: 10000 }).should('be.visible').contains('Germany').click();

    cy.url().should('include', '/France/Germany');
})
})