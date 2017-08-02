import { ModulesRoutesPage } from './app.po';

describe('modules-routes App', () => {
  let page: ModulesRoutesPage;

  beforeEach(() => {
    page = new ModulesRoutesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
