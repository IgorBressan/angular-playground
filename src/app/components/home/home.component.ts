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
  public allItems: boolean = false;


  constructor(public router: Router,
    public formBuilder: FormBuilder) { }

  ngOnInit() {

    this.initForms();
  }

  onChange(item:string, isChecked: boolean) {

    console.log('onChange', this.checkboxForm.value)

    if(isChecked) {
      this.selectedItems.push(item);
    } else {
      let index = this.selectedItems.indexOf(item);
      this.selectedItems.splice(index, 1);
      this.allItems = false;
      this.checkboxForm.controls['allItems'].setValue(false);
    }

  }

  clear() {
    this.selectedItems = [];
    this.checkboxForm.reset();
    this.allItems = false;
  }

  initForms() {

    this.checkboxForm = this.formBuilder.group({

      item: this.selectedItems,
      allItems: this.allItems

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

  checkAll() {

    if (!this.allItems) {

      this.checkboxForm.controls['item'].setValue(true);
  
      this.selectedItems = this.items.slice();

      this.allItems = true;

    } else {

      this.clear();

    }
    
  }


}
