import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-fitness',
  templateUrl: './home-fitness.page.html',
  styleUrls: ['./home-fitness.page.scss'],
})
export class HomeFitnessPage implements OnInit {
  exercises: any =[
    {id: 1, title: 'Cardio'},
    {id: 2, title: 'Upper body'},
    {id: 3, title: 'Lower body'},
    {id: 4, title: 'Full body'},
  ];
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  
  goToDetail(exercises) {

    this.router.navigate(['/detail'],{
      queryParams: exercises
    });
  }

  
}



