// Create the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a simple character (sphere)
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0x0077ff });
const character = new THREE.Mesh(geometry, material);
scene.add(character);

// Set the camera position
camera.position.z = 5;

// Function to update the character's position based on mouse position
function onMouseMove(event) {
    // Convert mouse position to Three.js normalized device coordinates (-1 to +1)
    const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

    // Map mouse coordinates to the character position
    character.position.x = mouseX * 5; // Scale to adjust the range
    character.position.y = mouseY * 5; // Scale to adjust the range
}

// Add mousemove event listener
window.addEventListener('mousemove', onMouseMove, false);

// Animation loop to render the scene
function animate() {
    requestAnimationFrame(animate);

    // Render the scene from the camera's perspective
    renderer.render(scene, camera);
}

// Start animation
animate();

// Adjust canvas size when window is resized
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
