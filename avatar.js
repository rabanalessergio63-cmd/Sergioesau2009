// ==========================================
// AVATAR 3D - THREE.JS ROBUSTO
// ==========================================

window.addEventListener("load", () => {
    const container = document.getElementById("avatar3dContainer");
    if (!container) {
        console.error("No se encontró el contenedor #avatar3dContainer");
        return;
    }

    // 1. Escenario, Cámara y Renderizador
    const scene = new THREE.Scene();
    
    const width = container.clientWidth || 300;
    const height = container.clientHeight || 400;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = ""; // Limpiar por si acaso
    container.appendChild(renderer.domElement);

    // 2. Iluminación
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x9d4edd, 3, 50);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    // 3. Creación del Robot / Avatar 3D
    const avatarGroup = new THREE.Group();

    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x240046, roughness: 0.3, metalness: 0.8 });
    const accentMat = new THREE.MeshStandardMaterial({ color: 0x9d4edd, emissive: 0x47126b });
    const screenMat = new THREE.MeshBasicMaterial({ color: 0x00f5ff });

    // Cabeza
    const head = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1, 1), bodyMat);
    head.position.y = 0.8;
    avatarGroup.add(head);

    // Pantalla / Visor
    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.3, 0.1), screenMat);
    visor.position.set(0, 0.85, 0.51);
    avatarGroup.add(visor);

    // Antena
    const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.5), accentMat);
    antenna.position.set(0, 1.5, 0);
    avatarGroup.add(antenna);

    const antennaTip = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 16), screenMat);
    antennaTip.position.set(0, 1.8, 0);
    avatarGroup.add(antennaTip);

    // Torso
    const torso = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.4, 0.8), bodyMat);
    torso.position.y = -0.4;
    avatarGroup.add(torso);

    // Núcleo
    const core = new THREE.Mesh(new THREE.SphereGeometry(0.25, 16, 16), accentMat);
    core.position.set(0, -0.4, 0.41);
    avatarGroup.add(core);

    scene.add(avatarGroup);

    // 4. Animación
    let clock = new THREE.Clock();
    function animate() {
        requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();
        
        avatarGroup.position.y = Math.sin(elapsedTime * 2) * 0.1;
        avatarGroup.rotation.y = Math.sin(elapsedTime * 0.8) * 0.3;

        renderer.render(scene, camera);
    }
    animate();

    // 5. Redimensionamiento automático
    window.addEventListener("resize", () => {
        if (!container) return;
        const newW = container.clientWidth;
        const newH = container.clientHeight;
        camera.aspect = newW / newH;
        camera.updateProjectionMatrix();
        renderer.setSize(newW, newH);
    });
});
