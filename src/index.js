import './style.css';
import homeIcon from './icons/Home.svg';
import menuIcon from './icons/Menu.svg';
import contactIcon from './icons/Contact.svg';
import {makeHome} from './home';
import {makeMenu} from './menu';
import {makeContact} from './contact';

const makeHeader = () => {
    const tabIcons = {
        'home': homeIcon, 
        'menu': menuIcon, 
        'contact': contactIcon
    };
    const header = document.createElement('div');
    const title = document.createElement('div');
    const buttonTray = document.createElement('div');

    header.classList.add('header');
    buttonTray.classList.add('button-tray');

    title.textContent = 'Steve\'s Cottage';

    Object.entries(tabIcons).forEach(([key, value]) => {
        const button = document.createElement('button');
        const buttonImg = document.createElement('img');
        button.classList.add('button-tray-item');
        button.id = key;
        buttonImg.src = value;
        button.appendChild(buttonImg);
        buttonTray.append(button);
    })
    
    header.appendChild(buttonTray);
    header.appendChild(title);

    return header;
};

(() => {
    const header = makeHeader();
    const home = makeHome();
    const menu = makeMenu();
    const contact = makeContact();

    const clearContents = () => {
        const child = document.body.children[1];
        document.body.removeChild(child);
    }

    const loadHome = () => {
        clearContents();
        document.body.appendChild(home.homeDiv);
    }

    const loadMenu = () => {
        home.dispose();
        clearContents();
        document.body.appendChild(menu);
    }

    const loadContact = () => {
        home.dispose();
        clearContents();
        document.body.appendChild(contact);
    }

    // initialized content on load
    document.body.appendChild(header);
    document.body.appendChild(home.homeDiv);
    document.querySelector('#home').addEventListener('click', loadHome);
    document.querySelector('#menu').addEventListener('click', loadMenu);
    document.querySelector('#contact').addEventListener('click', loadContact);
})();