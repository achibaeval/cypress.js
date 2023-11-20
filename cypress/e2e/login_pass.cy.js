describe('Тестирование входа на сайт', function () {

    it('1. Верный логин, верный пароль', function () {
       cy.visit('https://login.qa.studio/'); // ввели логин
       cy.get('#loginButton') .should('be.disabled'); // проверка что кнопка войти задизейблена
       cy.get('#mail') .type('german@dolnikov.ru'); // ввели логин
       cy.get('#loginButton') .should('be.disabled'); // проверка что кнопка войти задизейблена
       cy.get('#pass') .type('iLoveqastudio1'); // ввели пасс
       cy.get('#loginButton') .should('be.enabled'); // проверка что кнопка войти задизейблена
       cy.get('#loginButton') .click(); // кликаем на кнопку
       cy.get('#messageHeader') .should('be.visible'); // видим текст
       cy.get('#messageHeader') .contains('Авторизация прошла успешно'); // правильный текст
       cy.get('#exitMessageButton > .exitIcon') .should('be.visible');  // видим крестик

       })


    it('2. Тестирование восстановления пароля', function () {
       cy.visit('https://login.qa.studio/'); // ввели логин
       cy.get('#forgotEmailButton') .click(); // кликаем на кнопку
       cy.get('#mailForgot') .type('achibaeva@l.ru'); // вводим другую почту
       cy.get('#restoreEmailButton') .click(); // кликаем на кнопку
       cy.get('#messageHeader') .should('be.visible'); // видим текст
       cy.get('#messageHeader') .contains('Успешно отправили пароль на e-mail'); // правильный текст
       cy.get('#exitMessageButton > img') .should('be.visible');  // видим крестик

       })


    it('3. Тестирование ввода неверного пароля', function () {
       cy.visit('https://login.qa.studio/'); // ввели логин
       cy.get('#loginButton') .should('be.disabled'); // проверка что кнопка войти задизейблена
       cy.get('#mail') .type('german@dolnikov.ru'); // ввели логин
       cy.get('#pass') .type('iLoveqastudio'); // ввели пасс
       cy.get('#loginButton') .click(); // кликаем на кнопку
       cy.get('#messageHeader') .should('be.visible'); // видим текст
       cy.get('#messageHeader') .contains('Такого логина или пароля нет'); // правильный текст
       cy.get('#exitMessageButton > .exitIcon') .should('be.visible');  // видим крестик

       })


    it('4. Верный логин, верный пароль', function () {
       cy.visit('https://login.qa.studio/'); // ввели логин
       cy.get('#mail') .type('germandolni@kov.ru'); // ввели логин
       cy.get('#pass') .type('iLoveqastudio1'); // ввели пасс
       cy.get('#loginButton') .click(); // кликаем на кнопку
       cy.get('#messageHeader') .should('be.visible'); // видим текст
       cy.get('#messageHeader') .contains('Такого логина или пароля нет'); // правильный текст
       cy.get('#exitMessageButton > .exitIcon') .should('be.visible');  // видим крестик

       })


    it('5. Тестирование входа с неправильным логином', function () {
       cy.visit('https://login.qa.studio/'); // ввели логин
       cy.get('#mail') .type('germandolnikov.ru'); // ввели логин
       cy.get('#pass') .type('iLoveqastudio1'); // ввели пасс
       cy.get('#loginButton') .click(); // кликаем на кнопку
       cy.get('#messageHeader') .should('be.visible'); // видим текст
       cy.get('#messageHeader') .contains('Нужно исправить проблему валидации'); // правильный текст
       cy.get('#exitMessageButton > .exitIcon') .should('be.visible');  // видим крестик
       })


    it('6. Тестирование входа с неправильным логином', function () {
       cy.visit('https://login.qa.studio/'); // ввели логин
       cy.get('#mail') .type('GerMan@Dolnikov.ru'); // ввели логин
       cy.get('#pass') .type('iLoveqastudio1'); // ввели пасс
       cy.get('#loginButton') .click(); // кликаем на кнопку
       cy.get('#messageHeader') .should('be.visible'); // видим текст
       cy.get('#messageHeader') .contains('Авторизация прошла успешно'); // правильный текст
       cy.get('#exitMessageButton > .exitIcon') .should('be.visible');  // видим крестик

       })
})