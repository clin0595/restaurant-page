import "./styles.css";
import { homePage } from './home.js';
import { menuPage } from './menu.js';
import { aboutPage } from './about.js';

const homeButton = document.querySelector('#homeBtn');
const menuButton = document.querySelector('#menuBtn');
const aboutButton = document.querySelector('#aboutBtn');

const container = document.getElementById('content');
container.appendChild(homePage());

homeButton.addEventListener('click', (event) => {
    container.innerHTML = '';
    container.appendChild(homePage());
})

menuButton.addEventListener('click', (event) => {
    container.innerHTML = '';
    container.appendChild(menuPage());
})

aboutButton.addEventListener('click', (event) => {
    container.innerHTML = '';
    container.appendChild(aboutPage());
})
