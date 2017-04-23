import { DiscussionAppPage } from './app.po';

describe('discussion-app App', () => {
  let page: DiscussionAppPage;

  beforeEach(() => {
    page = new DiscussionAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
