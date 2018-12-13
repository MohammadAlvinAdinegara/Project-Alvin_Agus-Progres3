/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BukuStartComponent } from './buku-start.component';

describe('BukuStartComponent', () => {
  let component: BukuStartComponent;
  let fixture: ComponentFixture<BukuStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BukuStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BukuStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
