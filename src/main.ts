import * as THREE from "three";
import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";
import { ThreeIDE } from "./ThreeIDE";

/*
	Startup essentials
*/
const scene = new THREE.Scene();
const gui = new GUI();
const threeIDE = new ThreeIDE(gui, scene);

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
threeIDE.addCamera(camera);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 10;

/*
	Add example boxes
*/
const cube1Geometry = new THREE.BoxGeometry(1, 1, 1);
const cube1Material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube1 = new THREE.Mesh(cube1Geometry, cube1Material);
cube1.name = "Cube 1";
cube1.position.setX(-5);
scene.add(cube1);

const cube2Geometry = new THREE.BoxGeometry(1, 1, 1);
const cube2Material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const cube2 = new THREE.Mesh(cube2Geometry, cube2Material);
cube2.name = "Cube 2";
cube2.position.setX(0);
scene.add(cube2);

const cube3Geometry = new THREE.BoxGeometry(1, 1, 1);
const cube3Material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const cube3 = new THREE.Mesh(cube3Geometry, cube3Material);
cube3.name = "Cube 3";
cube3.position.setX(5);
scene.add(cube3);

/*
	Add cameras folder
*/

// const lineMaterial = new THREE.LineDashedMaterial({
//     color: 0xff0000,
//     scale: 1,
//     dashSize: 5,
//     gapSize: 100,
// });
// const points = [
//     new THREE.Vector3(-1, 0, 0),
//     new THREE.Vector3(0, 1, 0),
//     new THREE.Vector3(1, 0, 0),
// ];
// const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
// const line = new THREE.Line(lineGeometry, lineMaterial);

// scene.add(line);

function animate() {
    cube1.rotation.x += 0.01;
    cube1.rotation.y += 0.01;

    cube2.rotation.x += 0.01;
    cube2.rotation.y += 0.01;

    cube3.rotation.x += 0.01;
    cube3.rotation.y += 0.01;
    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);

/* 
	Add threeIDE at the end
*/
threeIDE.createGUI();

/*
	On window resize
*/
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
