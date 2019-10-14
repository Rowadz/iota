import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'iota-shapes-selector',
  templateUrl: './shapes-selector.component.html',
  styleUrls: ['./shapes-selector.component.scss']
})
export class ShapesSelectorComponent implements OnInit {
  @Output() shapeChanged: EventEmitter<string>;

  constructor() {
    this.shapeChanged = new EventEmitter<string>();
  }

  ngOnInit(): void {}

  onShapeChanged(shape: string) {
    console.log(shape);
  }
}
