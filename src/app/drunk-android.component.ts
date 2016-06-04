import {Component} from "@angular/core";
import {FirstRouteComponent} from "./+first-route";
import {Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "@angular/router";
import {AyyLmaoComponent} from "./+ayy-lmao";

@Component({
  moduleId: module.id,
  selector: 'drunk-android-app',
  templateUrl: 'drunk-android.component.html',
  styleUrls: ['drunk-android.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/firstRoute', component: FirstRouteComponent},
  {path: '/ayyLmao', component: AyyLmaoComponent}
])
export class DrunkAndroidAppComponent {
  title = 'drunk-android works!';
}
