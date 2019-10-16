import { Component, OnInit } from '@angular/core';
import { ComposerService } from 'src/app/services/composer.service';

@Component({
  selector: 'iota-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.scss']
})
export class ImageContainerComponent implements OnInit {
  constructor(private readonly comsposer: ComposerService) {}

  ngOnInit(): void {}

  download(): void {
    this.comsposer.download.next();
  }
}
