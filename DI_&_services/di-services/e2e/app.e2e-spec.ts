import { DiServicesPage } from './app.po';

describe('di-services App', () => {
  let page: DiServicesPage;

  beforeEach(() => {
    page = new DiServicesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
