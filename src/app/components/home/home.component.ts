import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public checkboxForm: FormGroup;

  public items: Array<any> = [
    {'id': '1', 'dsc': 'Teste 1'},
    {'id': '2', 'dsc': 'Teste 2'},
    {'id': '3', 'dsc': 'Teste 3'},
    {'id': '4', 'dsc': 'Teste 4'},
    {'id': '5', 'dsc': 'Teste 5'}
  ];

  public selectedItems: Array<any> = [];


  constructor(public router: Router,
    public formBuilder: FormBuilder) { }

  ngOnInit() {

    this.initForms();
  }

  onChange(item:string, isChecked: boolean) {

    if(isChecked) {
      this.selectedItems.push(item);
    } else {
      let index = this.selectedItems.indexOf(item);
      this.selectedItems.splice(index, 1);
    }

  }

  clear() {
    this.selectedItems = [];
    this.checkboxForm.reset();
  }

  initForms() {

    this.checkboxForm = this.formBuilder.group({

      item: this.selectedItems

    });

  }

  onSubmit() {

    console.log(this.selectedItems);

  }

  openLink()
  {
    let extras:NavigationExtras = {
      state: {
        teste: 'um',
        variable: 'teste variavel'
      }
    }

    this.router.navigate(['/teste'], extras);
  }

}
