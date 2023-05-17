function addClass(componentName) {
    const params = new URLSearchParams(window.location.search);
    if (params.has('class')) {
        const component = document.querySelector(componentName);
        params.forEach((value, key) => {
            if (key == 'class' && value !== '') {
                component.classList.add(value);
            }
        });
    }
}
