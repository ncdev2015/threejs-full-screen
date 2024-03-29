import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function setupScene(name: string) {

    const viewerSize = {
        width: 800,
        height: 600
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, viewerSize.width / viewerSize.height, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( viewerSize.width, viewerSize.height );

    let element = document.getElementById("viewer")!;

    element.appendChild( renderer.domElement );

    const controls = new OrbitControls( camera, renderer.domElement );

    const grid  = new THREE.GridHelper(1000, 1000);
    scene.add(grid);

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );

    cube.position.set(1,1,1);

    scene.add( cube );

    camera.position.set(3, 4, 3);

    controls.update();

    function animate() {
        requestAnimationFrame( animate );

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render( scene, camera );
    }

    animate();
}