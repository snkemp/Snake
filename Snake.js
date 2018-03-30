/**
 * Snake.js
 * snkemp
**/

Snake.prototype = new THREE.Mesh();
Snake.prototype.constructor = Snake;

function Snake( not_head ) {

    // super()
    THREE.Mesh.call( this );

    if( not_head ) {}

    this.tail = null;
}

Snake.prototype.size =
function() {
    return 1 + (this.tail ? this.tail.size() : 0);
};

Snake.prototype.eat =
function( n ) {

    if( n > 0 ) {
        if( this.tail )
            this.tail.eat(n);

        else {
            this.tail = new Snake();
            this.tail.eat(n-1);
        }

        return false;
    }

    if( n < 0 ) {
        if( this.tail ) {
            let n = this.tail.eat(n);
            if( n )
                this.tail = null;

            return n-1;
        }
    }

    return n;
};

Snake.prototype.move =
function() {};

Snake.prototype.update =
function() {

};
