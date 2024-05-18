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
    expect(testBoard.placeShip(3,3,0,"H")).toStrictEqual(
        [
            ["H","o","o","o","o","V","V","V","V","V"],
            ["H","o","o","o","o","o","o","o","o","o"],
            ["H","o","o","o","o","o","o","o","o","o"],
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