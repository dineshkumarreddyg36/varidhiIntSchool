import { Component } from '@angular/core';

@Component({
  selector: 'app-awards-achievements',
  templateUrl: './awards-achievements.component.html',
  styleUrls: ['./awards-achievements.component.css']
})
export class AwardsAchievementsComponent {
  awardsAndAchievementsImages:any[]=[
    {
      imgPath: '../../assets/a-a-1.jpg'
    },
    {
      imgPath: '../../assets/a-a-2.jpg'
    },
    {
      imgPath: '../../assets/a-a-3.jpg'
    }
  ]
}
