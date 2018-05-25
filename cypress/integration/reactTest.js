describe('react test', ()=>{
    it('just testing cypress on localhost', ()=>{
        cy.visit('http://localhost:3000/')
            cy.get('input#username')
                .type('travizzle')
                .should('have.value', 'travizzle')
            cy.get('input#password')
                .type('mypassword')
                .should('have.value', 'mypassword')
            cy.get('button')
                .contains('Login')
                .click()
    })
})