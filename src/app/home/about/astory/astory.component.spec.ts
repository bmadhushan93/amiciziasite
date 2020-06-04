import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstoryComponent } from './astory.component';

describe('AstoryComponent', () => {
  let component: AstoryComponent;
  let fixture: ComponentFixture<AstoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
