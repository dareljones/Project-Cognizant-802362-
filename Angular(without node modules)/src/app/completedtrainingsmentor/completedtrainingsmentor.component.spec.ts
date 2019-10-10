import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedtrainingsmentorComponent } from './completedtrainingsmentor.component';

describe('CompletedtrainingsmentorComponent', () => {
  let component: CompletedtrainingsmentorComponent;
  let fixture: ComponentFixture<CompletedtrainingsmentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedtrainingsmentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedtrainingsmentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
