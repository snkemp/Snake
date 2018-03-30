/**
 * index.js
 * snkemp
**/

var container, renderer, scene, camera, control, gui, uniforms;

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

    window.addEventListener( 'resize', function() {
        camera.aspect = window.innerWidth/window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth/window.innerHeight );
    }, false );


    gui = new dat.GUI();
    uniforms = {
        animating: true
    };
    for( let attr in uniforms )
        gui.add( uniforms[attr], attr ).onChange( v => uniforms[attr] = v );

    console.log( gui);
}
