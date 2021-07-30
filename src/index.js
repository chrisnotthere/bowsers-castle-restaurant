import './style.css';
import loadHome from './home.js';

function initializeWebsite(){
    const content = document.querySelector('div[id="content"]');
    content.appendChild(loadHome());
}

initializeWebsite();
