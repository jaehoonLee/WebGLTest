/**
 * Created by jaehoonlee88 on 15. 1. 22..
 */
var camera, scene, renderer;
var cameraControls2;
var clock = new THREE.Clock();

function fillScene() {
    scene = new THREE.Scene();

    // Triangle Mesh
    var material, geometry, mesh;
    material = new THREE.MeshBasicMaterial( { vertexColors: THREE.VertexColors, side: THREE.DoubleSide } );
    geometry = new THREE.Geometry();

    // Student: add a colored triangle here
    geometry.vertices.push( new THREE.Vector3( 100, 0, 0 ) );
    geometry.vertices.push( new THREE.Vector3( 0, 100, 0 ) );
    geometry.vertices.push( new THREE.Vector3( 0, 0, 100 ) );

    geometry.faces.push( new THREE.Face3( 0, 1, 2 ) );

    var color1 = new THREE.Color(0xFF0000);
    var color2 = new THREE.Color(0x00FF00);
    var color3 = new THREE.Color(0x0000FF);
    geometry.faces[0].vertexColors = [color1, color2, color3];

    mesh = new THREE.Mesh( geometry, material );

    scene.add( mesh );

}

function init() {
    var canvasWidth = 846;
    var canvasHeight = 494;
    var canvasRatio = canvasWidth / canvasHeight;

    // RENDERER
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.gammaInput = true;
    renderer.gammaOutput = true;
    var devicePixelRatio = window.devicePixelRatio || 1; // Evaluates to 2 if Retina
    renderer.setSize( canvasWidth/devicePixelRatio, canvasHeight/devicePixelRatio);
    renderer.setClearColor( 0xAAAAAA, 1.0 );

    // CAMERA
    camera = new THREE.PerspectiveCamera( 55, canvasRatio, 1, 4000 );
    camera.position.set( 100, 150, 130 );

    // CONTROLS
    cameraControls2 = new THREE.OrbitAndPanControls(camera, renderer.domElement);
    cameraControls2.target.set(0,0,0);

}

function addToDOM() {
    var demo = document.getElementById('demo1');
    demo.appendChild( renderer.domElement );
}

function animate() {
    window.requestAnimationFrame(animate);
    render();
}

function render() {
    var delta = clock.getDelta();
    cameraControls2.update(delta);

    renderer.render(scene, camera);
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

