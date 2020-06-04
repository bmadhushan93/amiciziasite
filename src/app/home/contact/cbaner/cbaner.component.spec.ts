import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbanerComponent } from './cbaner.component';

describe('CbanerComponent', () => {
  let component: CbanerComponent;
  let fixture: ComponentFixture<CbanerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbanerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
