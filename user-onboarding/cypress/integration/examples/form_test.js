describe("User Onboarding App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });

    it ("sanity test", () => {
        expect(1 + 2).to.equal(3);
    });

    it("gets name input and adds name", () => {
        cy.get('input[name="name"]').should("exist");
        cy.get('input[name="name"]').should("have.value", "");
        cy.get('input[name="name"]').type("Joseph");
        cy.get('input[name="name"]').should("have.value", "Joseph");
    });

    it("gets email and adds it to input", () => {
        cy.get('input[name="email"]').should("exist");
        cy.get('input[name="email"]').should("have.value", "");
        cy.get('input[name="email"]').type("joe@joe.com");
        cy.get('input[name="email"]').should("have.value", "joe@joe.com");
    });

    it("gets password input and adds password", () => {
        cy.get('input[name="password"]').should("exist");
        cy.get('input[name="password"]').should("have.value", "");
        cy.get('input[name="password"]').type("tootleloo");
        cy.get('input[name="password"]').should("have.value", "tootleloo");
    });

    it("checks if user can click checkbox", () => {
        cy.get('[type="checkbox"]').check()
    });

    it("can user click submit", () => {
        cy.get('input[name="name"]').type("Joseph"); 
        cy.get('input[name="email"]').type("joe@joe.com");
        cy.get('input[name="password"]').type("tootleloo");
        cy.get('[type="checkbox"]').check()
        cy.contains("submit").click();

    });
})