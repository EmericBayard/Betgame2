import { Component } from '@angular/core';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage'
 
// import { WebView } from '@ionic-native/ionic-webview/ngx';
// import { AlertController } from '@ionic/angular';
// import { Camera } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor( /*private camera: Camera*/) {}

  imgURL;





  async addNewToGallery() {
    // this.camera.getPicture({
    //   sourceType: this.camera.PictureSourceType.CAMERA,
    //   destinationType: this.camera.DestinationType.DATA_URL
    // }).then( (res) => {
    //   this.imgURL = res;
    // }).catch( e => {
    //   console.log(e);
    // })
  }

 

}