import * as THREE from "three";
import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";
import { createPositionFolder } from "./generic-to-gui";

/*
	Objects
*/

export function createPerspectiveCameraFolder(
    parentFolder: GUI,
    camera: THREE.PerspectiveCamera
) {
    const perspectiveCameraFolder = parentFolder.addFolder(
        camera.name || "Perspective Camera"
    );
    createPositionFolder(perspectiveCameraFolder, camera.position);
}
