import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Drill } from '../struct/drills';
import { DRILLS } from '../struct/drills-data';

@Component({
  selector: 'app-football',
  templateUrl: './football.page.html',
  styleUrls: ['./football.page.scss'],
})
export class FootballPage implements OnInit {
  drills: Drill[] = DRILLS;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  
  goToDetail(drills) {

    this.router.navigate(['/menu/detail'],{
      queryParams: drills
    });
  }

  
}
