
"use strict"

function customChoose(message, callback, options) {
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
    box.head.innerHTML = message
    //
    const selector = createSelector(options.classname, null)
    //    
    fillSelector(selector, options.values, options.texts)   
    //
    const value = options.value
    //
    if (value != null  ||  value != undefined) { selector.value = value }
    //
    box.body.innerHTML = ""
    //
    box.body.appendChild(selector)
    //
    selector.focus()
    //
    const buttonCancel = box.createButton("cancel")
    //
    buttonCancel.onclick = function() { close(false) }
    //
    const buttonOk = box.createButton("ok")
    //
    buttonOk.onclick = function() { close(true) }        
    //
    function close(ok) { 
        //
        box.close()
        //
        if (! callback) { return }
        //
        if (ok) { callback(selector.value) } else { callback(null) }
    }
}

