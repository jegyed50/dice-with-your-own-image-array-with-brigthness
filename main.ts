input.onButtonPressed(Button.A, function () {
    dice = randint(1, 6)
    list[dice - 1].showImage(0)
})
let dice = 0
let list: Image[] = []
list = [
images.createImage(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `),
images.createImage(`
    . . . . .
    . . # . .
    . . . . .
    . . # . .
    . . . . .
    `),
images.createImage(`
    . . . . #
    . . . . .
    . . # . .
    . . . . .
    # . . . .
    `),
images.createImage(`
    . . . . .
    . # . # .
    . . . . .
    . # . # .
    . . . . .
    `),
images.createImage(`
    # . . . #
    . . . . .
    . . # . .
    . . . . .
    # . . . #
    `),
images.createImage(`
    . # . # .
    . . . . .
    . # . # .
    . . . . .
    . # . # .
    `)
]
