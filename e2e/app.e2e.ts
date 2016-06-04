import {DrunkAndroidPage} from "./app.po";

describe('drunk-android App', function () {
  let page: DrunkAndroidPage;

  beforeEach(() => {
    page = new DrunkAndroidPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('drunk-android works!');
  });
});
