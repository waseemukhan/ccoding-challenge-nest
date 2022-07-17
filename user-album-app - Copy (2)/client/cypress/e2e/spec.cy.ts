describe('User info', () => {
  it('Should display list of users', () => {
    cy.visit('/');
    cy.contains('Users');
    cy.contains('Name');
    cy.contains('Address');

  })
})

describe('user', () => {

  beforeEach(() => {
    cy.viewport(300, 600);
  });

  it('should create a new item and show it on the home page', () => {
    const expectedTitle = '🚀 test';
    cy.visit('/user');
    cy.matchImageSnapshot();
  });
});
