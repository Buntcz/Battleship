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
    expect(NewShip.isDestroyed()).toBe(false)
})

destroyedShip.hit();
destroyedShip.hit();

test("Ship is destroyed", () => {
    expect(destroyedShip.isDestroyed()).toBe(true)
})