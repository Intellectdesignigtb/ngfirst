import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cashcore-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor() { }
  sideNavFlag: boolean;
  bodyFlag: boolean;
  maintenanceFlag: boolean;
  refDataFlag: boolean;
  legalEntityCreateFlag: boolean;

  ngOnInit() {
  }

  sideNav(event: Event) {

    if(event.srcElement.attributes.getNamedItem("id").value == "maintenance") {
      
      this.sideNavFlag = true;
      this.maintenanceFlag = true;
      this.refDataFlag = false;
      this.legalEntityCreateFlag = false;
      this.bodyFlag = false;
    }

    if(event.srcElement.attributes.getNamedItem("id").value == "refData") {
      
      this.sideNavFlag = true;
      this.maintenanceFlag = false;
      this.refDataFlag = true;
      this.legalEntityCreateFlag = false;
      this.bodyFlag = false;
    }
  }

  bodyFunction(event: Event) {

    if(event.srcElement.attributes.getNamedItem("id").value == "createNewLE") {

      this.legalEntityCreateFlag = true;
      this.sideNavFlag = true;
      this.maintenanceFlag = false;
      this.refDataFlag = true;
      this.bodyFlag = true;
    } else {

      this.legalEntityCreateFlag = false;
      this.sideNavFlag = true;
      this.maintenanceFlag = false;
      this.refDataFlag = true;
      this.bodyFlag = false;
    }
  }
}
