import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbanerComponent } from './abaner.component';

describe('AbanerComponent', () => {
  let component: AbanerComponent;
  let fixture: ComponentFixture<AbanerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbanerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
