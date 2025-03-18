import {
    EMAIL_CADASTRO_FORM,
    SENHA_CADASTRO_FORM,
    SUBMIT_BTN,

} from '../../support/FormHelpers'

//Nesse teste não existe uma mensagem informando erro ao digitar senha inválida. Somente não permite o usuário fazer Login
describe('Testar a confirmação de senha', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/login')
    })

    it('Valida erro ao tentar Login com a senha inválida', () => {
        cy.get(EMAIL_CADASTRO_FORM).type('email@teste.com')
        cy.get(SENHA_CADASTRO_FORM).type('SenhaErrada')
        cy.get(SUBMIT_BTN).click()
        cy.url().should('include', 'http://localhost:8080/login')
        cy.contains('Login').should('be.visible')
    })
})

describe('Valida Login', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/login')
    })

    it('Valida sucesso ao realizar Login', () => {
        cy.get(EMAIL_CADASTRO_FORM).type('email@teste.com')
        cy.get(SENHA_CADASTRO_FORM).type('Password@1')
        cy.get(SUBMIT_BTN).click()
        cy.url().should('include', 'http://localhost:8080/dashboard')
        cy.contains('Bem-vindo ao Dashboard').should('be.visible')
    })
})

