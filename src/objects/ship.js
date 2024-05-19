export default class Ship {
    constructor(length,name, hits = 0){
        this.length = length;
        this.name = name
        this.hits = hits
        this.sunk = false;
    }
    hit() {
        this.hits++;
    }
    isDestroyed() {
        if(this.hits === this.length) {
            this.sunk = true
        } else if(this.hits !== this.length) {
            this.sunk = false;
        }
    }
}
