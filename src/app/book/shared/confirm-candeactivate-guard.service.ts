import { Injectable } from '@angular/core';
import {CanDeactivate, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import {BookDetailComponent} from "../book-detail/book-detail.component";

@Injectable()
export class ConfirmCanDeactivateGuardService implements CanDeactivate<BookDetailComponent> {

  canDeactivate(component: BookDetailComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return confirm("Do you really want to leave?");
  }

  constructor() {
  }

}
