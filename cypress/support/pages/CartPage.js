class CartPage {
    deleteFirstProductFromCart() {
        const button = cy.contains('Delete').first()
        button.click({ force: true })
    }

    clickPlaceOrder(){
        const button = cy.contains('Place Order')
        button.click({ force: true })
    }

    fillOrderModal(name, country, city, creditCard, month, year){
        const nameInput = cy.get('#name')
        nameInput.type(name)

        const countryInput = cy.get('#country')
        countryInput.type(country)

        const cityInput = cy.get('#city')
        cityInput.type(city)

        const creditCardInput = cy.get('#card')
        creditCardInput.type(creditCard)

        const monthInput = cy.get('#month')
        monthInput.type(month)

        const yearInput = cy.get('#year')
        yearInput.type(year)
    }

    clickPurchaseButton(){
        const button = cy.contains('Purchase')
        button.click({ force: true })
    }

    verifyPurchase(creditCard, name){
        const successMessage = cy.contains('Thank you for your purchase!')
        successMessage.should('be.visible')
        const successIcon = cy.get('.sa-success')
        successIcon.should('be.visible')
        const transactionId = cy.contains('Id')
        transactionId.should('be.visible')
        const cardNumber = cy.contains(`Card Number: ${creditCard}`)
        cardNumber.should('be.visible')
        const customerName = cy.contains(`Name: ${name}`)
        customerName.should('be.visible')
    }
}

export default CartPage
