import { Observable } from 'rxjs';
import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { from } from 'rxjs/observable/from';
import { empty } from 'rxjs/observable/empty';
import { throwError } from 'rxjs';

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

  it('should call the server to save the changes when a new todo item is added', () => {
    const spy = spyOn(service, 'add').and.callFake(t =>   {

      return empty();
    });

    component.add();

    expect(spy).toHaveBeenCalled();
  });

  it('should add new todo returned from server', () => {
    const spy = spyOn(service, 'add').and.callFake(t =>   {

      return from([ {id: 1} ]);
    });

    component.add();

    expect(component.todos.indexOf({id: 1})).toBeGreaterThan(-1);
  });

  it('should msg property if server returns error when adding new property', () => {
    const spy = spyOn(service, 'add').and.returnValue(throwError('error from server'));

    component.add();

    expect(component.message).toBe('error from the server');
  });

  it('should call the server to delete a todo item if the user confirms', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const spy = spyOn(service, 'delete').and.returnValue(empty());

    component.delete(1);

    // expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should NOT call the server to delete a todo item if the user cancels', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    const spy = spyOn(service, 'delete').and.returnValue(empty());

    component.delete(1);

    // expect(spy).toHaveBeenCalled();
    expect(spy).not.toHaveBeenCalled();
  });

});
