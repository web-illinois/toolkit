function getMockupControls() {
    return document.querySelectorAll('.mockup-controls button');
}
function handleMockupControlsClick(evt) {
    const clickedControl = evt.target.getAttribute('data-mockup-size');
    evt.target.parentNode.parentNode.setAttribute('data-mockup-size', clickedControl);
    getMockupControls().forEach(button => {
        if (button.getAttribute('data-mockup-size') === clickedControl) {
            button.classList.remove('il-button--light');
            button.classList.add('il-button--dark');
        } else {
            button.classList.remove('il-button--dark');
            button.classList.add('il-button--light');
        }
    });
}
getMockupControls().forEach(button => {
    button.addEventListener('click', handleMockupControlsClick);
});

function handleCopyToClipboardButtonClick(evt) {
    const button = evt.currentTarget;
    const content = button.getAttribute('data-clipboard-content');
    console.debug(content);
    const buffer = document.getElementById('clipboard-buffer');
    buffer.value = content;
    console.debug(buffer);
    buffer.select();
    document.execCommand("copy");
}
document.querySelectorAll('button[data-clipboard-content]').forEach(button => {
    button.addEventListener('click', handleCopyToClipboardButtonClick);
})