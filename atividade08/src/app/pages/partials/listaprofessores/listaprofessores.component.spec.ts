import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaprofessoresComponent } from './listaprofessores.component';

describe('ListaprofessoresComponent', () => {
  let component: ListaprofessoresComponent;
  let fixture: ComponentFixture<ListaprofessoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaprofessoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaprofessoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
