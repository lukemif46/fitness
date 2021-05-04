import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-meals',
  templateUrl: './meals.page.html',
  styleUrls: ['./meals.page.scss'],
})
export class MealsPage implements OnInit {
  formattedDate;
  constructor(
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

}




