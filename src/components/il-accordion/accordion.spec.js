import { test, expect } from '@playwright/test';
const AxeBuilder = require('@axe-core/playwright').default;

test.use({ viewport: { width: 1200, height: 800 }});
