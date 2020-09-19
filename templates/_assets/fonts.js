(function(){

    function handleFontSizeChange(evt) {
        var input = evt.currentTarget;
        const font = input.parentNode.parentNode.parentNode.parentNode;
        font.setAttribute('data-font-size', input.value);
        updateFont(font);
    }

    function handleFontStyleChange(evt) {
        var input = evt.currentTarget;
        const font = input.parentNode.parentNode.parentNode.parentNode;
        font.setAttribute('data-font-style', input.checked ? 'italic' : 'normal');
        updateFont(font);
    }

    function handleFontWeightChange(evt) {
        var input = evt.currentTarget;
        const font = input.parentNode.parentNode.parentNode.parentNode;
        font.setAttribute('data-font-weight', input.value);
        updateFont(font);
    }

    function updateFont(font) {
        const size = font.getAttribute('data-font-size');
        const weight = font.getAttribute('data-font-weight');
        const style = font.getAttribute('data-font-style');
        font.querySelector('.font__specimen').style.fontSize = size + 'px';
        font.querySelector('.font__specimen').style.fontWeight = weight;
        font.querySelector('.font__specimen').style.fontStyle = style;
        font.querySelector('.font__weight-value').innerText = weight;
        font.querySelector('.font__style-value').innerText = style;
        font.querySelector('.font__size-value').innerText = size;
    }

    document.querySelectorAll('.font').forEach(font => {
        font.querySelector('input.font-size').addEventListener('input', handleFontSizeChange);
        font.querySelector('input.font-weight').addEventListener('input', handleFontWeightChange);
        font.querySelector('input.font-style').addEventListener('click', handleFontStyleChange);
        updateFont(font);
    });

})();
