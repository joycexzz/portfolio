import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
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

  @ViewChild('cardsContainer') cardsContainer!: ElementRef<HTMLDivElement>;
  title = 'portfolio';
  scrollAnimationState: boolean = false;

  currentCardIndex = 0;
 

  cards = [
    {
      title: 'WayBetter',
      copy: 'All-in-one journey planner app designed to inspire widespread public transport usage.WayBetter boasts an innovative chatbot feature that simplifies journey planning and offers personalised recommendations based on user personas ',
      button: 'Read Case Study',
      imageId: 'assets/WayBetter.png'
    },
    {
      title: 'OmniLearn',
      copy: 'An educational app tailored for both students and professors, accommodating diverse learning and teaching styles. The primary goal is to serve a wide spectrum of learners and educators by offering an array of features, including a micro-modular approach, engaging coding challenges and an inclusive discussion forum.',
      button: 'View More',
      imageId: 'assets/ommilearn.png'
    },
    {
      title: 'StoryBuddy',
      copy: 'StoryBuddy is an advanced AI-powered content generation tool that leverages the art of storytelling to produce high-quality written content. It is designed to assist users in creating engaging and compelling narratives, making it particularly useful in branding and content marketing efforts. ',
      button: 'Visit Website',
      imageId: 'assets/StoryBuddy.jpg'
    },
    {
      title: 'Thankslen',
      copy: 'Never stress over last-minute gifts to give your family and friends. Thanks, Len! is a gift reminder and recommendation service that helps you turn special occasions into lasting memories',
      button: 'View More',
      imageId: 'assets/Thankslen.png'
    },
    {
      title: 'Machine Learning',
      copy: 'This machine learning model is catered for Hosts(especially new host) to predict a price estimation for their AirBnB listing based on some features like city, property type etc',
      button: 'View More',
      button2: "Watch Demo",
      imageId: 'assets/MachineLearning.svg'
    },
    {
      title: 'Data Visualisation(Terrorism)',
      copy: 'How many fatalities from terrorism attack and how it changed over time.',
      button: 'View More',
      imageId: 'assets/DAVS.png'
    },
    {
      title: 'PawFriends',
      copy: 'PawFriends is a platform where users especially animal lovers can use to sponsor or donate to help keep the animal shelter running. One unique feature that this website offers are selling pet care products and merchandise to achieve a more sustainable living.',
      button: 'View More',
      button2:"Watch Demo",
      imageId: 'assets/PawFriends.svg'
    },
    {
      title: 'Tishoes (Mobile App)',
      copy: 'Tishoes is an e-commerce Mobile App that sells customised Branded Sneakers.Sellers are able to put their design up for sale and buyers are able to purchase customised sneakers from these sellers.',
      button: 'View More',
      button2:"Watch Demo",
      imageId: 'assets/Tishoes_Mobile.svg'
    },
    {
      title: 'Tishoes (Website)',
      copy: 'Tishoes is an e-commerce Website that sells customised Branded Sneakers.Sellers are able to put their design up for sale and buyers are able to purchase customised sneakers from these sellers. ',
      button: 'View More',
      button2: "Watch Demo",
      imageId: 'assets/Tishoes_Web.svg'
    },
  ]


  constructor() {
  }

  prevCard() {
    this.currentCardIndex = (this.currentCardIndex > 0) ? this.currentCardIndex - 1 : this.cards.length - 1;
    this.scrollToCard();
  }

  nextCard() {
    this.currentCardIndex = (this.currentCardIndex < this.cards.length - 1) ? this.currentCardIndex + 1 : 0;
    this.scrollToCard();
  }

  scrollToCard() {
    const scrollX = this.currentCardIndex * this.cardsContainer.nativeElement.children[0].clientWidth;
    this.cardsContainer.nativeElement.scroll({
      left: scrollX,
      behavior: 'smooth'
    });
  }

  watchDemo(index: number) {
    // Handle the watch demo action here, for example:
    console.log('Watching demo for card index:', index);
  }
  
  showMore(index: number ){
    //
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    // You'd check the position of your element and set `scrollAnimationState` to true if it's in view.
    // For demonstration, let's say it's always true when scrolling
    this.scrollAnimationState = true;
  }
}

