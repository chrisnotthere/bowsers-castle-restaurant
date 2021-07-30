import {createHeader, createFooter} from './footer-header'

function createMenu(){
    const menu = document.createElement('section');
    menu.id = 'menu';
    const div1 = document.createElement('div');
    menu.appendChild(div1);

    function createCard(name, description, image){

        const card = document.createElement('div');
        card.classList.add('card');

        const cardImage = document.createElement('img');
        cardImage.src = `../dist/images/${image}`;
        cardImage.alt = name;
        cardImage.style.width = '100%';

        const cardName = document.createElement('h4')
        cardName.textContent = name;

        const cardDescription = document.createElement('p');
        cardDescription.textContent = description;

        const container = document.createElement('div');
        container.classList.add('container');

        container.appendChild(cardName);
        container.appendChild(cardDescription);

        card.appendChild(cardImage);
        card.appendChild(container);

        const homeBtn = document.querySelector('li[id="homeBtn"]');
        const menuBtn = document.querySelector('li[id="menuBtn"]');
        const contactBtn = document.querySelector('li[id="contactBtn"]');
        homeBtn.classList.remove('active');
        menuBtn.classList.add('active');
        contactBtn.classList.remove('active');

        return card;
    }

    menu.appendChild(createCard('Full English Breakfast', 'Eggs, sausage, bacon, black pudding, beans, lots of butter and salt', 'full-english.jpg'));
    menu.appendChild(createCard('Chorizo Hash', 'Scrambled eggs, house-made chorizo, black beans, bell peppers, tomatoes, melted cheddar', 'chorizo-hash.jpg'));
    menu.appendChild(createCard('Spicy Eggs Benedicy', 'Jalapeno popper, bacone, chipotle, hollandaise, eggs cooked the way you like them', 'eggs-benny.jpg'));
    menu.appendChild(createCard('Grilled Cheese', 'Cheese, cheese, cheese, cheese, and cheese', 'grilled-cheese.jpg'));
    menu.appendChild(createCard('Breakfast Burrito', 'Scrambled eggs, caramelized onion, tomato, avacado, blah, blah', 'burrito.jpg'));
    menu.appendChild(createCard('Omelette', 'Spinach, mushroom, basil pesto, avacodo, brie', 'omlette.jpg'));

    return menu;
}

function loadMenu(){
    const content = document.querySelector('div[id="content"]');
    content.innerHTML = '';

    content.appendChild(createHeader());
    content.appendChild(createMenu());
    content.appendChild(createFooter());
}

export default loadMenu;
