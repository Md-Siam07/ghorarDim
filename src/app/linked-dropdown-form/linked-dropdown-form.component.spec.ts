import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedDropdownFormComponent } from './linked-dropdown-form.component';

describe('LinkedDropdownFormComponent', () => {
  let component: LinkedDropdownFormComponent;
  let fixture: ComponentFixture<LinkedDropdownFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedDropdownFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedDropdownFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
