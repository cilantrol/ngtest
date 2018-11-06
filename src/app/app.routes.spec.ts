import { HomeComponent } from './home/home.component';
import { routes } from './app.routes';
import { UsersComponent } from './users/users.component';
import { TodosComponent } from './2-todos/todos.component';
import { UserDetailsComponent } from './3-user-details/user-details.component';


describe('routes', () => {
  it('should contain a route for users', () => {
    expect(routes).toContain({ path: 'users', component: UsersComponent});
  });
});

describe('routes', () => {
  it('should contain a route for users', () => {
    expect(routes).toContain({ path: 'todos', component: TodosComponent});
  });
});

describe('routes', () => {
  it('should contain a route for users', () => {
    expect(routes).toContain({ path: 'users/:id', component: UserDetailsComponent});
  });
});

describe('routes', () => {
  it('should contain a route for users', () => {
    expect(routes).toContain({ path: '', component: HomeComponent});
  });
});


