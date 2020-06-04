import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcontainerComponent } from './acontainer.component';

describe('AcontainerComponent', () => {
  let component: AcontainerComponent;
  let fixture: ComponentFixture<AcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
