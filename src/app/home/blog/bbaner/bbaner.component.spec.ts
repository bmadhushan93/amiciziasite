import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbanerComponent } from './bbaner.component';

describe('BbanerComponent', () => {
  let component: BbanerComponent;
  let fixture: ComponentFixture<BbanerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbanerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
