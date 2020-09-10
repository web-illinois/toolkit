const specimenText = 'The University of Illinois at Urbana-Champaign is one of the original 37 public land-grant institutions created after President Abraham Lincoln signed the Morrill Act in 1862.';

function createFontSample() {
    const sample = document.createElement('samp');
    sample.appendChild(document.createTextNode(specimenText));
    return sample;
}

function createSpecimens(family, styles, weights) {
    const list = document.createElement('ul');
    weights.forEach(weight => {
        styles.forEach(style => {
            const listItem = document.createElement('li');
            const sampleStyle = 'font-family: var(--' + family + '); font-style: ' + style + '; font-weight: ' + weight + ';';

            const sample = createFontSample();
            sample.setAttribute('id', family + '-' + style + '-' + weight);
            sample.setAttribute('style', sampleStyle);

            const code = document.createElement('code');
            code.appendChild(document.createTextNode(sampleStyle));

            listItem.appendChild(sample);
            listItem.appendChild(code);
            list.appendChild(listItem);
        })
    });
    document.body.appendChild(list);
}
