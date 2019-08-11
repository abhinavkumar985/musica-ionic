import { Component } from "@angular/core";
import {
  NavController,
  LoadingController,
  ActionSheetController
} from "ionic-angular";
import { MyMusicProvider } from "../../providers/my-music/my-music";
import { SocialSharing } from "@ionic-native/social-sharing";
import { MusciPlayerPage } from "../musci-player/musci-player";
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  public music = [];
  constructor(
    public navCtrl: NavController,
    private actionSheetCntrl: ActionSheetController,
    private musicProvider: MyMusicProvider,
    private loadingCntrl: LoadingController,
    private socialSharing: SocialSharing
  ) {}
  ionViewDidLoad() {
    let onMusicLoaded = this.loadingCntrl.create({
      content: "Getting your music !"
    });
    onMusicLoaded.present();
    this.musicProvider.getMusic().subscribe(
      (res: Array<any>) => {
        this.music = res;
        onMusicLoaded.dismiss();
      },
      err => {}
    );
  }
  addOneSong(refresher) {
    this.musicProvider.getOneSong().subscribe(one => {
      this.music.unshift(one[0]);
      refresher.complete();
    });
  }
  shareSong(song) {
    let action = this.actionSheetCntrl.create({
      title: "Share song with friends !",
      buttons: [
        {
          text: "Share on Facebook",
          icon: "logo-facebook",
          handler: () => {
            this.socialSharing.shareViaFacebook(song.name, song.image,song.music_url);
          }
        },
        { text: "Share on Twitter", icon: "logo-twitter" ,handler: () => {
          this.socialSharing.shareViaTwitter(song.name, song.image,song.music_url);
        }},
        { text: "Share", icon: "share" ,handler: () => {
          this.socialSharing.share(song.name, '',song.image,song.music_url);
        }},
        { text: "Cancel", role: "destructive" }
      ]
    });
    action.present();
  }
  gotoMusicPlayer(song){
    this.navCtrl.push(MusciPlayerPage,{music:song});
  }
}
