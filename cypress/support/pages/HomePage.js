class HomePage {

    clickLoginButton(){
        const button = cy.get('#login2')
        button.click()
    }

    clickSignUpButton(){
        const button = cy.get('#signin2')
        button.click()
    }

    clickLogoutButton(){
        const button = cy.get('#logout2')
        button.click({ force: true })
    }

    verifyLogOut(){
        const loginButton = cy.get('#login2')
        loginButton.should('be.visible');
    }

    clickCategory(category){
        const categoryLink = cy.contains('#itemc', category)
        categoryLink.click({ force: true })
    }

    clickCellphone(name){
        const cellPhone = cy.contains('.card-title a', name)
        cellPhone.click({force:true})
    }

    clickHomePage(){
        const homeLink = cy.contains ('Home')
        homeLink.click()
    }

    clickCart(){
        const cartLink = cy.contains ('Cart')
        cartLink.click()
    }
}

export default HomePage
