/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SpielwieseComponent } from './playground.component';

describe('SpielwieseComponent', () => {
  let component: SpielwieseComponent;
  let fixture: ComponentFixture<SpielwieseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpielwieseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpielwieseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
