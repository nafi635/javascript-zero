const _rradius = new WeakMap();


//Exporting this module
export class rCircle {
    constructor(radius) {
        _rradius.set(this,radius);
    }

    draw() {
        console.log('Cirlce with radius' + _rradius.get(this,radius));
    }
}