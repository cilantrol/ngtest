import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { EditCourseComponent } from './edit-course/edit-course.component';


import { MaterialModule } from './modules/material.module';
import { CourseService } from './course.service';


@NgModule({
  declarations: [
    AppComponent,
    EditCourseComponent
  ],
  entryComponents: [
    EditCourseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers:  [CourseService, { provide: CourseService, useClass: CourseService}
                              // { provide: DIALOG_DATA, useValue: {} }
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
