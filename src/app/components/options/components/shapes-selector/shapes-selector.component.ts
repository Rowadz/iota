import { Component, OnInit, EventEmitter } from '@angular/core';
import { ComposerService } from 'src/app/services/composer.service';
import { Shape } from 'src/app/models';

@Component({
  selector: 'iota-shapes-selector',
  templateUrl: './shapes-selector.component.html',
  styleUrls: ['./shapes-selector.component.scss']
})
export class ShapesSelectorComponent implements OnInit {
  readonly shapes: Array<Shape>;

  constructor(public readonly composer: ComposerService) {
    this.shapes = [
      'Atoms',
      'Pentagons',
      'Atomz',
      'Squares',
      'Squarez',
      'Onyx',
      'Circles',
      'Circlez'
    ];
  }

  ngOnInit(): void {}

  onShapeChanged(shape: Shape) {
    localStorage.setItem('SELECTEDSHAPE', shape);
    this.composer.updateState({ selectedShape: shape });
  }
}
