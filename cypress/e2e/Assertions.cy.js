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
        cy.get("input[name='username']").type('Admin')
    cy.get("input[name='password']").type('admin123')
    cy.get("button[class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']").click()

    let expname="Paul Collings"
    cy.get(".oxd-userdropdown-name").then((x)=>{
        let actname=x.text()

        //BDD Style Assertions
        expect(actname).to.equal(expname)
        expect(actname).to.not.equal('xyz')

        //TDD Style Assertions
        assert.equal(actname,expname)
        assert.notEqual(actname,expname)
    })

    })
})