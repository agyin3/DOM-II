// Your code goes here

// Prevent Refresh On Click
const navItems = document.querySelectorAll('.nav-link');
navItems.forEach(link => {
    link.addEventListener('click', event => event.preventDefault());
})

// Mouse Enter Effect 

const imgs = document.querySelectorAll('img');
imgs.forEach(image => {
    image.addEventListener('mouseenter', event => {
        event.target.style.filter = 'grayscale(100%)';
        event.target.style.zIndex = '-99';
        event.stopPropagation();
    })
})

// Mouse Leave Effect 

imgs.forEach(image => {
    image.addEventListener('mouseleave', event => {
        event.target.style.filter = 'grayscale(0%)';
        event.target.style.zIndex = '-99';
    })
})

// Double Click Effect 

const btns = document.querySelectorAll('.btn');
const body = document.querySelector('body');
function changeBodyColor() {
    body.style.background = 'pink';
}
btns[0].addEventListener('dblclick', changeBodyColor);

// Key Down Effect 

document.addEventListener('keydown', () => {
    imgs.forEach(img => img.style.opacity = '0');
})

// Scroll Effect 

const colors = ['blue', 'yellow', 'orange', 'purple'];

document.addEventListener('scroll',() => {
    let random = Math.floor(Math.random() * 4)
    body.style.background = colors[random];
})

// Resize Effect 

const header = document.querySelector('header');

window.addEventListener('resize', () => {
    let random = Math.floor(Math.random() * 4)
    header.style.background = colors[random]
});

// Mouse Over Effect 

const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(p => {
    p.addEventListener('mouseover', event => {
        event.target.style.color = 'white';
    })
});

// Load Effect

const logo = document.querySelector('h1');

window.addEventListener('load', () => {
    logo.style.fontSize = '6.4rem';
})

// Copy Effect 

paragraphs.forEach(p => {
    p.addEventListener('copy', event => {
        event.target.style.color = 'yellow';
    })
})