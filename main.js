import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';

const scene = new THREE.Scene();
const cam = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const plane = new THREE.PlaneGeometry(5, 5, 10, 10);
const planeMat = new THREE.MeshPhongMaterial({ color: 0xff0000, side: THREE.DoubleSide });
const planeMesh = new THREE.Mesh(plane, planeMat);

const light = new THREE.DirectionalLight(0xffffff, 1, 100);
light.position.set(0, 0, 1);

console.log()

scene.add(light);
scene.add(planeMesh);

cam.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, cam);
    
    planeMesh.rotation.x += 0.01;
    //planeMesh.rotation.y += 0.01;
}

animate();


