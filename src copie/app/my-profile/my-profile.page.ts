import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {

  constructor(private alertController: AlertController, private navCtrl: NavController) { }

  ngOnInit() {
  }
  async logout() {
    const alert = await this.alertController.create({
      header: 'Logout',
      message: 'Are you sure you want to logout?',
      mode:'md',    
      cssClass: 'animate__animated animate__zoomIn',    
       buttons: [
        {
          text: 'No',
          role: 'cancel', 
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        },{
          text: 'Yes', 
          handler: () => {
             this.navCtrl.navigateRoot(['./sign-in']);
          }
        }
      ]    
    });

    await alert.present();
  }
}
