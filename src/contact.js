function createContact(){

    const contact = document.createElement('section');
    contact.id = 'contact';

    const phoneNumber = document.createElement('p');
    phoneNumber.innerHTML = '&#9742 505 123 4567';

    const address = document.createElement('p');
    address.textContent = '123 DEATH VALLEY, CA 92328, United States';

    const location = document.createElement('img');
    location.src = '../src/images/location.png';
    location.alt = 'bowsers castle location';
    location.style.width = '100%';


    contact.appendChild(phoneNumber);
    contact.appendChild(address);
    contact.appendChild(location);

    return contact;
}

export default createContact;