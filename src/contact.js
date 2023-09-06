import cottage from './background_images/cabin.png';

const makeContact = () => {
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const imgDiv  = document.createElement('div');
    const img = document.createElement('img');

    p1.textContent = 'Your new culinary adventure awaits.'
    p2.textContent = 'realsteve.notarickroll.com';
    p3.textContent = '420 69 350';

    img.classList.add('feature-img');
    img.src = cottage;
    imgDiv.classList.add('card-holder');
    
    imgDiv.appendChild(p1);
    imgDiv.appendChild(p2);
    imgDiv.appendChild(p3);
    imgDiv.appendChild(img);
    
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('content', 'contact-content');
    contactDiv.appendChild(imgDiv);

    return contactDiv
}

export {makeContact}