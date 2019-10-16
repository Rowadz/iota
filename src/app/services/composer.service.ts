import { Injectable } from '@angular/core';
import { AppState, Shape } from '../models';
import { DeepPartial } from 'utility-types';
import { IParams } from 'angular-particle/lib';
import { BehaviorSubject, Subject } from 'rxjs';
import atomsConf from '../components/image-container/particles/particlesConf/atoms.conf';
import pentagonConf from '../components/image-container/particles/particlesConf/pentagon.conf';
import atomzConf from '../components/image-container/particles/particlesConf/atomz.conf';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {
  private state: AppState;
  readonly download: Subject<void>;
  readonly stateChange: BehaviorSubject<AppState>;
  get shape(): Shape {
    return this.state.selectedShape;
  }

  constructor() {
    this.state = Object.create(null);
    this.stateChange = new BehaviorSubject<AppState>(null);
    this.download = new Subject<void>();
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
    this.mixinParticlesColorWithState(color);
    this.stateChange.next(this.state);
  }

  updateState(s: DeepPartial<AppState>): void {
    this.state = {
      ...this.state,
      ...s
    };

    this.state = {
      ...this.state,
      particlesConf: this.whatShapeConf(s.selectedShape)
    };
    this.stateChange.next(this.state);
  }

  private whatShapeConf(
    shape: Shape = this.state.selectedShape
  ): DeepPartial<IParams> {
    switch (shape) {
      case 'Atoms':
        return this.mixSelectedColorWithParticles(atomsConf);
      case 'Pentagons':
        return this.mixSelectedColorWithParticles(pentagonConf);
      case 'Atomz':
        return this.mixSelectedColorWithParticles(atomzConf);
      default:
        return this.mixSelectedColorWithParticles(atomsConf);
    }
  }

  private mixinParticlesColorWithState(color: string): void {
    this.state = {
      ...this.state,
      selectedColor: color,
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
  }

  private mixSelectedColorWithParticles(
    conf: DeepPartial<IParams>
  ): DeepPartial<IParams> {
    return {
      ...conf,
      particles: {
        ...conf.particles,
        color: { value: this.state.selectedColor },
        line_linked: {
          ...this.state.particlesConf.particles.line_linked,
          color: this.state.selectedColor
        }
      }
    };
  }
}
