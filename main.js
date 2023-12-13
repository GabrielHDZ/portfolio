import * as THREE from 'three';

//escenario,camara,iluminacion
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//motor renderizador
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//geometria,textura,animaciones
const geometry = new THREE.BoxGeometry(5, 5);
const material = new THREE.MeshBasicMaterial({ color: 0x148f77 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

//grid
let grid = new THREE.GridHelper(100, 10);
scene.add(grid);
camera.position.z = 15;
camera.position.y = -15;
camera.rotation.y = -10;
camera.rotation.x = 10;

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();
