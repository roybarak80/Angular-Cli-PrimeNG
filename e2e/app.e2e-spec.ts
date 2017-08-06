import { AngularNGPrimePage } from './app.po';

describe('angular-ngprime App', () => {
  let page: AngularNGPrimePage;

  beforeEach(() => {
    page = new AngularNGPrimePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
