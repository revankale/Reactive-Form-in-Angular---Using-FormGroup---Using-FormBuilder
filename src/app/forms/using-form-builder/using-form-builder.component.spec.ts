import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingFormBuilderComponent } from './using-form-builder.component';

describe('UsingFormBuilderComponent', () => {
  let component: UsingFormBuilderComponent;
  let fixture: ComponentFixture<UsingFormBuilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsingFormBuilderComponent]
    });
    fixture = TestBed.createComponent(UsingFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
