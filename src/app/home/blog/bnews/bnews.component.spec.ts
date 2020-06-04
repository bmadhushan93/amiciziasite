import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnewsComponent } from './bnews.component';

describe('BnewsComponent', () => {
  let component: BnewsComponent;
  let fixture: ComponentFixture<BnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
