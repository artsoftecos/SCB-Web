import { SCBWebPage } from './app.po';

describe('scb-web App', () => {
  let page: SCBWebPage;

  beforeEach(() => {
    page = new SCBWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
