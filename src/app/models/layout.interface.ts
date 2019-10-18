import { Observable } from 'rxjs';
import { BreakpointState } from '@angular/cdk/layout';

export interface LayoutState {
  isSmall: boolean;
}
export interface ObservablesLayout {
  obs: Observable<BreakpointState>;
  nameInState: NameInState;
}

export type NameInState = 'isSmall';
