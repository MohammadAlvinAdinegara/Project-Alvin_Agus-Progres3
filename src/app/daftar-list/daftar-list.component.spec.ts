import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarListComponent } from './daftar-list.component';

describe('DaftarListComponent', () => {
  let component: DaftarListComponent;
  let fixture: ComponentFixture<DaftarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaftarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
