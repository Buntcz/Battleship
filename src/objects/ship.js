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
            return true
        } else if(this.hits !== this.length) {
            return false
        }
    }
}

module.exports = Ship