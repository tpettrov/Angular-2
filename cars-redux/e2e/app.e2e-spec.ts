import { CarsReduxPage } from './app.po';

describe('cars-redux App', () => {
  let page: CarsReduxPage;

  beforeEach(() => {
    page = new CarsReduxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
