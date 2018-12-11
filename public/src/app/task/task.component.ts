import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() taskToShow: any;
  @Input() canEdit: boolean;
  @Output() getTasksFromParent = new EventEmitter();
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }


  showTaskEditor(id: string){
    console.log(`showTaskEditor`);
    let observable = this._httpService.getTask(id);
    observable.subscribe(data => {
      console.log(`showTaskEditor`, data)
      this.taskToShow = data['task']
      this.canEdit = true;
    });
  }
  updateTaskFromService(id: string, taskToShow) {
    console.log("made it to updateTasksFromService")
    console.log(id,taskToShow);
    let observable = this._httpService.updateTask(id, taskToShow);
    observable.subscribe(data => {
      console.log("Got the data back", data);
      this.canEdit = false;
      this.getTasksFromParent.emit();
    })
  }
}
