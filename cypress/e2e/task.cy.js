/// <reference types="cypress" />
describe('daily task added - covis', () => {
  it('login', () => {
    cy.clearAllCookies()
    cy.visit('/login')
    // cy.get('[href="/login"]').should('be.visible').click({force:true})
    cy.get('[name="email"]').should('be.visible').type('nouman@xevensolutions.com')
    cy.get('[name="password"]').type('Qwerty@1')
    cy.get('[type="submit"]').click({force:true})
  })

  it("day planner",()=>{
    cy.get('[href="/ToDo"]').should('be.visible').click({force:true})
    cy.contains('button', "Add Task").click({force:true})
    cy.get('[name="title"]').type('meeting with nick')
    cy.get('[placeholder="Add Task Description"]').type('Availability for Nick after office hours')
    cy.get('[placeholder="00:00"]').clear().type('05')
    cy.get('[type="submit"]').click({force:true})
    cy.contains('Task Added Successfully').should('exist')
    cy.contains('Task Added Successfully').should('not.exist')
  })
  it("day planner",()=>{
    cy.contains('button', "Add Task").click({force:true})
    // cy.get('[name="title"]').type('meeting with nick')
    cy.get('[placeholder="Add Task Description"]').type('Verify Daily Reminder services')
    cy.get('[placeholder="00:00"]').clear().type('01')
    cy.get('[type="submit"]').click({force:true})
    cy.contains('Task Added Successfully').should('exist')
    cy.contains('Task Added Successfully').should('not.exist')
  })
})
