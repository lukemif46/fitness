import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meals } from '../struct/meals';
import { MEALS } from '../struct/meals-data';


@Component({
  selector: 'app-meals',
  templateUrl: './meals.page.html',
  styleUrls: ['./meals.page.scss'],
})
export class MealsPage implements OnInit {
  meals: Meals[] = MEALS;
  formattedDate;
  constructor(
    private router: Router
  ) { 
    this.getFormattedDate()
  }

  getFormattedDate(){
    var dateObj = new Date()

    var year = dateObj.getFullYear()
    var month = dateObj.getMonth()
    var date = dateObj.getDate()

    this.formattedDate = date +'/'+ month +'/'+ year;
  }

  ngOnInit() {
  }
  goToDetail(meals) {

    this.router.navigate(['/meals-detail'],{
      queryParams: meals
    });
  }
}





