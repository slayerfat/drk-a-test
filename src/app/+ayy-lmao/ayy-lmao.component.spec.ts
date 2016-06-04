import {beforeEach, beforeEachProviders, describe, expect, it, inject} from "@angular/core/testing";
import {ComponentFixture, TestComponentBuilder} from "@angular/compiler/testing";
import {Component} from "@angular/core";
import {By} from "@angular/platform-browser";
import {AyyLmaoComponent} from "./ayy-lmao.component";

describe('Component: AyyLmao', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [AyyLmaoComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([AyyLmaoComponent],
    (component: AyyLmaoComponent) => {
      expect(component).toBeTruthy();
    }));

  it('should create the component', inject([], () => {
    return builder.createAsync(AyyLmaoComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(AyyLmaoComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-ayy-lmao></app-ayy-lmao>
  `,
  directives: [AyyLmaoComponent]
})
class AyyLmaoComponentTestController {
}

