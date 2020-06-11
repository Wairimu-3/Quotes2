import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbDownComponent } from './thumb-down.component';

describe('ThumbDownComponent', () => {
  let component: ThumbDownComponent;
  let fixture: ComponentFixture<ThumbDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
