import { Ng2CliDumpsterFirePage } from './app.po';

describe('ng2-cli-dumpster-fire App', function() {
  let page: Ng2CliDumpsterFirePage;

  beforeEach(() => {
    page = new Ng2CliDumpsterFirePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
