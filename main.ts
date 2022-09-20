namespace SpriteKind {
    export const Obsticle = SpriteKind.create()
    export const Car = SpriteKind.create()
    export const eggplayer = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.eggplayer, SpriteKind.Car, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    mySprite.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 8 8 f f f . . . . 
        . . . f f f 8 8 8 8 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 8 8 8 8 8 8 e e f . . 
        . . f e 8 f f f f f f 8 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d 3 3 d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 8 8 8 8 8 8 f 4 e . . 
        . . 4 d f 8 8 8 8 8 8 f d 4 . . 
        . . 4 4 f 8 8 8 8 8 8 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    mySprite.setKind(SpriteKind.Player)
})
info.onCountdownEnd(function () {
    game.splash("Well done,", userInput)
    game.over(true, effects.confetti)
})
info.onLifeZero(function () {
    game.splash("You ran out of lives,", userInput)
    game.over(false, effects.dissolve)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    mySprite.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 8 8 f f f . . . . 
        . . . f f f 8 8 8 8 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 8 8 8 8 8 8 e e f . . 
        . . f e 8 f f f f f f 8 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d b b d d e e f . . 
        . . . f e e b 1 1 b e e f . . . 
        . . e 4 f b 1 3 1 1 b f 4 e . . 
        . . 4 d f c d 1 1 3 c f d 4 . . 
        . . 4 4 f 8 c 3 d c 8 f 4 4 . . 
        . . . . . f f c c f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    mySprite.setKind(SpriteKind.eggplayer)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    Angry_Hen = sprites.create(img`
        . . . . . . . . . . b 1 b . . . 
        . . . . . . . . . b 1 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 1 1 1 1 1 b . . . 
        . . . . b b 1 d 1 f 1 d 4 c . . 
        . . . . b 1 1 1 f f d d 4 4 4 b 
        . . . . b 1 1 d f b 4 4 4 4 b . 
        . . . b 1 1 1 1 1 4 4 4 4 b . . 
        . b b d d 1 1 1 1 1 1 1 1 b . . 
        b d d d b b b 1 1 1 1 1 1 1 b . 
        c d d b 1 1 d c 1 1 1 1 1 1 b . 
        c b b d 1 d c d 1 1 1 1 1 1 b . 
        c b 1 1 b c d d 1 1 1 1 1 1 b . 
        b b c c c d d d 1 1 1 1 1 d b . 
        . . . . c c d d d 1 1 1 b b . . 
        . . . . . . c c c c c b b . . . 
        `, SpriteKind.Enemy)
    Angry_Hen.follow(mySprite, 20)
    Angry_Hen.setPosition(1, 1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.splash("Watch out! You lost a life")
    mySprite.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 8 8 f f f . . . . 
        . . . f f f 8 8 8 8 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 8 8 8 8 8 8 e e f . . 
        . . f e 8 f f f f f f 8 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d 3 3 d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 8 8 8 8 8 8 f 4 e . . 
        . . 4 d f 8 8 8 8 8 8 f d 4 . . 
        . . 4 4 f 8 8 8 8 8 8 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    mySprite.setKind(SpriteKind.Player)
    mySprite.setPosition(20, 120)
    info.changeLifeBy(-1)
})
let Egg: Sprite = null
let Angry_Hen: Sprite = null
let mySprite: Sprite = null
let userInput = ""
userInput = game.askForString("What is your name?")
tiles.setCurrentTilemap(tilemap`level1`)
game.showLongText("Welcome to your chicken farm", DialogLayout.Bottom)
game.showLongText("You woke up extremely late today and have to collect as many eggs as possible in 60s ", DialogLayout.Bottom)
game.showLongText("By collecting one egg, you will harvest all of them.", DialogLayout.Bottom)
game.showLongText("You then must deposit them in the egg car before you can collect more.", DialogLayout.Bottom)
game.showLongText("Beware of the angry hens that might chase after you!", DialogLayout.Bottom)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 8 8 f f f . . . . 
    . . . f f f 8 8 8 8 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 8 8 8 8 8 8 e e f . . 
    . . f e 8 f f f f f f 8 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d 3 3 d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 8 8 8 8 8 8 f 4 e . . 
    . . 4 d f 8 8 8 8 8 8 f d 4 . . 
    . . 4 4 f 8 8 8 8 8 8 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 6 6 6 6 . . 
    . . . . . 6 c 6 6 6 6 6 6 9 6 . 
    . . . . 6 c c 6 6 6 6 6 6 9 c 6 
    . . d 6 9 c c 6 9 9 9 9 9 9 c c 
    . d 6 6 9 c b 8 8 8 8 8 8 8 6 c 
    . 6 6 6 9 b 8 8 b b b 8 b b 8 6 
    . 6 6 6 6 6 8 b b b b 8 b b b 8 
    . 6 6 6 6 8 6 6 6 6 6 8 6 6 6 8 
    . 6 d d 6 8 f 8 8 8 f 8 8 8 8 8 
    . d d 6 8 8 8 f 8 8 f 8 8 8 8 8 
    . 8 8 8 8 8 8 8 f f f 8 8 8 8 8 
    . 8 8 8 8 f f f 8 8 8 8 f f f f 
    . . . 8 f f f f f 8 8 f f f f f 
    . . . . f f f f . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Car)
mySprite.setPosition(50, 50)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
info.setScore(0)
info.setLife(3)
info.startCountdown(60)
Angry_Hen = sprites.create(img`
    . . . . . . . . . . b 1 b . . . 
    . . . . . . . . . b 1 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 1 1 1 1 1 b . . . 
    . . . . b b 1 d 1 f 1 d 4 c . . 
    . . . . b 1 1 1 f f d d 4 4 4 b 
    . . . . b 1 1 d f b 4 4 4 4 b . 
    . . . b 1 1 1 1 1 4 4 4 4 b . . 
    . b b d d 1 1 1 1 1 1 1 1 b . . 
    b d d d b b b 1 1 1 1 1 1 1 b . 
    c d d b 1 1 d c 1 1 1 1 1 1 b . 
    c b b d 1 d c d 1 1 1 1 1 1 b . 
    c b 1 1 b c d d 1 1 1 1 1 1 b . 
    b b c c c d d d 1 1 1 1 1 d b . 
    . . . . c c d d d 1 1 1 b b . . 
    . . . . . . c c c c c b b . . . 
    `, SpriteKind.Enemy)
Angry_Hen.follow(mySprite, 20)
Angry_Hen.setPosition(1, 1)
game.onUpdateInterval(1000, function () {
    if (mySprite.kind() == SpriteKind.Player) {
        Egg = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . b b 1 1 1 1 b b . . . . 
            . . . . b 1 1 1 5 5 1 b . . . . 
            . . . b 1 1 1 1 5 5 5 1 b . . . 
            . . . b 1 1 5 1 1 5 5 1 b . . . 
            . . b d 1 1 1 1 1 1 1 1 d b . . 
            . . b d 5 5 1 1 1 1 1 1 d b . . 
            . . b b 5 5 1 1 1 1 5 5 d b . . 
            . . c b b d 1 1 1 5 5 b d c . . 
            . . c d d d d d d b b b d c . . 
            . . c b d d b b d b b d b c . . 
            . . . c d d b b d d d d c . . . 
            . . . . c b d d d d b c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.Food)
        Egg.setPosition(randint(0, 300), randint(0, 300))
    }
})
