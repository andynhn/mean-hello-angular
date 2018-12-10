import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restful Tasks API';
  //set the attribute tasks to be an array
  tasks = [];
  displayAllTasks: boolean;
  displayOneTask: boolean;
  selectedTask = [];
  constructor(private _httpService: HttpService) {

  }
  ngOnInit(){
    // this.getTasksFromService();
  }
  getTasksFromService(){
    console.log(`getTasks click event is working`);
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our data!", data)
      // here, the array of tasks is assigned to the key "tasks" in the data object.
      this.tasks = data['tasks']
      this.displayAllTasks = true;
    })
  }
  getThisTaskFromService(id: string){
    console.log(`getThisTask click event is working`);
    let observable = this._httpService.getTask(id);
    observable.subscribe(data => {
      console.log("Got this task!", data)
      this.selectedTask = data['task']
      this.displayOneTask = true;
    })
  }

}
