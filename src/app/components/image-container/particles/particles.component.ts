import { Component, OnInit } from '@angular/core';
import atoms from './particlesConf/atoms.conf';
import pentagon from './particlesConf/pentagon.conf';
import domToImage from 'dom-to-image';
import { saveAs } from 'file-saver';
import { v4 } from 'uuid';
import { ComposerService } from 'src/app/services/composer.service';
import { AppState } from 'src/app/models';
import { IParams } from 'angular-particle/lib';
import { DeepPartial } from 'utility-types';

@Component({
  selector: 'iota-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.scss']
})
export class ParticlesComponent implements OnInit {
  conf: DeepPartial<IParams>;
  state: AppState;
  bg: string;
  constructor(private readonly composer: ComposerService) {
    this.composer.stateChange.subscribe({
      next: (s: AppState) => {
        if (this.conf) {
          this.conf = null;
        }
        this.bg = s.selectedBG;
        setTimeout(() => {
          this.conf = s.particlesConf;
        }, 0);
      }
    });
  }

  ngOnInit(): void {
    this.composer.download.subscribe({
      next: () => {
        this.composer.loading = true;
        const node = document.getElementById('particles');
        domToImage.toBlob(node).then((blob: Blob) => {
          saveAs(blob, v4());
          setTimeout(() => {
            this.composer.loading = false;
          }, 1000);
        });
      },
      error: e => {
        console.error(e);
        alert('¯\\_(ツ)_/¯');
      }
    });
  }
}
