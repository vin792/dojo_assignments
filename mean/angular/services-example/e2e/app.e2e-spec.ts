import { ServicesExamplePage } from './app.po';

describe('services-example App', () => {
  let page: ServicesExamplePage;

  beforeEach(() => {
    page = new ServicesExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
