describe('', function () {

    it('Авторизация с верным логиным и верным паролем', function () {
         cy.visit('https://pokemonbattle.ru/login');
         cy.get(':nth-child(1) > .auth__input').type('User');
         cy.get('#password').type('Password');
         cy.get('.auth__button').click({ force: true });
         cy.wait(2000);
         cy.get('.header__container > .header__id').click({ force: true });
         cy.get('[href="/shop"]').click({ force: true });
         cy.get(':nth-child(2) > .shop__button').click({ force: true });
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4200000000000000');
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Pokemon');
         cy.get('.pay-btn').click();
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();
         cy.contains('Покупка прошла успешно').should('be.visible'); 
        })
    })