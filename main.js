function openMenu() {
    document.querySelector('#openMenu').classList.remove('blinkMe')
    document.querySelector('.websiteContainer').classList.toggle('active');
    document.querySelector('#openMenu').classList.toggle('active');
    document.querySelector('#openIcon').classList.toggle('active');
    document.querySelector('#closeIcon').classList.toggle('active');
}

function openSubpage(input) {
    const subpages = document.querySelectorAll('.subpage');
    for (const subpage of subpages) {
        subpage.classList.add('hidden')
    }
    document.querySelector('#'+input).classList.remove('hidden');
}

function setTheme(theme) {
    document.querySelector('#pageStyle').href = theme + '.css';
    document.querySelector('.dropDownBtn').innerHTML = theme + ' Theme';
}
