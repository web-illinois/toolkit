window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.il-formatted .il-accordion details').forEach(item => {
        item.addEventListener('toggle', event => {
            if (event.target.open) {
                event.target.parentNode.querySelectorAll('details').forEach((detail) => {
                    if (detail !== event.target) {
                        detail.removeAttribute('open');
                    }
                });
            }
        });
    });
});