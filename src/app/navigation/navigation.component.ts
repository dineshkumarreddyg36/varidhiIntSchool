import { Component, HostListener, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent {

  mouseEnter:boolean=false;

  activeLink:string = "home";
  constructor(private renderer: Renderer2, public router:Router) { }
  isScrolledDown:boolean=false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY != 0) {
      this.renderer.addClass(document.querySelector('.navbar'), 'scroll-bar');
      this.isScrolledDown=true;
    } else {
      this.renderer.removeClass(document.querySelector('.navbar'), 'scroll-bar');
      this.isScrolledDown=false;
    }
  }
  @HostListener('onmouseenter') onMouseEnter() {
    this.renderer.addClass(document.querySelector('.dropdown-toggle'), 'show');
    console.log("Mouse Entered")
  }

  @HostListener('onmouseleave') onMouseLeave() {
    this.renderer.removeClass(document.querySelector('.dropdown-toggle'), 'show');
  }
}
