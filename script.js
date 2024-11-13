// Basic Three.js setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true; // Enable shadows
document.body.appendChild(renderer.domElement);

// Load textures
const textureLoader = new THREE.TextureLoader();
const monitorTexture = textureLoader.load('/Users/asiannasekai/Desktop/website_mask.png'); // Replace with your monitor texture path
const screenTexture = textureLoader.load('/Users/asiannasekai/Desktop/screen texture.png'); // Replace with your screen texture path

// Monitor geometry and material
const monitorGeometry = new THREE.BoxGeometry(2.5, 1.5, 0.1);
const monitorMaterial = new THREE.MeshStandardMaterial({ 
    color: 0x333333, 
    map: monitorTexture 
});
const monitor = new THREE.Mesh(monitorGeometry, monitorMaterial);
monitor.castShadow = true; // Enable casting shadows
scene.add(monitor);

// Screen geometry and material (inner screen area)
const screenGeometry = new THREE.BoxGeometry(2.3, 1.3, 0.05);
const screenMaterial = new THREE.MeshStandardMaterial({ 
    color: 0x000000, 
    emissive: 0x00ff00, // Make it slightly emissive for a glow effect
    emissiveIntensity: 0.2,
    map: screenTexture 
});
const screen = new THREE.Mesh(screenGeometry, screenMaterial);
screen.position.z = 0.06;
monitor.add(screen);

// Keyboard geometry and material
const keyboardGeometry = new THREE.BoxGeometry(2.5, 0.3, 0.1);
const keyboardMaterial = new THREE.MeshStandardMaterial({ color: 0x222222 });
const keyboard = new THREE.Mesh(keyboardGeometry, keyboardMaterial);
keyboard.position.y = -1;
keyboard.receiveShadow = true;
scene.add(keyboard);

// Lighting setup
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
directionalLight.position.set(2, 5, 5);
directionalLight.castShadow = true;
scene.add(directionalLight);

const pointLight = new THREE.PointLight(0xffffff, 0.5);
pointLight.position.set(-5, 5, 5);
scene.add(pointLight);

// Screen glow effect (optional)
const glowMaterial = new THREE.ShaderMaterial({
    uniforms: {
        'c': { type: 'f', value: 0.5 },
        'p': { type: 'f', value: 3.0 },
        glowColor: { type: 'c', value: new THREE.Color(0x00ff00) },
        viewVector: { type: 'v3', value: camera.position }
    },
    vertexShader: `
    uniform vec3 viewVector;
    uniform float c;
    uniform float p;
    varying float intensity;

    void main() {
        vec3 vNormal = normalize(normalMatrix * normal);
        vec3 vNormViewVector = normalize(viewVector - (modelViewMatrix * vec4(position, 1.0)).xyz);
        intensity = pow(c - dot(vNormal, vNormViewVector), p);

        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`,
    fragmentShader: `
    uniform vec3 glowColor;
    varying float intensity;

    void main() {
        vec3 glow = glowColor * intensity;
        gl_FragColor = vec4(glow, 1.0);
    }
`,

});

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Slight rotation for a realistic effect
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

