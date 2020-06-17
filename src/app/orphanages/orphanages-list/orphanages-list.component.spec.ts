import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrphanagesListComponent } from './orphanages-list.component';

describe('OrphanagesListComponent', () => {
  let component: OrphanagesListComponent;
  let fixture: ComponentFixture<OrphanagesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrphanagesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrphanagesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
