import { GuestlistAppPage } from './app.po';

describe('guestlist-app App', function() {
  let page: GuestlistAppPage;

  beforeEach(() => {
    page = new GuestlistAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
