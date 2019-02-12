import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assigment3ComponentComponent } from './assigment3-component.component';

describe('Assigment3ComponentComponent', () => {
  let component: Assigment3ComponentComponent;
  let fixture: ComponentFixture<Assigment3ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assigment3ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assigment3ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
