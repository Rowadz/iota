import { Injectable } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { LayoutState, ObservablesLayout } from '../models';
import { DeepPartial } from 'utility-types';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  state: DeepPartial<LayoutState>;
  constructor(private readonly breakpointObserver: BreakpointObserver) {
    this.state = {};
    this.subDynamically();
  }

  private subDynamically(): void {
    this.genLayoutObs().forEach(({ nameInState, obs }: ObservablesLayout) => {
      obs.subscribe({
        next: ({ matches }: BreakpointState) => {
          this.state = {
            ...this.state,
            [nameInState]: matches
          };
        }
      });
    });
  }

  private genLayoutObs(): Array<ObservablesLayout> {
    return [
      {
        obs: this.breakpointObserver.observe([Breakpoints.XSmall]),
        nameInState: 'isSmall'
      }
    ];
  }
}
