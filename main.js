import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';

const scene = new THREE.Scene();
const cam = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const box = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 0.1, linecap: 'round', linejoin: 'round' });
const boxMesh = new THREE.Mesh(box, material);

const plane = new THREE.PlaneGeometry(5, 5, 10, 10);
const planeMat = new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 0.1, linecap: 'round', linejoin: 'round' });
const planeMesh = new THREE.Mesh(plane, planeMat);

console.log()

scene.add(planeMesh);
scene.add(boxMesh);

cam.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, cam);

    boxMesh.rotation.x += 0.01;
    boxMesh.rotation.y += 0.01;

    planeMesh.rotation.x += 0.01;
    planeMesh.rotation.y += 0.01;
}

animate();


