import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BkitComponent } from './bkit.component';

describe('BkitComponent', () => {
  let component: BkitComponent;
  let fixture: ComponentFixture<BkitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BkitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
