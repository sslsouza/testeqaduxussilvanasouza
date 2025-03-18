import {
    REGISTRARSE_BTN,
    EMAIL_CADASTRO_FORM,
    SENHA_CADASTRO_FORM,
    CONFIRMA_SENHA_CADASTRO_FORM,
    SUBMIT_BTN,

} from '../../support/FormHelpers'

describe('Testar o sucesso no registro de um novo usuário', () => {
    beforeEach(() => {
       cy.visit('http://localhost:8080/login')
       cy.get(REGISTRARSE_BTN).click()
       cy.contains('Registrar-se').should('be.visible')
       
    })

    it('Valida cadastro de novo usuário com sucesso', () => {
        const timestamp = new Date().getTime(); 
        const emailDinamico = `usuario_${timestamp}@teste.com`;
        
        cy.get(EMAIL_CADASTRO_FORM).type(emailDinamico)
        cy.get(SENHA_CADASTRO_FORM).type('Password@1')
        cy.get(CONFIRMA_SENHA_CADASTRO_FORM).type('Password@1')
        cy.get(SUBMIT_BTN).click()
        cy.url().should('include', 'http://localhost:8080/login')
        cy.contains('Login').should('be.visible')
    })   

    it('Valida erro ao tentar cadastro com E-mail repetido', () => {
        cy.get(EMAIL_CADASTRO_FORM).type('email@teste.com')
        cy.get(SENHA_CADASTRO_FORM).type('Password@1')
        cy.get(CONFIRMA_SENHA_CADASTRO_FORM).type('Password@1')
        cy.get(SUBMIT_BTN).click()
        cy.contains('Este e-mail já está registrado.').should('be.visible')
    }) 

    it('Valida erro ao tentar cadastro com E-mail inválido', () => {
        cy.get(EMAIL_CADASTRO_FORM).type('emailteste.com')
        cy.get(SENHA_CADASTRO_FORM).type('Password@1')
        cy.get(CONFIRMA_SENHA_CADASTRO_FORM).type('Password@1')
        cy.get(SUBMIT_BTN).click()
        cy.get(EMAIL_CADASTRO_FORM).then(($input) => {
            expect($input.val()).to.not.include('@');
        })
    }) 
})