import { RoutesExamplePage } from './app.po';

describe('routes-example App', () => {
  let page: RoutesExamplePage;

  beforeEach(() => {
    page = new RoutesExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
