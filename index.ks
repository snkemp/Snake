head {

    title: "Snake"
    
    meta {
        .author: "snkemp"
        .description: "KS, JS, THREE.js, HTML, CSS, Snake"
    }

    style: "index.css"

    script: "three.js"
    script: "dat.gui.js"
    script: "RequestAnimationFrame.js"
    script: "CameraControl.js"
    script: "OrbitControl.js"

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
