export default class Ship {
    constructor(length,name, hits = 0){
        this.length = length;
        this.name = name
        this.hits = hits
    }
    hit() {
        this.hits++;
    }
    isDestroyed() {
        if(this.hits === this.length) {
            return true
        } else if(this.hits !== this.length) {
            return false
        }
    }
}
