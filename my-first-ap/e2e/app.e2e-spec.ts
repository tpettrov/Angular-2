import { MyFirstApPage } from './app.po';

describe('my-first-ap App', () => {
  let page: MyFirstApPage;

  beforeEach(() => {
    page = new MyFirstApPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
