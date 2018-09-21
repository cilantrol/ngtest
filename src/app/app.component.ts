import { Component } from '@angular/core';
// import { timer } from 'rxjs';
import { MatDialog } from '@angular/material';
import { EditCourseComponent } from './edit-course/edit-course.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  progress = 0;
  title = 'app';
  isChecked = true;
  timer;

  minDate = new Date(2017, 1, 1);
  maxDate = new Date(2020, 1, 1);

  colors = [
    {id: 1, name: 'Red'},
    {id: 2, name: 'Blue'},
    {id: 3, name: 'Yellow'}
  ]
  color = 2;
  categories = [
    {name: '1'},
    {name: '2'},
    {name: '3'}
  ];

  isLoading = false;

  constructor(private dialog: MatDialog) {
    setInterval(() => {
      this.progress++;
      if (this.progress === 100) { clearInterval(this.timer) }
    }, 20);

    this.isLoading = true;
  //   this.getCourses()
  //     // .subscribe(courses => this.courses = courses);
  //     .subscribe(x => this.isLoading = false);
  }

  onChange($event)  {
    console.log($event);
  }

  selectCategory(category)  {
    console.log(category);
    console.log(this.categories);
    this.categories
      .filter(c => c !== category)
      // console.log(category);
      .forEach(c => c['selected'] = false);

    category.selected = !category.selected;
  }

  // getCourses() {
  //   return timer(2000);
  // }

  openDiag() {
    this.dialog.open(EditCourseComponent, {
      data: { courseId: 1}
    })
      .afterClosed()
      .subscribe(result => console.log(result));
  }
}
