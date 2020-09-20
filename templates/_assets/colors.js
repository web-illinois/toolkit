(function() {

    const colors = [
        {
            "name": "Illini Orange",
            "var": "il-orange",
            "pms": "2026C",
            "cmyk": "0/80/90/0",
            "rgb": "255/85/46",
            "hex": "#FF552E",
            "variants": [
                {
                    "name": "Altgeld",
                    "hex": "#DD3403",
                    "var": "il-altgeld",
                },
            ],
        },
        {
            "name": "Illini Blue",
            "var": "il-blue",
            "pms": "2767",
            "cmyk": "100/90/10/50",
            "rgb": "19/41/75",
            "hex": "#13294B",
            "variants": [],
        },
        {
            "name": "Alma Mater",
            "var": "il-alma-mater",
            "pms": "661C",
            "cmyk": "100/85/15/7",
            "rgb": "30/56/119",
            "hex": "#1E3877",
            "variants": [
                {"hex": "#4D69A0", "var": "il-alma-mater-1"},
                {"hex": "#849BC1", "var": "il-alma-mater-2"},
                {"hex": "#AFC7DB", "var": "il-alma-mater-3"},
            ],
        },
        {
            "name": "Industrial Blue",
            "var": "il-industrial-blue",
            "pms": "285C",
            "cmyk": "90/48/0/0",
            "rgb": "29/88/167",
            "hex": "#1D58A7",
            "variants": [
                {"hex": "#5783BC", "var": "il-industrial-blue-1"},
                {"hex": "#90AED5", "var": "il-industrial-blue-2"},
                {"hex": "#CAD9EF", "var": "il-industrial-blue-3"},
            ],
        },
        {
            "name": "Arches Blue",
            "var": "il-arches-blue",
            "pms": "298C",
            "cmyk": "70/5/2/0",
            "rgb": "0/159/212",
            "hex": "#009FD4",
            "variants": [
                {"hex": "#7FC3E1", "var": "il-arches-blue-1"},
                {"hex": "#A6D7EB", "var": "il-arches-blue-2"},
                {"hex": "#D2EBF5", "var": "il-arches-blue-3"},
            ],
        },
        {
            "name": "Cloud",
            "var": "il-cloud",
            "style": "light",
            "pms": "COOL GRAY 1C",
            "cmyk": "3/2/2/1",
            "rgb": "248/250/252",
            "hex": "#F8FAFC",
            "variants": [
                {"hex": "#E8E9EB", "var": "il-cloud-1"},
                {"hex": "#DDDEDE", "var": "il-cloud-2"},
                {"hex": "#D2D2D2", "var": "il-cloud-3"},
            ],
        },
        {
            "name": "Heritage Orange",
            "var": "il-heritage-orange",
            "pms": "715C",
            "cmyk": "0/57/94/00",
            "rgb": "245/130/30",
            "hex": "#F5821E",
            "variants": [
                {"hex": "#E56E15", "var": "il-heritage-orange-1"},
                {"hex": "#CE5E11", "var": "il-heritage-orange-2"},
                {"hex": "#B74D04", "var": "il-heritage-orange-3"},
            ],
        },
    ];

    const colorsByHex = {};
    colors.forEach(color => {
        colorsByHex[color.hex] = color;
        color.variants.forEach(variant => {
            variant.parent = color;
            colorsByHex[variant.hex] = variant;
        })
    });
    colorsByHex['#FFFFFF'] = {
        'name': 'White',
        'var': 'white',
        'hex': '#FFFFFF'
    };

    const compatibleColors = {};

    function addWidgetButtons(list, hex, colors) {
        colors.forEach(h => {
            const c = colorsByHex[h];
            list.appendChild(makeCompabilityWidgetButton(c.var, h, hex));
        })
    }

    function addWidget(palette) {
        const widget = document.querySelector('#compatibility-widget').content.cloneNode(true);
        widget.querySelectorAll('.heading button').forEach(button => button.addEventListener('click', handleModeButtonClick));
        palette.appendChild(widget);
    }

    function getCompatibleColors(hex) {
        if (compatibleColors[hex] === undefined) {
            compatibleColors[hex] = Object.keys(colorsByHex).filter(hex2 => {
                const cc = new ColorContrast(hex, hex2);
                return cc.isCompliant();
            });
            //compatibleColors[hex].sort();
        }
        return compatibleColors[hex];
    }

    function getCompatiblePalette(widget, hex) {
        return widget.querySelector('.options ul[data-hex="' + hex + '"]')
    }

    function hasCompatiblePalette(widget, hex) {
        return !!getCompatiblePalette(widget, hex);
    }

    function handleCompatibilityButtonClick(evt) {
        const button = evt.currentTarget;
        const color = button.getAttribute('data-color');
        const palette = button.parentNode.parentNode;
        const widget = palette.parentNode.parentNode.parentNode;
        palette.setAttribute('data-selected', color);
        updateCompatibilityWidget(widget);
    }

    function handleClipClick(evt) {
        const item = evt.currentTarget;
        const palette = item.parentNode.parentNode;
        const hex = item.querySelector('.hex').innerText;
        palette.querySelectorAll('.chip').forEach(chip => {
            const h = chip.querySelector('.hex').innerText;
            if (h === hex) {
                chip.parentNode.classList.add('active');
            }
            else {
                chip.parentNode.classList.remove('active');
            }
        });
        if (!palette.querySelector('.compatibility-widget')) {
            addWidget(palette);
        }
        const widget = palette.querySelector('.compatibility-widget');
        widget.setAttribute('data-color', hex);
        updateCompatibilityWidget(widget);
    }

    function handleModeButtonClick(evt) {
        const button = evt.currentTarget;
        const widget = button.parentNode.parentNode;
        widget.setAttribute('data-mode', button.getAttribute('data-mode'));
        updateCompatibilityWidget(widget);
    }

    function makeCompatiblePalette(hex) {
        const colors = getCompatibleColors(hex);
        const list = document.createElement('ul');
        list.setAttribute('data-hex', hex);
        list.setAttribute('data-selected', colors[0]);
        addWidgetButtons(list, hex, colors);
        return list;
    }

    function updateCompatibilityWidget(widget) {

        const color = widget.getAttribute('data-color');
        const mode = widget.getAttribute('data-mode', 'fg');

        if (!hasCompatiblePalette(widget, color)) {
            widget.querySelector('.options').appendChild(makeCompatiblePalette(color));
        }
        const color2 = getCompatiblePalette(widget, color).getAttribute('data-selected');

        widget.querySelectorAll('.options ul').forEach(ul => {
            const hex = ul.getAttribute('data-hex');
            if (hex === color) {
                ul.style.display = 'flex';
                ul.querySelectorAll('button').forEach(button => {
                    if (button.getAttribute('data-color') === color2) {
                        button.parentNode.classList.add('selected');
                    }
                    else {
                        button.parentNode.classList.remove('selected');
                    }
                });
            }
            else {
                ul.style.display = 'none';
            }
        });

        const fg = mode === 'fg' ? color : color2;
        const bg = mode === 'bg' ? color : color2;

        widget.querySelectorAll('.preview').forEach(preview => {
            preview.style.color = fg;
            preview.style.backgroundColor = bg;
        });

        const fgColor = colorsByHex[fg];
        const bgColor = colorsByHex[bg];
        const cc = new ColorContrast(fg, bg);
        const ratio = 1/cc.getRatio();

        widget.querySelector('.fg-var').innerText = makeColorValue(fgColor.var);
        widget.querySelector('.bg-var').innerText = makeColorValue(bgColor.var);
        widget.querySelector('.ratio').innerText = ratio.toPrecision(4) + ':1';
        widget.querySelector('.webaim').href = cc.getWebAimUrl();
        updateCompatibilityResult(widget.querySelector('.aa-normal'), cc.isCompliant('aa-normal'));
        updateCompatibilityResult(widget.querySelector('.aa-large'), cc.isCompliant('aa-large'));
        updateCompatibilityResult(widget.querySelector('.aaa-normal'), cc.isCompliant('aaa-normal'));
        updateCompatibilityResult(widget.querySelector('.aaa-large'), cc.isCompliant('aaa-large'));
    }

    function makeColorValue(val) {
        if (val.match(/^il-/)) {
            val = 'var(--' + val + ')';
        }
        return val;
    }

    function updateCompatibilityResult(result, compliant) {
        result.innerText = compliant ? 'Pass' : 'Fail';
        result.parentNode.className = compliant ? 'pass' : 'fail';
    }

    function makeCompabilityWidgetButton(name, hex, color2) {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.appendChild(document.createTextNode(name));
        button.setAttribute('data-color', hex);
        button.style.backgroundColor = hex;
        const overlay = document.createElement('span');
        overlay.style.color = color2;
        overlay.style.borderColor = color2;
        overlay.style.backgroundColor = color2;
        button.appendChild(overlay);
        button.addEventListener('click', handleCompatibilityButtonClick);
        li.appendChild(button);
        return li;
    }

    document.querySelectorAll('.palette li').forEach(item => {
        item.addEventListener('click', handleClipClick);
        item.classList.add('js-enabled');
    });

})();







