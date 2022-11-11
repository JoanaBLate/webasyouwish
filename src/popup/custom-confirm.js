
"use strict"

function customConfirm(message, callback, callback2) {
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
    box.head.innerHTML = "<b>Confirm</b>"
    //
    box.body.innerHTML = message
    //
    const buttonCancel = box.createButton("cancel")
    //
    buttonCancel.onclick = function() { close(false) }
    //
    const buttonOk = box.createButton("ok")
    //
    buttonOk.onclick = function() { close(true) }
    //
    function close(value) {  
        //
        box.close()
        //
        if (value) { 
            if (callback)  { callback() }
        }
        else {
            if (callback2) { callback2() }        
        }
    }
}

