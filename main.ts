function makeEnemy(){
let evilburger = sprites.create(img`
    . . . . c c c b b b b b . . . .
    . . c c b 4 4 4 4 4 4 b b b . .
    . c c 4 4 4 4 4 5 4 4 4 4 b c .
    . e 4 4 4 4 4 4 4 4 4 5 4 4 e .
    e b 4 5 4 4 5 4 4 4 4 4 4 4 b c
    e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e
    e b b 4 4 4 4 4 4 4 4 4 4 4 b e
    . e b 4 4 4 4 4 5 4 4 4 4 b e .
    8 7 e e b 4 4 4 4 4 4 b e e 6 8
    8 7 2 e e e e e e e e e e 2 7 8
    e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e
    e c 6 7 6 6 7 7 7 6 6 7 6 c c e
    e b e 8 8 c c 8 8 c c c 8 e b e
    e e b e c c e e e e e c e b e e
    . e e b b 4 4 4 4 4 4 4 4 e e .
    . . . c c c c c e e e e e . . .
`,SpriteKind.Enemy)

evilburger. vx =40
evilburger. vy =60
evilburger .x = randint(0, 160)
evilburger.setFlag(SpriteFlag.BounceOnWall, true)
evilburger. ay = 70


}









controller.left.onEvent(ControllerButtonEvent.Pressed, function()
{

fish.setImage(fishleftimg)

})

controller.right.onEvent(ControllerButtonEvent.Pressed, function()
{

fish.setImage(fishrightimg)

})



    




let fishleftimg = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . c c c c . . . .
    . . . . . . c c d d d d c . . .
    . . . . . c c c c c c d c . . .
    . . . . c c 4 4 4 4 d c c . . .
    . . . c 4 d 4 4 4 4 4 1 c . c c
    . . c 4 4 4 1 4 4 4 4 d 1 c 4 c
    . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c
    f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f
    f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f
    f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f
    . f 4 4 4 4 1 c 4 f 4 d f f f f
    . . f f 4 d 4 4 f f 4 c f c . .
    . . . . f f 4 4 4 4 c d b c . .
    . . . . . . f f f f d d d c . .
    . . . . . . . . . . c c c . . .
`
let fishrightimg = fishleftimg.clone()

fishrightimg.flipX()
let fish = sprites.create (fishleftimg,SpriteKind.Player)
fish.y = 110
controller.moveSprite(fish,100,0)
fish.setStayInScreen(true)
makeEnemy()
