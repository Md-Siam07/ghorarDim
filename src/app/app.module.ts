import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { NumberFieldComponent } from './survey-form/number-field/number-field.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { NumberFormComponent } from './survey-form/number-form/number-form.component';
import { SurveyFormModularizedComponent } from './survey-form-modularized/survey-form-modularized.component';
import { DateFormComponent } from './date-form/date-form.component';
import { NoteFormComponent } from './note-form/note-form.component';
import { VideoFormComponent } from './video-form/video-form.component';
import { ImageFormComponent } from './image-form/image-form.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { GeolocationFormComponent } from './geolocation-form/geolocation-form.component';
import { DropdownFormComponent } from './dropdown-form/dropdown-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyFormComponent,
    NumberFieldComponent,
    NumberFormComponent,
    SurveyFormModularizedComponent,
    DateFormComponent,
    NoteFormComponent,
    VideoFormComponent,
    ImageFormComponent,
    EmailFormComponent,
    GeolocationFormComponent,
    DropdownFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
