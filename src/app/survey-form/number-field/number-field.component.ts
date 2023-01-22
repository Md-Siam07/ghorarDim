import { NgForm } from '@angular/forms';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import { MatDrawer } from '@angular/material/sidenav';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-number-field',
  templateUrl: './number-field.component.html',
  styleUrls: ['./number-field.component.css']
})
export class NumberFieldComponent implements OnInit {
  panelOpenState = false;
  formClicked = false;
  isSideBarOpen = false;
  @Input() fieldName: string = '';
  @Input() index!: number;
  @ViewChild('drawer') drawer!: MatDrawer;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { 
    //iconRegistry.addSvgIconLiteral('thumbs-up', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON));
  }
  
  ngOnInit(): void {
   // this.drawer.openedChange.subscribe((o: boolean) => { console.log(`IsOpen: ${o}`) });
  }

  toggle(){
    //console.log('clicked')
    this.panelOpenState = !this.panelOpenState;
  }

  showSideNav(){
    console.log('called')
    this.drawer.open();
  }

  closeSideNav(){
    this.drawer.close();
  }

  showForm(){
    this.formClicked = true;
  }

  hideForm() {
    this.formClicked = false;
    this.toggle();
  }

  onSubmit(form: any){
    console.log(form)
  }

}
