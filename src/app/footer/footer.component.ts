import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor (private renderer: Renderer2){}
  @HostListener('window:scroll', [])
  onWindowScroll(){
    if (window.scrollY >500) {
      this.renderer.addClass(document.querySelector('#backtotop'), 'active');
    } else {
      this.renderer.removeClass(document.querySelector('#backtotop'), 'active');
    }
  }

  scrollToTop(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
