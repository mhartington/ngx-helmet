import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { NgxHelmetService } from './util/ngx-helmet.service';

@Component({
  selector: 'ngx-helmet',
  template: `
    <ng-content></ng-content>
  `,
  styles: []
})
export class NgxHelmetComponent implements AfterViewInit {
  constructor(private el: ElementRef, private service: NgxHelmetService) {}

  ngAfterViewInit() {
    this.service.setHeader(this.el.nativeElement.children);
  }
}
