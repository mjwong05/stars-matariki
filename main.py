namespace SpriteKind {
    export const star = SpriteKind.create()
}
function unlight_up (num2: number) {
    for (let value2 of sprites.allOfKind(SpriteKind.star)) {
        if (sprites.readDataNumber(value2, "id") == num2) {
            value2.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . b . . . . . . . 
                . . . . . . . b d b . . . . . . 
                . . . . . . . c d c . . . . . . 
                . . . . . . . c 5 c . . . . . . 
                . . . . . . c d 5 d c . . . . . 
                . . . b c c d 5 5 5 d c c b . . 
                . . b d d 5 5 5 5 5 5 5 d d b . 
                . . . b c c d 5 5 5 d c c b . . 
                . . . . . . c d 5 d c . . . . . 
                . . . . . . . c 5 c . . . . . . 
                . . . . . . . c d c . . . . . . 
                . . . . . . . b d b . . . . . . 
                . . . . . . . . b . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        }
    }
}
function light_up (num: number) {
    for (let value of sprites.allOfKind(SpriteKind.star)) {
        if (sprites.readDataNumber(value, "id") == num) {
            value.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . b d b . . . . . . 
                . . . . . . . b d b c . . . . . 
                . . . . b b c 5 5 5 c b b . . . 
                . . . . b 5 5 5 1 5 5 5 b . . . 
                . . . c c 5 5 5 1 5 5 5 c c . . 
                . . b b 5 5 5 1 1 1 5 5 5 b b . 
                . . d d 5 1 1 1 1 1 1 1 5 d d . 
                . . b b 5 5 5 1 1 1 5 5 5 b b . 
                . . . c c 5 5 5 1 5 5 5 c c . . 
                . . . . b 5 5 5 1 5 5 5 b . . . 
                . . . . b b c 5 5 5 c b b . . . 
                . . . . . . c b d b c . . . . . 
                . . . . . . . b d b . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        }
    }
}
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Released, function () {
    unlight_up(4)
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    light_up(5)
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Released, function () {
    unlight_up(5)
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    light_up(1)
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Released, function () {
    unlight_up(2)
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Released, function () {
    unlight_up(1)
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Released, function () {
    unlight_up(0)
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    light_up(0)
})
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Released, function () {
    unlight_up(6)
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    light_up(2)
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    light_up(3)
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    light_up(7)
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    light_up(8)
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Released, function () {
    unlight_up(3)
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Released, function () {
    unlight_up(7)
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Released, function () {
    unlight_up(8)
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    light_up(4)
})
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    light_up(6)
})
let tempPositions: string[] = []
let tempSprite: Sprite = null
MakeyMakey.setSimulatorKeymap(
MakeyMakey.PlayerNumber.ONE,
MakeyMakey.MakeyMakeyKey.UP,
MakeyMakey.MakeyMakeyKey.DOWN,
MakeyMakey.MakeyMakeyKey.LEFT,
MakeyMakey.MakeyMakeyKey.RIGHT,
MakeyMakey.MakeyMakeyKey.SPACE,
MakeyMakey.MakeyMakeyKey.LEFT_CLICK
)
MakeyMakey.setSimulatorKeymap(
MakeyMakey.PlayerNumber.TWO,
MakeyMakey.MakeyMakeyKey.W,
MakeyMakey.MakeyMakeyKey.A,
MakeyMakey.MakeyMakeyKey.S,
MakeyMakey.MakeyMakeyKey.G,
MakeyMakey.MakeyMakeyKey.G,
MakeyMakey.MakeyMakeyKey.G
)
let positions = [
"14,42",
"14,70",
"25,88",
"38,74",
"43,100",
"59,23",
"93,39",
"122,45",
"130,25"
]
for (let index = 0; index <= 8; index++) {
    tempSprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . . . c d 5 d c . . . . . 
        . . . b c c d 5 5 5 d c c b . . 
        . . b d d 5 5 5 5 5 5 5 d d b . 
        . . . b c c d 5 5 5 d c c b . . 
        . . . . . . c d 5 d c . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.star)
    sprites.setDataNumber(tempSprite, "id", index)
    tempPositions = positions.removeAt(0).split(",")
    tempSprite.setPosition(tempPositions[0] + 5, parseFloat(tempPositions[1]))
}
