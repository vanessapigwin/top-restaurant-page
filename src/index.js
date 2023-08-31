import './style.css';

const makeHeader = ()=> {
        
    const header = document.createElement('div');
    const title = document.createElement('div');
    const buttonTray = document.createElement('div');

    header.classList.add('header');
    buttonTray.classList.add('button-tray-hor');

    title.textContent = 'Steve\'s Cottage';
    
    header.appendChild(title);
    
    return header;
};

(() => {
    const header = makeHeader()
    document.body.appendChild(header);
})();