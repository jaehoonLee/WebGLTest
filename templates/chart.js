/**
 * Created by jaehoonlee88 on 15. 1. 21..
 */
function init()
{
    //Scene, Camera(Perspective), Renderer Settings
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;

    /*
    var render = function () {
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;
    renderer.render(scene, camera);
    requestAnimationFrame( render );
    */
    renderer.render(scene, camera);

    // CONTROLS
	var cameraControls = new THREE.OrbitAndPanControls( camera, renderer.domElement );
	cameraControls.target.set(0, 0, 0);
};

function showGrids() {
    // Background grid and axes. Grid step size is 1, axes cross at 0, 0
    Coordinates.drawGrid({size:100,scale:1,orientation:"z"});
    Coordinates.drawAxes({axisLength:11,axisOrientation:"x",axisRadius:0.04});
    Coordinates.drawAxes({axisLength:11,axisOrientation:"y",axisRadius:0.04});
}

init();
showGrids();