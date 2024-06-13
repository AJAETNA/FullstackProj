import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  newCourse={
    id:'',
    title:'',
    description:''
  }

  constructor(private service:ApiService,private router:Router){}

  createCourse()
  {
    this.service.addCourse(this.newCourse).subscribe((data)=>{
      this.router.navigate(['/course'])
    })
  }
}
