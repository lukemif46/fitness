import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gym } from '../struct/gym';
import { GYM } from '../struct/gym-data';

@Component({
  selector: 'app-gym',
  templateUrl: './gym.page.html',
  styleUrls: ['./gym.page.scss'],
})
export class GymPage implements OnInit {

  gym: Gym[] = GYM;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  
  goToDetail(gym) {

    this.router.navigate(['/detail'],{
      queryParams: gym
    });
  }

  
}
