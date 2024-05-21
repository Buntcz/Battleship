export default class Ship {
    constructor(length,name, hits = 0){
        this.length = length;
        this.name = name
        this.hits = hits
        this.sunk = false;
    }
    hit() {
        if(this.hits === this.length){
            return
        } else this.hits++
    }
    isDestroyed() {
        if(this.hits === this.length) {
           return (this.sunk = true)
        } else {
           return (this.sunk = false)
        }
    }
}
