
"use strict"

function namePrompt(message, callback, value) {
    //
    if (value == null  ||  value == undefined) { value = "" }
    //
    value = value.replace("--", "-") // maybe name was adjusted against duplication
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
        //
        const lower = value.toLowerCase()
        //
        if (input.value != lower) { input.value = lower }
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
        if (txt == "") { return false }
        //
        if (txt.length > 30) { return true }
        //
        if ("01234567890-".includes(txt[0])) { return true }
        //
        if (txt.includes("--")) { return true }
        //
        const reference = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890-"
        //
        for (const c of txt) { if (! reference.includes(c)) { return true } }
        //
        return false
    }
}

