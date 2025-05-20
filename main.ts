let ready = false

input.onButtonPressed(Button.AB, function () {
    music.playTone(300, 500)
    basic.showNumber(3)
    basic.pause(300)
    music.playTone(300, 500)
    basic.showNumber(2)
    basic.pause(300)
    music.playTone(300, 500)
    basic.showNumber(1)
    basic.pause(300)

    basic.showIcon(IconNames.Target)
    music.playTone(600, 700)
    basic.clearScreen()

    radio.on()
    radio.setFrequencyBand(50)
    radio.setGroup(128)
    radio.sendString("start")
    ready = true
})

basic.forever(function () {
    if (ready) {
        let x = input.acceleration(Dimension.X)
        let y = input.acceleration(Dimension.Y)
        radio.sendString(x + "," + y)
        basic.pause(30)
    }
})

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    . # # # .
    `)
    radio.sendNumber(6057)
    basic.pause(1000)
    basic.clearScreen()
})

input.onButtonPressed(Button.A, function () {
    
})

input.onButtonPressed(Button.B, function () {
    radio.sendString("park");
    basic.showString("P");
    basic.pause(1000);
    basic.clearScreen()
})