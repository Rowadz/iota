import { Component } from '@angular/core';
import { ComposerService } from './services/composer.service';

@Component({
  selector: 'iota-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public readonly composer: ComposerService) {
    composer.init();
  }
}
