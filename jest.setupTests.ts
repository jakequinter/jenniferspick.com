// @ts-nocheck
import '@testing-library/jest-dom/extend-expect';

/* 
  - Used to resolve testing issues when using Radix Primitives
  - This is a workaround since testing environments aren't real browser/DOM
  - jest/jsdom doesn't have ResizeObserver
  - Github issue with more detail: https://github.com/radix-ui/primitives/issues/420#issuecomment-771615182
*/
global.ResizeObserver = class ResizeObserver {
  constructor(cb) {
    this.cb = cb;
  }
  observe() {
    this.cb([{ borderBoxSize: { inlineSize: 0, blockSize: 0 } }]);
  }
  unobserve() {}
};

global.DOMRect = {
  fromRect: () => ({ top: 0, left: 0, bottom: 0, right: 0, width: 0, height: 0 }),
};