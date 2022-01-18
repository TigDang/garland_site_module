function placeGarlandOnSite() {
    let garlandContainer = document.createElement('div');
    garlandContainer.id = 'garland-container';

    for (let i = 0; i < 50; i++) {
        let tempOfLight = document.createElement('div')
        tempOfLight.className = 'garland-light';
        tempOfLight.id = 'garlandNumber' + i;
        garlandContainer.appendChild(tempOfLight);
    }

    garlandContainer.className = 'garlandRope';
    document.body.appendChild(garlandContainer);
}

placeGarlandOnSite();