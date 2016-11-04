import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PlaygroundComponent} from "./playground.component";
import {playgoundRouting} from "./playground.routing";
import {InOutComponent} from "./in-out/in-out.component";

@NgModule({
  imports: [
    CommonModule,
    playgoundRouting
  ],
  declarations: [
    PlaygroundComponent,
    InOutComponent
  ]
})
export class PlaygroundModule {
}
