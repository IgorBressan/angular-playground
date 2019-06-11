import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test-in',
  templateUrl: './test-in.component.html',
  styleUrls: ['./test-in.component.scss']
})
export class TestInComponent implements OnInit {

  constructor() { }

  @Output() _teste = new EventEmitter();

  ngOnInit() {
  }

  teste(data) {
     this._teste.emit(data);
  }
}
