//Cypress Assertions:
//-------------------------
//There are two type of Assertions is There 

//1.Implicit Assertions
		//A. should
		//B. and 
//eq,contain,include,exist,have.length,have.value...etc
//2.Explicit Assertions

		//A.expert
		//B.assert

describe('Assertions',()=>{
    it('Assertions',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //cy.url().should('include','orangehrmlive.com')
        //cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.url().should('contain','orangehrm')


        //cy.url().should('include','orangehrmlive.com')
        //.should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //.should('contain','orangehrm')

        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrm')
        .and('not.contain','greenhrm')
        cy.get(".orangehrm-login-branding>img").should('be.visible')
        .and('exist')
        cy.xpath("//a").should('have.length','5') //No of Links

    })
})