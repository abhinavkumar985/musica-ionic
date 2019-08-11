import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Media, MediaObject } from "@ionic-native/media";
/**
 * Generated class for the MusciPlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-musci-player",
  templateUrl: "musci-player.html"
})
export class MusciPlayerPage {
  public music: any = {};
  public file: MediaObject;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private media: Media
  ) {}

  ionViewDidLoad() {
    this.music = this.navParams.get("music");
    this.file = this.media.create(this.music.music_url);
  }
  play() {
    if (this.file !== null) {
      this.file.play();
    }
  }
  pause() {
    if (this.file !== null) {
      this.file.pause();
    }
  }
  stop() {
    if (this.file !== null) {
      this.file.pause();
    }
  }
}
