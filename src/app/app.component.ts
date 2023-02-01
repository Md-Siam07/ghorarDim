import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'surveyForm';
  fieldForNumber = ''
  formType = 'date';
  formType2 = 'number'
  fieldName: string = 'OBJECT ID';
}
