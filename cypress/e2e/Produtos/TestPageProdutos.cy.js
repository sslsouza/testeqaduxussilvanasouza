import {
    EMAIL_CADASTRO_FORM,
    SENHA_CADASTRO_FORM,
    SUBMIT_BTN,
    REGISTRARSE_BTN,

} from '../../support/FormHelpers'

describe('Valida Visualização dos produtos', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/login')
        cy.get(EMAIL_CADASTRO_FORM).type('email@teste.com')
        cy.get(SENHA_CADASTRO_FORM).type('Password@1')
        cy.get(SUBMIT_BTN).click()
    })

    it('Valida sucesso ao acessar a página de produtos', () => {
        cy.get(REGISTRARSE_BTN).click()
        cy.url().should('include', 'http://localhost:8080/items')
        cy.contains('Itens Disponíveis').should('be.visible')
    })
    
    it('Valida exibição correta ds produtos', () => {
        cy.get(REGISTRARSE_BTN).click()
        cy.contains('Produto A - 29.99').should('be.visible');
        cy.contains('Produto B - 49.99').should('be.visible');
        cy.contains('Produto C - 19.99').should('be.visible');
        cy.contains('Produto D - 99.99').should('be.visible');
        cy.contains('Produto E - 59.99').should('be.visible');
    })
})
