import { Component, OnInit } from '@angular/core';
import atoms from './particlesConf/atoms.conf';
import domToImage from 'dom-to-image';
import { saveAs } from 'file-saver';
import { v4 } from 'uuid';

@Component({
  selector: 'iota-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.scss']
})
export class ParticlesComponent implements OnInit {
  readonly conf: any;
  constructor() {
    this.conf = atoms;
  }

  ngOnInit(): void {
    // const node = document.getElementById('particles');
    // domToImage.toBlob(node).then((blob: Blob) => {
    //   saveAs(blob, v4());
    // });
  }
}
