/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GuestlistComponent } from './guestlist.component';

describe('GuestlistComponent', () => {
  let component: GuestlistComponent;
  let fixture: ComponentFixture<GuestlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
