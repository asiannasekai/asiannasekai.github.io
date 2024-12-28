// Select the container where the visualization will appear
const container = document.getElementById('fractal-container');

// Create the Three.js scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// Add lighting to the scene
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10);
scene.add(light);

// Create a fractal-like geometry (Icosahedron as an example)
const geometry = new THREE.IcosahedronGeometry(1, 5);
const material = new THREE.MeshStandardMaterial({
  color: 0x44aa88,
  wireframe: true,
});
const fractal = new THREE.Mesh(geometry, material);
scene.add(fractal);

// Set the camera position
camera.position.z = 5;

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Add rotations for interactivity
  fractal.rotation.x += 0.01;
  fractal.rotation.y += 0.01;

  // Render the scene
  renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Start the animation
animate();




