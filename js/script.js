const header = document.getElementById('header');
const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')
const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const menuLinks = document.querySelectorAll('.menu-link')
const logo = document.getElementById('logo')

// Tabs menu event listener
tabs.forEach((tab) => tab.addEventListener('click', onTabClick))

function onTabClick(e) {
    // Deactivate all tabs
    tabs.forEach((tab) => {
        tab.children[0].classList.remove(
            'border-softRed',
            'border-b-4',
            'md:border-b-0'
        )
    })

    // Hide all panels
    panels.forEach((panel) => panel.classList.add('hidden'))

    // Activate a new tab and panel based on the target
    e.target.classList.add('border-softRed', 'border-b-4')
    const classString = e.target.getAttribute('data-target')
    document
        .getElementById('panels')
        .getElementsByClassName(classString)[0]
        .classList.remove('hidden')
}

// Hamburger button listener
btn.addEventListener('click', navToggle)

function navToggle() {
    btn.classList.toggle('open')
    menu.classList.toggle('block')
    menu.classList.toggle('hidden')
}


// Close mob menu
menuLinks.forEach((tab) => tab.addEventListener('click', onMenuLinksClick))

function onMenuLinksClick() {
    btn.classList.remove('open')
    menu.classList.remove('block')
    menu.classList.add('hidden')
}

// Scroll page listener
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('shadow-md');
    } else {
        header.classList.remove('shadow-md');
    }
});
