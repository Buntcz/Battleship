const ship = require("../objects/ship.js")

const NewShip = new ship(3, "battleship");
const destroyedShip = new ship(2, "submarine")

test("Ship Lenght", () => {
    expect(NewShip.length).toBe(3);
})

test("Ship has a name", () => {
    expect(NewShip.name).toBe("battleship")
})

test("Ship is still ingame", () => {
    expect(NewShip.shipDestroyed()).toBe(false)
})

destroyedShip.isHit();
destroyedShip.isHit();

test("Ship is destroyed", () => {
    expect(destroyedShip.shipDestroyed()).toBe(true)
})