describe("Add Product to Wishlist", () => {
  it("User can add a product to wishlist and take a full-page screenshot", () => {
   
    cy.visit("customer/account/login");
    cy.get('input[name="login[username]"]').type('anas.abuhilal.1992@gmail.com');
    cy.get('input[name="login[password]"]').type('anas.abuhilal.1992@');
    cy.contains('span', 'Sign In').parent().click();
    
    cy.visit("/radiant-tee.html");

    
    cy.contains('span', 'Add to Wish List').click();

    
    cy.visit("/wishlist/");

    
    cy.contains("Radiant Tee").should("be.visible");

   
    cy.screenshot("wishlist_page", { capture: "fullPage" });
  });
});