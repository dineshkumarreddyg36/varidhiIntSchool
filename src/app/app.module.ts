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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    AdmissionsComponent,
    AwardsAchievementsComponent,
    SocialActivitiesComponent,
    GalleryComponent,
    ContactUsComponent,
    AboutSchoolComponent,
    OurFounderComponent,
    InfrastructureComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
