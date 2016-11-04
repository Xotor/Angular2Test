import {Routes, RouterModule} from "@angular/router";
import {PlaygroundComponent} from "../playground/playground.component";

const routes: Routes = [{
  path: 'playground',
  component: PlaygroundComponent
}]

export const playgoundRouting = RouterModule.forChild(routes);
