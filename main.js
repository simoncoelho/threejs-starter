import * as THREE from './three';

const scene = new THREE.Scene();
const cam = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const plane = new THREE.PlaneGeometry(5, 5, 10, 10);
const planeMat = new THREE.MeshPhongMaterial({ 
    color: 0xffffff, 
    side: THREE.DoubleSide, 
    flatShading: true, 
});
const planeMesh = new THREE.Mesh(plane, planeMat);

const light = new THREE.DirectionalLight(0xffffff, 1, 100);
light.position.set(0, 0, 1);

console.log(planeMesh.geometry.attributes.position.array);

const {array} =  planeMesh.geometry.attributes.position;
for (let i = 0; i < array.length; i+=3 ) {
    const x = array[i];
    const y = array[i+1];
    const z = array[i+2];

    array[i + 2] = z + Math.random();

}

scene.add(light);
scene.add(planeMesh);

cam.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, cam);
    
    //planeMesh.rotation.x += 0.01;
    //planeMesh.rotation.y += 0.01;
}

animate();


