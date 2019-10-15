import { Injectable } from '@angular/core';
import { AppState, Shape } from '../models';
import { DeepPartial } from 'utility-types';
import { IParams } from 'angular-particle/lib';
import { BehaviorSubject } from 'rxjs';
import atomsConf from '../components/image-container/particles/particlesConf/atoms.conf';
import pentagonConf from '../components/image-container/particles/particlesConf/pentagon.conf';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {
  private state: AppState;
  stateChange: BehaviorSubject<AppState>;
  get shape(): Shape {
    return this.state.selectedShape;
  }

  constructor() {
    this.state = Object.create(null);
    this.stateChange = new BehaviorSubject<AppState>(null);
  }

  init(): void {
    this.state = {
      ...this.state,
      selectedBG: '#000000',
      selectedColor: '#ffffff',
      selectedShape: 'Atoms',
      particlesConf: atomsConf
    };
    this.stateChange.next(this.state);
  }

  mixinStateColorWithParticles(color: string): void {
    this.state = {
      ...this.state,
      particlesConf: {
        ...this.state.particlesConf,
        particles: {
          ...this.state.particlesConf.particles,
          color: {
            value: color
          },
          line_linked: {
            ...this.state.particlesConf.particles.line_linked,
            color
          }
        }
      }
    };
    this.stateChange.next(this.state);
  }

  setShape(shape: Shape): void {
    this.state = {
      ...this.state,
      selectedShape: shape,
      particlesConf: this.whatShapeConf(shape)
    };
    this.stateChange.next(this.state);
  }

  private whatShapeConf(shape: Shape): DeepPartial<IParams> {
    switch (shape) {
      case 'Atoms':
        return atomsConf;
      case 'Pentagons':
        return pentagonConf;
    }
  }
}
