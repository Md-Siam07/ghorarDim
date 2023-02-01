import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.css']
})
export class ImageFormComponent implements OnInit {
  panelOpenState = false;
  formClicked = false;
  isSideBarOpen = false;
  disabled = false;
  required = false;
  final = false;
  minValue : null|number = null;
  maxValue : null|number = null;
  title : null|string = null;
  attribute: string = '';
  sizeRestricted = false;
  @Input() index!: number;
  @Input() formType!: string;
  @Input() fieldName!: string;
  @ViewChild('drawer') drawer!: MatDrawer;

  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;
  
  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  
  showForm(){
    this.final = false;
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
