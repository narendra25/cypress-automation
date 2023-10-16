//Css Selector 
//------------------
//tag id    -->#id -->#userName
//tag class 
//tag attribute 
//tag class attribute

//Suite
describe('Css Selector',()=>{
    it('css selector',()=>{
        //Lanuch the url by usit visit
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //Css Selectors
    cy.get("input[name='username']").type('Admin')
    cy.get("input[name='password']").type('admin123')
    cy.get("button[class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']").click()
    })
})