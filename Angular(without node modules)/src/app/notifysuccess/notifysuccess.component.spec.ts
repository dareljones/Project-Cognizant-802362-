import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifysuccessComponent } from './notifysuccess.component';

describe('NotifysuccessComponent', () => {
  let component: NotifysuccessComponent;
  let fixture: ComponentFixture<NotifysuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifysuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifysuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
