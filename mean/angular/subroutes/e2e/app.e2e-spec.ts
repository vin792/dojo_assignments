import { SubroutesPage } from './app.po';

describe('subroutes App', () => {
  let page: SubroutesPage;

  beforeEach(() => {
    page = new SubroutesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
