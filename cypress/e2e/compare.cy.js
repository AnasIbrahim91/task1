describe("Add Product to Compare", () => {
  it("User can add a product to compare and record a video", () => {
     cy.visit("/radiant-tee.html");

     cy.get(".tocompare").click();

     cy.visit("/catalog/product_compare/index/");

     cy.contains("Radiant Tee").should("be.visible");
  });
});