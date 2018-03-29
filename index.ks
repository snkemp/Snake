head {

    title: "Snake"
    
    meta {
        .author: "snkemp"
        .description: "KS, JS, THREE.js, HTML, CSS, Snake"
    }

    style: "index.css"

    script: "dat.gui.js"
    
    script: "three.js"
    script: "RequestAnimationFrame.js"
    script: "CameraControl.js"
    script: "OrbitControls.js"

    script: "Apple.js"
    script: "Snake.js"
    script: "index.js"   
}

body {
    .onload: "onload();"

    div {
        .class: "container"
        .id: "container"
    }
}
