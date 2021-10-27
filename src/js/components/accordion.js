window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.il-formatted .il-accordion details').forEach(item => {
        item.addEventListener('toggle', event => {
            if (event.target.open) {
                let accordionParent = event.target.parentNode;
                if (accordionParent != null && !accordionParent.classList.contains('il-accordion')) {
                    accordionParent = accordionParent.parentNode;
                }
                accordionParent.querySelectorAll('details').forEach((detail) => {
                    if (detail !== event.target) {
                        detail.removeAttribute('open');
                    }
                });
            }
        });
    });
});

var mediaQueryList = window.matchMedia('print');
mediaQueryList.addEventListener('change', (event) => { 
    document.querySelectorAll('.il-accordion').forEach(item => {
        item.classList.add('il-accordion-print');
        item.classList.remove('il-accordion');
    })
    document.querySelectorAll('details').forEach(item => {
        item.setAttribute('open', true);
    })
});
