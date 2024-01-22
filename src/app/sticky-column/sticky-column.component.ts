import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-sticky-column',
  templateUrl: './sticky-column.component.html',
  styleUrls: ['./sticky-column.component.css', '../../../node_modules/lineicons/web-font/lineicons.css']
})
export class StickyColumnComponent {
  public navigation: any;

  ngOnInit(): void {
    this.navigation = document.querySelector(".primary-navigation");
    const navigationHeight = this.navigation.offsetHeight;
    document.documentElement.style.setProperty(
      "scroll-behavior", "smooth"
    );
  }
}
