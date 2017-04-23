import { ComponenetsAndPipesPage } from './app.po';

describe('componenets-and-pipes App', () => {
  let page: ComponenetsAndPipesPage;

  beforeEach(() => {
    page = new ComponenetsAndPipesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
