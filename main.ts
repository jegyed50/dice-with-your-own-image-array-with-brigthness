/**
 * MyImageList = [1][MyImage2]
 */
// let MyImageList = [0][MyImage]
function MyImageShowFromImageList (MyImageIndex: number, pMyImageList: number [][]) {
    MyImageShow(pMyImageList[MyImageIndex])
}
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.pause(200)
    MyImageShow(MyImage)
})
function doSomething (list: any[]) {
	
}
input.onButtonPressed(Button.AB, function () {
    dice = randint(1, 6)
})
// MyImageShowFromImageList(1, MyImageList)
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.pause(200)
    MyImageShow(MyImageList[0])
})
function MyImageShow (pMyImage: number[]) {
    for (let MyRow2 = 0; MyRow2 <= 4; MyRow2++) {
        for (let MyColum2 = 0; MyColum2 <= 4; MyColum2++) {
            CurrentBrigthness = pMyImage[MyRow2 * 5 + MyColum2]
            led.plotBrightness(MyColum2, MyRow2, CurrentBrigthness)
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
MyImage2 = [
255,
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
let game_register = {
    'googolplex': 100,
    'terminat0r': 27,
    'r00t': 150,
    'dent': 42,
    'teapot418': 0
}
