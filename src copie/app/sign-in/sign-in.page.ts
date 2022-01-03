import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryCodePage } from '../country-code/country-code.page';
import { ModalController } from '@ionic/angular';
 declare var anime: any; 
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  constructor(private route: Router, private modalController: ModalController) { }

  ngOnInit() {
  }


 register(){ 
     this.route.navigate(['./register']);   
   } 
 verification(){ 
     this.route.navigate(['./verification']);   
   } 
  country_code() {
    this.modalController.create({ component: CountryCodePage }).then((modalElement) => modalElement.present());
  }
     
  ngAfterViewInit(): void { 
   anime.timeline({loop: false})
  .add({
    targets: '.logo .logo_img',
    delay: (el, i) => 1000 * i,
    scale: [50,1],
    opacity: [0,1],
    duration:  1500, 
    easing: "easeOutExpo", 
  })
  }
}
