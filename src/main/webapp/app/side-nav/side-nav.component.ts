import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor() { }
  @Input() maintenanceFlag;
  @Input() refDataFlag;
  @Output() out = new EventEmitter();

  ngOnInit() {
  }

  bodyFunction(e) {

    this.out.emit(e);
  } 
}
