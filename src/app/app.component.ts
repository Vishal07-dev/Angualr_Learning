import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // For ngModel
import { CommonModule } from '@angular/common'; // For *ngFor and other common directives
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule, CommonModule], // Import both FormsModule and CommonModule
})
export class AppComponent {
  title = 'First Angular Project';
  todoValue: string = '';
  list: Todo[] = [];
  

  ngOnInit() {
    this.list = [];
    this.changetitle()
  }

  changetitle()
  {
    this.title="functional title"
  }

  addItem() {
    if (this.todoValue.trim() !== '') {
      const newItem: Todo = {
        id: Date.now(),
        value: this.todoValue.trim(),
        isDone: false,
      };
      this.list.push(newItem);
    }
    this.todoValue = '';
  }

  deleteItem(id: number) {
    this.list = this.list.filter((item) => item.id !== id);
  }
}
