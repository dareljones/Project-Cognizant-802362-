import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupsigninComponent } from './popupsignin.component';

describe('PopupsigninComponent', () => {
  let component: PopupsigninComponent;
  let fixture: ComponentFixture<PopupsigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupsigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupsigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
