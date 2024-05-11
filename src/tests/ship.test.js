const ship = require("../objects/ship.js")

const NewShip = new ship(3,[2,4]);
const destroyedShip = new ship(2,[1,2])

test("Ship Lenght", () => {
    expect(NewShip.length).toBe(3);
})

test("Position", () => {
    expect(NewShip.position).toEqual([2,4])
})

test("Ship is still ingame", () => {
    expect(NewShip.shipDestroyed()).toBe(false)
})

destroyedShip.isHit();
destroyedShip.isHit();

test("Ship is destroyed", () => {
    expect(destroyedShip.shipDestroyed()).toBe(true)
})