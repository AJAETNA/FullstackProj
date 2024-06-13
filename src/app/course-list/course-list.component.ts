import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {

  constructor(private service:ApiService){}

  info:any
  ngOnInit()
  {
    this.info = this.service.getData().subscribe((data)=>{
      this.info = data;
      console.log(this.info)
    });
  }
}
