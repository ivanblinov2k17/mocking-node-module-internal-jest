export const waitForThemeLoad = jest.fn();
export const readThemeMarker = jest.fn();
export const isMaterial = jest.fn();
export const current= jest.fn(()=>{console.log("current")});
export default {waitForThemeLoad, readThemeMarker, current}