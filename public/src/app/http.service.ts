import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getTasks();
  }

  getTasks(){
    // our http response is an Observable, store it in a variable
    // let allTasks = this._http.get('/tasks');
    // allTasks.subscribe(data => {
    //   console.log("Got our tasks!", data);
    // });

    // instead of storing the Observable in a variable, return the observable to wherever the getTasks method was invoked
    return this._http.get('/tasks');
  }
  getTask(id){
    // let theTask = this._http.get(`/tasks/5c082e3a09e82ae291ade961`);
    // theTask.subscribe(data => {
    //   console.log("Got the task!", data)
    // });
    return this._http.get(`/tasks/${id}`)
  }
  createTask(newTask){
    return this._http.post('/tasks', newTask)
  }
  deleteTask(id){
    return this._http.delete(`/tasks/${id}`)
  }
  updateTask(id, selectedTask){
    return this._http.put(`/tasks/${id}`, selectedTask)
  }

}
