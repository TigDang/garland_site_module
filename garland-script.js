function placeGarlandOnSite() {
    let garlandContainer = document.createElement('div');
    garlandContainer.id = 'garland-container';
    garlandContainer.className = 'garlandRope';

    let lineContainer = document.createElement('ul');
    lineContainer.className = 'garland-line';

    for (let i = 0; i < 50; i++) {
        let tempOfLight = document.createElement('div');

        lineContainer.appendChild(document.createElement('li'));

        tempOfLight.className = 'garland-light';
        tempOfLight.id = 'garlandNumber' + i;
        garlandContainer.appendChild(tempOfLight);
    }

    document.body.appendChild(lineContainer);
    document.body.appendChild(garlandContainer);
}

placeGarlandOnSite();