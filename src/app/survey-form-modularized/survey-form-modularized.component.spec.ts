import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyFormModularizedComponent } from './survey-form-modularized.component';

describe('SurveyFormModularizedComponent', () => {
  let component: SurveyFormModularizedComponent;
  let fixture: ComponentFixture<SurveyFormModularizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyFormModularizedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyFormModularizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
