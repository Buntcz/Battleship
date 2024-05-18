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
    testBoard.shotFired(6,0);
    expect(testBoard.board).toStrictEqual(
        [
            ["o","o","o","o","o","X","V","V","V","V"],
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