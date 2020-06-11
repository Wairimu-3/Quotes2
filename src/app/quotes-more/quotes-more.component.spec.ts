import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesMoreComponent } from './quotes-more.component';

describe('QuotesMoreComponent', () => {
  let component: QuotesMoreComponent;
  let fixture: ComponentFixture<QuotesMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
