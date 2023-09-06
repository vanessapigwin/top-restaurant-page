import {renderModel, makeCardHolder} from './components';
import diamondIcon from './icons/diamond.png';
import swordIcon from './icons/sword.png';
import heartIcon from './icons/heart.png';
import critic from './icons/critic.png';

const makeHome = () => {
    // literally the hero area
    const heroDiv = document.createElement('div');
    const heroText = document.createElement('div');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    
    heroDiv.classList.add('hero', 'card-holder');
    heroText.classList.add('hero-desc');

    p1.textContent = 'After years of exploration, village hopping, monster hunting, founder \
    Steve realized there is more to just defeating the Ender Dragon - good food.';
    p2.textContent = 'Steve\'s Cottage prides itself in elevating the experience of\
    cabin dining. Experience a whole new kind of enchantment.'

    const canvas = renderModel();
    const dispose = () => canvas.dispose();

    heroText.appendChild(p1);
    heroText.appendChild(p2);
    heroDiv.appendChild(heroText);
    heroDiv.append(canvas.canvas);

    // pitch cards
    const cardData = {
        'heart': {
            'img': heartIcon,
            'subtitle': 'Healing',
            'details': 'Our food fills you and heal you. '
        },
        'sword': {
            'img': swordIcon,
            'subtitle': 'Free Range',
            'details': 'We don\'t keep our produce jammed in redstone pens.'
        },
        'diamond': {
            'img': diamondIcon,
            'subtitle': 'Safe',
            'details': 'Guaranteed free from pillagers, witches, zombies and creepers'
        }
    };
    const pitchArea = makeCardHolder(cardData);
    pitchArea.classList.add('pitch-area');

    // review
    const reviewArea = document.createElement('div');
    const reviewText = document.createElement('div');
    const reviewImg = document.createElement('img');
    const reviewName = document.createElement('div');
    const reviewDetails = document.createElement('div');
    reviewArea.classList.add('card-holder', 'review-area');
    reviewText.classList.add('quote');
    reviewName.classList.add('title');
    reviewImg.classList.add('cardImg');
    reviewImg.src = critic;
    reviewDetails.textContent = 'Steve\'s cooking reminds me so much of my village. It\'s almost\
         as if the produce came from the village itself. 5/5, will visit again!';
    reviewName.textContent = 'Gordon, Village Librarian';
    reviewText.appendChild(reviewDetails);
    reviewText.appendChild(reviewName);
    reviewArea.appendChild(reviewImg);
    reviewArea.appendChild(reviewText);

    // book button
    const bookButton = document.createElement('button');
    bookButton.textContent = 'Book a table';
    bookButton.id = 'book'; 

    // append all elements
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home-content', 'content');

    homeDiv.appendChild(heroDiv);
    homeDiv.appendChild(pitchArea);
    homeDiv.appendChild(reviewArea);
    homeDiv.appendChild(bookButton);

    return {
        homeDiv,
        dispose
    };
};

export { makeHome }