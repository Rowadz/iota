import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapesSelectorComponent } from './shapes-selector.component';

describe('ShapesSelectorComponent', () => {
  let component: ShapesSelectorComponent;
  let fixture: ComponentFixture<ShapesSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapesSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapesSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
