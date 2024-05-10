const ship = require("../objects/ship.js")

const NewShip = new ship(3,1);

test("Ship Lenght", () => {
    expect(NewShip.length).toBe(3);
})