import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjudicatorHomeComponent } from './adjudicator-home.component';

describe('AdjudicatorHomeComponent', () => {
  let component: AdjudicatorHomeComponent;
  let fixture: ComponentFixture<AdjudicatorHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjudicatorHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjudicatorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
