import { ECheckFrontendPage } from './app.po';

describe('e-check-frontend App', () => {
  let page: ECheckFrontendPage;

  beforeEach(() => {
    page = new ECheckFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
