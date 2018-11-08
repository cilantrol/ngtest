
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { TodosComponent } from './todos.component';
import { HttpModule } from '@angular/http';
import { TodoService } from './todo.service';
import { from } from 'rxjs';


// NOTE: I've deliberately excluded this suite from running
// because the test will fail. This is because we have not
// provided the TodoService as a dependency to TodosComponent.

// When you get to Lecture 6 (Providing Dependencies), be sure
// to remove "x" from "xdescribe" below.

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      declarations: [ TodosComponent ],
      providers: [ TodoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load todos from server', async(() => {
    const service = TestBed.get(TodoService);
    // Test bed does this for us
    // fixture.debugElement.injector.get(TodoService);

    spyOn( service, 'getTodosPromise').and.returnValue(Promise.resolve( [1, 2, 3] ));

    fixture.detectChanges();

    fixture.whenStable().then((() => {
      expect(component.todos.length).toBe(3);
    }));

  }));

});
