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

const makeCardHolder = () => {
    const cardHolder = document.createElement('div');
    cardHolder.textContent = 'sadasdsad';
    cardHolder.classList.add('pitch-area');
    return cardHolder
}

const makeHome = () => {
    const homeDiv = document.createElement('div');
    const heroDiv = document.createElement('div');
    const heroText = document.createElement('div');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');

    homeDiv.classList.add('home-content');
    heroDiv.classList.add('hero');
    heroText.classList.add('hero-desc');

    p1.textContent = 'After years of exploration, village hopping, monster hunting, founder \
    Steve realized there is more to just defeating the Ender Dragon - good food.';
    p2.textContent = 'Steve\'s Cottage prides itself in elevating the experience of\
    cabin dining. Experience a whole new kind of enchantment.'

    // three js components, card holder
    const canvas = renderModel();
    const dispose = () => canvas.dispose();

    const pitchArea = makeCardHolder();
    console.log(pitchArea)

    heroText.appendChild(p1);
    heroText.appendChild(p2);
    heroDiv.appendChild(heroText);
    heroDiv.append(canvas.canvas);

    homeDiv.appendChild(heroDiv);
    homeDiv.appendChild(pitchArea);

    return {
        homeDiv,
        dispose
    };
};

export { makeHome }