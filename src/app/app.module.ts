import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskInputFormComponent } from './components/task-input-form/task-input-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';

@NgModule({
  declarations: [AppComponent, TaskInputFormComponent, TaskListComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
