describe('Lanuch Chrome',()=>{
  it('OrangeHRM open',()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get("input[name='username']").type('Admin')
    cy.get("input[name='password']").type('admin123')
    cy.get("button[class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']").click()
  })
})