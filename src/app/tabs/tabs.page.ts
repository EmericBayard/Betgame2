import { Component } from '@angular/core';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage'
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';  
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private camera: Camera, private webview: WebView, private alertCtrl: AlertController) {}

  cameraOptions: CameraOptions = {
    quality: 100,
    allowEdit: true,
    correctOrientation: true,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }  

  galleryOptions: CameraOptions = {
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: this.camera.DestinationType.FILE_URI,
    quality: 100,
    allowEdit:true,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true
  }

  photo:any;



  async addNewToGallery() {
    console.log('fun !');
    // let alertBox = await this.alertCtrl.create({
    //   header: 'Choose From',
    //   buttons: [
    //     {
    //       text: 'Camera',
    //       handler: () => {
    //         this.camera.getPicture(this.cameraOptions).then(res=>{
    //           console.log('response =', res);
    //           this.photo = res;
    //         })
    //       }
    //     }, 
    //     {
    //       text: 'Gallery',
    //       handler: () => {
    //          this.camera.getPicture(this.galleryOptions).then(res=>{
    //            console.log('response =', res);
    //            this.photo = res;
    //          })
    //       }
    //     },
    //   ]
    // })
    // await alertBox.present();
  }

 

}
