const getComputedColorHex = (page, id) => {
    return page.evaluate((id) => {
        const hex = x => ("0" + parseInt(x).toString(16)).slice(-2);
        const rgb2hex = rgb => {
            rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
        }
        const swatch = document.getElementById(id);
        return rgb2hex(window.getComputedStyle(swatch).color);
    }, [id]);
}

describe('The color variables', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:8080/tests/colors/index.html');
    });
    
    // il-orange
    it('should have the correct value for il-orange', async () => {
        const color = await getComputedColorHex(page, 'il-orange');
        await expect(color).toMatch('#ff552e');
    });
    it('should have the correct value for il-altgeld', async () => {
        const color = await getComputedColorHex(page, 'il-altgeld');
        await expect(color).toMatch('#dd3403');
    });
    
    // il-blue
    it('should have the correct value for il-blue', async () => {
        const color = await getComputedColorHex(page, 'il-blue');
        await expect(color).toMatch('#13294b');
    });
    
    // il-alma-mater
    it('should have the correct value for il-alma-mater', async () => {
        const color = await getComputedColorHex(page, 'il-alma-mater');
        await expect(color).toMatch('#1e3877');
    });
    it('should have the correct value for il-alma-mater-1', async () => {
        const color = await getComputedColorHex(page, 'il-alma-mater-1');
        await expect(color).toMatch('#4d69a0');
    });
    it('should have the correct value for il-alma-mater-2', async () => {
        const color = await getComputedColorHex(page, 'il-alma-mater-2');
        await expect(color).toMatch('#849bc1');
    });
    it('should have the correct value for il-alma-mater-3', async () => {
        const color = await getComputedColorHex(page, 'il-alma-mater-3');
        await expect(color).toMatch('#afc7db');
    });
    
    // il-industrial-blue
    it('should have the correct value for il-industrial-blue', async () => {
        const color = await getComputedColorHex(page, 'il-industrial-blue');
        await expect(color).toMatch('#1d58a7');
    });
    it('should have the correct value for il-industrial-blue-1', async () => {
        const color = await getComputedColorHex(page, 'il-industrial-blue-1');
        await expect(color).toMatch('#5783bc');
    });
    it('should have the correct value for il-industrial-blue-2', async () => {
        const color = await getComputedColorHex(page, 'il-industrial-blue-2');
        await expect(color).toMatch('#90aed5');
    });
    it('should have the correct value for il-industrial-blue-3', async () => {
        const color = await getComputedColorHex(page, 'il-industrial-blue-3');
        await expect(color).toMatch('#cad9ef');
    });
    
    // il-arches-blue
    it('should have the correct value for il-arches-blue', async () => {
        const color = await getComputedColorHex(page, 'il-arches-blue');
        await expect(color).toMatch('#009fd4');
    });
    it('should have the correct value for il-arches-blue-1', async () => {
        const color = await getComputedColorHex(page, 'il-arches-blue-1');
        await expect(color).toMatch('#7fc3e1');
    });
    it('should have the correct value for il-arches-blue-2', async () => {
        const color = await getComputedColorHex(page, 'il-arches-blue-2');
        await expect(color).toMatch('#a6d7eb');
    });
    it('should have the correct value for il-arches-blue-3', async () => {
        const color = await getComputedColorHex(page, 'il-arches-blue-3');
        await expect(color).toMatch('#d2ebf5');
    });
    
    // il-cloud
    it('should have the correct value for il-cloud', async () => {
        const color = await getComputedColorHex(page, 'il-cloud');
        await expect(color).toMatch('#f8fafc');
    });
    it('should have the correct value for il-cloud-1', async () => {
        const color = await getComputedColorHex(page, 'il-cloud-1');
        await expect(color).toMatch('#e8e9eb');
    });
    it('should have the correct value for il-cloud-2', async () => {
        const color = await getComputedColorHex(page, 'il-cloud-2');
        await expect(color).toMatch('#dddede');
    });
    it('should have the correct value for il-cloud-3', async () => {
        const color = await getComputedColorHex(page, 'il-cloud-3');
        await expect(color).toMatch('#d2d2d2');
    });
    
    // il-heritage-orange
    it('should have the correct value for il-heritage-orange', async () => {
        const color = await getComputedColorHex(page, 'il-heritage-orange');
        await expect(color).toMatch('#f5821e');
    });
    it('should have the correct value for il-heritage-orange-1', async () => {
        const color = await getComputedColorHex(page, 'il-heritage-orange-1');
        await expect(color).toMatch('#e56e15');
    });
    it('should have the correct value for il-heritage-orange-2', async () => {
        const color = await getComputedColorHex(page, 'il-heritage-orange-2');
        await expect(color).toMatch('#ce5e11');
    });
    it('should have the correct value for il-heritage-orange-3', async () => {
        const color = await getComputedColorHex(page, 'il-heritage-orange-3');
        await expect(color).toMatch('#b74d04');
    });
});
