import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent {
  newCourse={
    id:'',
    title:'',
    description:''
  }

  constructor(private service:ApiService,private router:Router){}

  editCourse()
  {
    this.service.editCourse(this.newCourse).subscribe((data)=>{
      this.router.navigate(['/course'])
    })
  }
}
