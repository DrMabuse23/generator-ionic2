import {App, Platform} from 'ionic/ionic';
import {Page1} from './page1/page1';
import './app.scss';


@App({
  templateUrl: 'app/app.html'
})
export class MyApp {
  constructor(platform: Platform) {

    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = Page1;

    platform.ready().then(() => {
      // Do any necessary cordova or native calls here now that the platform is ready
      
    });
  }
}
