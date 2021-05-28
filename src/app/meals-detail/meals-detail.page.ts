import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meals-detail',
  templateUrl: './meals-detail.page.html',
  styleUrls: ['./meals-detail.page.scss'],
})
export class MealsDetailPage implements OnInit {

  mealsId;
  meals: any ={};
  constructor(
    private route: ActivatedRoute
  ) { 
    // this.drillId = this.route.snapshot.paramMap.get('id');
    this.route.queryParams.subscribe( res =>{
      console.log(res);
      this.meals = res;
    })
  }

  ngOnInit() {
  }

}

