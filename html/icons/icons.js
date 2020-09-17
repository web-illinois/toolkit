
const icons = {
    'admissions': '&#xe900;',
    'alumni': '&#xe901;',
    'apply-now': '&#xe902;',
    'audio': '&#xe903;',
    'back': '&#xe904;',
    'calendar': '&#xe905;',
    'cancel': '&#xe906;',
    'exit': '&#xe906;',
    'comment': '&#xe907;',
    'directory': '&#xe908;',
    'document': '&#xe909;',
    'donor': '&#xe90a;',
    'download': '&#xe90b;',
    'email': '&#xe90c;',
    'event': '&#xe90d;',
    'facebook': '&#xe90e;',
    'faculty': '&#xe90f;',
    'staff': '&#xe90f;',
    'faq': '&#xe910;',
    'favorite': '&#xe911;',
    'give': '&#xe912;',
    'gift': '&#xe912;',
    'google-plus': '&#xe913;',
    'handbook': '&#xe914;',
    'manual': '&#xe914;',
    'home': '&#xe915;',
    'hours': '&#xe916;',
    'hr': '&#xe917;',
    'image': '&#xe918;',
    'inclusive': '&#xe919;',
    'info': '&#xe91a;',
    'instagram': '&#xe91b;',
    'intranet': '&#xe91c;',
    'job': '&#xe91d;',
    'employment': '&#xe91d;',
    'less': '&#xe91e;',
    'link': '&#xe91f;',
    'linkedin': '&#xe920;',
    'location': '&#xe921;',
    'menu': '&#xe922;',
    'more': '&#xe923;',
    'news': '&#xe924;',
    'next': '&#xe925;',
    'notification': '&#xe926;',
    'parent': '&#xe927;',
    'family': '&#xe927;',
    'partners': '&#xe928;',
    'pay': '&#xe929;',
    'bill': '&#xe929;',
    'phone': '&#xe92a;',
    'call': '&#xe92a;',
    'pinterest': '&#xe92b;',
    'plan': '&#xe92c;',
    'program-of-study': '&#xe92d;',
    'research': '&#xe92e;',
    'resources': '&#xe92f;',
    'safety': '&#xe930;',
    'search': '&#xe931;',
    'send': '&#xe932;',
    'settings': '&#xe933;',
    'shop': '&#xe934;',
    'sitemap': '&#xe935;',
    'snapchat': '&#xe936;',
    'students': '&#xe937;',
    'submit': '&#xe938;',
    'team': '&#xe939;',
    'tickets': '&#xe93a;',
    'trash': '&#xe93b;',
    'twitter': '&#xe93c;',
    'unit': '&#xe93d;',
    'user': '&#xe93e;',
    'video': '&#xe93f;',
    'volume': '&#xe940;',
    'website': '&#xe941;',
    'weibo': '&#xe942;',
    'whatsapp': '&#xe943;',
    'workshop': '&#xe944;',
    'training': '&#xe944;',
    'youtube': '&#xe945;'
};

function generateSamples() {
    const ligatureList = document.getElementById('ligatures');
    Object.keys(icons).forEach(key => {
        const listItem = document.createElement('li');
        const sample = document.createElement('span');
        sample.setAttribute('class', 'il-icon');
        sample.appendChild(document.createTextNode(key));
        const code = document.createElement('code');
        code.appendChild(document.createTextNode(key));
        listItem.appendChild(sample);
        listItem.appendChild(code);
        ligatureList.appendChild(listItem);
    });
    const entityList = document.getElementById('entities');
    Object.values(icons).forEach(key => {
        const listItem = document.createElement('li');
        const sample = document.createElement('span');
        sample.setAttribute('class', 'il-icon');
        sample.innerHTML = key;
        const code = document.createElement('code');
        code.appendChild(document.createTextNode(key));
        listItem.appendChild(sample);
        listItem.appendChild(code);
        entityList.appendChild(listItem);
    });
}
