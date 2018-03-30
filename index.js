/**
 * index.js
 * snkemp
**/

var container, renderer, scene, camera, control, gui, uniforms;

var snake, apple;

function onload() {

    /* Needed components */
    container = document.getElementById('container');

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize( window.offsetWidth, window.offsetHeight );
    container.appendChild( renderer.domElement );

    camera = new THREE.PerspectiveCamera( 50, window.innerWidth/window.innerHeight, 1, 10000 );
    scene = new THREE.Scene();
    scene.add(camera);

    control = new THREE.OrbitControls( camera, document, renderer.domElement );

    /* Resize function */
    window.addEventListener( 'resize', function() {
        camera.aspect = window.innerWidth/window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth/window.innerHeight );
    }, false );


    /* Use customization */
    gui = new dat.GUI();
    uniforms = {
        'animating': true
    };
    for( let attr in uniforms )
        gui.add( uniforms, attr ).onChange( v => uniforms[attr] = v );

    /* Snakes and whatnot */
    snake = new Snake();
    apple = new Apple();

    /* Create a world */

    // First some light
    var amb = new THREE.AmbientLight( 0x404040 );
    scene.add(amb);


    // Draw a backdrop
    var back, backGeom, backMatl;
    backGeom = new THREE.PlaneGeometry( 200, 200, 1, 1 );
    backMatl = new THREE.MeshDepthMaterial({
        color: 0xFFFFFF,
        side: THREE.DoubleSide
    });
    back = new THREE.Mesh( backGeom, backMatl );
    //back.rotation.set();
    scene.add(back);

    camera.position.set(0, 50, -100 );

    run();
}

function run() {

    control.update();
    if( uniforms.animating ) {
        console.log( camera.position );
    }

    renderer.render( scene, camera );
    requestAnimationFrame( run );
}
