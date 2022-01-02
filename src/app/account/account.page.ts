import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { APP_CONFIG, AppConfig } from '../app.config';
import { BuyappalertPage } from '../buyappalert/buyappalert.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(private route: Router, private modalController: ModalController, @Inject(APP_CONFIG) public config: AppConfig,) { }

  ngOnInit() {
  }

 my_profile(){ 
     this.route.navigate(['./my-profile']);   
   }  
 my_points(){ 
     this.route.navigate(['./my-points']);   
   }  
 leaderboard(){ 
     this.route.navigate(['./leaderboard']);   
   } 
 about_us(){ 
     this.route.navigate(['./about-us']);   
   }  
 support(){ 
     this.route.navigate(['./support']);   
   }  
 privacy_policy(){ 
     this.route.navigate(['./privacy-policy']);   
   }  
 language(){ 
     this.route.navigate(['./language']);   
   }  
 faqs(){ 
     this.route.navigate(['./faqs']);   
   } 

  buyappalert() {
    this.modalController.create({ component: BuyappalertPage }).then((modalElement) => modalElement.present());
  }    
 developed_by() {
    window.open("https://opuslab.works/", '_system', 'location=no');
  }      
}
