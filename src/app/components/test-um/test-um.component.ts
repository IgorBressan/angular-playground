import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-um',
  templateUrl: './test-um.component.html',
  styleUrls: ['./test-um.component.scss']
})
export class TestUmComponent implements OnInit {

  constructor(public router: Router)
  {
    this.initData();
  }

  ngOnInit()
  {
    
  }

  initData()
  {
    let params = this.router.getCurrentNavigation().extras;

    console.log(params.state);
  }

  teste(data) {
    console.log(data);
  }
}
