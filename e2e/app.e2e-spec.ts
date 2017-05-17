import { SolrAppPage } from './app.po';

describe('solr-app App', () => {
  let page: SolrAppPage;

  beforeEach(() => {
    page = new SolrAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
