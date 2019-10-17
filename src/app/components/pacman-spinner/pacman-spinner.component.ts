import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iota-pacman-spinner',
  templateUrl: './pacman-spinner.component.html',
  styleUrls: ['./pacman-spinner.component.scss']
})
export class PacmanSpinnerComponent implements OnInit {
  readonly num: number;
  constructor() {
    this.num = Math.floor(Math.random() * 4 + 1);
  }

  ngOnInit(): void {}
}
