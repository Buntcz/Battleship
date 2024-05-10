class Ship {
    constructor(length,position, hits = 0){
        this.length = length;
        this.position = position
        this.hits = hits
    }
    isHit() {
        this.hits++;
    }
    shipDestroyed() {
        if(this.hits === this.length) {
            return "Ship is destroyed"
        } else {
            return "Ship is still in the game"
        }
    }
}

module.exports = Ship