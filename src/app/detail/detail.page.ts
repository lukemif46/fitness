import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  drillId;
  drillName;
  constructor(
    private route: ActivatedRoute
  ) { 
    this.drillId = this.route.snapshot.paramMap.get('id');
    this.drillName = this.route.snapshot.paramMap.get('title');
  }


  ngOnInit() {
  }

}
