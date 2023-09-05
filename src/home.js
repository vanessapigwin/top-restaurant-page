import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import myModel from './models/steve.glb';

const makeHome = () => {
    const homeDiv = document.createElement('div');

    homeDiv.classList.add('home-content');
    homeDiv.textContent = 'HELLO FROM HOME';

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
    // scene.background = new THREE.Color( 0xf6eedc );
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
    homeDiv.appendChild(canvas);

    return {
        homeDiv,
        dispose
    };
};

export { makeHome }