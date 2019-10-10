import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorlandingComponent } from './mentorlanding.component';

describe('MentorlandingComponent', () => {
  let component: MentorlandingComponent;
  let fixture: ComponentFixture<MentorlandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorlandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
