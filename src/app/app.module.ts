import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { AwardsAchievementsComponent } from './awards-achievements/awards-achievements.component';
import { SocialActivitiesComponent } from './social-activities/social-activities.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutSchoolComponent } from './about-school/about-school.component';
import { OurFounderComponent } from './our-founder/our-founder.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollBarComponent } from './scroll-bar/scroll-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdmissionFormComponent } from './admission-form/admission-form.component';
import{MatDialogModule} from  '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    AwardsAchievementsComponent,
    SocialActivitiesComponent,
    GalleryComponent,
    ContactUsComponent,
    AboutSchoolComponent,
    OurFounderComponent,
    InfrastructureComponent,
    FooterComponent,
    ScrollBarComponent,
    AdmissionsComponent,
    AdmissionFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ],
  bootstrap: [AppComponent],
  exports: [
    MatFormFieldModule,
    ScrollBarComponent,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppModule { }
