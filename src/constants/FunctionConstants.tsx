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

const watchForHover = () => {
    let hasHoverClass = false;
    let container = document.body;
    let lastTouchTime = 0;

    const enableHover = () => {
        // filter emulated events coming from touch events
        if (new Date().valueOf() - lastTouchTime < 500) return;
        if (hasHoverClass) return;

        container.className += ' hasHover';
        hasHoverClass = true;
    }

    const disableHover = () => {
        if (!hasHoverClass) return;

        container.className = container.className.replace(' hasHover', '');
        hasHoverClass = false;
    }

    const updateLastTouchTime = () => {
        lastTouchTime = new Date().valueOf();
    }

    document.addEventListener('touchstart', updateLastTouchTime, true);
    document.addEventListener('touchstart', disableHover, true);
    document.addEventListener('mousemove', enableHover, true);

    enableHover();
}

export {isElementVisible, scrollToComponent, scrolledUp, watchForHover};