import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrijaviProblemComponent } from './prijavi-problem.component';

describe('PrijaviProblemComponent', () => {
  let component: PrijaviProblemComponent;
  let fixture: ComponentFixture<PrijaviProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrijaviProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrijaviProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
