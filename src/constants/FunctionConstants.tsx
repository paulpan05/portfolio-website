import {topBarHeight} from '../constants/TopBarConstants';

const isElementVisible = (element: Element) => {
  let rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight;
}

const scrollToComponent = (ref: React.RefObject<any>) => {
  window.scrollTo(0, ref.current.offsetTop - topBarHeight);
}

const scrolledUp = (ref: React.RefObject<any>): boolean => {
  return window.pageYOffset < ref.current.offsetTop - topBarHeight;
}

export {isElementVisible, scrollToComponent, scrolledUp};