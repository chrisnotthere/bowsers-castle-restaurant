import './style.css';

import loadMenu from './menu.js';
import loadHome from './home.js';
import loadContact from './contact.js';


function loadWebsite(){
    const content = document.querySelector('div[id="content"]');

    content.appendChild(loadHome());

}


export default loadWebsite;
