/**
 * Apple.js
 * snkemp
**/

Apple.prototype = new THREE.Mesh();
Apple.prototype.constructor = Apple;

function Apple() {
    this.power = 1;

    this.num = 0;
}

Apple.prototype.reset =
function() {
    this.power = Math.abs( this.power + 1 );

    if( this.power & 4 )
        this.power = -power;
}

Apple.prototype.eat =
function() {
    this.num++;
    this.reset();
}
