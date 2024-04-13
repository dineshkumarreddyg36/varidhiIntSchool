import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  galleryImages:any[]=[
    {
      imgPath: '../../assets/gallery-1.jpg'
    },
    {
      imgPath: '../../assets/gallery-2.jpg'
    },
    {
      imgPath: '../../assets/gallery-3.jpg'
    },
    {
      imgPath: '../../assets/gallery-4.jpg'
    },
    {
      imgPath: '../../assets/gallery-5.jpg'
    },
    {
      imgPath: '../../assets/gallery-6.jpg'
    },
    {
      imgPath: '../../assets/gallery-7.jpg'
    },
    {
      imgPath: '../../assets/gallery-8.jpg'
    },
    {
      imgPath: '../../assets/gallery-9.jpg'
    },
    {
      imgPath: '../../assets/gallery-10.jpg'
    },
    {
      imgPath: '../../assets/gallery-11.jpg'
    },
    {
      imgPath: '../../assets/gallery-12.jpg'
    }
  ];
}
