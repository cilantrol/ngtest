import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { By } from '@angular/platform-browser';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes([]) ],
      declarations: [ NavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a router outlet', () => {
    const de = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(de).not.toBeNull();
  });

  it('should have a link to todos page', () => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    // const index = debugElements.findIndex(de => de.attributes['href'] === 'todos');
    // console.log(debugElements);
    console.log(debugElements.map(d => d.attributes['routerLink'] === 'todos'));
    const index = debugElements.map(d => d.attributes['routerLink'] === 'todos').length;

    expect(index).toBeGreaterThan(-1);
  });
});
