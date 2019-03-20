import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, } from '@angular/animations';
import { TooltipModule } from 'primeng/tooltip';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  animations: [
    trigger('openClose', [
      state('large', style({
        width: '10%',
        opacity: .5,
      })),
      state('small', style({
        // width: '5%',
        opacity: 1,
      })),
      transition('large => small', [
        animate('1.5s')
      ]),
      transition('small => large', [
        animate('1.5s')
      ]),
    ])
  ],
})

export class HomeComponent implements OnInit {
  showPopup = false;
  showSide = false;
  showSkills = false;
  isChange = false;
  hideLoading = false;
  openAbout = false;
  togleAbout = false;
  togleWorks = false;
  openWorks = false;
  openResume = false;
  togleResume = false;
  openContact = false;
  togleContact = false;
  confident: number;
  yetToMaster: number;
  menuStyleChangeTogle = false;
  menuStyleChangeOpen = false;
  whatsappPopup = false;
  gmailPopup = false;
  phonePopup = false;
  pieData = [
    {
      'name': 'Confident',
      'value': 80
    },
    {
      'name': 'Yet To Master',
      'value': 20
    }
  ];
  colorScheme = {
    domain: ['#E93040', '#4C4C4C']
  };
  skillTool =  'Adobe Photoshop';
  view = [1000, 400];
  constructor() { }

  ngOnInit() {
    setTimeout(() => { this.hideLoading = true; }, 30);
  }
  skillClick(event) {
    this.skillTool = event.target.innerText;
    this.colorScheme.domain = ['#0aa1ff', '#F48024'];
    console.log('skill Clicked : ', event);
    if (event.target.innerText === 'HTML') {
      this.confident = 80;
      this.yetToMaster = 20;
    } else if (event.target.innerText === 'LESS') {
      this.confident = 75;
      this.yetToMaster = 25;
    } else if (event.target.innerText === 'CSS') {
      this.confident = 80;
      this.yetToMaster = 20;
    } else if (event.target.innerText === 'Bootstrap') {
      this.confident = 60;
      this.yetToMaster = 40;
    } else if (event.target.innerText === 'Angular 4') {
      this.confident = 75;
      this.yetToMaster = 25;
    } else if (event.target.innerText === 'TypeScript') {
      this.confident = 60;
      this.yetToMaster = 40;
    } else if (event.target.innerText === 'C++') {
      this.confident = 65;
      this.yetToMaster = 45;
    } else if (event.target.innerText === 'Java') {
      this.confident = 50;
      this.yetToMaster = 50;
    }
    this.setPieData();
  }
  toolClick(event) {
    this.skillTool = event.target.innerText;
    this.colorScheme.domain = ['#E93040', '#4C4C4C'];
    console.log('skill Clicked : ', event);
    if (event.target.innerText === 'Adobe Photoshop') {
      this.confident = 80;
      this.yetToMaster = 20;
    } else if (event.target.innerText === 'Adobe Illustrator') {
      this.confident = 70;
      this.yetToMaster = 30;
    } else if (event.target.innerText === 'Adobe InDesign') {
      this.confident = 60;
      this.yetToMaster = 40;
    } else if (event.target.innerText === 'Adobe Dreamweaver') {
      this.confident = 50;
      this.yetToMaster = 50;
    } else if (event.target.innerText === 'Visual Studio Code') {
      this.confident = 85;
      this.yetToMaster = 15;
    } else if (event.target.innerText === 'Eclipse') {
      this.confident = 60;
      this.yetToMaster = 40;
    } else if (event.target.innerText === 'SketchUp') {
      this.confident = 50;
      this.yetToMaster = 50;
    } else if (event.target.innerText === 'MS Office') {
      this.confident = 80;
      this.yetToMaster = 20;
    } else if (event.target.innerText === 'HitFilm') {
      this.confident = 50;
      this.yetToMaster = 50;
    } else if (event.target.innerText === 'AVS Video Editor') {
      this.confident = 65;
      this.yetToMaster = 45;
    }
    this.setPieData();
  }
  setPieData() {
    this.pieData = [
      {
        'name': 'Confident',
        'value': this.confident
      },
      {
        'name': 'Yet to Master',
        'value': this.yetToMaster
      }
    ];
  }
  closeSkills() {
    this.showSkills = false;
  }
  showSkillsContainer() {
    this.showSkills = true;
    console.log('Clicked bg :', this.showSkills);
  }
  removeAllDiv(name) {
    if (name === 'about') {
      this.togleWorks = false;
      this.openWorks = false;
      this.togleResume = false;
      this.openResume = false;
      this.openContact = false;
      this.togleContact = false;
      this.menuStyleChangeTogle = false;
      this.menuStyleChangeOpen = false;
      this.isChange = false;
    } else if (name === 'works') {
      this.openAbout = false;
      this.togleAbout = false;
      this.togleResume = false;
      this.openResume = false;
      this.openContact = false;
      this.togleContact = false;
      this.menuStyleChangeTogle = false;
      this.menuStyleChangeOpen = false;
      this.isChange = false;
    } else if (name === 'resume') {
      this.openAbout = false;
      this.togleAbout = false;
      this.togleWorks = false;
      this.openWorks = false;
      this.openContact = false;
      this.togleContact = false;
      this.menuStyleChangeTogle = false;
      this.menuStyleChangeOpen = false;
      this.isChange = false;
    } else if (name === 'contact') {
      this.togleWorks = false;
      this.openWorks = false;
      this.togleResume = false;
      this.openResume = false;
      this.openAbout = false;
      this.togleAbout = false;
    }
  }
  openCheck() {
    if (this.openAbout || this.openContact || this.openWorks || this.openResume) {
      return false;
    }
  }

