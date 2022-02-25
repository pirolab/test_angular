import { Component } from "@angular/core";

@Component({
  selector: 'footerComponent',
  templateUrl:'./footer.component.html',
  styleUrls : ['./footer.component.scss'],

})
 export class FooterComponent {
  public title;

  constructor(){
    this.title = 'my new component Header';
  }
}
