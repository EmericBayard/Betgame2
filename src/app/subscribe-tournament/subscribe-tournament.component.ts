import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-subscribe-tournament',
  templateUrl: './subscribe-tournament.component.html',
  styleUrls: ['./subscribe-tournament.component.scss'],
})
export class SubscribeTournamentComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss();
  } 
}
