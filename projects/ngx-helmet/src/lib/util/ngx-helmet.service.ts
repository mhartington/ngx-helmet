import { Injectable } from '@angular/core';
import * as render from './render';
import { applyToHead} from './dom';
@Injectable({
  providedIn: 'root'
})
export class NgxHelmetService {
  constructor() {}
  setHeader(collection: HTMLCollection) {
    const children: Element[] = Array.from(collection);
    children
      .filter(this.isValidNode)
      .map(this.renderNode)
      .forEach(applyToHead);
  }
  isValidNode(el: Element) {
    const validTags = Object.keys(render);
    return validTags.indexOf(el.tagName.toLowerCase()) > -1;
  }
  renderNode(el: Element) {
    return render[el.tagName.toLowerCase()](el, document.head);
  }
}
