import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gym',
  templateUrl: './gym.page.html',
  styleUrls: ['./gym.page.scss'],
})
export class GymPage implements OnInit {
  bodyParts: any =[
    {id: 1, title: 'Biceps'},
    {id: 2, title: 'Triceps'},
    {id: 3, title: 'Shoulders'},
    {id: 4, title: 'Back'},
    {id: 5, title: 'Chest'},
  ];
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  
  goToDetail(bodyParts) {

    this.router.navigate(['/detail'],{
      queryParams: bodyParts
    });
  }

  
}
