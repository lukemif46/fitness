import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-football',
  templateUrl: './football.page.html',
  styleUrls: ['./football.page.scss'],
})
export class FootballPage implements OnInit {
  drills: any =[
    {id: 1, title: 'Footwork'},
    {id: 2, title: 'Dribbling'},
    {id: 3, title: 'Shooting'},
    {id: 4, title: 'Control'},
    {id: 5, title: 'Defending'},
    {id: 6, title: 'Attacking'},
  ];
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  
  goToDetail(drills) {

    this.router.navigate(['/detail'],{
      queryParams: drills
    });
  }

  
}
