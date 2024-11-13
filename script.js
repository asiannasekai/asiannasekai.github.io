// script.js

// Basic Three.js setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Monitor geometry and material
const monitorGeometry = new THREE.BoxGeometry(2.5, 1.5, 0.1);
const monitorMaterial = new THREE.MeshBasicMaterial({ color: 0x333333 });
const monitor = new THREE.Mesh(monitorGeometry, monitorMaterial);
scene.add(monitor);

// Screen geometry and material (inner screen area)
const screenGeometry = new THREE.BoxGeometry(2.3, 1.3, 0.05);
const screenMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
const screen = new THREE.Mesh(screenGeometry, screenMaterial);
screen.position.z = 0.06;
scene.add(screen);

// Keyboard geometry and material
const keyboardGeometry = new THREE.BoxGeometry(2.5, 0.3, 0.1);
const keyboardMaterial = new THREE.MeshBasicMaterial({ color: 0x222222 });
const keyboard = new THREE.Mesh(keyboardGeometry, keyboardMaterial);
keyboard.position.y = -1;
scene.add(keyboard);

// Add some lighting for realism
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Slight rotation animation for a 3D effect
    monitor.rotation.y += 0.001;
    screen.rotation.y += 0.001;
    keyboard.rotation.y += 0.001;

    renderer.render(scene, camera);
}

animate();

// Adjust canvas size on window resize
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});


