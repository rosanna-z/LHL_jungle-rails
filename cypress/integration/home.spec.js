describe('example to-do app', () => {
  it('renders the home page', () => {
    cy.visit('http://localhost:3000/')
  })
  it("There is products on the page", () => {
    cy.get(".products article").should("be.visible");
  });

})