import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestDataService } from "app/rest-data.service";

@Component({
  selector: 'cashCoreApp-legal-entity',
  templateUrl: './legal-entity.component.html',
  styleUrls: ['./legal-entity.component.scss'],
  providers: [ RestDataService ],
  encapsulation: ViewEncapsulation.None
})
export class LegalEntityComponent implements OnInit {

  constructor(private restDataService: RestDataService) { 

  }

  @Input() legalEntityCreateFlag;

  entityCode: string;
  entityName: string;
  entityAddress1: string;

  postEntity() {

    let entities = {
        "code": this.entityCode,
        "name": this.entityName,
        "address1": this.entityAddress1
    };
    this.restDataService.post(entities);
  }

  ngOnInit() {
  }

}
