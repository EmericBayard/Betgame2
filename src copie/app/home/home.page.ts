import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private modalController: ModalController, private route: Router) { }

  ngOnInit() {
  }

 contests(){ 
     this.route.navigate(['./contests']);   
   } 
}
