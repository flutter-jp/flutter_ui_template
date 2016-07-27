import { Component } from "@angular/core";
import { HomePage } from "../home/home";
import { AboutPage } from "../about/about";
import { ContactPage } from "../contact/contact";
import { UsePage } from "../use/use";

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private home: any;
  private concat: any;
  private use: any;
  private about: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.home = HomePage;
    this.concat = ContactPage;
    this.use = UsePage;
    this.about = AboutPage;
  }
}
