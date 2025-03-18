import {
    REGISTRARSE_BTN,
    EMAIL_CADASTRO_FORM,
    SENHA_CADASTRO_FORM,
    CONFIRMA_SENHA_CADASTRO_FORM,
    SUBMIT_BTN,

} from '../../support/FormHelpers'

describe('Testar a validação de campos obrigatórios no Registro', () => {
    beforeEach(() => {
       cy.visit('http://localhost:8080/login')
       cy.get(REGISTRARSE_BTN).click()
       cy.contains('Registrar-se').should('be.visible')
    })

    it('Valida o preenchimento do campo E-mail', () => {
       cy.get(SENHA_CADASTRO_FORM).type('Password@1')
       cy.get(CONFIRMA_SENHA_CADASTRO_FORM).type('Password@1')
       cy.get(SUBMIT_BTN).click()
       cy.get(EMAIL_CADASTRO_FORM).should('have.attr', 'required')
       cy.get(EMAIL_CADASTRO_FORM)
        .should('have.prop', 'validationMessage')
        .and('equal', 'Preencha este campo.')
    })

    it('Valida o preenchimento do campo Senha', () => {
        cy.get(EMAIL_CADASTRO_FORM).type('email@teste.com')
        cy.get(CONFIRMA_SENHA_CADASTRO_FORM).type('Password@1')
        cy.get(SUBMIT_BTN).click()
        cy.get(SENHA_CADASTRO_FORM).should('have.attr', 'required')
        cy.get(SENHA_CADASTRO_FORM)
         .should('have.prop', 'validationMessage')
         .and('equal', 'Preencha este campo.')
    })

    it('Valida o preenchimento do campo Confirmação de Senha', () => {
        cy.get(EMAIL_CADASTRO_FORM).type('email@teste.com')
        cy.get(SENHA_CADASTRO_FORM).type('Password@1')
        cy.get(SUBMIT_BTN).click()
        cy.get(CONFIRMA_SENHA_CADASTRO_FORM).should('have.attr', 'required')
        cy.get(CONFIRMA_SENHA_CADASTRO_FORM)
         .should('have.prop', 'validationMessage')
         .and('equal', 'Preencha este campo.')
    })

    it('Valida o funcionamento do botão, Voltar para o Login', () => {
        cy.get(REGISTRARSE_BTN).click()
        cy.contains('Login').should('be.visible')
    })
})

describe('Testar a validação de campos obrigatórios no Login', () => {
    beforeEach(() => {
       cy.visit('http://localhost:8080/login')
    })

    it('Valida o preenchimento do campo E-mail', () => {
       cy.get(SENHA_CADASTRO_FORM).type('Password@1')
       cy.get(SUBMIT_BTN).click()
       cy.get(EMAIL_CADASTRO_FORM).should('have.attr', 'required')
       cy.get(EMAIL_CADASTRO_FORM)
        .should('have.prop', 'validationMessage')
        .and('equal', 'Preencha este campo.')
    })

    it('Valida o preenchimento do campo Senha', () => {
        cy.get(EMAIL_CADASTRO_FORM).type('email@teste.com')
        cy.get(SUBMIT_BTN).click()
        cy.get(SENHA_CADASTRO_FORM).should('have.attr', 'required')
        cy.get(SENHA_CADASTRO_FORM)
         .should('have.prop', 'validationMessage')
         .and('equal', 'Preencha este campo.')
    })
})