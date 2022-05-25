radio.setGroup(13)
radio.setTransmitPower(1)
basic.forever(function () {
    radio.sendNumber(1)
})
