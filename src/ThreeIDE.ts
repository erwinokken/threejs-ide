import * as THREE from "three";
import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";
import { createBoxFolder } from "./objects-to-gui";
import { createPerspectiveCameraFolder } from "./cameras-to-gui";

export class ThreeIDE {
    private scene: THREE.Scene;
    private gui: GUI;
    private cameras: THREE.Camera[] = [];

    constructor(gui: GUI, scene: THREE.Scene) {
        this.gui = gui;
        this.scene = scene;
    }

    public createGUI(): void {
        this.addObjectsFolder();
        this.addCamerasFolder();
    }

    public addCamera(camera: THREE.Camera) {
        this.cameras.push(camera);
    }

    public addObjectsFolder(): void {
        /*
			Add objects folder
		*/

        const objectsFolder = this.gui.addFolder("Objects");

        function getFolderFunctionForObject(
            obj: THREE.Object3D
        ): Function | undefined {
            if (obj instanceof THREE.Mesh) {
                if (obj.geometry instanceof THREE.BoxGeometry) {
                    return createBoxFolder;
                } else {
                    console.warn(
                        `Object type ${typeof obj} not implemented yet`
                    );
                }
            } else {
                console.warn(`Object type ${typeof obj} not implemented yet`);
            }
        }

        this.scene.children.forEach((obj: THREE.Object3D) => {
            const fn = getFolderFunctionForObject(obj);
            if (fn) {
                fn(objectsFolder, obj);
            }
        });
    }

    public addCamerasFolder(): void {
        const camerasFolder = this.gui.addFolder("Camera's");

        function getFolderFunctionForCamera(
            camera: THREE.Camera
        ): Function | undefined {
            if (camera instanceof THREE.PerspectiveCamera) {
                return createPerspectiveCameraFolder;
            } else {
                console.warn(
                    `Camera type ${typeof camera} not implemented yet`
                );
            }
        }

        this.cameras.forEach((camera) => {
            const fn = getFolderFunctionForCamera(camera);
            if (fn) {
                fn(camerasFolder, camera);
            }
        });
    }
}
