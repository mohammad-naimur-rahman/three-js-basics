import { GLTFLoader } from "../lib/GLTFLoader";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new GLTFloader();

loader.load("./assets/models/scene.gltf", function (gltf) {
  scene.add(gltf.scene);
  // gltf.animations; // Array<THREE.AnimationClip>
  // gltf.scene; // THREE.Group
  // gltf.scenes; // Array<THREE.Group>
  // gltf.cameras; // Array<THREE.Camera>
  // gltf.asset; // Object
});

renderer.render(scene, camera);
