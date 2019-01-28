const isObject = (val: any) =>
  !Array.isArray(val) && val !== null && typeof val === 'object';

export const hasChildren = ({ children }) => {
  return Array.isArray(children);
};

export const hasAttributes = (
  attrs: NamedNodeMap,
  requiredAttrs: string[] = []
) => isObject(attrs) && requiredAttrs.every(val => !!attrs.getNamedItem(val));

export const isTextNode = node => node instanceof Text;

export const isElement = (val: any) => val instanceof HTMLElement;

export const isElementArray = (val: any) =>
  Array.isArray(val) && val.every(isElement);
