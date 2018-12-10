import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restful Tasks API';
  author = 'Andy Nguyen';
  //set the attribute tasks to be an array
  tasks = [];
  // displayAllTasks: boolean;
  selectedTask = [];
  displayOneTask: boolean = false;
  newTask: any;
  canEdit: boolean = false;
  constructor(private _httpService: HttpService) {

  }
  ngOnInit(){
    this.getTasksFromService();
    this.newTask = {title: "", description: ""};
  }
  createTaskFromService(){
    let observable = this._httpService.createTask(this.newTask);
    observable.subscribe(data => {
      console.log("Got the data from post back", data);
      this.newTask = {title: "", description: ""}
      this.getTasksFromService();
    })
  }
  deleteTaskFromService(id: string){
    console.log(`deleteTask`)
    let observable = this._httpService.deleteTask(id);
    observable.subscribe(data => {
      console.log("Task removed", data);
      this.displayOneTask = false;
      this.getTasksFromService();
    })
  }
  getTasksFromService(){
    console.log(`getTasksFromService`);
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our data!", data)
      // here, the array of tasks is assigned to the key "tasks" in the data object.
      this.tasks = data['tasks']
      // this.displayAllTasks = true;
      this.canEdit = false;
    })
  }
  getThisTaskFromService(id: string){
    console.log(`getThisTaskFromService`);
    let observable = this._httpService.getTask(id);
    observable.subscribe(data => {
      console.log("Got this task!", data)
      this.selectedTask = data['task']
      this.displayOneTask = true;
      this.canEdit = false;
    })
  }
  showTaskEditor(id: string){
    console.log(`showTaskEditor`);
    let observable = this._httpService.getTask(id);
    observable.subscribe(data => {
      console.log(`showTaskEditor`, data)
      this.selectedTask = data['task']
      this.canEdit = true;
    });
  }
  updateTaskFromService(id: string, selectedTask) {
    console.log("made it to updateTasksFromService")
    console.log(id,selectedTask);
    let observable = this._httpService.updateTask(id, selectedTask);
    observable.subscribe(data => {
      console.log("Got the data back", data);
      this.canEdit = false;
      this.getTasksFromService();
    })
  }
  hideTask(){
    console.log(`hideTask`);
    this.displayOneTask = false;
  }

}