/*

Contains code from:

https://dev.to/alvaromontoro/building-your-own-color-contrast-checker-4j7o
https://codepen.io/alvaromontoro/pen/YgpWZG
https://stackoverflow.com/a/9733420/3695983

 */

function ColorContrast(hex1, hex2) {

    function getComplianceRatio(key) {
        switch (key) {
            case 'aa-normal':
                return 0.22222;
            case 'aa-large':
                return 0.33333;
            case 'aaa-normal':
                return 0.14285;
            case 'aaa-large':
                return 0.22222;
        }
        throw new Error("Unknown compliance key");
    }

    function getLuminance(r, g, b) {
        var a = [r, g, b].map(function (v) {
            v /= 255;
            return v <= 0.03928
                ? v / 12.92
                : Math.pow( (v + 0.055) / 1.055, 2.4 );
        });
        return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
    }

    function hexToRgb(hex) {
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function(m, r, g, b) {
            return r + r + g + g + b + b;
        });

        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    this.hex1 = hex1;
    this.hex2 = hex2;
    this.rgb1 = hexToRgb(hex1);
    this.rgb2 = hexToRgb(hex2);

    this.getCompliance = function() {
        return ['aa-normal', 'aa-large', 'aaa-normal', 'aa-large'].map(key => {
            return {'key': key, 'compliance': this.isCompliant(key)};
        })
    }

    this.getRatio = function() {
        const luminanceFront = getLuminance(this.rgb1.r, this.rgb1.g, this.rgb1.b);
        const luminanceBack  = getLuminance(this.rgb2.r, this.rgb2.g, this.rgb2.b);
        return luminanceBack > luminanceFront
            ? ((luminanceFront + 0.05) / (luminanceBack + 0.05))
            : ((luminanceBack + 0.05) / (luminanceFront + 0.05));
    }

    this.getWebAimUrl = function() {
        const f = this.hex1.substr(1);
        const b = this.hex2.substr(1);
        return "https://webaim.org/resources/contrastchecker/?fcolor=" + f + "&bcolor=" + b;
    }

    this.isCompliant = function(key='aa-large') {
        return this.getRatio() < getComplianceRatio(key);
    }
}
