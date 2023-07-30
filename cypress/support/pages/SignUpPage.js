class SignUpPage {
    
    setUsername(value) {
        const usernameField = cy.get('#sign-username')
        usernameField.clear()
        usernameField.type(value)
    }

    setPassword(value) {
        const passwordField = cy.get('#sign-password')
        passwordField.clear()
        passwordField.type(value)
    }

    clickSignUpButton(){
        const button = cy.get('button[onclick="register()"]')
        button.click()
    }
    
}

export default SignUpPage
