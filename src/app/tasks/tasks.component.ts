import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTask } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  //Con el ? declaramos que esta bien que la variable no este inicializada
  @Input({required: true}) name!: string;
  @Input({required: true}) userId!: string; 
  isAddingTask = false;

  constructor(private tasksService: TasksService){}

  get selectedUserTask(){
    return this.tasksService.getUserTasks(this.userId);
  }

  
  onStartAddTask(){
    this.isAddingTask=true;
  }

  onCloseAddTask(){
    this.isAddingTask=false;
  }


}
