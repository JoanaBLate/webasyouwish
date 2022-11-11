
"use strict"

function customError(message, callback) {
    //
    customAlertCore("<b>Error</b>", message, callback)
}

function customAlert(message, callback) {
    //
    customAlertCore("<b>Alert</b>", message, callback)
}

function customAlertCore(title, message, callback) {
    //
    function keyDownHandler(e) {  
        //
        if (e.keyCode == 13) { close(true) }
        //
        if (e.keyCode == 27) { close(false) }
    }
    //
    const box = createCustomBox(keyDownHandler)
    //
    box.head.innerHTML = title 
    //
    box.body.innerHTML = message
    //
    const buttonOk = box.createButton("ok")
    //
    buttonOk.onclick = function() { close(true) }
    //
    function close(value) {  
        //
        box.close()
        //
        if (callback) { callback(value) }
    }
}

