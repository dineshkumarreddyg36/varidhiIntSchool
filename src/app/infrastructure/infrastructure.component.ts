import { Component } from '@angular/core';

@Component({
  selector: 'app-infrastructure',
  templateUrl: './infrastructure.component.html',
  styleUrls: ['./infrastructure.component.css']
})
export class InfrastructureComponent {

  infrastructureImages:any[]=[
    {
      imgPath: '../../assets/i-1.jpg'
    },
    {
      imgPath: '../../assets/i-2.jpg'
    },
    {
      imgPath: '../../assets/i-3.jpg'
    },
    {
      imgPath: '../../assets/i-4.jpg'
    },
    {
      imgPath: '../../assets/i-5.jpg'
    },
    {
      imgPath: '../../assets/i-6.jpg'
    },
    {
      imgPath: '../../assets/i-7.jpg'
    }
  ];


}
