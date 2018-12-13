/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BukuItemComponent } from './buku-item.component';

describe('BukuItemComponent', () => {
  let component: BukuItemComponent;
  let fixture: ComponentFixture<BukuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BukuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BukuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
