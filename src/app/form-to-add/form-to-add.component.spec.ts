import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormToAddComponent } from './form-to-add.component';

describe('FormToAddComponent', () => {
  let component: FormToAddComponent;
  let fixture: ComponentFixture<FormToAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormToAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormToAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
