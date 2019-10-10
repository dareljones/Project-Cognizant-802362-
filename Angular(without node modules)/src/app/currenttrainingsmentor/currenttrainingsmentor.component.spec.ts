import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenttrainingsmentorComponent } from './currenttrainingsmentor.component';

describe('CurrenttrainingsmentorComponent', () => {
  let component: CurrenttrainingsmentorComponent;
  let fixture: ComponentFixture<CurrenttrainingsmentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrenttrainingsmentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrenttrainingsmentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
