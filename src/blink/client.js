import { createClient } from '@blinkdotnew/sdk';

const blink = createClient({
  projectId: 'reliable-roofing-solutions-website-zqr94aeq',
  authRequired: false
});

export const namedBlink = blink;
export { blink as default };
export { blink };