window.addEventListener('DOMContentLoaded', (event) => {
  function updateLink(link) {
    switch (link.getAttribute('data-il')) {

      case 'accessibility':
        link.innerHTML = 'Accessibility';
        link.setAttribute('href', 'https://illinois.edu/resources/website/accessibility.html');
        break;

      case 'copyright':
        const year = new Date().getFullYear();
        link.innerHTML = `Copyright &#169; ${year}`;
        link.setAttribute('href', 'https://illinois.edu/resources/website/copyright.html');
        break;

      case 'cookies':
        link.innerHTML = 'About Cookies';
        link.id = 'ot-sdk-btn';
        link.classList.add('ot-sdk-show-settings');
        break;

      case 'privacy':
        link.innerHTML = 'Privacy Policy';
        link.setAttribute('href', 'https://www.vpaa.uillinois.edu/resources/web_privacy');
        break;

      default:
        link.style.display = 'none';

    }
  }
  document.querySelectorAll('a[data-il], button[data-il]').forEach(updateLink);
});