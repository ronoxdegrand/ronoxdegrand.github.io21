function makeDark() {
    document.body.classList.add('darkmode');
    localStorage.setItem('isDark', 'enabled');
}

function makeLight() {
    document.body.classList.remove('darkmode');
    localStorage.setItem('isDark', null);
}

function darkmode() {
    let isDark = localStorage.getItem('isDark');

    if (isDark !== 'enabled') {
        makeDark();
    } else {
        makeLight();
    }
}

function darkinit() {
    let isDark = localStorage.getItem('isDark');
    if (isDark === 'enabled') {
        makeDark();
    }
}

darkinit();