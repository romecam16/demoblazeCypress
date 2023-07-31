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

    getCategoriesItems(){
        let itemsText = []
        cy.get('.card-title a').each(($el) =>itemsText.push($el.text()))
        cy.get('button#next2').click({force:true})
        cy.wait(3000)
        cy.get('.card-title a').each(($el) =>itemsText.push($el.text()))
        return itemsText
    }

    getPhoneItems(){
        const itemsText = []
        this.clickCategory("Phones")
        cy.wait(1000)
        cy.get('.card-title a').each(($el) =>itemsText.push($el.text()))
        return itemsText
    }

    getLaptopItems(){
        const itemsText = []
        this.clickCategory("Laptops")
        cy.wait(1000)
        cy.get('.card-title a').each(($el) =>itemsText.push($el.text()))
        return itemsText
    }

    getMonitorItems(){
        const itemsText = []
        this.clickCategory("Monitors")
        cy.wait(1000)
        cy.get('.card-title a').each(($el) =>itemsText.push($el.text()))
        return itemsText
    }
}

export default HomePage
