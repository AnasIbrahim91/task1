describe("Product Review Submission", () => {
  it("User can submit a review on the product page", () => {
    
    cy.visit("/elisa-evercool-trade-tee.html");

   
    cy.contains("Be the first to review this product").click();

   
    cy.get("#Rating_1_label").click(); 
    cy.get("#nickname_field").type("TestUser");
    cy.get("#summary_field").type("Great product!");
    cy.get("#review_field").type("Highly recommend this product.");

   
cy.contains('button', 'Submit Review').click();
    
 
    cy.get('[data-ui-id="message-success"]').should('be.visible')
  });
});