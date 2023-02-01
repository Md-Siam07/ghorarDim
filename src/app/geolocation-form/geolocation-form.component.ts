import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-geolocation-form',
  templateUrl: './geolocation-form.component.html',
  styleUrls: ['./geolocation-form.component.css']
})
export class GeolocationFormComponent implements OnInit {
  panelOpenState = false;
  formClicked = false;
  disabled = false;
  required = false;
  final = false;
  title : null|string = null;
  attribute: string = '';
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
