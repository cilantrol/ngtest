import { MatPage } from './app.po';

describe('mat App', () => {
  let page: MatPage;

  beforeEach(() => {
    page = new MatPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
