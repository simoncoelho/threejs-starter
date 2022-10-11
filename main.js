import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';

const scene = new THREE.Scene();
const cam = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

console.log(scene);
console.log(cam);
console.log(renderer);

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const box = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 0.1, linecap: 'round', linejoin: 'round' });

const mesh = new THREE.Mesh(box, material);
console.log(mesh);

scene.add(mesh);

cam.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, cam);

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;

}

animate();

