export class DrunkAndroidPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('drunk-android-app h1')).getText();
  }
}
