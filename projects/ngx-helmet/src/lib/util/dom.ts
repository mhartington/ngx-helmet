import { isElement, isElementArray } from './util';

export const createElement = (node: Element) => {
  const element = document.createElement(node.tagName.toLowerCase());

  if (node.textContent) {
    element.textContent = node.textContent;
  }

  const attrs = Array.from(node.attributes);
  if (attrs.length > 0) {
    for (const attr of attrs) {
      if (attr.value) {
        element.setAttribute(attr.name, attr.value);
      }
    }
  }

  const children = Array.from(node.children);
  if (children) {
    for (const child of children) {
      element.appendChild(createElement(child));
    }
  }

  return element;
};

export const shouldApplyToHead = (val: any) => {
  return isElement(val) || (isElementArray(val) && val.length === 2);
};

export const applyToHead = (element: HTMLElement | HTMLElement[]) => {
  if (Array.isArray(element)) {
    return document.head.replaceChild.apply(document.head, element);
  }
  return document.head.appendChild(element);
};
