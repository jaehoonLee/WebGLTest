/**
 * Created by jaehoonlee88 on 15. 1. 22..
 */
////////////////////////////////////////////////////////////////////////////////
// Diffuse material exercise
////////////////////////////////////////////////////////////////////////////////
/*global THREE, window, document*/
var camera, scene, renderer;
var cameraControls1;
var clock = new THREE.Clock();
var ambientLight, light;

function init() {
	var canvasWidth = 846;
	var canvasHeight = 494;
	var canvasRatio = canvasWidth / canvasHeight;

	// CAMERA

	camera = new THREE.PerspectiveCamera( 45, canvasRatio, 1, 80000 );
	camera.position.set( -300, 300, -1000 );
	camera.lookAt(0,0,0);
	// LIGHTS

	ambientLight = new THREE.AmbientLight( 0xffffff );

	light = new THREE.DirectionalLight( 0xffffff, 0.7 );
	light.position.set( -800, 900, 300 );

	// RENDERER
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	var devicePixelRatio = window.devicePixelRatio || 1; // Evaluates to 2 if Retina
	renderer.setSize( canvasWidth/devicePixelRatio, canvasHeight/devicePixelRatio);
	renderer.setClearColor( 0xAAAAAA, 1.0 );

	renderer.gammaInput = true;
	renderer.gammaOutput = true;

	// CONTROLS
	cameraControls1 = new THREE.OrbitAndPanControls( camera, renderer.domElement );
	cameraControls1.target.set(0, 0, 0);

}

function createBall() {
	// Do not change the color itself, change the material and use the ambient and diffuse components.
	var material = new THREE.MeshLambertMaterial( { color: 0x80FC66, shading: THREE.FlatShading } );
	var sphere = new THREE.Mesh( new THREE.SphereGeometry( 400, 64, 32 ), material );

	var ka = 0.4;
	material.ambient.setRGB(material.color.r * ka, material.color.g * ka, material.color.b * ka );

	return sphere;

}

function fillScene() {
	scene = new THREE.Scene();
	scene.fog = new THREE.Fog( 0x808080, 2000, 4000 );
	scene.add( camera );

	// LIGHTS
	scene.add( ambientLight );
	scene.add( light );

	var ball = createBall();
	scene.add( ball );

	//Coordinates.drawGround({size:1000});
	//Coordinates.drawGrid({size:1000,scale:0.01});
	//Coordinates.drawAllAxes({axisLength:500,axisRadius:1,axisTess:4});
}

function addToDOM() {
	var demo = document.getElementById('demo2');
	console.log(demo);
	demo.appendChild( renderer.domElement );
}

function animate() {

	window.requestAnimationFrame( animate );
	render();

}

function render() {
	var delta = clock.getDelta();
	cameraControls1.update(delta);

	renderer.render( scene, camera );

}

try {
	init();
	fillScene();
	addToDOM();
	animate();
} catch(e) {
	var errorReport = "Your program encountered an unrecoverable error, can not draw on canvas. Error was:<br/><br/>";
	$('#container').append(errorReport+e);
}