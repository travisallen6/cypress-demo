describe('visiting the dm tweet project', ()=>{
    it('can add new tweet', ()=>{
        //visit
        //select the input
        //type tweet
        //submit tweet
        //verify tweet was added
        let endNum = Math.floor(Math.random() * 1000)
        cy.visit('https://devmountain.github.io/react-3-afternoon/')
            cy.get('input.Compose__input')
                .type('Travis sent this message like a boss')
                .should('have.value', 'Travis sent this message like a boss')
            cy.get('button')
                .contains('Compose')
                .click()
                .wait(200)
            cy.get('span.Post__text')
                .contains('Travis sent this message like a boss')
                .should('contain', 'Travis sent this message like a boss') 

    })
})