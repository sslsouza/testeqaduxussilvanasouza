# Instalando o cypress
   - Instalar o node.js:
           npm init -y


   - Instalar o Cypress com npm:   
           npm install cypress --save-dev
 


# Rodando os testes do cypress
- Para rodar os testes no terminar
       - Execução de todos os testes = **npx cypress run --browser=chrome**
       - Execução de somente uma pasta de teste = **npx cypress run --spec** + caminho da pasta.
               ex: **npx cypress run --spec "cypress/e2e/RegistroUsuário/TestPageNovoUsuário.cy.js"**


 - Para rodar os teste na página web
       - **npx cypress open**   

