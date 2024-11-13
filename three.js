// Scene, Camera aur Renderer setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("canvas-container").appendChild(renderer.domElement);

// Texture load karna (aapki image)
const loader = new THREE.TextureLoader();
loader.load('masjid.jpeg', function(texture) {
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const planeGeometry = new THREE.PlaneGeometry(4, 2.5);
    const plane = new THREE.Mesh(planeGeometry, material);
    scene.add(plane);

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);

        // Rotation effect
        plane.rotation.y += 0.005;
        plane.rotation.x += 0.003;

        renderer.render(scene, camera);
    }
    animate();
});

// Window resize par canvas adjust karein
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});