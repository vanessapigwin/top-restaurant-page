import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import myModel from './models/steve.glb';

const renderModel = () => {
    // three js model components
    let canvas = document.createElement('canvas');
    var model;
    const scene = new THREE.Scene();
    const loader = new GLTFLoader();
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    const camera = new THREE.PerspectiveCamera(45, 2, 0.1, 100);
    const light = new THREE.AmbientLight(0xFFFFFF, 3);

    const render = (time) => {
        time *= 0.001;
        if (model) {
            model.rotation.y = time;
            renderer.render(scene, camera);
            requestAnimationFrame(render);
        }
    }

    const dispose = (e) => {
        if (scene.geometry)
            scene.geometry.dispose();

        if (scene.renderer) {
            renderer.renderLists.dispose();
            scene.renderer.dispose();
        }
        if (scene.camera)
            scene.camera.dispose();

        if (scene.loader)
            scene.loader.dispose();
        
        if (scene.light)
            scene.light.dispose();
    }

    // three js model component settings
    camera.position.set(0, 10, 25);
    light.position.set( 5, 10, 2 );

    loader.load(myModel, (gltf) => {
        model = gltf.scene;
        scene.add(model);
        scene.add(light);
        render();
    });

    requestAnimationFrame(render);

    canvas = renderer.domElement;
    return {
        canvas,
        dispose
    }
}

const makeCardHolder = (cardData) => {
    const cardHolder = document.createElement('div');
    cardHolder.classList.add('card-holder');

    for (const values of Object.values(cardData)) {
        const card = document.createElement('div');
        const cardTitle = document.createElement('p');
        const cardDesc = document.createElement('p');
        const cardImg = document.createElement('img');

        card.classList.add('card');
        cardTitle.classList.add('title');
        cardDesc.classList.add('details');
        cardImg.classList.add('cardImg');

        cardTitle.textContent = values['subtitle'];
        cardDesc.textContent = values['details'];
        cardImg.src = values['img'];

        card.appendChild(cardImg);
        card.appendChild(cardTitle);
        card.appendChild(cardDesc);

        cardHolder.appendChild(card);
    }
    return cardHolder
}

const makeFooter = (repoOwner, repoLink, img) => {
    const footerArea = document.createElement('div');
    const footerText = document.createElement('div');
    const link = document.createElement('a');
    const linkImg = document.createElement('img');

    footerArea.classList.add('footer');

    footerText.textContent = repoOwner;
    link.href = repoLink;
    linkImg.src = img;
    link.appendChild(linkImg);

    footerArea.appendChild(footerText);
    footerArea.appendChild(link);

    return footerArea
}

export {
    renderModel,
    makeCardHolder,
    makeFooter
}