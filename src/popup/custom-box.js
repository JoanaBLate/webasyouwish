
"use strict"

function createCustomBox(keyDownHandler) {
    //
 // resetKeyboard() // or else, for example, ctrlPressed keeps true
    //
    const onkeyup = document.onkeyup
    const onkeydown = document.onkeydown
    const onkeypress = document.onkeypress
    //
    document.onkeyup = null
    document.onkeydown = null
    document.onkeypress = null
    //
    setTimeout(startBoxListening, 300) // avoids same key stroke closing consecutive boxes
    //
    const overlay = document.createElement("div")
    document.body.appendChild(overlay)
    //
    overlay.style.display = "inline-flex"
    overlay.style.flexWrap = "wrap"
    overlay.style.justifyContent = "space-around"
    overlay.style.alignItems = "center"
    //
    overlay.style.position = "fixed"
    overlay.style.width = "100%"
    overlay.style.height = "100vh"
    overlay.style.left = 0
    overlay.style.top = 0
    overlay.style.zIndex = "90"
    overlay.style.fontFamily = "Montserrat, sans-serif"
    overlay.style.backgroundColor = "rgba(200,200,200,0.85)"
    //
    //
    const box = document.createElement("div")
    overlay.appendChild(box)
    //    
    box.style.padding = "8px"
    box.style.width = "100%"
    box.style.maxWidth = "550px"
    box.style.height = "auto" 
    box.style.outline = "none" 
    box.style.borderRadius = "7px"
    box.style.backgroundColor = "black"
    //
    //
    const head = document.createElement("div")
    box.appendChild(head)
    //
    head.style.padding = "20px 20px 30px 20px"
    head.style.fontSize = "22px"
    overlay.style.color = "gainsboro"
    head.style.backgroundColor = "#666666"
    //
    //
    const body = document.createElement("div")
    box.appendChild(body)
    //
    body.style.padding = "30px 20px"
    body.style.fontSize = "16px"
    body.style.color = "white"
    body.style.backgroundColor = "#333333"
    //
    //
    const input = document.createElement("input")
    body.appendChild(input)
    //
    input.style.width = "100%"
    input.style.padding = "5px 10px"
    input.style.fontSize = "22px"
    input.style.color = "black"
    input.style.backgroundColor = "white"
    //
    //
    const foot = document.createElement("div")
    foot.style.padding = "15px 20px 10px 20px"
    foot.style.textAlign = "right"
    foot.style.backgroundColor = "#666666"
    box.appendChild(foot)
    //
    //    
    function createButton(txt) {
        //
        const button = document.createElement("button")
        foot.appendChild(button)
        //
        button.innerText = txt
        button.style.width = "80px"
        button.style.padding = "5px 0"
        button.style.margin = "10px 0px 10px 20px"
        button.style.fontSize = "18px"
        button.style.fontWeight = "500"
        button.style.borderRadius = "5px"
        button.className = "custom-box-button"
        //
        return button
    }
    //
    function close() {
        //
        document.onkeyup = onkeyup
        document.onkeydown = onkeydown
        document.onkeypress = onkeypress
        //
        document.body.removeChild(overlay)
    }
    //
    return {
        //
        "head": head,
        "body": body,
        "input": input,
        "foot": foot,
        "close": close,
        "createButton": createButton    
    }
    //
    //
    function startBoxListening() { 
        //
        document.onkeydown = function(e) {  
            //  
            const low = e.key.toLowerCase()
            //
            if (e.ctrlKey || e.altKey || low == "enter"  || low == "escape") {
                //
                e.preventDefault()  // necessary to avoid CTRL S saves the webpage
                e.stopPropagation() // necessary to avoid send keystrokes forward
            }
            //
            keyDownHandler(e)
        }
    }
}

