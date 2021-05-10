import { Component, OnInit } from "@angular/core";
import { Course } from "./course";


@Component({
  selector:'app-course-list',
  templateUrl:'./course-list.component.html'
})



export class CourseListComponent implements OnInit{
  courses: Course[] = [];

  ngOnInit(): void{
    this.courses = [
      {
        id: 1,
        name:'Angular: Forms',
        imageURL:'/assets/images/forms.png',
        price:99.99,
        code:'XPS-8796',
        duration:120,
        rating:4.8,
        releaseDate:'December, 2, 2019',
      },
      {
        id: 2,
        name:'Angular: Navigation',
        imageURL:'/assets/images/http.png',
        price:120.99,
        code:'ZZL-8865',
        duration:180,
        rating:3.5,
        releaseDate:'October, 2, 2020',
      }
    ];
}




}