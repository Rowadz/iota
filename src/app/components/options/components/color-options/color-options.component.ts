import { Component, OnInit, Input } from '@angular/core';
import { colors } from '../../helpers/colors.array';
import dialogPolyfill from 'dialog-polyfill';
import { ComposerService } from 'src/app/services/composer.service';

@Component({
  selector: 'iota-color-options',
  templateUrl: './color-options.component.html',
  styleUrls: ['./color-options.component.scss']
})
export class ColorOptionsComponent implements OnInit {
  readonly buttonsColors: Array<string>;
  @Input() isBg: boolean;

  constructor(private readonly composer: ComposerService) {
    this.buttonsColors = colors;
    this.isBg = false;
  }

  ngOnInit(): void {}

  openDialog(): void {
    const dialog: HTMLElement = document.getElementById('dialog-dark-rounded');
    dialogPolyfill.registerDialog(dialog);
    (dialog as any).showModal();
  }

  changeColor(color: string): void {
    this.composer.mixinStateColorWithParticles(color);
  }
}
