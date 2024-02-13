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
      viewMoreURL:"assets/WayBetter Case Study.pdf",
      imageId: 'assets/WayBetter.png'
    },
    {
      title: 'OmniLearn',
      copy: 'An educational app tailored for both students and professors, accommodating diverse learning and teaching styles. The primary goal is to serve a wide spectrum of learners and educators by offering an array of features, including a micro-modular approach, engaging coding challenges and an inclusive discussion forum.',
      button: 'View More',
      viewMoreURL:"assets/OmniLearn-HCI-Report.pdf",
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
      viewMoreURL:"assets/MachineLearning-Airbnb.pdf",
      button2: "Watch Demo",
      demoURL:"https://www.youtube.com/watch?v=x2GqVLBs2Ho&t=1s",
      imageId: 'assets/MachineLearning.svg'
    },
    {
      title: 'Data Visualisation(Terrorism)',
      copy: 'How many fatalities from terrorism attack and how it changed over time.',
      button: 'View More',
      viewMoreURL:"assets/DAVS_Terrorism.pdf",
      imageId: 'assets/DAVS.png'
    },
    {
      title: 'Data Mining and Business Analytics',
      copy: 'survey about what people value in life. It contributes to a better understanding of what people all over the world believe and want out of life.',
      button: 'View More',
      viewMoreURL:"assets/DMBA.pdf",
      imageId: 'assets/DMBA.png'
    },
    {
      title: 'PawFriends',
      copy: 'PawFriends is a platform where users especially animal lovers can use to sponsor or donate to help keep the animal shelter running. One unique feature that this website offers are selling pet care products and merchandise to achieve a more sustainable living.',
      button: 'View More',
      viewMoreURL:"assets/MCSV-PawFriends.pdf",
      button2:"Watch Demo",
      imageId: 'assets/PawFriends.svg'
    },
    {
      title: 'Tishoes (Mobile App)',
      copy: 'Tishoes is an e-commerce Mobile App that sells customised Branded Sneakers.Sellers are able to put their design up for sale and buyers are able to purchase customised sneakers from these sellers.',
      button: 'View More',
      viewMoreURL:"assets/MBAP Final Presentation.pdf",
      button2:"Watch Demo",
      demoURL : "https://www.youtube.com/watch?v=vvXKCHXJEjQ",
      imageId: 'assets/Tishoes_Mobile.svg'
    },
    {
      title: 'Tishoes (Website)',
      copy: 'Tishoes is an e-commerce Website that sells customised Branded Sneakers.Sellers are able to put their design up for sale and buyers are able to purchase customised sneakers from these sellers. ',
      button: 'View More',
      viewMoreURL:"assets/FWEB-Tishoes.pdf",
      button2: "Watch Demo",
      demoURL:"https://www.youtube.com/watch?v=Xc-7UvElM9c",
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

  watchDemo(url?: string) {
    if (url) {
      window.open(url, "_blank");
    } else {
      // Handle the case where there is no URL, e.g., show an error or do nothing
      console.error("No demo URL provided.");
    }
  }
  
  toggleMenu(): void {
    const navbarLinks = document.getElementById('navbarLinks') as HTMLElement;
    const overlay = document.querySelector('.overlay') as HTMLElement;
    navbarLinks.classList.toggle('active');
    overlay.classList.toggle('active');
}

openViewMore(url?: string) {
  if (url) {
    window.open(url, "_blank");
  } else {
    console.error("No URL provided for View More action.");
    // Handle the case where no URL is provided or perform a default action
  }
}




  

  showMore(index: number ){
    //
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    this.scrollAnimationState = true;
  }
}

