import { Component } from '@angular/core';
import { IAppState } from './store';
import { NgRedux, select } from '@angular-redux/store';
import { fromJS, Map } from 'immutable';
import { INCREMENT, DECREMENT } from './actions';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  @select() readonly count$: number;  // state.get('count)
  // @select(['messaging', 'newMessages']) newMessages;
  // @select((s: IAppState) => s.messaging.newMessages) newMessagesCount;

  constructor(private ngRedux: NgRedux<Map<string, any>>) {
      // this.subscription = ngRedux.select<number>('count')
      //   .subscribe(newCount => this.count$ = newCount);

      // this.count$ = ngRedux.select<number>('count');
  }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.ngRedux.dispatch( { type: DECREMENT });
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}
