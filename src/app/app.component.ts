import { Component, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [animate('1s ease-in')]),
    ])
  ]
})
export class AppComponent {
  title = 'portfolio';

  scrollAnimationState: boolean = false;

  constructor() {
    
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    // You'd check the position of your element and set `scrollAnimationState` to true if it's in view.
    // For demonstration, let's say it's always true when scrolling
    this.scrollAnimationState = true;
  }
}
