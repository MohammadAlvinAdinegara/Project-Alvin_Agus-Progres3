/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DaftarEditComponent } from './daftar-edit.component';

describe('DaftarEditComponent', () => {
  let component: DaftarEditComponent;
  let fixture: ComponentFixture<DaftarEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaftarEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
