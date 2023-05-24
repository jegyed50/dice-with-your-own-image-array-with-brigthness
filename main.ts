input.onButtonPressed(Button.A, function () {
    dice = randint(1, 6)
})
input.onButtonPressed(Button.B, function () {
	
})
function MyImageShow () {
    for (let MyColum = 0; MyColum <= 4; MyColum++) {
        for (let MyRow = 0; MyRow <= 4; MyRow++) {
            CurrentBrigthness = MyImage[MyColum * 4 + MyRow]
            led.plotBrightness(MyColum, MyRow, CurrentBrigthness)
        }
    }
}
let CurrentBrigthness = 0
let dice = 0
let MyImage: number[] = []
let list = [MyImage]
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
