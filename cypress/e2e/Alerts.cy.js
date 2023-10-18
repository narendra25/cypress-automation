describe('Alerts',()=>{
    //1)JavaScript Alert: it will have some text and an "ok" Button .
    it('Ok Button',()=>{
        cy.visit("https://demoqa.com/")
        cy.scrollTo(0,500)
        cy.xpath("//h5[contains(text(),'Alerts, Frame & Windows')]").click()
        cy.scrollTo(0,300)
        cy.xpath("//span[text()='Alerts']").click()
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome')
        })
        cy.xpath("(//button[@class='btn btn-primary'])[4]").click()
        //cy.on('window:confirm',(t)=>{
             //expect(t).to.contains('Please enter your name');
       // })
        //cy.on('window:alert',()=>false);
    })
    //2)JavaScript Confirm Alert : It will have some text with "OK" and  "Cancel " button 
    //3)JavaScript Prompt Alert: It will have Some text  with a text box for user input along with "OK" Button 
    //4)Authenticated Alert
})