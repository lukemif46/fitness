import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  
  drillId;
  drills: any ={};
  gymId;
  gym: any ={};
  constructor(
    private route: ActivatedRoute
  ) { 
    // this.drillId = this.route.snapshot.paramMap.get('id');
    // this.gymId = this.route.snapshot.paramMap.get('id');
    this.route.queryParams.subscribe( res =>{
      console.log(res);
      this.drills = res;
      this.gym = res;
    })
  }

  


  ngOnInit() {
  }

}
