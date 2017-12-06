import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cashCoreApp-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestComponent implements OnInit {

  constructor() { }

  variable1: string;
  ngOnInit() {
  }

  myFunction() {

    alert(this.variable1);
  }
}
