import { Component, OnInit, Input } from '@angular/core';
import { colors } from '../../helpers/colors.array';
import dialogPolyfill from 'dialog-polyfill';
import { ComposerService } from 'src/app/services/composer.service';
import { v4 } from 'uuid';
import { BG, SHAPECOLOR } from 'src/app/CONSTANTS/localstorage.constans';

@Component({
  selector: 'iota-color-options',
  templateUrl: './color-options.component.html',
  styleUrls: ['./color-options.component.scss']
})
export class ColorOptionsComponent implements OnInit {
  readonly buttonsColors: Array<string>;
  @Input() isBg: boolean;
  readonly id: string;

  constructor(private readonly composer: ComposerService) {
    this.buttonsColors = colors;
    this.isBg = false;
    this.id = v4();
  }

  ngOnInit(): void {}

  openDialog(): void {
    const dialog: HTMLElement = document.getElementById(this.id);
    dialogPolyfill.registerDialog(dialog);
    (dialog as any).showModal();
  }

  changeColor(color: string): void {
    if (this.isBg) {
      localStorage.setItem(BG, color);
      this.composer.updateState({ selectedBG: color });
    } else {
      localStorage.setItem(SHAPECOLOR, color);
      this.composer.mixinStateColorWithParticles(color);
    }
  }
}
