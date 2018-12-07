import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getTasks();
    this.getTask();
  }

  getTasks(){
    // our http response is an Observable, store it in a variable
    let allTasks = this._http.get('/tasks');
    allTasks.subscribe(data => 
      console.log("Got our tasks!", data));
  }
  getTask(){
    // hardcoding the task id for this assignment...will update it in future assignments
    let theTask = this._http.get(`/tasks/5c082e3a09e82ae291ade961`);
    theTask.subscribe(data => 
      console.log("Got the task!", data));
  }



}
