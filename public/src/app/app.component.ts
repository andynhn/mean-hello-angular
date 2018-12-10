import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restful Tasks API';
  subtitle = 'All the tasks';
  //set the attribute tasks to be an array
  tasks = [];
  thirdTask = [];
  constructor(private _httpService: HttpService) {

  }
  ngOnInit(){
    this.getTasksFromService();
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our data!", data)
      // here, the array of tasks is assigned to the key "tasks" in the data object.
      this.tasks = data['tasks']
      this.thirdTask = data['tasks'][2]
      console.log(this.tasks)
    })
  }
}
