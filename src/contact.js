import {createHeader, createFooter} from './footer-header'

function createContact(){
    const contact = document.createElement('section');
    contact.id = 'contact';

    const phoneNumber = document.createElement('p');
    phoneNumber.innerHTML = '&#9742 505 123 4567';

    const address = document.createElement('p');
    address.textContent = '123 DEATH VALLEY, CA 92328, United States';

    const location = document.createElement('img');
    location.src = '../dist/images/location.png';
    location.alt = 'bowsers castle location';
    location.style.width = '100%';

    contact.appendChild(phoneNumber);
    contact.appendChild(address);
    contact.appendChild(location);

    const homeBtn = document.querySelector('li[id="homeBtn"]');
    const menuBtn = document.querySelector('li[id="menuBtn"]');
    const contactBtn = document.querySelector('li[id="contactBtn"]');
    homeBtn.classList.remove('active');
    menuBtn.classList.remove('active');
    contactBtn.classList.add('active');

    return contact;
}

function loadContact(){
    const content = document.querySelector('div[id="content"]');
    content.innerHTML = '';

    content.appendChild(createHeader());
    content.appendChild(createContact());
    content.appendChild(createFooter());
}

export default loadContact;
