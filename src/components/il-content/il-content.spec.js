import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const themes = ['gray', 'blue', 'white', 'blue-gradient', 'orange'];
const sizes = ['small', 'large'];

const desktop = { width: 1280, height: 1024 };
const mobile = { width: 375, height: 812 };

test.use({ viewport: { width: 1280, height: 1024 } });
