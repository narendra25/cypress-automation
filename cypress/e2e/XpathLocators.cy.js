//Xpath
//--------------------------------------------------
//npm install -D cypress-xpath

//Add entry in commands.js 
////<reference types="cypress-xpath"/>

//e2e.js

//require('cypress-xpath')

describe('Xpath Locators',()=>{
    it('xpath',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //xpaths
        cy.xpath("//input[@name='username']").type('Admin')  //provide value into input box
        cy.xpath("//input[@name='username']").should('have.value','Admin') //value assertions
        cy.xpath("//input[@name='password']").type('admin123')
        cy.xpath("//button[@class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']").click()

    })
})