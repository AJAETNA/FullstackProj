import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  //showing all data
  getData()
  {
    return this.http.get("http://localhost:8080/course")
  }

  //for adding data
  addCourse(course:any)
  {
     return this.http.post("http://localhost:8080/addCourse",course)
  }

  editCourse(course:any)
  {
     return this.http.post("http://localhost:8080/updateCourse",course)
  }
}
