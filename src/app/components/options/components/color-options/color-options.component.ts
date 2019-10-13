import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { colors } from '../../helpers/colors.array';
import dialogPolyfill from 'dialog-polyfill';

@Component({
  selector: 'iota-color-options',
  templateUrl: './color-options.component.html',
  styleUrls: ['./color-options.component.scss']
})
export class ColorOptionsComponent implements OnInit {
  readonly buttonsColors: Array<string>;
  @Input() isBg: boolean;
  @Output() selectedColorChanged: EventEmitter<string>;

  constructor() {
    this.buttonsColors = colors;
    this.isBg = false;
    this.selectedColorChanged = new EventEmitter<string>();
  }

  ngOnInit(): void {}

  openDialog(): void {
    const dialog: HTMLElement = document.getElementById('dialog-dark-rounded');
    dialogPolyfill.registerDialog(dialog);
    (dialog as any).showModal();
  }

  changeColor(color: string): void {
    this.selectedColorChanged.emit(color);
  }
}
