import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { AwardsAchievementsComponent } from './awards-achievements/awards-achievements.component';
import { SocialActivitiesComponent } from './social-activities/social-activities.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutSchoolComponent } from './about-school/about-school.component';
import { OurFounderComponent } from './our-founder/our-founder.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-school', component: AboutSchoolComponent },
  { path: 'admissions', component: AdmissionsComponent },
  { path: 'infrastructure', component: InfrastructureComponent },
  { path: 'awards', component: AwardsAchievementsComponent },
  { path: 'social', component: SocialActivitiesComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactUsComponent },
  {path: 'our-founder', component: OurFounderComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
