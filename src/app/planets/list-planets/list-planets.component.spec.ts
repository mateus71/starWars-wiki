import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlanetsComponent } from './list-planets.component';

describe('ListPlanetsComponent', () => {
  let component: ListPlanetsComponent;
  let fixture: ComponentFixture<ListPlanetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPlanetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
