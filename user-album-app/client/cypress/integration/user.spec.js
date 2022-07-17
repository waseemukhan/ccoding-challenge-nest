describe("User page", () => {

	it("should display user details", () => {
		
		cy.visit('/');
		cy.contains("User");
        cy.contains("Name");
        cy.contains("Address");

        cy.contains("city");
        cy.contains("zipcode");

	});


});