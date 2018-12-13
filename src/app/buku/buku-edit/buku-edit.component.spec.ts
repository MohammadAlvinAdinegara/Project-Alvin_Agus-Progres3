/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BukuEditComponent } from './buku-edit.component';

describe('BukuEditComponent', () => {
  let component: BukuEditComponent;
  let fixture: ComponentFixture<BukuEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BukuEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BukuEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
