import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-number-form',
  templateUrl: './number-form.component.html',
  styleUrls: ['./number-form.component.css']
})
export class NumberFormComponent implements OnInit {

  panelOpenState = false;
  formClicked = false;
  isSideBarOpen = false;
  disabled = false;
  required = false;
  final = false;
  minValue : null|number = null;
  maxValue : null|number = null;
  @Input() fieldName: string = '';
  @Input() index!: number;
  @ViewChild('drawer') drawer!: MatDrawer;
  
  constructor() { }

  ngOnInit(): void {
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
    this.hideForm();
  }

  onSubmit(form: any) {

  }

}
