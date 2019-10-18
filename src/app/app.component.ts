import { Component, OnInit } from '@angular/core';
import { ComposerService } from './services/composer.service';
import { LayoutService } from './services/layout.service';

@Component({
  selector: 'iota-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    public readonly composer: ComposerService,
    public readonly layout: LayoutService
  ) {
    composer.init();
  }

  ngOnInit(): void {}
}
