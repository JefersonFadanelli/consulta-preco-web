import { MeusdadosnawebPage } from './app.po';

describe('meusdadosnaweb App', () => {
  let page: MeusdadosnawebPage;

  beforeEach(() => {
    page = new MeusdadosnawebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
