
"use strict"

function customPrompt(message, callback, value) {
    //
    if (value == null  ||  value == undefined) { value = "" }
    //
    function keyDownHandler(e) {  
        //
        if (e.keyCode == 13) { close(value) }
        //
        if (e.keyCode == 27) { close(null) }
    }
    //
    const box = createCustomBox(keyDownHandler)
    //
    box.head.innerHTML = message
    //
    const input = box.input
    //    
    input.value = value   
    //    
    input.oninput = function () { 
        // oninput only fires when text changes (does not receive ENTER nor ESCAPE)
        if (textIsBad(input.value)) { input.value = value } else { value = input.value }
    }     
    //
    input.focus()
    //
    const buttonCancel = box.createButton("cancel")
    //
    buttonCancel.onclick = function() { close(null) }
    //
    const buttonOk = box.createButton("ok")
    //
    buttonOk.onclick = function() { close(value) }        
    //
    function close(txt) { 
        //
        box.close()
        //
        if (callback) { callback(txt) }
    }
    //
    function textIsBad(txt) { 
        //
        const reference = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$01234567890-_"
        //
        for (const c of txt) { if (! reference.includes(c)) { return true } }
        //
        return false
    }
}

