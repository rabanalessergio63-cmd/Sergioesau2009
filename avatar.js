// ==========================================
// CONFIGURACIÓN DEL AVATAR 3D CON THREE.JS
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("avatar3dContainer");
    if (!container) return;

    // 1. Escenario, Cámara y Renderizador
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(
        45, 
        container.clientWidth / container.clientHeight, 
        0.1, 
        1000
    );
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // 2. Iluminación (Luz ambiental y direccional con toque morado/magenta acorde a tu sitio)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x9d4edd, 2, 50);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    const backLight = new THREE.PointLight(0x00f5ff, 1.5, 50);
    backLight.position.set(-2, -2, -2);
    scene.add(backLight);

    // 3. Creación de un Avatar Estilizado / Robot Geométrico 3D
    const avatarGroup = new THREE.Group();

    // Materiales con estilo moderno/tech
    const bodyMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x240046, 
        roughness: 0.3, 
        metalness: 0.8 
    });
    
    const accentMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x9d4edd, 
        emissive: 0x47126b,
        roughness: 0.2 
    });

    const screenMaterial = new THREE.MeshBasicMaterial({ color: 0x00f5ff });

    // Cabeza
    const headGeo = new THREE.BoxGeometry(1.2, 1, 1);
    const head = new THREE.Mesh(headGeo, bodyMaterial);
    head.position.y = 0.8;
    avatarGroup.add(head);

    // Visor / Pantalla de la cara
    const visorGeo = new THREE.BoxGeometry(0.9, 0.3, 0.1);
    const visor = new THREE.Mesh(visorGeo, screenMaterial);
    visor.position.set(0, 0.85, 0.51);
    avatarGroup.add(visor);

    // Antena
    const antennaGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.5);
    const antenna = new THREE.Mesh(antennaGeo, accentMaterial);
    antenna.position.set(0, 1.5, 0);
    avatarGroup.add(antenna);

    const antennaTipGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const antennaTip = new THREE.Mesh(antennaTipGeo, screenMaterial);
    antennaTip.position.set(0, 1.8, 0);
    avatarGroup.add(antennaTip);

    // Torso
    const torsoGeo = new THREE.BoxGeometry(1.6, 1.4, 0.8);
    const torso = new THREE.Mesh(torsoGeo, bodyMaterial);
    torso.position.y = -0.4;
    avatarGroup.add(torso);

    // Núcleo en el pecho
    const coreGeo = new THREE.SphereGeometry(0.25, 16, 16);
    const core = new THREE.Mesh(coreGeo, accentMaterial);
    core.position.set(0, -0.4, 0.41);
    avatarGroup.add(core);

    scene.add(avatarGroup);

    // 4. Animación fluida de flotación y rotación sutil
    let clock = new THREE.Clock();
    function animate() {
        requestAnimationFrame(animate);
        
        const elapsedTime = clock.getElapsedTime();
        
        // Movimiento flotante suave
        avatarGroup.position.y = Math.sin(elapsedTime * 2) * 0.1;
        
        // Rotación pasiva lenta
        avatarGroup.rotation.y = Math.sin(elapsedTime * 0.8) * 0.3;

        renderer.render(scene, camera);
    }
    animate();

    // 5. Interactividad: Al hacer clic en el avatar, activa la tarjeta de información o una acción
    container.addEventListener("click", () => {
        // Efecto visual rápido de escala al hacer clic
        avatarGroup.scale.set(1.15, 1.15, 1.15);
        setTimeout(() => avatarGroup.scale.set(1, 1, 1), 200);

        // Si tienes la tarjeta flotante de información en tu HTML, la mostramos/alternamos
        const infoCard = document.getElementById("avatarInfoCard");
        if (infoCard) {
            infoCard.classList.toggle("active");
        }
    });

    // 6. Ajustar tamaño si cambia la ventana del navegador
    window.addEventListener("resize", () => {
        if (!container) return;
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
});
