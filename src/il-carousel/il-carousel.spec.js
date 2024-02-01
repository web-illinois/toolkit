import { test } from '@playwright/test';

/*
test('has buttons to rewind and advance the carousel', () => {
  test.info().annotations.push({
    source: 'arrow-controls'
  });
  test.fail();
});

test('buttons with images should have alt attributes', () => {
  test.info().annotations.push({
    wcag: {
      criteria: '1.1.1',
      technique: 'H36'
    }
  });
  test.fail();
});

test('markup uses semantic elements to convey relationships', () => {
  test.info().annotations.push({
    wcag: {
      criteria: '1.3.1',
      technique: 'G115'
    }
  });
  test.fail();
});

test('slides are placed in correct sequence', () => {
  test.info().annotations.push({
    wcag: {
      criteria: '1.3.2',
      technique: 'C6'
    }
  });
  test.fail();
});

test('provides textual information for carousel images', () => {
  test.info().annotations.push({
    wcag: {
      criteria: '1.3.3',
      technique: 'G96'
    }
  });
  test.fail();
});

test('responds to changes in screen orientation', () => {
  test.info().annotations.push({
    wcag: {
      criteria: '1.3.4'
    }
  });
  test.fail();
});

test('color is used to indicated focus', () => {
  test.info().annotations.push({
    wcag: {
      criteria: '1.4.1',
      technique: 'C15'
    }
  });
  test.fail();
});

test('small text has correct color contrast', () => {
  test.info().annotations.push({
    wcag: {
      criteria: '1.4.3',
      technique: 'G18'
    }
  });
  test.fail();
});

test('big text has correct color contrast', () => {
  test.info().annotations.push({
    wcag: {
      criteria: '1.4.3',
      technique: 'G145'
    }
  });
  test.fail();
});

test('uses ems for text sizes', () => {
  test.info().annotations.push({
    wcag: {
      criteria: '1.4.4',
      technique: 'C14'
    }
  });
  test.fail();
});

test('text is responsive', () => {
  test.info().annotations.push({
    wcag: {
      criteria: '1.4.4',
      technique: 'G179'
    }
  });
  test.fail();
});

test('layout is responsive', () => {
  test.info().annotations.push({
    wcag: {
      criteria: '1.4.10',
      technique: 'C32'
    }
  });
  test.fail();
});

test('images is responsive', () => {
  test.info().annotations.push({
    wcag: {
      criteria: '1.4.10',
      technique: 'C37'
    }
  });
  test.fail();
});

test('icons have sufficient color contrast', () => {
  test.info().annotations.push({
    wcag: {
      criteria: '1.4.11',
      technique: 'G207'
    }
  });
  test.fail();
});

test('small text in graphics has sufficient color contrast', () => {
  test.info().annotations.push({
    wcag: {
      criteria: '1.4.11',
      technique: 'G18'
    }
  });
  test.fail();
});

test('large text in graphics has sufficient color contrast', () => {
  test.info().annotations.push({
    wcag: {
      criteria: '1.4.11',
      technique: 'G145'
    }
  });
  test.fail();
});

test('can be operated with the keyboard', () => {
  test.info().annotations.push({
    wcag: {
      criteria: '2.1.1',
      technique: 'G202'
    }
  });
  test.fail();
});

test('actions are keyboard accessible', () => {
  test.info().annotations.push({
    wcag: {
      criteria: '2.1.1',
      technique: 'SCR35'
    }
  });
  test.fail();
});

test('keyboard users can tab in and out of the component', () => {
  test.info().annotations.push({
    wcag: {
      criteria: '2.1.2',
      technique: 'G21'
    }
  });
  test.fail();
});

test('the carousel can be paused and restarted', () => {
  test.info().annotations.push({
    wcag: {
      criteria: ['2.2.1', '2.2.2'],
      technique: 'G4'
    }
  });
  test.fail();
});

test('autoplay can be disabled', () => {
  test.info().annotations.push({
    wcag: {
      criteria: '2.2.1',
      technique: 'G198'
    }
  });
  test.fail();
});

test('the component respects the reduce-motion CSS query', () => {
  test.info().annotations.push({
    wcag: {
      criteria: '2.3.3',
      technique: 'C39'
    }
  });
  test.fail();
});

test('the focus order matches the source order', () => {
  test.info().annotations.push({
    wcag: {
      criteria: '2.4.3',
      technique: 'G59'
    }
  });
  test.fail();
});

test('headings are descriptive', () => {
  test.info().annotations.push({
    wcag: {
      criteria: '2.4.6',
      technique: 'G130'
    }
  });
  test.fail();
});

test('labels are descriptive', () => {
  test.info().annotations.push({
    wcag: {
      criteria: '2.4.6',
      technique: 'G131'
    }
  });
  test.fail();
});

test('interface elements are highlighted when they receive focus', () => {
  test.info().annotations.push({
    wcag: {
      criteria: '2.4.7',
      technique: ['G149', 'C15', 'G195']
    }
  });
  test.fail();
});

test('component does not require path-based gestures', () => {
  test.info().annotations.push({
    wcag: {
      criteria: '2.5.1',
      technique: ['G215', 'G216']
    }
  });
  test.fail();
});



/*

- criteria: 2.5.1
  techniques: [G215, G216]

- criteria: 2.5.8
  techniques: [C42]

- criteria: 3.2.1
  techniques: [G107]

- criteria: 4.1.2
  techniques: [ARIA4, ARIA5, ARIA16]

 */