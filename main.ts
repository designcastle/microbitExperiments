/**
 * Simple code developed with use of chatGPT 3.5
 * 
 * Tilt board left or right and use A button to check how many times dot touched the edge on left or right side
 * 
 * Initialize variables
 */
// Function to handle dot movement based on tilt
input.onGesture(Gesture.TiltLeft, function () {
    if (x > 0) {
        // Move the dot left if not already at the left edge
        x += -1
        basic.clearScreen()
        led.plot(x, 2)
        if (x <= 0) {
            music.play(music.tonePlayable(784, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        }
    } else {
        // Increment counter when dot reaches the left edge
        counter += 1
    }
})
input.onGesture(Gesture.TiltRight, function () {
    if (x < 4) {
        // Move the dot right if not already at the right edge
        x += 1
        basic.clearScreen()
        led.plot(x, 2)
        if (x >= 4) {
            music.play(music.tonePlayable(784, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        }
    } else {
        // Increment counter when dot reaches the right edge
        counter += 1
    }
})
// Function to display total count when A button is pressed
input.onButtonPressed(Button.A, function () {
    // Display the total count
    basic.showNumber(counter)
})
let counter = 0
let x = 0
// X-coordinate for the center of the board
x = 2
// Display a single red dot in the center of the board
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
