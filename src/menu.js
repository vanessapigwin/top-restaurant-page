import { makeCardHolder } from "./components";

const makeMenu = () => {
    const data = {
        'Appetizers': [
            {
                'img': new URL('./food_images/bread.png', import.meta.url),
                'subtitle':'Bread',
                'details': 'Crafted from wild wheat'
            },
            {
                'img':new URL('./food_images/mushroom_stew.png', import.meta.url),
                'subtitle':'Mushroom Stew',
                'details': 'Harvested from the freshest in the mushroom biome'
            },
            {
                'img': new URL('./food_images/rabbit_stew.png', import.meta.url),
                'subtitle':'Rabbit Stew',
                'details': 'Free-range bunnies, eggs and purest sugar from sugarcanes'
            },
            {
                'img': new URL('./food_images/pumpkin_pie.png', import.meta.url),
                'subtitle':'Pumpkin Pie',
                'details': 'Baked from organic pumpkin, eggs from free-range chickens and sugar'
            },
        ],
        'Main Course': [
            {
                'img': new URL('./food_images/chicken.png', import.meta.url),
                'subtitle':'Cooked Chicken',
                'details': 'Slow-grilled on an oak campfire'
            },
            {
                'img': new URL('./food_images/cod.png', import.meta.url),
                'subtitle':'Cooked Cod',
                'details': 'Baked using cutting-edge smokers, halving cooking time to maintain moisture'
            },
            {
                'img': new URL('./food_images/salmon.png', import.meta.url),
                'subtitle':'Cooked Salmon',
                'details': 'Catch on order fish, cooked using smokers'
            },
            {
                'img': new URL('./food_images/rabbit.png', import.meta.url),
                'subtitle':'Cooked Rabbit',
                'details': 'Slow-grilled on an oak campfire, guaranteed low fat'
            },
            {
                'img': new URL('./food_images/steak.png', import.meta.url),
                'subtitle':'Steak',
                'details': 'Premium cut using adiamond axe to preserve mooshroom fat grains'
            },
        ],
        'Dessert': [
            {
                'img': new URL('./food_images/cookie.png', import.meta.url),
                'subtitle': 'Cookie',
                'details': 'Baked with love, wheat and exotic cocoa beans from the jungle biome'
            },
            {
                'img': new URL('./food_images/cake.png', import.meta.url),
                'subtitle':'Cake',
                'details': 'Anyday is good for cake. Made from the freshest eggs, milk, wheat and sugar'
            },
        ]
    }

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('content', 'menu-content');

    for (const [key, values] of Object.entries(data)) {
        const menuTitle = document.createElement('div');
        menuTitle.classList.add('card-holder', 'menu-title');
        menuTitle.textContent = key;
    
        const cardHolder = makeCardHolder(values);
        cardHolder.classList.add('card-holder', 'menu-list');
    

        menuDiv.appendChild(menuTitle);
        menuDiv.appendChild(cardHolder);
    }

    return menuDiv
}

export {makeMenu}