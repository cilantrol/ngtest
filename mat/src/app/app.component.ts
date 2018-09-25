import { Component } from '@angular/core';
import { IAppState } from './store';
import { NgRedux } from '@angular-redux/store';
import { INCREMENT } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private ngRedux: NgRedux<IAppState>) {
    ngRedux.subscribe(() => {
      console.log(ngRedux.getState());
    });
  }

  increment() {
    // this.counter++;
    this.ngRedux.dispatch({ type: INCREMENT});
  } // <- New
  decrement() {
    this.ngRedux.dispatch({ type: 'DECREMENT'});
  } // <- New
}
