import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-live-match-info',
  templateUrl: './live-match-info.page.html',
  styleUrls: ['./live-match-info.page.scss'],
})
export class LiveMatchInfoPage implements OnInit {
 segment = 0;  
 @ViewChild('slides', { static: true }) slider: IonSlides;
  constructor() { }

  ngOnInit() {
  }

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  } 
    
}
