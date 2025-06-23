namespace SpriteKind {
    export const star = SpriteKind.create()
    export const bg = SpriteKind.create()
    export const textimage = SpriteKind.create()
}
function show_text (myImage: Image) {
    timer.background(function () {
        if (showingText) {
            pauseUntil(() => !(showingText))
        }
        showingText = true
        imagesprite = sprites.create(myImage, SpriteKind.textimage)
        imagesprite.setPosition(scene.screenWidth() / 2, scene.screenHeight() / 2)
        imagesprite.z = 100
        picture = image.create(image.getDimension(imagesprite.image, image.Dimension.Width) + 7, image.getDimension(imagesprite.image, image.Dimension.Height) + 7)
        picture.fill(12)
        picture.drawRect(1, 1, image.getDimension(imagesprite.image, image.Dimension.Width) + 5, image.getDimension(imagesprite.image, image.Dimension.Height) + 5, 9)
        bg = sprites.create(picture, SpriteKind.textimage)
        bg.setPosition(scene.screenWidth() / 2, scene.screenHeight() / 2)
        pause(3000)
        sprites.destroyAllSpritesOfKind(SpriteKind.textimage)
        starcounter += 1
        showingText = false
        if (starcounter == 9) {
            winAnimation()
        }
    })
}
function light_up (num: number) {
    for (let value of sprites.allOfKind(SpriteKind.star)) {
        if (sprites.readDataNumber(value, "id") == num) {
            sprites.setDataNumber(value, "id", -1)
            value.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . b d b . . . . . . 
                . . . . . . . b d b c . . . . . 
                . . . . b b c 9 9 9 c b b . . . 
                . . . . b 9 9 9 1 9 9 9 b . . . 
                . . . c c 9 9 9 1 9 9 9 c c . . 
                . . b b 9 9 9 1 1 1 9 9 9 b b . 
                . . d d 9 1 1 1 1 1 1 1 9 d d . 
                . . b b 9 9 9 1 1 1 9 9 9 b b . 
                . . . c c 9 9 9 1 9 9 9 c c . . 
                . . . . b 9 9 9 1 9 9 9 b . . . 
                . . . . b b c 9 9 9 c b b . . . 
                . . . . . . c b d b c . . . . . 
                . . . . . . . b d b . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            animation.runImageAnimation(
            value,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . b d b . . . . . . 
                . . . . . . . b d b c . . . . . 
                . . . . b b c 9 9 9 c b b . . . 
                . . . . b 9 9 9 1 9 9 9 b . . . 
                . . . c c 9 9 9 1 9 9 9 c c . . 
                . . b b 9 9 9 1 1 1 9 9 9 b b . 
                . . d d 9 1 1 1 1 1 1 1 9 d d . 
                . . b b 9 9 9 1 1 1 9 9 9 b b . 
                . . . c c 9 9 9 1 9 9 9 c c . . 
                . . . . b 9 9 9 1 9 9 9 b . . . 
                . . . . b b c 9 9 9 c b b . . . 
                . . . . . . c b d b c . . . . . 
                . . . . . . . b d b . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . b d b . . . . . . 
                . . . . . . . b 9 b c . . . . . 
                . . . . b b c 9 1 9 c b b . . . 
                . . . . b 9 9 9 1 9 9 9 b . . . 
                . . . c c 9 9 9 1 1 9 9 c c . . 
                . . b b 9 9 1 1 1 1 9 9 9 b b . 
                . . d 9 1 1 1 1 1 1 1 1 1 9 d . 
                . . b b 9 9 9 1 1 1 1 9 9 b b . 
                . . . c c 9 9 1 1 9 9 9 c c . . 
                . . . . b 9 9 9 1 9 9 9 b . . . 
                . . . . b b c 9 9 9 c b b . . . 
                . . . . . . c b 9 b c . . . . . 
                . . . . . . . b d b . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            500,
            true
            )
            value.setScale(1.5, ScaleAnchor.Middle)
            show_text(sprites.readDataImage(value, "image"))
        }
    }
}
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    light_up(4)
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    light_up(1)
})
function winAnimation () {
    for (let value of sprites.allOfKind(SpriteKind.star)) {
        flash(value)
    }
    timer.background(function () {
        pause(3000)
        mySprite = sprites.create(img`
            .....................................................................................................cbbbbc.................................
            ...................................................................................................cbbbbbbbbc...............................
            ..bbbbbbbc........bbbbbbbb.............................................cbbbbbbbc.............cbbbbbbbbbbbbbbbc................cbbbbbbbb.....
            .bbbbbbbbbb......bbbbbbbbbb...........................................cbbbbbbbbbc............bbbbbbbbbbbbbbbbc...............cbbbbbbbbbb....
            cbbbbbbbbbbc....cbbbbbbbbbbc..........................................bbbbbbbbbbb...........cbbbbbbbbb1111bbbbcc.............bbbbbbbbbbbc...
            cbbbd11dbbbcc...cbbbd11dbbbbc........................................cbbbd111dbbbcccbbbbb...bbbd111dbb1111bbbbcc............cbbbd111dbbbcc..
            cbbb1111bbbbcc..cbbb1111bbbbccccccccccc.....ccccc........ccccc........bbbd111dbbbccbbbbbbbc.bbbd111dbb1111bbbbaccccccccc.....bbbd1111bbbbcc.
            cbbb1111bbbbacc.cbbb1111bbbbbbbbbbbbbbbbbccbbbbbbbbc...cbbbbbbbb......bbbd111dbbbbbbbbbbbbbcbbbd111dbbddddbbbbbbbbbbbbbbbbbc.bbbd1111bbbaacc
            cbbb1111bbbbacc.cbbb1111bbbbbbbbbbbbbbbbbbbbbbbbbbbbc.cbbbbbbbbbb.....bbbd1111bbbbbbbdddbbbbbbb1111dbbbbbbbbbbbbbbbbbbbbbbbbbbbbd111dbbbaacc
            cbbb1111bbbbacc.cbbb1111bbbbbbbbbbbbbbbbbbbbbbbbbbbbc.bbbbbbbbbbbc....cbbb1111bbbbbbd111dbbbbbb1111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbd111dbbbaacc
            cbbb1111bbbbacc.cbbb1111bbbbdd111111111dbbbbb1111bbbbcbbbb1111bbbcc...cbbb1111dbbbbb11111bbbbbd1111bbb1111bbbd11111111111dbbbbbbd111dbbbaacc
            cbbb1111bbbbbbbbbbbb1111bbbd1111111111111dbbb1111bbbbcbbbb1111bbbacc..cbbbd111dbbbbd11111dbbbbd111dbbb1111bbb11111111111111dbbbbd111dbbbaacc
            cbbb1111bbbbbbbbbbbb1111bbd111111111111111bbb1111bbbbabbbb1111bbbaac...bbbd111dbbbd1111111dbbbd111dbbb1111bbb111111111111111dbbbd111dbbbaacc
            cbbb1111dbbbbbbbbbbd1111bbd111111111111111dbb1111bbbbabbbb1111bbbaacc..bbbd1111bbbd11111111bbbd111dbbb1111bbb1111111111111111bbbd111dbbbaacc
            cbbbd1111dbbbbbbbbd1111dbb1111dbbbbbbbd111dbb1111bbbbabbbb1111bbbaacc..bbbd1111bbd1111d1111dbb1111dbbb1111bbb1111bbbbbbbd1111dbbb111dbbbaacc
            .bbbd111111111111111111bbb1111bbbbbbbbd1111bb1111bbbbabbbb1111bbbaacc..cbbb1111db1111dbd1111bb1111bbbb1111bbb1111bbbbbbbbd111dbbb111dbbbaacc
            .bbbbd1111111111111111dbbb1111bbbbbbbbd1111bb1111bbbbabbbb1111bbbaacc..cbbbd111dd1111bbb1111dd1111bbbb1111bbb1111bbbbbbbbd111dbbb111dbbbaac.
            ..bbbbd11111111111111dbbbb1111bbbbbbbbd1111bb1111bbbbabbbb1111bbbaacc..cbbbd111d1111dbbbd1111d111dbbbb1111bbb1111bbbbbbbbd111dbbb111dbbbaac.
            ..cbbbbbdd11111111ddbbbbbb1111bbbbbbbbd1111bb1111bbbbbbbbb1111bbbaacc...bbbd11111111bbbbb11111111dbbbb1111bbb1111bbbbabbbd111dbbb111dbbbaac.
            ...cbbbbbbbb1111bbbbbbbbbb1111bbbbbbbbd1111bb1111dbbbbbbbb1111bbbaacc...bbbd1111111dbbbbbd1111111dbbbb1111bbb1111bbbbabbbd111dbbb111dbbbaac.
            ....cbbbbbbb1111bbbbbbbbbb1111bbbbbbbbd111dbbd1111bbbbbbbb1111bbbaacc...cbbb111111dbbbbbbbd111111dbbbb1111bbb1111bbbbabbbd111dbbbbddbbbbaac.
            .....ccbbbbb1111bbbbbabbbb1111111111111111dbbd1111111111111111bbbaacc...cbbb111111bbbbbbbbb111111bbbbb1111bbb1111bbbbabbbd111dbbbdddbbbbacc.
            ......ccbbbb1111bbbbaaabbbd111111111111111dbbbd111111111111111bbbaacc...cbbbd1111dbbbbabbbbd1111dbbbbb1111bbb1111bbbbabbbd111dbbd111dbbbacc.
            .......cbbbb1111bbbbaaabbbbd1111111111111dbbbbbd11111111111111bbbaacc....bbbd1111bbbbaaabbbbd111dbbbbb1111bbb1111bbbbabbbd111dbbd111dbbbacc.
            ........bbbb1111bbbbaaccbbbbd11111111111dbbbbbbbd111111111111dbbbaacc....bbbd111dbbbaaaacbbbb111dbbbbb1111bbb1111bbbbabbbd111dbbbd11bbbbaac.
            ........cbbbbbbbbbbbacccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaacc....cbbbbdbbbbbaaaccbbbbbdbbbbbbbbbbbbbbbbbbbbbbabbbbbbbbbbbbbbbbbbaac.
            ........cbbbbbbbbbbaacc..bbbbbbbbbbbbbbbbbbbabbbbbbbbbbbbbbbbbbbaaacc.....bbbbbbbbbaaaccccbbbbbbbbbbbbbbbbbbbbbbbbbbaabbbbbbbbbbbbbbbbbaaac.
            .........cbbbbbbbbbaacc...cbbbbbbbbbbbbbbbaaaaabbbbbbbbbbbbbbbbaaaac......cbbbbbbbaaaacc..cbbbbbbbabbbbbbbbbbbbbbbbbaacbbbbbbbbbbbbbbbaaacc.
            ..........cbbbbbbaaaacc....ccabbbbbbbbbaaaaaaacccabbbbbbbbbbbaaaaacc........cbbbbaaaacc.....cbbbbaaaabbbbbbabbbbbbaaaacccbbbbbbaaabbaaaaacc.
            ............ccaaaaaacc......cccaaaaaaaaaaaaacccccccaaaaaaaaaaaaaaccc.........ccaaaaaccc......ccaaaaaccccaaaaaaaaaaaaaccc.cccaaaaaaaaaaaacc..
            ............cccccccccc.......ccccccccccccccccc...cccccccccccccccccc..........ccccccccc.......cccccccccccccccaaaaaaccccc...ccccccccccccccc...
            ..............cccccc...........ccccccccccccc.......cccccccccccccc..............ccccc...........cccccc..cccccccccccccc......ccccccccccccc....
            `, SpriteKind.Player)
        mySprite.setPosition(scene.screenWidth() / 2, scene.screenHeight() / 2)
    })
}
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    light_up(0)
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    light_up(8)
})
function flash (sprite: Sprite) {
    timer.background(function () {
        for (let index = 0; index < 100; index++) {
            sprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 9 9 9 . . . . . . 
                . . . . . . 9 b d b 9 . . . . . 
                . . . . 9 9 9 b d b c 9 9 . . . 
                . . . 9 b b c 9 9 9 c b b 9 . . 
                . . . 9 b 9 9 9 1 9 9 9 b 9 . . 
                . . 9 c c 9 9 9 1 9 9 9 c c 9 . 
                . 9 b b 9 9 9 1 1 1 9 9 9 b b 9 
                . 9 d d 9 1 1 1 1 1 1 1 9 d d 9 
                . 9 b b 9 9 9 1 1 1 9 9 9 b b 9 
                . . 9 c c 9 9 9 1 9 9 9 c c 9 . 
                . . . 9 b 9 9 9 1 9 9 9 b 9 . . 
                . . . 9 b b c 9 9 9 c b b 9 . . 
                . . . . 9 9 c b d b c 9 9 . . . 
                . . . . . . 9 b d b 9 . . . . . 
                . . . . . . . 9 9 9 . . . . . . 
                `)
            pause(randint(50, 80))
            sprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . b d b . . . . . . 
                . . . . . . . b d b c . . . . . 
                . . . . b b c 9 9 9 c b b . . . 
                . . . . b 9 9 9 1 9 9 9 b . . . 
                . . . c c 9 9 9 1 9 9 9 c c . . 
                . . b b 9 9 9 1 1 1 9 9 9 b b . 
                . . d d 9 1 1 1 1 1 1 1 9 d d . 
                . . b b 9 9 9 1 1 1 9 9 9 b b . 
                . . . c c 9 9 9 1 9 9 9 c c . . 
                . . . . b 9 9 9 1 9 9 9 b . . . 
                . . . . b b c 9 9 9 c b b . . . 
                . . . . . . c b d b c . . . . . 
                . . . . . . . b d b . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            pause(randint(50, 80))
        }
    })
}
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    light_up(2)
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    light_up(5)
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    light_up(7)
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    light_up(3)
})
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    light_up(6)
})
let mySprite: Sprite = null
let starcounter = 0
let bg: Sprite = null
let picture: Image = null
let imagesprite: Sprite = null
let showingText = false
let tempPositions: string[] = []
let tempSprite: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffff
    ffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffff6ffffffffffffffffff
    fffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffbfffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff6fffffffffffffffffffffffff6ffffffbffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffffbffffffffffffbffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff6ffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffff6fffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffbffffffffffff6ffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffbfffffff
    fffffffff6fffffffffffffffffffbfffffffffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffff6ffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffffffbfffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffbffffffffffffffffffffffffffffffffbfffffffff6ffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffbfffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffffffffffffffffbfffffbff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffffffffffffffffffffffff6ffffffffff
    ffffffffffffbfffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffff
    ffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffff
    ffff6ffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffffffffffff
    ffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff6fffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffbfffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffff
    fffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffff6ffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffff
    fffffffffffffffffbfffffffffffffffffffffff6ffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffbffffffffffffffffffffffffffffbfffff
    ffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffff
    fffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbf
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fff
    fff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffffffbffffffffffffffffffffffffffff
    ffffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    bfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffbffffffff
    ffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffbffffffffffffffffffffffff6fffffffffffffffffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffbffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffbfffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffbfff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffff
    ffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffffffb
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffffffbffffffffffffbffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffff6fff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffbfffffff
    fffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffffbfffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffbffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffffffff
    ffffffffffffffffffffffffbffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffbfffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffbff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffbfffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffff6ffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffbfffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffff
    `)
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
MakeyMakey.MakeyMakeyKey.D,
MakeyMakey.MakeyMakeyKey.G,
MakeyMakey.MakeyMakeyKey.G
)
let positions = [
"14,42",
"14,70",
"27,88",
"41,74",
"47,100",
"59,23",
"93,39",
"122,45",
"130,25"
]
let images2 = [
img`
    bb....bbb....bb.......................................................................................................................
    11....d1d...b1d..........bdd...................................................bbbb................................................ddb
    11b...11d...b1d..........b11..................................................b1111b...............................................11b
    d1b...111...d1b..........bdd...................................................bbbb................................................ddb
    d1d..b111...d1b.......................................................................................................................
    b1d..b111b..11....bbb.....bb...bb..bb....bb...bbb..bbb..bb.....bbb.............bbbb...........bb..bb...bbb.....bb..bb......bbb..bb.bb.
    b11..d1d1b..11..b11111b..b11..b11d111d...11b..11d..d1dd111b..b11111b..........d1111d..........11dd11.b11111b..b11b1111...b1111db1d.11b
    .11..d1.1d.b1d..11db111..b11..b111dd11b..11b..11d..d11dd111..11db111.........b11bd11b.........111111.11db111..b111dd11b..11dbd11d..11b
    .11b.11.11.b1d.b11b.b11..b11..b11b..11d..11b..11d..d1d..d11.b11b.b11.........d1d..d1d.........111b..b11b.b11..b11b..11b.b11..b1d...11b
    .d1bb1d.d1.b1b.b11..b11b.b11..b11b..d1d..11b..11d..d1d..d11.b11..b11b........d1d..d1d.........11d...b11..b11b.b11b..11b.b1d...11...11b
    .d1bb1b.d1bd1b......b11b.b11..b11b..d1d..11b..11d..d1d..d11......b11b.............d1d.........11d........b11b.b11b..11b.b1d...11...11b
    .b1dd1b.b1bd1b....bd111b.b11..b11b..d1d..11b..11d..d1d..d11....bd111b.bddddb....d111d.bddddb..11d......bd111b.b11b..11b.b11..b11...11b
    .b1dd1..b1d11....d11d11b.b11..b11b..d1d..11b..11d..d1d..d11...d11d11b.d1111d..b11dd1d.b1111d..11d.....d11d11b.b11b..11b.b11b.b1d...11b
    ..1111...1111...d1d.b11b.b11..b11b..d1d..11b..11d..d1d..d11..d1d.b11b..bbbb..b11b.d1d..bbbbb..11d....d1d.b11b.b11b..11b..d11d11b...11b
    ..111d...d11d..b11b.b11b.b11..b11b..d1d..11b..11d..d1d..d11.b11b.b11b........d1d..d1d.........11d...b11b.b11b.b11b..11b..b1d1db....11b
    ..d11d...d11d..b11..b11b.b11..b11b..d1d..11b..11d..d1d..d11.b11..b11b........11d..d1d.........11d...b11..b11b.b11b..11b..1d........11b
    ..d11b...b11b..b11b.d11b.b11..b11b..11b..11b.b11d..d1d..d11.b11b.d11b........111.b11d.........11d...b11b.d11b.b11b..11b.b11dddb....11b
    ..b11....b11b...1111d11b.b11..b111d111b..111d111d..d1d..d11..1111d11b........d1111d11.........11d....1111d11b.b11b..11b..d111111b..11b
    ..b11.....11....b111.d1b.b11..b11d111b...b11db11d..d1d..d11..b111.d1b.........d11bb11.........11d....b111.d1b.b11b..11b..d1bbd11d..11b
    ..................b...........b11b.b...........................b...............b.......................b................d1b....11.....
    ..............................b11b......................................................................................11b...b11.....
    ..............................b11b......................................................................................d111d111d.....
    ..............................b11b.......................................................................................d1111dd......
    ...............................bb..........................................................................................bb.........
    `,
img`
    cddb.....bddc.....................................................................................................................................
    c11d.....b11b...11d......................................11d............ccc...................................................................b11c
    c11d.....b11b...11d......................................11d............11d...................................................................b11c
    c11d.....b11b...11d......................................11d............11d...................................................................b11c
    c11d.....b11b...........................................................11d.......................................................................
    c11d.....b11b...........................................................11d.......................................................................
    c11d.....b11b...bbc..bbc...bbc...bbc...bbdbc.............bbc..........cb111bbc...cbdbb.............bbb.cbb...bbdbc....cbbc.cbbc.....cbdbc..bc.cbbc
    c11d.....b11b...11d..d1b...11b..c11c..d11111b............11d..........b111111c..b111111............111c11d..d11111b...b11b11111....d11111bd1d.b11c
    c11d.....b11b...11d..d1b..c11d..c11..b11bc111c...........11d..........cc111cc..c11dcb11b...........111111d.b11bc111c..b111db111c..b11bcb111b..b11c
    c11dbbbbbd11b...11d..b1d..b11d..b1d..11d..c11b...........11d............11d....b11c..d11...........111dc.c.11d..c11b..b11b..b11b..d1d...11b...b11c
    c11111111111b...11d..c11..b111..b1d.c11b..c11b...........11d............11d....d11...b11...........111....c11b..c11b..b11c..c11b..11b...d1d...b11c
    c111ddddd111b...11d..c11..d1d1c.d1b..ccc..c11d...........11d............11d....d11...b11c..........111.....ccc..c11d..b11c..c11b..11b...d1d...b11c
    c11d.....b11b...11d...11c.11b1c.d1c......cb11d...........11d............11d....d11cccd11c..........111.........cb11d..b11c..c11b..11b...d1d...b11c
    c11d.....b11b...11d...d1cc1dc1b.11c....cd1111d..d11111...11d..c11111b...11d....d11111111c.b11111c..111.......cd1111d..b11c..c11b..11d...11d...b11c
    c11d.....b11b...11d...d1bc1b.1dc11....b11db11d..111111...11d..b11111b...11d....d11cccccc..d11111c..111......b11db11d..b11c..c11b..b11c.c11b...b11c
    c11d.....b11b...11d...b1bb1c.11c1d...b11b.c11d..cccccc...11d...cccccc...11d....d11........cccccc...111.....b11b.c11d..b11c..c11b...1111111....b11c
    c11d.....b11b...11d...c1dd1c.d1b1d...11d..c11d...........11d............11d....d11...cbb...........111.....11d..c11d..b11c..c11b...b1111dc....b11c
    c11d.....b11b...11d...c1111..b111b..c11b..c11d...........11d............11d....d11...b11c..........111....c11b..c11d..b11c..c11b..b1b.c.......b11c
    c11d.....b11b...11d....111d..c111c..c11d..c11d...........11d............111....b11...d11...........111....c11d..c11d..b11c..c11b..11b.........b11c
    c11d.....b11b...11d....111b..c111c..c111cc111d...........11d............111c...b11b..11d...........111....c111cc111d..b11c..c11b..1111111dc...b11c
    c11d.....b11b...11d....d11c...111....d1111b11d...........11d............b1111c..1111111c...........111.....d1111b11d..b11c..c11b..cd1111111...b11c
    c11d.....b11b...11d....b11c...d1d.....111d.d11...........11d.............d111c..cd1111b............111......111d.d11..b11c..c11b..c1dccbd11b..b11c
    .......................................c...................................cc......cc........................c...................c11.....b1d......
    .................................................................................................................................b1d.....b1d......
    .................................................................................................................................b11dbbbd11b......
    .................................................................................................................................cd1111111d.......
    ...................................................................................................................................cdd1ddb........
    `,
img`
    ddb.....bbc....cddc....................................
    d1d.....11b....c11c............bddc....................
    b11....c11d....b11.............b11b...b11b.....c11111c.
    b11....b111....b1d.............b11b...b11b.....cdddddc.
    c11c...b111c...d1d.............cbbc...b11b.............
    c11b...d111c...11b....................b11b.............
    .11b...11d1b...11c....cbbc.....ccc...cb11dcc....ccbcc..
    .d1d..c11b1d..c11c..c11111d....b11b.c1111111c..b11111c.
    .b1d..c1dc11..c11...111d111b...b11b..dd111ddc.b1111111.
    .b11..b1d.11..b11..b11c.c111...b11b...b11b....11d..b11b
    .c11c.d1b.11c.b1d..d11...d11c..b11b...b11b...c11b..c11d
    .c11c.11c.d1b.d1b..dd1...d11c..b11b...b11b...cd1b..c11d
    ..11bc11..b1b.11b........d11c..b11b...b11b.........c11d
    ..d1bc11..c1d.11c......cd111c..b11b...b11b........bd11d
    ..d1db1d..c11c11.....cd11111c..b11b...b11b......b11111d
    ..b11d1b...11b11....b11dcd11c..b11b...b11b.....d11bc11d
    ..c1111c...d111d...c11d..d11c..b11b...b11b....d11c.c11d
    ..c1111c...b111b...d11c..d11c..b11b...b11b...c11b..c11d
    ...1111....c111b...111...d11c..b11b...b11b...b11b..c11d
    ...d11d....c111c...111...d11c..b11b...c11b...b11b..b11d
    ...d11b.....111c...111dcd111c..b11b...c11dc..b111bb111d
    ...b11c.....d11....b11111b11b..b11b....11111c.11111b111
    ...c11c.....b1d.....d111cc11b..b11b....cd111c.c111d.d11
    .....................cc...................cc....c......
    `,
img`
    ddb.....bbc....cddc................................
    d1d.....11b....c11c............bddc................
    b11....c11d....b11.............b11b...b11b...d1111d
    b11....b111....b1d.............b11b...b11b...bddddb
    c11c...b111c...d1d.............cbbc...b11b.........
    c11b...d111c...11b....................b11b.........
    .11b...11d1b...11c....cbbc.....ccc...cb11dcc...cc..
    .d1d..c11b1d..c11c..c11111d....b11b.c1111111c.b11b.
    .b1d..c1dc11..c11...111d111b...b11b..dd111ddc.b11b.
    .b11..b1d.11..b11..b11c.c111...b11b...b11b....b11b.
    .c11c.d1b.11c.b1d..d11...d11c..b11b...b11b....b11b.
    .c11c.11c.d1b.d1b..dd1...d11c..b11b...b11b....b11b.
    ..11bc11..b1b.11b........d11c..b11b...b11b....b11b.
    ..d1bc11..c1d.11c......cd111c..b11b...b11b....b11b.
    ..d1db1d..c11c11.....cd11111c..b11b...b11b....b11b.
    ..b11d1b...11b11....b11dcd11c..b11b...b11b....b11b.
    ..c1111c...d111d...c11d..d11c..b11b...b11b....b11b.
    ..c1111c...b111b...d11c..d11c..b11b...b11b....b11b.
    ...1111....c111b...111...d11c..b11b...b11b....b11b.
    ...d11d....c111c...111...d11c..b11b...c11b....b11b.
    ...d11b.....111c...111dcd111c..b11b...c11dc...b11b.
    ...b11c.....d11....b11111b11b..b11b....11111c.b11b.
    ...c11c.....b1d.....d111cc11b..b11b....cd111c.b11b.
    .....................cc...................cc.......
    `,
img`
    cddddddbc................bddc..........................................ddd..............................................
    c111111111c..............b11c..........................................111..............................................
    c111bbd1111....11111b....b11c.....................c11d.................111..............................................
    c111....d11b...dddddc....b11c.....................c11d.................111..............................................
    c111....c11d.............b11c.....................c11d.................111..............................................
    c111.....111.............b11c.....................c11d.................111..............................................
    c111.....111....cbbc.....b11c..cbc....ccc...ccc..cc11dcc...ccc...ccc...111....ccc....cbbc.....cc....cc....cc.....cbbc...
    c111.....111..cd1111d....b11cc1111c..c11b...111..1111111b.c11b...111...111....111c..d1111d...c11...c11c..c11c..c11111d..
    c111....c11d..d111111d...b11d11111b..c11b...111..dd111ddc.c11b...111...111...b11b..d11d111d..c11c..b11b..c11c..111d111b.
    c111....d11b.c11b..d11c..b11dc.b11d..c11b...111...c11d....c11b...111...111..c111..c11b..d11c..11c..d11b..b11..b11c.c111.
    c111ddd111d..b11c..b11b..b11c..c11d..c11b...111...c11d....c11b...111...111..d11c..b11c..b11b..d1b..d11d..b1d..d11...d11c
    c11111111d...d11c..c11b..b11c..c11d..c11b...111...c11d....c11b...111...111.b11d...bd1c..b11b..d1b..1111..d1b..dd1...d11c
    c111bbbc.....d11c..c11b..b11c..c11d..c11b...111...c11d....c11b...111...111c111c.........b11b..b1d.c1dd1c.d1b........d11c
    c111.........d11c..c11d..b11c..c11d..c11b...111...c11d....c11b...111...111d111........cb111b..c11.c1bb1c.11c......cd111c
    c111.........d11c..c11d..b11c..c11d..c11b...111...c11d....c11b...111...1111111c.....cd11111b..c11.b1bb1b.11c....cd11111c
    c111.........d11c..c11d..b11c..c11d..c11b...111...c11d....c11b...111...111dc11b....c111bb11b...11cd1cc1dc11....b11dcd11c
    c111.........d11c..c11d..b11c..c11d..c11b...111...c11d....c11b...111...111c.111....111c.b11b...11c11..1db1d...c11d..d11c
    c111.........d11c..c11b..b11c..c11d..c11b...111...c11d....c11b...111...111..b11c..b11c..b11b...d1b1d..d1b1b...d11c..d11c
    c111.........d11c..c11b..b11c..c11d..c11b...111...c11d....c11b...111...111..c11d..d11c..b11b...b111d..b111b...111...d11c
    c111.........b11c..b11b..b11c..c11d..c11d...111...c11d....c11d...111...111...d11..d11c..b11b...b111b..b111c...111...d11c
    c111.........c11d..d11c..b11c..c11d..c111ccd111....111c...c111ccd111...111...b11b.b111cb111b...c111c..c111c...111dcd111c
    c111..........d111111d...b11c..c11d...11111d111....d1111c..11111d111...111....111.c11111b11d....111....111....b11111b11b
    c111...........b1111b....b11c..c11d...b111b.111....cd111c..b111b.111...111....d11c.b111b.11d....111....d1d.....d111cc11b
    .................cc....................cc.............cc....cc......................cc..........................cc......
    `,
img`
    cddb.....cddb........................................................................
    b11b.....c11b.....................................................................ddd
    b11b.....c11b.....................................................................111
    b11b.....c11b.....................................................................111
    b11b.....c11b.....................................................................bbb
    b11b.....c11b........................................................................
    b11b.....c11b...ccc...c..ccc...ccc...ccc...c....cbbc.....ccc...cb.......cbcc...c..ccc
    b11b.....c11b..c11d.b11.c11b...111...111.b11c.c11111d....d11cb1111....cd1111b.d1c.111
    b11b.....c11b..c11dd111.c11b...111...111b111c.111d111b...d11d11111b...d11d111d1db.111
    b11b.....c11b..c1111dbd.c11b...111...1111dbdcb11c.c111...d11dc.d11b..c11b..d11c...111
    b11b.....c11b..c111b....c11b...111...111d....d11...d11c..d11c..c11b..b11...c11c...111
    b11b.....c11b..c11d.....c11b...111...111.....dd1...d11c..d11c..c11b..d11...c11c...111
    b11b.....c11b..c11d.....c11b...111...111...........d11c..d11c..c11b..d11...c11b...111
    b11b.....c11b..c11d.....c11b...111...111.........cd111c..d11c..c11b..d11...c11c...111
    b11b.....c11b..c11d.....c11b...111...111.......cd11111c..d11c..c11b..b11c..b11c...111
    b11b.....c11b..c11d.....c11b...111...111......b11dcd11c..d11c..c11b..c11dccd11....111
    c11b.....c11b..c11d.....c11b...111...111.....c11d..d11c..d11c..c11b...b111111c....111
    c11d.....b11b..c11d.....c11b...111...111.....d11c..d11c..d11c..c11b...b1d11dc.....111
    .11d.....b11c..c11d.....c11b...111...111.....111...d11c..d11c..c11b..c1d..........111
    .111c....111...c11d.....c11d...111...111.....111...d11c..d11c..c11b..b11cc........111
    .b111bcb111d...c11d.....c111ccd111...111.....111dcd111c..d11c..c11b..b111111db....111
    ..d11111111....c11d......11111d111...111.....b11111b11b..d11c..c11b...d1111111d...111
    ...b11111bc....c11d......b111b.111...111......d111cc11b..d11c..c11b..cd1ccbbd11c..111
    ......cc..................cc...................cc....................11c.....11b.....
    ....................................................................c11c.....11b.....
    ....................................................................c11dbccbd11c.....
    .....................................................................d11111111b......
    ......................................................................bd111dbc.......
    `,
img`
    .bddc.......bddc..................................................ddd.............
    .111b.......111c...........................................cddb...111.........bddc
    .111d......c111c...............d11c........................c11d...111.........d11c
    .1111......b111b...............d11c........................c11d...111.........d11c
    .1111c.....b111b...............d11c........................cbbc...111.........cbb.
    .1111c.....d111b...............d11c...............................111.............
    .1111b.....1111b.....cbbc.....cd11bcc....cbbc......ccc...c..ccc...111....ccc..ccc.
    .11d1d....c1d11b....d1111d...c1111111...d1111d....b11b.d1b.c11d...111....111c.d11c
    .11b11....b1b11b...d11d111d..cd111ddd..d11d111d...b11dd11b.c11d...111...b11b..d11c
    .11bd1c...d1c11b..c11b..d11c...d11c...c11b..d11c..b1111dbb.c11d...111..c111...d11c
    .11bb1b...11.11b..b11c..b11b...d11c...b11c..b11b..b111c....c11d...111..d11c...d11c
    .11bc1d..c1d.11b..bd1c..b11b...d11c...bd1c..b11b..b11b.....c11d...111.b11d....d11c
    .11b.1d..b1b.11b........b11b...d11c.........b11b..b11b.....c11d...111c111c....d11c
    .11b.d1..b1c.11b......cb111b...d11c.......cb111b..b11b.....c11d...111d111.....d11c
    c11b.b1c.d1..11b....cd11111b...d11c.....cd11111b..b11b.....c11d...1111111c....d11c
    c11c.c1b.1d..11b...c111bb11b...d11c....c111bb11b..b11b.....c11d...111dc11b....d11c
    c11c.c1dc1b..d1b...111c.b11b...d11c....111c.b11b..b11b.....c11d...111c.111....d11c
    c11c..11b1b..d1d..b11c..b11b...d11c...b11c..b11b..b11b.....c11d...111..b11c...d11c
    c11c..d1d1c..d1d..d11c..b11b...d11c...d11c..b11b..b11b.....c11d...111..c11d...d11c
    c11c..b111...d1d..d11c..b11b...b11c...d11c..b11b..b11b.....c11d...111...d11...d11c
    c11c..c11d...d1d..b111cb111b...b11d...b111cb111b..b11b.....c11d...111...b11b..d11c
    c11c...11b...d1d..c11111b11d...c11111.c11111b11d..b11b.....c11d...111....111..d11c
    c11c...d1c...d1d...b111b.11d....b1111..b111b.11d..b11b.....c11d...111....d11c.d11c
    ....................cc............cc....cc........................................
    `,
img`
    dddddddddddb.................................................................................................
    d1111111111b.............................................................................................d11d
    dddd1111dddb......................................d1111d.................................................d11d
    ...b111d..........................................d1111d.................................................d11d
    ...b111d.................................................................................................bddb
    ...b111d.....................................................................................................
    ...b111d...bbbb...bbb...bbb.bddb....bbbb...bbb.....bddb.....bbbb.bbb...bddb.....bbbb..bdb......bddb...bb.bbbb
    ...b111d...d11d..b111b.b111d1111d...d11d..b111b..d111111b...d11dd11d.b111111b...d11dd1111d...bd11111bd1d.d11d
    ...b111d...d11d..b111b.b111111111b..d11d..b111b.b11111111b..d111111db11111111b..d111111111...d111111111dbd11d
    ...b111d...d11d..b111b.b111d.b111d..d11d..b111b.d11d.b111b..d1111d1dd11d..111d..d111d.d111b.b111b.d11d...d11d
    ...b111d...d11d..b111b.b111b..d11d..d11d..b111bb111b..d11d..d111b...d11d..d11d..d11d..b111b.d11d..b11d...d11d
    ...b111d...d11d..b111b.b111b..d11d..d11d..b111bbd11b..d11d..d11d....d11d..d11d..d11d..b111b.d11d..b111b..d11d
    ...b111d...d11d..b111b.b111b..b111b.d11d..b111b.......d11d..d11d..........d11d..d11d..b111b.d11d..b111b..d11d
    ...b111d...d11d..b111b.b111b..b111b.d11d..b111b.....b1111d..d11d........b1111d..d11d..b111b.d11d..b111b..d11d
    ...b111d...d11d..b111b.b111b..b111b.d11d..b111b...b111111d..d11d......b111111d..d11d..b111b.b11d..b11d...d11d
    ...b111d...d11d..b111b.b111b..b111b.d11d..b111b..d111dd11d..d11d.....d111dd11d..d11d..b111b.b111dbd11d...d11d
    ...b111d...d11d..b111b.b111b..b111b.d11d..b111b.b111b.d11d..d11d....b111b.d11d..d11d..b111b..d1111111b...d11d
    ...b111d...d11d..b111b.b111b..b111b.d11d..b111b.d11b..d11d..d11d....d11d..d11d..d11d..b111b..b11111db....d11d
    ...b111d...d11d..b111b.b111b..d11d..d11d..b111bb111b..d11d..d11d....111b..d11d..d11d..b111b.b11b.........d11d
    ...b111d...d111..b111b.b111b..d11d..d11d..b111bb111b..111d..d11d...b111d..d11d..d11d..b111b.d11dbb.......d11d
    ...b111d...b111bb1111b.b111dbb111d..d111bd1111bb1111d1111d..d11d....d111dd111d..d11d..b111b.d11111111b...d11d
    ...b111d...b111111111b.b111111111b..d111111111b.d11111d11d..d11d....d11111d11d..d11d..b111b..d11111111b..d11d
    ...b111d....d111db111b.b111d1111b...b1111db111b..d111db11d..d11d.....d111db111b.d11d..b111b.bd1dbdd111d..d11d
    .............bb........b111b.bb.......bb..........bbb.................bbb...................d1d.....d11b.....
    .......................b111b...............................................................b11d.....d11b.....
    .......................b111b...............................................................b111dddd111d......
    .......................b111b................................................................d111111111b......
    .......................b111b.................................................................d111111db.......
    .......................bdddb.................................................................................
    `,
img`
    dddddddddddb........................................................................b111b..................
    d1111111111b........................................................................b111b..................
    dddd1111dddb......................................d1111d............................b111b..................
    ...b111d..........................................d1111d............................b111b..................
    ...b111d............................................................................b111b..................
    ...b111d............................................................................b111b..................
    ...b111d...bbbb...bbb...bbb.bddb....bbbb...bbb.....bddb.....bbbb.bbdb...bbbb...bbb..b111b...bbbb.bbb...bbbb
    ...b111d...d11d..b111b.b111d1111d...d11d..b111b..d111111b...d11dd1111b..d11d..b111b.b111b..b111bb111b..d11d
    ...b111d...d11d..b111b.b111111111b..d11d..b111b.b11111111b..d11111111d..d11d..b111b.b111b..d11d.b111b..d11d
    ...b111d...d11d..b111b.b111d.b111d..d11d..b111b.d11d.b111b..d111b.d11d..d11d..b111b.b111b.b111b.b111b..d11d
    ...b111d...d11d..b111b.b111b..d11d..d11d..b111bb111b..d11d..d11d..d11d..d11d..b111b.b111bb111d..b111b..d11d
    ...b111d...d11d..b111b.b111b..d11d..d11d..b111bbd11b..d11d..d11d..d11d..d11d..b111b.b111bd111b..b111b..d11d
    ...b111d...d11d..b111b.b111b..b111b.d11d..b111b.......d11d..d11d..d11d..d11d..b111b.b111d111b...b111b..d11d
    ...b111d...d11d..b111b.b111b..b111b.d11d..b111b.....b1111d..d11d..d11d..d11d..b111b.b1111111b...b111b..d11d
    ...b111d...d11d..b111b.b111b..b111b.d11d..b111b...b111111d..d11d..d11d..d11d..b111b.b1111111d...b111b..d11d
    ...b111d...d11d..b111b.b111b..b111b.d11d..b111b..d111dd11d..d11d..d11d..d11d..b111b.b1111d11d...b111b..d11d
    ...b111d...d11d..b111b.b111b..b111b.d11d..b111b.b111b.d11d..d11d..d11d..d11d..b111b.b111db111b..b111b..d11d
    ...b111d...d11d..b111b.b111b..b111b.d11d..b111b.d11b..d11d..d11d..d11d..d11d..b111b.b111b.d11d..b111b..d11d
    ...b111d...d11d..b111b.b111b..d11d..d11d..b111bb111b..d11d..d11d..d11d..d11d..b111b.b111b.b111b.b111b..d11d
    ...b111d...d111..b111b.b111b..d11d..d11d..b111bb111b..111d..d11d..d11d..d11d..b111b.b111b.b111b.b111b..d11d
    ...b111d...b111bb1111b.b111dbb111d..d111bd1111bb1111d1111d..d11d..d11d..d111bd1111b.b111b..d11d.b111dbd111d
    ...b111d...b111111111b.b111111111b..d111111111b.d11111d11d..d11d..d11d..d111111111b.b111b..b111bb111111111d
    ...b111d....d111db111b.b111d1111b...b1111db111b..d111db11d..d11d..d11d..b1111db111b.b111b...d11d.d1111bd11d
    .............bb........b111b.bb.......bb..........bbb.....................bb......................bbb......
    .......................b111b...............................................................................
    .......................b111b...............................................................................
    .......................b111b...............................................................................
    .......................b111b...............................................................................
    .......................bdddb...............................................................................
    `
]
for (let index = 0; index <= 8; index++) {
    tempSprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . c 9 c . . . . . . 
        . . . . . . c d 9 d c . . . . . 
        . . . b c c d 9 9 9 d c c b . . 
        . . b d d 9 9 9 9 9 9 9 d d b . 
        . . . b c c d 9 9 9 d c c b . . 
        . . . . . . c d 9 d c . . . . . 
        . . . . . . . c 9 c . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.star)
    sprites.setDataNumber(tempSprite, "id", index)
    sprites.setDataImageValue(tempSprite, "image", images2[index])
    tempPositions = positions[index].split(",")
    tempSprite.setPosition(parseFloat(tempPositions[0]) + 7, parseFloat(tempPositions[1]))
}
