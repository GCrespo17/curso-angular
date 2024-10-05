import { Component, EventEmitter, Output, Input, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  @Output() add= new EventEmitter<NewTask>();
  enteredTitle="";
  enteredSummary="";
  enteredDate="";
  //Otro metodo en vez de constructor para injectar la dependencia de servicios
  private tasksService= inject(TasksService)

  onCancel(){
    this.close.emit();
  }

  onSubmit(){
    this.tasksService.addTask({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      date: this.enteredDate
    }, this.userId)
    this.close.emit();
  }
}
