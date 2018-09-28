import { tassign } from 'tassign';
import { INCREMENT, DECREMENT } from './actions';
import { Action } from 'redux';
import { fromJS, Map } from 'immutable';
// export interface IAppState {
//   counter: number;
// }

// export const INITIAL_STATE: IAppState = {
//   counter: 0
// };

// export function rootReducer(state: IAppState, action): IAppState {
//   switch (action.type) {
//     case INCREMENT: return { counter: state.counter + 1 };
//     case DECREMENT: return { counter: state.counter - 1 };
//   }
//   return state;
// }
export interface IAppState {
  count: number;
  // messaging?: {
  //   newMessages: number;
  // }
}

export const INITIAL_STATE: IAppState = {
  count: 0,
  // messaging: {
  //   newMessages: 5
  // }
};

export function rootReducer(state: Map<string, any>, action: Action): Map<string, any> {
  switch (action.type) {
    case INCREMENT:
      // return Object.assign({}, state, { count: state.count + 1, isOnline: true });
      // return tassign(state, { count: state.count + 1 });
      return state.set('count', state.get('count') + 1);
    // case DECREMENT: return { count: state.count - 1 };
  }
  return state;
}
