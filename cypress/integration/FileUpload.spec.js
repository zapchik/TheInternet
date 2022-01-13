/// <reference types="cypress" />
describe('TheInternet tests', () => {
  beforeEach(() => {
     cy.visit('/upload') 
  })
  it('UploadFile `example.json` test', () => {
    cy.get('#file-upload')
    .attachFile('example.json');
    cy.get('#file-submit')
    .click();
    cy.get('div.example')
    .should('contain','File Uploaded!')
    .and('contain','example.json')
  })  
  it('UploadFile `picture.png` test', () => {
    cy.get('#file-upload')
    .attachFile({filePath: 'picture.png'});
    cy.get('#file-submit')
    .click();
    cy.get('div.example')
    .should('contain','File Uploaded!')
    .and('contain','picture.png')
  })
  it('UploadFile `example.json` and `picture.png` tests', () => {
    cy.get('#file-upload')
    .attachFile(['example.json','picture.png']);
    cy.get('#file-submit')
    .click();
    cy.get('div.example')
    .should('contain','File Uploaded!')
    .and('contain','picture.png')
    //.and('contain','example.json')
  })
  it('UploadFile `picture.png` with rename test', () => {
    cy.get('#file-upload')
    .attachFile({filePath: 'picture.png', fileName: 'MyPicture.png'});
    cy.get('#file-submit')
    .click();
    cy.get('div.example')
    .should('contain','File Uploaded!')
    .and('contain','MyPicture.png')
  })
  /*it('UploadFile by drag and drop method test', () => {
    cy.screenshot();
    cy.get('#drag-drop-upload')
    .attachFile('picture.png',{subjectType:'drag-n-drop'});
    cy.get('#file-submit')
    .click();
    cy.get('div.example')
    .should('contain','File Uploaded!')
    .and('contain','picture.png')
  })*/    
})
