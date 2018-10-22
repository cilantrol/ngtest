import { Observable } from 'rxjs/internal/Observable';
import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { from } from 'rxjs/observable/from';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos property with the items returned from the server', () => {
    spyOn(service, 'getTodos').and.callFake(() => {
      // return Observable.from([ [1, 2, 3] ]);
      return from([ [1, 2, 3] ]);
      // return Observable.from( [1, 2]);
    });

    component.ngOnInit();

    expect(component.todos.length).toBe(3);
  });
});
