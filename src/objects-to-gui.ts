import * as THREE from "three";
import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";
import { createTransformationFolder } from "./generic-to-gui";

/*
	Objects
*/

export function createBoxFolder(parentFolder: GUI, mesh: THREE.Mesh) {
    const boxFolder = parentFolder.addFolder(mesh.name || "Box");
    createTransformationFolder(boxFolder, mesh);
}
