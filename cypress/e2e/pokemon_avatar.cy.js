describe('Покупаем новый аватар для тренера', function () {

    it('1. Покупаем аватарку 10', function () {
       cy.visit('https://pokemonbattle.me/login'); 
       cy.get(':nth-child(1) > .auth__input') .type('achibaeval@gmail.com');
       cy.get('#password') .type('Fxb,ftdf97');
       cy.get('.auth__button') .click(); 
       cy.get('.pokemon__title') .should('be.visible');

        cy.get('.header__btns > [href="/shop"]') .click(); 
        cy.get(':nth-child(10) > .shop__button') .click(); 
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2') .type('4111 1111 1111 1111');
        cy.get(':nth-child(1) > .pay_base-input-v2') .type('1124');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2') .type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2') .type('dd dd');
        cy.get('.pay-btn') .click(); 

        cy.get('#cardnumber') .type('56456');
        cy.get('.payment__submit-button') .click(); 

        cy.get('.payment__font-for-success') .should('be.visible');
        cy.get('.payment__font-for-success') .contains('Покупка прошла успешно');
        cy.get('.payment__back-button-success') .should('be.visible'); 
        cy.get('.payment__back-button-success') .click(); 
 
        cy.get(':nth-child(10) > .shop__button') .should('be.enabled');
        
    })
    it('2. Покупаем аватар 12', function () {
        cy.visit('https://pokemonbattle.me/login'); 
        cy.get(':nth-child(1) > .auth__input') .type('achibaeval@gmail.com');
        cy.get('#password') .type('Fxb,ftdf97');
        cy.get('.auth__button') .click(); 
        cy.get('.pokemon__title') .should('be.visible');
 
         cy.get('.header__btns > [href="/shop"]') .click(); 
         cy.get(':nth-child(12) > .shop__button') .click(); 
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2') .type('4111 1111 1111 1111');
         cy.get(':nth-child(1) > .pay_base-input-v2') .type('1124');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2') .type('125');
         cy.get('.pay__input-box-last-of > .pay_base-input-v2') .type('dd dd');
         cy.get('.pay-btn') .click(); 
 
         cy.get('#cardnumber') .type('56456');
         cy.get('.payment__submit-button') .click(); 
 
         cy.get('.payment__font-for-success') .should('be.visible');
         cy.get('.payment__font-for-success') .contains('Покупка прошла успешно');
         cy.get('.payment__back-button-success') .should('be.visible'); 
         cy.get('.payment__back-button-success') .click(); 
  
         cy.get(':nth-child(12) > .shop__button') .should('be.enabled');
         
     })
})
