class ProductPage {

    clickAddProductToCart() {
        const button = cy.contains('Add to cart')
        button.click({force:true})
    }
}

export default ProductPage
