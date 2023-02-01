import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';
import { map, Observable, startWith } from 'rxjs';

interface IAttribute {
  attribute: string;
  options: Array<{
    option: string,
    val: string
  }>
}

@Component({
  selector: 'app-dropdown-form',
  templateUrl: './dropdown-form.component.html',
  styleUrls: ['./dropdown-form.component.css']
})
export class DropdownFormComponent implements OnInit {

  panelOpenState = false;
  formClicked = false;
  disabled = false;
  required = false;
  final = false;
  title : null|string = null;
  attribute: string = '';
  selectedAttribute!: IAttribute;
  selected = false;
  @Input() index!: number;
  @Input() formType!: string;
  @Input() fieldName!: string;
  @ViewChild('drawer') drawer!: MatDrawer;

  myControl = new FormControl('');
  //options: string[] = ['One', 'Two', 'Three'];
  attributes: IAttribute[] = [
    {
      attribute: "demo",
      options:[
        {
          option: "demo 1",
          val: "123"
        },
        {
          option: "demo 2",
          val: "123"
        }
      ]
    },
    {
      attribute: "not demo",
      options:[
        {
          option: "not demo 1",
          val: "123"
        },
        {
          option: "not demo 2",
          val: "123"
        }
      ]
    }
  ]
  filteredOptions!: Observable<IAttribute[]>;
  
  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): IAttribute[] {
    const filterValue = value.toLowerCase();
    return this.attributes.filter(e => e.attribute.toLowerCase().includes(filterValue));
  }

  updateMySelection(attr: IAttribute) {
    this.selected = true;
    this.selectedAttribute =  attr;
  }
  
  showForm(){
    this.formClicked = true;
  }

  hideForm() {
    this.formClicked = false;
  }

  hidePannel() {
    this.panelOpenState = false;
    console.log('called')
  }

  done(){
    this.final = true;
    this.attribute = this.myControl.value;
    this.hideForm();
  }

  onSubmit(form: any) {

  }

}
