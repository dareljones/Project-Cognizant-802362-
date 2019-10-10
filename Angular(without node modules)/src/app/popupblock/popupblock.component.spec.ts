import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupblockComponent } from './popupblock.component';

describe('PopupblockComponent', () => {
  let component: PopupblockComponent;
  let fixture: ComponentFixture<PopupblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
