import loadMenu from './menu.js';
import loadHome from './home.js';
import loadContact from './contact.js';

export function createHeader(){

    const header = document.createElement('header');
    const nav = document.createElement('nav');

    const title = document.createElement('h1');
    title.textContent = `Bowser's Castle`;

    const navBtns = document.createElement('ul');
    const li1 = document.createElement('li'); const a1 = document.createElement('a');
    const li2 = document.createElement('li'); const a2 = document.createElement('a');
    const li3 = document.createElement('li'); const a3 = document.createElement('a');

    li1.append(a1); a1.innerText = 'Home'; li1.classList.add('active');
    li2.append(a2); a2.innerText = 'Menu';
    li3.append(a3); a3.innerText = 'Contact';

    li1.id = 'homeBtn';
    li2.id = 'menuBtn';
    li3.id = 'contactBtn';

    li1.addEventListener('click', (e) => {

        loadHome();
        // setActivePage(li1);
    });

    li2.addEventListener('click', (e) => {
        
        loadMenu();
        // setActivePage(li2);
    });

    li3.addEventListener('click', (e) => {
        
        loadContact();
        // setActivePage(li3);
    });
    
    navBtns.appendChild(li1);
    navBtns.appendChild(li2);
    navBtns.appendChild(li3);

    nav.appendChild(title);
    nav.appendChild(navBtns);
    header.appendChild(nav);

    return header;
}

export function createFooter(){

    const footer = document.createElement('footer');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');

    div1.textContent = 'Created by chrisnotthere (github link)';
    div2.innerHTML = `Bowser's Castle &#9400; 2020`;

    footer.appendChild(div1);
    footer.appendChild(div2);

    return footer;
}

////    NOT WORKING - will remove class but not add     ////
function setActivePage(button){
    
    const buttons = document.querySelectorAll('li');
    
    buttons.forEach((button) => {

        if(button !== this){
            button.classList.remove('active');
        }

    });

    button.classList.add('active');
}

