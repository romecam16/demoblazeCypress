// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import HomePage from '../support/pages/HomePage';
import SignUpPage from '../support/pages/SignUpPage';
import LoginPage  from './pages/LoginPage';
import ProductPage from './pages/ProductPage';
import CartPage from '../support/pages/CartPage'
import { faker } from '@faker-js/faker';

let username =  Cypress.env('username') + faker.person.firstName();

Cypress.Commands.add('createUser', () => {
    //Object Creation for Home Page and SignUp assigning them to a constant variable
    const homePage=new HomePage()
    const signUpPage = new SignUpPage()
    //Defining variables to be retrieved from the cypress.json file
    const password = Cypress.env('password')
    //Type credentials and submit
    cy.visit('/')
    homePage.clickSignUpButton()
    cy.wait(1000)
    signUpPage.setUsername(username)
    signUpPage.setPassword(password)
    signUpPage.clickSignUpButton()
})

Cypress.Commands.add('login', () => {
    //Object Creation for Login Page and Home Page assigning them to a constant variable
    const homePage=new HomePage()
    const loginPage=new LoginPage()
    //Defining variables to be retrieved from the cypress.json file
    const password = Cypress.env('password')
    //Type credentials and submit
    cy.visit('/')
    homePage.clickLoginButton()
    cy.wait(1000)
    loginPage.fillUsername(username)
    loginPage.fillPassword(password)
    loginPage.clickLoginButton()
})

Cypress.Commands.add('invalidLogin', () => {
    //Object Creation for Login Page assigning it to a constant variable
    const homePage=new HomePage()
    const loginPage=new LoginPage()
    //Defining variables to be retrieved from the cypress.json file
    const invalidPassword = faker.person.lastName();
    //Type credentials and submit
    cy.visit('/')
    homePage.clickLoginButton()
    cy.wait(1000)
    loginPage.fillUsername(username)
    loginPage.fillPassword(invalidPassword)
    loginPage.clickLoginButton()
})

Cypress.Commands.add('addProductToCart', (phoneName, category) => {
    //Object Creation for Login Page assigning it to a constant variable
    const homePage=new HomePage()
    const productPage=new ProductPage()

    homePage.clickCategory(category)
    cy.wait(2000)
    homePage.clickCellphone(phoneName)
    productPage.clickAddProductToCart()
})

Cypress.Commands.add('placeOrderAndFillModal', (name, country, city, creditCard, month, year) => {
    //Object Creation for Login Page assigning it to a constant variable
    const homePage=new HomePage()
    const productPage=new ProductPage()
    const cartPage = new CartPage

    cartPage.clickPlaceOrder()
    cy.wait(1000)
    cartPage.fillOrderModal(name, country, city, creditCard, month, year)
    cartPage.clickPurchaseButton()
})
