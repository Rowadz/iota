import { IParams } from 'angular-particle/lib';
import { DeepPartial } from 'utility-types';

export interface AppState {
  selectedColor: string;
  selectedBG: string;
  selectedShape: Shape;
  particlesConf: DeepPartial<IParams>;
}

export type Shape = 'Atoms' | 'Pentagons';
