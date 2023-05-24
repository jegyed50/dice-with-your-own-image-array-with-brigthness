input.onButtonPressed(Button.A, function () {
    dice = randint(1, 6)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.pause(200)
    MyImageShow(MyImage)
})
function MyImageShow (pMyImage: number[]) {
    for (let MyRow = 0; MyRow <= 4; MyRow++) {
        for (let MyColum = 0; MyColum <= 4; MyColum++) {
            CurrentBrigthness = pMyImage[MyRow * 5 + MyColum]
            led.plotBrightness(MyColum, MyRow, CurrentBrigthness)
            basic.pause(50)
        }
    }
}
let CurrentBrigthness = 0
let dice = 0
let MyImage2: number[] = []
let MyImage: number[] = []
let MyImageList = [MyImage, MyImage2]
// let MyImageList:  [] []
MyImage = [
0,
10,
20,
30,
40,
50,
60,
70,
80,
90,
100,
110,
120,
130,
140,
150,
160,
170,
180,
190,
200,
210,
220,
230,
240
]
MyImage2 = [0, 1]
// let MyImageList:  [] []
MyImage2 = [
0,
10,
20,
30,
40,
50,
60,
70,
80,
90,
100,
110,
120,
130,
140,
150,
160,
170,
180,
190,
200,
210,
220,
230,
240
]
