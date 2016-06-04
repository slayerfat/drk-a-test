import {beforeEachProviders, describe, expect, it, inject} from "@angular/core/testing";
import {DrunkAndroidAppComponent} from "../app/drunk-android.component";

beforeEachProviders(() => [DrunkAndroidAppComponent]);

describe('App: DrunkAndroid', () => {
  it('should create the app',
    inject([DrunkAndroidAppComponent], (app: DrunkAndroidAppComponent) => {
      expect(app).toBeTruthy();
    }));

  it('should have as title \'drunk-android works!\'',
    inject([DrunkAndroidAppComponent], (app: DrunkAndroidAppComponent) => {
      expect(app.title).toEqual('drunk-android works!');
    }));
});
