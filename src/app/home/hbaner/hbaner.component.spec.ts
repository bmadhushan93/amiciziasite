import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HbanerComponent } from './hbaner.component';

describe('HbanerComponent', () => {
  let component: HbanerComponent;
  let fixture: ComponentFixture<HbanerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HbanerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HbanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