  togleAboutTab() {
    this.removeAllDiv('about');
    this.openAbout = !this.openAbout;
  }
  openAboutTab() {
    this.removeAllDiv('about');
    this.togleAbout = !this.togleAbout;
  }
  togleWorksTab() {
    this.removeAllDiv('works');
    this.openWorks = !this.openWorks;
  }
  openWorksTab() {
    this.removeAllDiv('works');
    this.togleWorks = !this.togleWorks;
    this.isChange = true;
  }
  openResumeTab() {
    this.removeAllDiv('resume');
    this.openResume = !this.openResume;
  }
  togleResumeTab() {
    this.removeAllDiv('resume');
    this.togleResume = !this.togleResume;
  }
  togleContactTab() {
    this.removeAllDiv('contact');
    this.togleContact = !this.togleContact;
    if (this.togleContact === true) {
      this.menuStyleChangeOpen = true;
      if (this.openContact === false) {
        this.isChange = true;
      }
      console.log('sree =======>>>>>>> true menuStyleChangeOpen : ', this.menuStyleChangeOpen);
    } else if (this.openContact === false) {
      this.menuStyleChangeOpen = false;
      this.isChange = false;
      console.log('sree =======>>>>>>> false menuStyleChangeOpen : ', this.menuStyleChangeOpen);
    }
  }
  openContactTab() {
    this.removeAllDiv('contact');
    this.openContact = !this.openContact;
    if (this.openContact === true) {
      this.menuStyleChangeOpen = true;
      // this.isChange = false;
      console.log('sree =======>>>>>>> true menuStyleChangeOpen : ', this.menuStyleChangeOpen);
    } else {
      this.menuStyleChangeOpen = false;
      console.log('sree =======>>>>>>> false menuStyleChangeOpen : ', this.menuStyleChangeOpen);
    }
  }

  showSideNav() {
    this.showSide = !this.showSide;
  }
  closeSideNav() {
    this.showSide = false;
  }
  showContactPopup(item) {
    this.showPopup = true;
    if (item === 'whatsapp') {
      this.whatsappPopup = true;
      this.gmailPopup = false;
      this.phonePopup = false;
    } else if (item === 'gmail') {
      this.whatsappPopup = false;
      this.gmailPopup = true;
      this.phonePopup = false;
    } else if (item === 'phone') {
      this.whatsappPopup = false;
      this.gmailPopup = false;
      this.phonePopup = true;
    }
  }

  copy(text) {
  }
}
