/// <reference types="Cypress" />

import CartPage from '../support/pages/CartPage'
import HomePage from '../support/pages/HomePage'

describe('Demo Blaze Tests',()=> {
    //Object Creation for the Pages and assigning them to constant variables
    const homePage = new HomePage()
    const cartPage = new CartPage()

    before(function(){
        cy.createUser()
    })
    beforeEach(function(){
        //Get data from fixture to be used in the test cases
        cy.fixture('data').then((data)=>{
        this.data=data
        })
    })
    
    it('Verify sign up process (Test 1)', function (){
        cy.createUser().then(()=>{
            cy.on('window:alert',(txt)=>{
                //Assertion
                expect(txt).to.contains(this.data.messages.userAlreadyExist);
            })
        })
        cy.login()
        homePage.clickLogoutButton()
        homePage.verifyLogOut()
        cy.invalidLogin().then(()=>{
            cy.on('window:alert',(txt)=>{
                //Assertion
                expect(txt).to.contains(this.data.messages.wrongPassword);
            })
        })
    }); 

    it('Verify order modal (Test 2)', function (){
        const phoneOne = this.data.phoneReference.nokia
        const phoneTwo = this.data.phoneReference.samsung
        const category = this.data.categories.phone
        const name = this.data.customerData.name
        const country = this.data.customerData.country
        const city = this.data.customerData.city
        const creditCard = this.data.customerData.creditCard
        const month = this.data.customerData.month
        const year = this.data.customerData.year

        cy.login()
        cy.addProductToCart(phoneOne, category)
        homePage.clickHomePage()
        cy.addProductToCart(phoneTwo, category)
        homePage.clickCart();
        cartPage.deleteFirstProductFromCart()
        cy.wait(2000)
        cy.placeOrderAndFillModal(name, country, city, creditCard, month, year)

    }); 

    it('Verify placement information (Test 3)', function (){
        const phoneOne = this.data.phoneReference.nokia
        const phoneTwo = this.data.phoneReference.samsung
        const category = this.data.categories.phone
        const name = this.data.customerData.name
        const country = this.data.customerData.country
        const city = this.data.customerData.city
        const creditCard = this.data.customerData.creditCard
        const month = this.data.customerData.month
        const year = this.data.customerData.year

        cy.login()
        cy.addProductToCart(phoneOne, category)
        homePage.clickHomePage()
        cy.addProductToCart(phoneTwo, category)
        homePage.clickCart();
        cartPage.deleteFirstProductFromCart()
        cy.wait(2000)
        cy.placeOrderAndFillModal(name, country, city, creditCard, month, year)
        cartPage.verifyPurchase(creditCard, name)
    }); 
})
