let ready = false;

input.onButtonPressed(Button.AB, function () {
    music.playTone(300, 500);
    basic.showNumber(3);
    basic.pause(300);
    music.playTone(300, 500);
    basic.showNumber(2);
    basic.pause(300);
    music.playTone(300, 500);
    basic.showNumber(1);
    basic.pause(300);

    basic.showIcon(IconNames.Target);
    music.playTone(600, 700);
    basic.clearScreen();

    radio.on();
    radio.setFrequencyBand(50);
    radio.setGroup(128);
    radio.sendString("start");
    ready = true
});

basic.forever(function () {
    if (ready) {
        let x = input.acceleration(Dimension.X);
        let y = input.acceleration(Dimension.Y);
        radio.sendString(x + "," + y + "," + horn + "," + park + "," + autoDrive);
        console.log(autoDrive)
        basic.pause(30)
    }
});

let horn: number = 0
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    . # # # .
    `);
    horn = 1;
    basic.pause(50);
    horn = 0;
    basic.pause(950);
    basic.clearScreen()
});

let autoDrive: number = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("A");
    autoDrive = 1;
    basic.pause(50);
    autoDrive = 0;
    basic.pause(950);
    basic.clearScreen()
});

let park: number = 0
input.onButtonPressed(Button.B, function () {
    basic.showString("P");
    park = 1;
    basic.pause(50);
    park = 0;
    basic.pause(950);
    basic.clearScreen()
});

