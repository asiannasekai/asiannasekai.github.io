// Basic Three.js setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// Monitor geometry and material
const monitorGeometry = new THREE.BoxGeometry(3.5, 2.5, 0.1);
const monitorMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });
const monitor = new THREE.Mesh(monitorGeometry, monitorMaterial);
scene.add(monitor);

// Screen geometry and material (inner screen area)
const screenGeometry = new THREE.BoxGeometry(3.3, 2.3, 0.05);
const screenMaterial = new THREE.MeshStandardMaterial({ color: 0x111111 });
const screen = new THREE.Mesh(screenGeometry, screenMaterial);
screen.position.z = 0.06;
monitor.add(screen);

// Lighting for depth
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 0.8);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Center and scale monitor in the scene
monitor.rotation.x = -0.1;
monitor.position.z = -1;

// Resize and render
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});


