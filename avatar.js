// ==========================================
// AVATAR 3D INTERACTIVO - GENKUB ROBOT
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("avatar3dContainer");
    if (!container) return;

    // Limpiamos el contenedor por si había un visor anterior
    container.innerHTML = "";

    // 1. Escena, Cámara y Renderizador
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // 2. Iluminación
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 2.5);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const backLight = new THREE.PointLight(0x88ccff, 1);
    backLight.position.set(-5, -5, -2);
    scene.add(backLight);

    // 3. Grupo Principal del Robot
    const robot = new THREE.Group();
    scene.add(robot);

    // Materiales
    const blackBodyMat = new THREE.MeshStandardMaterial({
        color: 0x111115,
        roughness: 0.2,
        metalness: 0.8
    });

    const faceScreenMat = new THREE.MeshBasicMaterial({ color: 0x050508 });
    const glowWhiteMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    // --- CABEZA ---
    const headGroup = new THREE.Group();
    robot.add(headGroup);

    const headGeo = new THREE.SphereGeometry(1.1, 32, 32);
    const head = new THREE.Mesh(headGeo, blackBodyMat);
    headGroup.add(head);

    // Pantalla frontal oscura de la cara
    const screenGeo = new THREE.CircleGeometry(0.78, 32);
    const screen = new THREE.Mesh(screenGeo, faceScreenMat);
    screen.position.set(0, 0, 0.81);
    headGroup.add(screen);

    // Ojos (estilo alegre "^ ^")
    const eyeGeo = new THREE.RingGeometry(0.1, 0.15, 16, 1, 0, Math.PI);
    
    const leftEye = new THREE.Mesh(eyeGeo, glowWhiteMat);
    leftEye.position.set(-0.28, 0.22, 0.83);
    headGroup.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeo, glowWhiteMat);
    rightEye.position.set(0.28, 0.22, 0.83);
    headGroup.add(rightEye);

    // Sonrisa feliz
    const smileGeo = new THREE.RingGeometry(0.2, 0.24, 16, 1, Math.PI, Math.PI);
    const smile = new THREE.Mesh(smileGeo, glowWhiteMat);
    smile.position.set(0, -0.12, 0.83);
    headGroup.add(smile);

    // Orejas / Auriculares laterales
    const earGeo = new THREE.CylinderGeometry(0.25, 0.25, 0.2, 32);
    earGeo.rotateZ(Math.PI / 2);
    
    const leftEar = new THREE.Mesh(earGeo, blackBodyMat);
    leftEar.position.set(-1.15, 0, 0);
    headGroup.add(leftEar);

    const rightEar = new THREE.Mesh(earGeo, blackBodyMat);
    rightEar.position.set(1.15, 0, 0);
    headGroup.add(rightEar);

    // Anillos brillantes en las orejas
    const earRingGeo = new THREE.TorusGeometry(0.26, 0.03, 16, 32);
    
    const leftEarRing = new THREE.Mesh(earRingGeo, glowWhiteMat);
    leftEarRing.position.set(-1.22, 0, 0);
    leftEarRing.rotation.y = Math.PI / 2;
    headGroup.add(leftEarRing);

    const rightEarRing = new THREE.Mesh(earRingGeo, glowWhiteMat);
    rightEarRing.position.set(1.22, 0, 0);
    rightEarRing.rotation.y = Math.PI / 2;
    headGroup.add(rightEarRing);


    // --- CUERPO ---
    const bodyGroup = new THREE.Group();
    bodyGroup.position.set(0, -1.5, 0);
    robot.add(bodyGroup);

    const bodyGeo = new THREE.CapsuleGeometry(0.65, 0.7, 16, 32);
    const body = new THREE.Mesh(bodyGeo, blackBodyMat);
    bodyGroup.add(body);

    // Anillo brillante en el pecho (como el de tu imagen de referencia)
    const chestRingGeo = new THREE.TorusGeometry(0.22, 0.035, 16, 32);
    const chestRing = new THREE.Mesh(chestRingGeo, glowWhiteMat);
    chestRing.position.set(0, 0.1, 0.62);
    bodyGroup.add(chestRing);


    // --- BRAZOS ---
    const armGeo = new THREE.CylinderGeometry(0.11, 0.13, 1.1, 16);
    const cuffGeo = new THREE.CylinderGeometry(0.16, 0.16, 0.35, 16);

    // Brazo Izquierdo
    const leftArmGroup = new THREE.Group();
    leftArmGroup.position.set(-0.85, 0.2, 0);
    leftArmGroup.rotation.z = 0.35;
    
    const leftArm = new THREE.Mesh(armGeo, blackBodyMat);
    leftArm.position.set(0, -0.4, 0);
    leftArmGroup.add(leftArm);

    const leftCuff = new THREE.Mesh(cuffGeo, blackBodyMat);
    leftCuff.position.set(0, -0.8, 0);
    leftArmGroup.add(leftCuff);
    bodyGroup.add(leftArmGroup);

    // Brazo Derecho
    const rightArmGroup = new THREE.Group();
    rightArmGroup.position.set(0.85, 0.2, 0);
    rightArmGroup.rotation.z = -0.35;

    const rightArm = new THREE.Mesh(armGeo, blackBodyMat);
    rightArm.position.set(0, -0.4, 0);
    rightArmGroup.add(rightArm);

    const rightCuff = new THREE.Mesh(cuffGeo, blackBodyMat);
    rightCuff.position.set(0, -0.8, 0);
    rightArmGroup.add(rightCuff);
    bodyGroup.add(rightArmGroup);


    // 4. Interacción: Seguir el movimiento del Mouse
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    document.addEventListener("mousemove", (event) => {
        // Normalizamos las coordenadas del mouse entre -1 y 1
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    // 5. Animación continua (Loop)
    const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);

        const elapsedTime = clock.getElapsedTime();

        // Efecto flotante constante (arriba y abajo suavemente)
        robot.position.y = Math.sin(elapsedTime * 2.2) * 0.08 - 0.2;

        // Calcular rotación suave hacia la posición del mouse (Efecto LookAt)
        targetRotationY = mouseX * 0.65;
        targetRotationX = mouseY * 0.45;

        // Aplicar lerp (suavizado) a la cabeza
        headGroup.rotation.y += (targetRotationY - headGroup.rotation.y) * 0.08;
        headGroup.rotation.x += (-targetRotationX - headGroup.rotation.x) * 0.08;

        // Inclinación sutil del cuerpo entero para mayor dinamismo
        robot.rotation.y += (targetRotationY * 0.3 - robot.rotation.y) * 0.08;

        renderer.render(scene, camera);
    }

    animate();

    // Ajustar tamaño al redimensionar la ventana del navegador
    window.addEventListener("resize", () => {
        if (!container) return;
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
});
