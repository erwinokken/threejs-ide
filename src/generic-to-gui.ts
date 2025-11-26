import * as THREE from "three";
import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";

/*
	Transformation
*/

export function createTransformationFolder(
    parentFolder: GUI,
    mesh: THREE.Mesh
) {
    const transformationFolder = parentFolder.addFolder("Transformation");
    createPositionFolder(transformationFolder, mesh.position);
    createScaleFolder(transformationFolder, mesh.scale);
    createRotationFolder(transformationFolder, mesh.rotation);
}

/*
	Position, Scale, Rotation
*/

export function createPositionFolder(
    parentFolder: GUI,
    position: THREE.Vector3
) {
    return createVector3Folder(parentFolder, position, "Position");
}

export function createScaleFolder(parentFolder: GUI, scale: THREE.Vector3) {
    return createVector3Folder(parentFolder, scale, "Scale");
}

export function createRotationFolder(parentFolder: GUI, rotation: THREE.Euler) {
    return createEulerFolder(parentFolder, rotation, "Rotation");
}

/*
	Vector3 / Euler
*/
function createVector3Folder(
    parentFolder: GUI,
    vec: THREE.Vector3,
    name: string
): GUI {
    const folder = parentFolder.addFolder(name);
    folder.add(vec, "x", 0.1, 10, 0.1).name("X");
    folder.add(vec, "y", 0.1, 10, 0.1).name("Y");
    folder.add(vec, "z", 0.1, 10, 0.1).name("Z");
    return folder;
}

function createEulerFolder(
    parentFolder: GUI,
    euler: THREE.Euler,
    name: string
): GUI {
    const folder = parentFolder.addFolder(name);
    folder.add(euler, "x", 0.1, 10, 0.1).name("X");
    folder.add(euler, "y", 0.1, 10, 0.1).name("Y");
    folder.add(euler, "z", 0.1, 10, 0.1).name("Z");
    return folder;
}
