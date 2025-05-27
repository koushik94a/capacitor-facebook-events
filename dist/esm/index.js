import { registerPlugin } from '@capacitor/core';
const FacebookEvents = registerPlugin('FacebookEvents', {
    web: () => import('./web').then(m => new m.FacebookEventsWeb()),
});
export * from './definitions';
export { FacebookEvents };
//# sourceMappingURL=index.js.map