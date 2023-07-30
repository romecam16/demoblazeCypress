class LoginPage {
    
    fillUsername(value){
        const field = cy.get('#loginusername')
        field.clear()
        field.type(value)
    }
    fillPassword(value){
        const field = cy.get('#loginpassword')
        field.clear()
        field.type(value, {log:false})
    }
    clickLoginButton(){
        const button = cy.get('button[onclick="logIn()"]')
        button.click()
    }
}

export default LoginPage
