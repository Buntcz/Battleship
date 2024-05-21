import gameBoard from "../objects/gameboard";

let testBoard = new gameBoard;



test("A gameboard is created", () => {
    expect(testBoard.board).toStrictEqual(
        [
        ["o","o","o","o","o","o","o","o","o","o"],
        ["o","o","o","o","o","o","o","o","o","o"],
        ["o","o","o","o","o","o","o","o","o","o"],
        ["o","o","o","o","o","o","o","o","o","o"],
        ["o","o","o","o","o","o","o","o","o","o"],
        ["o","o","o","o","o","o","o","o","o","o"],
        ["o","o","o","o","o","o","o","o","o","o"],
        ["o","o","o","o","o","o","o","o","o","o"],
        ["o","o","o","o","o","o","o","o","o","o"],
        ["o","o","o","o","o","o","o","o","o","o"]
        ]
    );
})

test("A ship has been placed", () => {
    expect(testBoard.placeShip(5,0,5,"V")).toStrictEqual(
        [
        ["o","o","o","o","o","V","V","V","V","V"],
        ["o","o","o","o","o","o","o","o","o","o"],
        ["o","o","o","o","o","o","o","o","o","o"],
        ["o","o","o","o","o","o","o","o","o","o"],
        ["o","o","o","o","o","o","o","o","o","o"],
        ["o","o","o","o","o","o","o","o","o","o"],
        ["o","o","o","o","o","o","o","o","o","o"],
        ["o","o","o","o","o","o","o","o","o","o"],
        ["o","o","o","o","o","o","o","o","o","o"],
        ["o","o","o","o","o","o","o","o","o","o"]
        ]
    )
}) 

test("A ship has been placed horizontally", () => {
    expect(testBoard.placeShip(3,1,5,"H")).toStrictEqual(
        [
            ["o","o","o","o","o","V","V","V","V","V"],
            ["o","o","o","o","o","H","o","o","o","o"],
            ["o","o","o","o","o","H","o","o","o","o"],
            ["o","o","o","o","o","H","o","o","o","o"],
            ["o","o","o","o","o","o","o","o","o","o"],
            ["o","o","o","o","o","o","o","o","o","o"],
            ["o","o","o","o","o","o","o","o","o","o"],
            ["o","o","o","o","o","o","o","o","o","o"],
            ["o","o","o","o","o","o","o","o","o","o"],
            ["o","o","o","o","o","o","o","o","o","o"]
            ]
    )
})

test("Ship can't go out of bounds", () => {
    testBoard.placeShip(4,9,9,"V");
    expect(testBoard.board).toStrictEqual(
        [
            ["o","o","o","o","o","V","V","V","V","V"],
            ["o","o","o","o","o","H","o","o","o","o"],
            ["o","o","o","o","o","H","o","o","o","o"],
            ["o","o","o","o","o","H","o","o","o","o"],
            ["o","o","o","o","o","o","o","o","o","o"],
            ["o","o","o","o","o","o","o","o","o","o"],
            ["o","o","o","o","o","o","o","o","o","o"],
            ["o","o","o","o","o","o","o","o","o","o"],
            ["o","o","o","o","o","o","o","o","o","o"],
            ["o","o","o","o","o","o","o","o","o","o"]
            ]
    )
})

test("Can't place on already existing ship", () => {
    testBoard.placeShip(4,0,6,"V");
    expect(testBoard.board).toStrictEqual(
        [
            ["o","o","o","o","o","V","V","V","V","V"],
            ["o","o","o","o","o","H","o","o","o","o"],
            ["o","o","o","o","o","H","o","o","o","o"],
            ["o","o","o","o","o","H","o","o","o","o"],
            ["o","o","o","o","o","o","o","o","o","o"],
            ["o","o","o","o","o","o","o","o","o","o"],
            ["o","o","o","o","o","o","o","o","o","o"],
            ["o","o","o","o","o","o","o","o","o","o"],
            ["o","o","o","o","o","o","o","o","o","o"],
            ["o","o","o","o","o","o","o","o","o","o"]
            ]
    )
})

test("Can't place already placed ship", () => {
    testBoard.placeShip(5,2,0,"V");
    expect(testBoard.board).toStrictEqual([
        ["o","o","o","o","o","V","V","V","V","V"],
        ["o","o","o","o","o","H","o","o","o","o"],
        ["o","o","o","o","o","H","o","o","o","o"],
        ["o","o","o","o","o","H","o","o","o","o"],
        ["o","o","o","o","o","o","o","o","o","o"],
        ["o","o","o","o","o","o","o","o","o","o"],
        ["o","o","o","o","o","o","o","o","o","o"],
        ["o","o","o","o","o","o","o","o","o","o"],
        ["o","o","o","o","o","o","o","o","o","o"],
        ["o","o","o","o","o","o","o","o","o","o"]
        ])
})

test("Check if a ship has been hit", () => {
    testBoard.shotFired(0,5);
    testBoard.shotFired(0,0)
    expect(testBoard.board).toEqual(
        [
            ["x","o","o","o","o","sx","V","V","V","V"],
            ["o","o","o","o","o","H","o","o","o","o"],
            ["o","o","o","o","o","H","o","o","o","o"],
            ["o","o","o","o","o","H","o","o","o","o"],
            ["o","o","o","o","o","o","o","o","o","o"],
            ["o","o","o","o","o","o","o","o","o","o"],
            ["o","o","o","o","o","o","o","o","o","o"],
            ["o","o","o","o","o","o","o","o","o","o"],
            ["o","o","o","o","o","o","o","o","o","o"],
            ["o","o","o","o","o","o","o","o","o","o"]
            ]
    )
})

test("check if it stored the hit in the variable", () => {
    let testShip = testBoard.shipsArray[4].ship
    expect(testShip.hits).toBe(1)
})

test("check if coordinates are saved inside the their right place.", () => {
    let missedHits = testBoard.hitCoords.missedHits;
    let shipHits = testBoard.hitCoords.shipHits;
    expect(missedHits).toEqual([{coordX:0,coordY:0}])
    expect(shipHits).toEqual([{coordX:0,coordY:5}])
})


   test("it should return true if a ship has been sunk", () => {
    testBoard.placeShip(2,1,1,"H");
    testBoard.shotFired(1,1);
    testBoard.shotFired(2,1);
    expect(testBoard.shipsArray[1].ship.sunk).toBeTruthy();
})

test("It should return a true statement when all ships are sunk", () => {
    testBoard.shotFired(0,6);
    testBoard.shotFired(0,7);
    testBoard.shotFired(0,8);
    testBoard.shotFired(0,9);
    testBoard.shotFired(1,5);
    testBoard.shotFired(2,5);
    testBoard.shotFired(3,5);
    expect(testBoard.allSunk).toBeTruthy();
})