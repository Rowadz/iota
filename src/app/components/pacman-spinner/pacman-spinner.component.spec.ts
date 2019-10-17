import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacmanSpinnerComponent } from './pacman-spinner.component';

describe('PacmanSpinnerComponent', () => {
  let component: PacmanSpinnerComponent;
  let fixture: ComponentFixture<PacmanSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacmanSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacmanSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
