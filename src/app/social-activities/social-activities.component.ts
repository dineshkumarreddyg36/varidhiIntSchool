import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-social-activities',
  templateUrl: './social-activities.component.html',
  styleUrls: ['./social-activities.component.css']
})
export class SocialActivitiesComponent {

  socialActivityImages:any[]=[
    {
      imgPath: '../../assets/sa-4.jpg'
    },
    {
      imgPath: '../../assets/sa-5.jpg'
    },
    {
      imgPath: '../../assets/sa-6.jpg'
    },
    {
      imgPath: '../../assets/sa-7.jpg'
    },
    {
      imgPath: '../../assets/sa-8.jpg'
    },
    {
      imgPath: '../../assets/sa-9.jpg'
    },
    {
      imgPath: '../../assets/sa-10.jpg'
    },
    {
      imgPath: '../../assets/sa-11.jpg'
    },
    {
      imgPath: '../../assets/sa-12.jpg'
    },
    {
      imgPath: '../../assets/sa-13.jpg'
    },
    {
      imgPath: '../../assets/sa-14.jpg'
    },
    {
      imgPath: '../../assets/sa-15.jpg'
    }
  ]
  showAccountInfo:boolean=false;
  isClickedInside: boolean=false;
  @HostListener('click', ['$event'])
  onClick(event: MouseEvent){
    this.isClickedInside = this.isClickedInsideAccountInfo(event);
  }

  isClickedInsideAccountInfo(event: MouseEvent): boolean {
    const accountInfoElement = document.querySelector('.account-info');
    const buttonElement= document.querySelector('.btn-primary');
    if((event.target as Node).parentNode==buttonElement || (event.target as Node)==buttonElement){
      this.showAccountInfo=!this.showAccountInfo;
    }else{
      this.showAccountInfo=false;
    }
    if (accountInfoElement) {
      return (event.target as Node).parentNode==accountInfoElement;
    }
    return false;
  }
}
