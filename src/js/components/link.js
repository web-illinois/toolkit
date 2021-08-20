window.addEventListener('DOMContentLoaded', (event) => {
    let data_il_anchorlinks = {
        privacy: { href: 'https://www.vpaa.uillinois.edu/resources/web_privacy', text: 'Privacy Policy' },
        accessibility: { href: 'https://illinois.edu/resources/website/accessibility.html', text: 'Accessibility' },
        copyright: { href: 'https://illinois.edu/resources/website/copyright.html', text: 'Copyright &#169; 2021' },
        cookies: { text: 'About Cookies', id: 'ot-sdk-btn', class: 'ot-sdk-show-settings' }
    };

    document.querySelectorAll('a[data-il], button[data-il]').forEach(item => {
        var info = data_il_anchorlinks[item.getAttribute('data-il')];
        if (info !== undefined) {
            if (info.href !== undefined) {
                item.setAttribute('href', info.href);
            }
            if (info.text !== undefined) {
                item.innerHTML = info.text;
            }
            if (info.id !== undefined) {
               item.id = info.id;
            }
            if (info.class !== undefined) {
                item.classList.add(info.class);
            }
        } else {
            item.style.display = 'none';
        }
    });
});