import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HankComponent } from './hank.component';

describe('HankComponent', () => {
  let component: HankComponent;
  let fixture: ComponentFixture<HankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
