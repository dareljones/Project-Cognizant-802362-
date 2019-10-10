import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarmentorComponent } from './navbarmentor.component';

describe('NavbarmentorComponent', () => {
  let component: NavbarmentorComponent;
  let fixture: ComponentFixture<NavbarmentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarmentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarmentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
