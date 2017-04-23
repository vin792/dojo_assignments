import { WidgetAppPage } from './app.po';

describe('widget-app App', () => {
  let page: WidgetAppPage;

  beforeEach(() => {
    page = new WidgetAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
