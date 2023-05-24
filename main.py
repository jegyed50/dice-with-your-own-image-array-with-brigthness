def MyImageShowFromImageList(pMyImageList: List[Array][Array], MyImageIndex: number):
    MyImageShow(pMyImageList[MyImageIndex])

def on_button_pressed_a():
    basic.clear_screen()
    basic.pause(200)
    MyImageShow(MyImage)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global dice
    dice = randint(1, 6)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    basic.clear_screen()
    basic.pause(200)
    MyImageShowFromImageList(MyImageList, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

def MyImageShow(pMyImage: List[number]):
    global CurrentBrigthness
    for MyRow2 in range(5):
        for MyColum2 in range(5):
            CurrentBrigthness = pMyImage[MyRow2 * 5 + MyColum2]
            led.plot_brightness(MyColum2, MyRow2, CurrentBrigthness)
            basic.pause(50)
CurrentBrigthness = 0
dice = 0
MyImage2: List[number] = []
MyImage: List[number] = []
MyImageList: List[List[number]] = []
MyImageList = [MyImage, MyImage2]
# let MyImageList:  [] []
MyImage = [0,
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
    240]
MyImage2 = [0, 1]
# let MyImageList:  [] []
MyImage2 = [255,
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
    240]