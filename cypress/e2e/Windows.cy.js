describe('Windows Handle',()=>{
    it('Windows',()=>{
        cy.visit("https://demoqa.com/")
        cy.scrollTo(0,500)
        cy.xpath("//h5[contains(text(),'Alerts, Frame & Windows')]").click()
        cy.scrollTo(0,300)
        cy.xpath("//span[text()='Browser Windows']").click()
        cy.get("#tabButton").invoke('removeAttr','target').click()
        cy.wait(5000)
        cy.go('back') //back to parent tab
    })
})