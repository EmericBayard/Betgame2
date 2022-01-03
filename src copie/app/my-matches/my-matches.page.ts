import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-matches',
  templateUrl: './my-matches.page.html',
  styleUrls: ['./my-matches.page.scss'],
})
export class MyMatchesPage implements OnInit {
 segment = 0;  
 @ViewChild('slides', { static: true }) slider: IonSlides;
  constructor(private modalController: ModalController, private route: Router) { }

  ngOnInit() {
  }

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }
  upcoming_match_info(){ 
     this.route.navigate(['./upcoming-match-info']);   
   }  
  live_match_info(){ 
     this.route.navigate(['./live-match-info']);   
   } 
  completed_match_info(){ 
     this.route.navigate(['./completed-match-info']);   
   }     
 
}
