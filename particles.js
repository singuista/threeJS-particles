(() => {

	// Set the scene size
	const WIDTH = window.innerWidth
	const HEIGHT = window.innerHeight

	// Set some camera attributes.
	const VIEW_ANGLE = 75
	const ASPECT = WIDTH / HEIGHT
	const NEAR = 0.1
	const FAR = 1000

	// Create a WebGL renderer, camera and a scene
	const scene = new THREE.Scene()	
	const camera = new THREE.PerspectiveCamera(
        VIEW_ANGLE,
        ASPECT,
        NEAR,
        FAR
	)
	
	// Start the renderer.
	const renderer = new THREE.WebGLRenderer({
		//alpha: true,
		antialias: true
	  })
	renderer.setSize(WIDTH, HEIGHT)
	camera.position.z = 5

	// Attach the renderer-supplied
	document.body.appendChild(renderer.domElement)
	
	// Cube Mesh
	var geometry = new THREE.BoxGeometry(1, 1, 1, 1)
	var material = new THREE.MeshBasicMaterial({color: 0x00ff00})
	var cube = new THREE.Mesh(geometry, material)

	scene.add(cube)


	// Controllers 
	var controls = new THREE.OrbitControls(camera, renderer.domElement)
	//camera.position.set( 0, 20, 10 )
	controls.update()
	

	var animate = () => {
		requestAnimationFrame (animate)

		// cube.rotation.x += 0.01
		// cube.rotation.y += 0.01
		controls.update()

		renderer.render(scene, camera)
	}
	animate()
})()