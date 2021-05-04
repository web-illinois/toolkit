const Alignment = require('./alignment');

test("default alignment is center/center", () => {
    const align = new Alignment();
    expect(align.x).toBe('center');
    expect(align.y).toBe('center');
});

test("default left alignment is left/center", () => {
    const align = new Alignment('left');
    expect(align.x).toBe('left');
    expect(align.y).toBe('center');
});

test("default center alignment is center/center", () => {
    const align = new Alignment('center');
    expect(align.x).toBe('center');
    expect(align.y).toBe('center');
});

test("default right alignment is right/center", () => {
    const align = new Alignment('right');
    expect(align.x).toBe('right');
    expect(align.y).toBe('center');
});

test("default top alignment is center/top", () => {
    const align = new Alignment('top');
    expect(align.x).toBe('center');
    expect(align.y).toBe('top');
});

test("default bottom alignment is center/bottom", () => {
    const align = new Alignment('bottom');
    expect(align.x).toBe('center');
    expect(align.y).toBe('bottom');
});

test("top left alignment", () => {
    const align = new Alignment('top left');
    expect(align.x).toBe('left');
    expect(align.y).toBe('top');
});

test("top center alignment", () => {
    const align = new Alignment('top center');
    expect(align.x).toBe('center');
    expect(align.y).toBe('top');
});

test("top right alignment", () => {
    const align = new Alignment('top right');
    expect(align.x).toBe('right');
    expect(align.y).toBe('top');
});

test("center left alignment", () => {
    const align = new Alignment('center left');
    expect(align.x).toBe('left');
    expect(align.y).toBe('center');
});

test("center center alignment", () => {
    const align = new Alignment('center center');
    expect(align.x).toBe('center');
    expect(align.y).toBe('center');
});

test("center right alignment", () => {
    const align = new Alignment('center right');
    expect(align.x).toBe('right');
    expect(align.y).toBe('center');
});

test("bottom left alignment", () => {
    const align = new Alignment('bottom left');
    expect(align.x).toBe('left');
    expect(align.y).toBe('bottom');
});

test("bottom center alignment", () => {
    const align = new Alignment('bottom center');
    expect(align.x).toBe('center');
    expect(align.y).toBe('bottom');
});

test("bottom right alignment", () => {
    const align = new Alignment('bottom right');
    expect(align.x).toBe('right');
    expect(align.y).toBe('bottom');
});
