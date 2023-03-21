// # Copyright (c) 2022-2023 Feudal Code Limitada # 

"use strict"

// ## file: editor/popup/custom-color-picker.js ##

function customColorPicker(message, callback, color) {
    //
    if (! color) { color = "255-140-50" }
    //
    const channels = color.split("-")
    //
    const box = createCustomBox(keyDownHandler)
    //
    box.head.innerHTML = message
    //
    box.body.style.textAlign = "center"
    //
    box.appendBreak()
    //
    const frame = document.createElement("div")
    frame.style.border = "2px solid lightgrey"
    box.body.appendChild(frame)
    //
    const colorSample = document.createElement("div")
    colorSample.style.height = "100px"
    colorSample.style.border = "2px solid black"
    frame.appendChild(colorSample)
    //
    box.appendBreak()
    box.appendBreak()
    box.appendBreak()
    //
    const selectors = document.createElement("div")
    selectors.style.display = "inline-flex"
    selectors.style.justifyContent = "space-around"
    box.body.appendChild(selectors)
    //
    const redSelector = createChannelSelector("red", channels[0])
    //
    const greenSelector = createChannelSelector("green", channels[1])
    //
    const blueSelector = createChannelSelector("blue", channels[2])
    //
    box.appendBreak()
    //
    updateColorSample()
    //
    const buttonCancel = box.createFootButton("cancel")
    //
    buttonCancel.onclick = function() { close(false) }
    //
    const buttonOk = box.createFootButton("ok")
    //
    buttonOk.onclick = function() { close(true) }
    //
    function createChannelSelector(name, initial) {
        //
        const div = document.createElement("div")
        div.style.width = "auto"
        //
        const selector = createChannelSelectorCore(initial)
        //
        const div2 = document.createElement("div")
        div2.innerText = name
        div2.style.diplay="inline-block"
        div2.style.textAlign = "center"
        //
        div.appendChild(selector)
        div.appendChild(document.createElement("br"))
        div.appendChild(div2)
        //
        selectors.appendChild(div)
        //
        return selector
    }
    //
    function createChannelSelectorCore(_initial) {
        //
        const initial = 5 * Math.round(_initial / 5)
        //
        const selector = document.createElement("select")
        //
        selector.style.width = "70px"
        selector.style.padding = "5px"
        selector.style.textAlign = "right"
        selector.style.fontSize = "18px"
        selector.style.color = "black"
        selector.style.backgroundColor = "white"
        //
        for (let n = 0; n < 256; n += 5) {
            //
            const option = document.createElement("option")
            option.text = n
            selector.appendChild(option)
        }
        //
        selector.value = initial
        //
        selector.onchange = updateColorSample
        //
        return selector
    }
    //
    function updateColorSample() {
        //
        colorSample.style.backgroundColor =
        //
        "rgb(" + [ redSelector.value, greenSelector.value, blueSelector.value ].join(",") + ")"
    }
    //
    function keyDownHandler(e) {
        //
        const low = e.key.toLowerCase()
        //
        if (low == "enter")  { close(true); return false }
        //
        if (low == "escape") { close(false); return false }
        //
        if (low == "f5")  { return true }
        //
        if (low == "f12") { return true }
        //
        return false
    }
    //
    function close(proceed) {
        //
        box.close()
        //
        let val = [ redSelector.value, greenSelector.value, blueSelector.value ].join("-")
        //
        if (! proceed) { val = null }
        //
        if (callback)  { callback(val) }
    }
}


// ## file: editor/popup/custom-box.js ##

function createCustomBox(keyDownHandler) {
    //
 // resetKeyboard() // or else, for example, ctrlPressed keeps true (BobSprite)
    //
    const onkeyup = document.onkeyup
    const onkeydown = document.onkeydown
    const onkeypress = document.onkeypress
    //
    document.onkeyup = null
    document.onkeydown = null
    document.onkeypress = null
    //
    const overlay = document.createElement("div")
    document.body.appendChild(overlay)
    //
    overlay.onclick = function (e) { e.stopPropagation() }
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
    const box = document.createElement("div")
    overlay.appendChild(box)
    //
    box.style.padding = "8px"
    box.style.margin = "40px 0"
    box.style.width = "100%"
    box.style.maxWidth = "550px"
    box.style.height = "auto"
    box.style.outline = "none"
    box.style.borderRadius = "7px"
    box.style.backgroundColor = "black"
    //
    const head = document.createElement("div")
    box.appendChild(head)
    //
    head.style.padding = "20px 20px 30px 20px"
    head.style.fontSize = "22px"
    overlay.style.color = "gainsboro"
    head.style.backgroundColor = "#666666"
    //
    const body = document.createElement("div")
    box.appendChild(body)
    //
    body.style.padding = "30px 20px"
    body.style.fontSize = "16px"
    body.style.fontWeight = "500"
    body.style.color = "white"
    body.style.backgroundColor = "#333333"
    //
    const foot = document.createElement("div")
    box.appendChild(foot)
    //
    foot.style.padding = "15px 20px 10px 20px"
    foot.style.textAlign = "right"
    foot.style.backgroundColor = "#666666"
    //
    setTimeout(function () { document.onkeydown = keyDownHandler }, 300) // avoids same key stroke closing consecutive boxes
    //
    function createDiv() {
        //
        const div = document.createElement("div")
        body.appendChild(div)
        //
        return div
    }
    //
    function createInput() {
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
        return input
    }
    //
    function createSelector() {
        //
        const selector = document.createElement("select")
        body.appendChild(selector)
        //
        selector.style.width = "100%"
        selector.style.padding = "5px 10px"
        selector.style.fontSize = "22px"
        selector.style.color = "black"
        selector.style.backgroundColor = "white"
        //
        return selector
    }
    //
    function createOpenSelector() {
        //
        const openSelector = document.createElement("div")
        body.appendChild(openSelector)
        //
        openSelector.style.width = "100%"
        openSelector.style.overflowY = "auto"
        openSelector.style.fontSize = "22px"
        openSelector.style.color = "black"
        openSelector.style.backgroundColor = "white"
        //
        return openSelector
    }
    //
    function createBodyButton(txt, width) {
        //
        const button = createButton(txt)
        body.appendChild(button)
        //
        if (width) { button.style.width = width }
        //
        return button
    }
    //
    function createFootButton(txt) {
        //
        const button = createButton(txt)
        foot.appendChild(button)
        //
        return button
    }
    //
    function createButton(txt) {
        //
        const button = document.createElement("button")
        //
        button.innerText = txt
        button.style.width = "80px"
        button.style.padding = "5px 0"
        button.style.margin = "10px 0px 10px 20px"
        button.style.fontSize = "18px"
        button.style.fontWeight = "500"
        button.style.borderRadius = "5px"
        button.style.border = "2px solid transparent"
        //
        colorDark()
        bgColorLight()
        borderTransparent()
        //
        button.onmouseenter = function () { colorDark(); bgColorSilver(); borderTransparent() }
        button.onmousedown = function () { colorLightgrey(); bgColorGrey(); borderBlack() }
        button.onmouseup = function () { colorDark(); bgColorSilver(); borderTransparent() }
        button.onmouseleave = function () { colorDark(); bgColorLight(); borderTransparent() }
        //
        function colorDark() { button.style.color = "#222222" }
        //
        function colorLightgrey() { button.style.color = "lightgrey" }
        //
        function bgColorGrey() { button.style.backgroundColor = "grey" }
        //
        function bgColorLight() { button.style.backgroundColor = "rgb(245,245,235)" }
        //
        function bgColorSilver() { button.style.backgroundColor = "silver" }
        //
        function borderBlack() { button.style.border = "2px solid black" }
        //
        function borderTransparent() { button.style.border = "2px solid transparent" }
        //
        return button
    }
    //
    function close() {
        //
        if (overlay.parentNode != document.body) { return } // should not happen, but happened once
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
        "foot": foot,
        "close": close,
        "createDiv": createDiv,
        "appendBreak": function () { body.appendChild(document.createElement("br")) },
        "createInput": createInput,
        "createSelector": createSelector,
        "createBodyButton": createBodyButton,
        "createFootButton": createFootButton,
        "createOpenSelector": createOpenSelector
    }
}


// ## file: editor/popup/custom-alert.js ##

function customAbort(message, callback) {
    //
    customMessage("<b>Aborting</b>", message, callback)
}

function customAlert(message, callback) {
    //
    customMessage("<b>Alert</b>", message, callback)
}

function customError(message, callback) {
    //
    customMessage("<b>Error</b>", message, callback)
}

function customMessage(title, message, callback) {
    //
    const box = createCustomBox(keyDownHandler)
    //
    box.head.innerHTML = title
    //
    box.body.innerHTML = message
    //
    if (message == "") { box.body.style.display = "none" }
    //
    const buttonOk = box.createFootButton("ok")
    //
    buttonOk.onclick = function () { close() }
    //
    function keyDownHandler(e) {
        //
        const low = e.key.toLowerCase()
        //
        if (low == "enter")  { close(); return false }
        //
        if (low == "escape") { close(); return false }
        //
        if (low == "f5")  { return true }
        //
        if (low == "f12") { return true }
        //
        return false
    }
    //
    function close() { box.close(); if (callback) { callback() } }
}


// ## file: editor/popup/custom-choose.js ##

function customChoose(message, callback, values, texts, value) {
    //
    const box = createCustomBox(keyDownHandler)
    //
    box.head.innerHTML = message
    //
    const selector = box.createSelector()
    //
    const off = values.length
    //
    for (let n = 0; n < off; n++) {
        //
        const option = document.createElement("option")
        option.value = values[n]
        option.text = (texts) ? texts[n] : values[n]
        selector.appendChild(option)
    }
    //
    if (value) { selector.value = value }
    //
    const buttonCancel = box.createFootButton("cancel")
    //
    buttonCancel.onclick = function() { close(false) }
    //
    const buttonOk = box.createFootButton("ok")
    //
    buttonOk.onclick = function() { close(true) }
    //
    function keyDownHandler(e) {
        //
        const low = e.key.toLowerCase()
        //
        if (low == "enter")  { close(true); return false }
        //
        if (low == "escape") { close(false); return false }
        //
        if (low == "arrowup") { changeSelected(-1); return false }
        //
        if (low == "arrowdown") { changeSelected(+1); return false }
        //
        if (low == "f5")  { return true }
        //
        if (low == "f12") { return true }
        //
        return false
    }
    //
    function changeSelected(delta) {
        //
        let index = selector.selectedIndex + delta
        //
        if (index < 0) { index = 0 }
        //
        const max = selector.children.length - 1
        //
        if (index > max) { index = max }
        //
        selector.selectedIndex = index
    }
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


// ## file: editor/popup/custom-confirm.js ##

function safeConfirm(message, callback, callback2) {
    //
    customConfirmCore(true, message, callback, callback2)
}

function customConfirm(message, callback, callback2) {
    //
    customConfirmCore(false, message, callback, callback2)
}

function customConfirmCore(safe, message, callback, callback2) {
    //
    const box = createCustomBox(keyDownHandler)
    //
    box.head.innerHTML = "<b>Confirm</b>"
    //
    box.body.innerHTML = message
    //
    const buttonCancel = box.createFootButton("cancel")
    //
    buttonCancel.onclick = function() { close(false) }
    //
    const buttonOk = box.createFootButton("ok")
    //
    buttonOk.onclick = function() { close(true) }
    //
    function keyDownHandler(e) {
        //
        const low = e.key.toLowerCase()
        //
        if (low == "enter"  &&  ! safe)  { close(true); return false }
        //
        if (low == "escape") { close(false); return false }
        //
        if (low == "f5")  { return true }
        //
        if (low == "f12") { return true }
        //
        return false
    }
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


// ## file: editor/popup/custom-pick.js ##

function customPick(message, callback, values, texts, value) {
    //
    if (! texts) { texts = values.splice(0) }
    //
    let selectedIndex = Math.max(0, values.indexOf(value))
    //
    const box = createCustomBox(keyDownHandler)
    //
    box.head.innerHTML = message
    //
    const openSelector = box.createOpenSelector()
    //
    const off = values.length
    //
    for (let n = 0; n < off; n++) {
        //
        const option = createOption(texts[n], n)
        openSelector.appendChild(option)
    }
    //
    updateOptionsColors()
    //
    const buttonCancel = box.createFootButton("cancel")
    //
    buttonCancel.onclick = function() { close(false) }
    //
    const buttonOk = box.createFootButton("ok")
    //
    buttonOk.onclick = function() { close(true) }
    //
    function keyDownHandler(e) {
        //
        const low = e.key.toLowerCase()
        //
        if (low == "enter")  { close(true); return false }
        //
        if (low == "escape") { close(false); return false }
        //
        if (low == "home"  ||  low == "pageup")   { changeSelected(-9999); return false }
        //
        if (low == "end"   ||  low == "pagedown") { changeSelected(+9999); return false }
        //
        if (low == "arrowup") { changeSelected(-1); return false }
        //
        if (low == "arrowdown") { changeSelected(+1); return false }
        //
        if (low == "f5")  { return true }
        //
        if (low == "f12") { return true }
        //
        return false
    }
    //
    function changeSelected(delta) {
        //
        let index = selectedIndex + delta
        //
        if (index < 0) { index = 0 }
        //
        const max = values.length - 1
        //
        if (index > max) { index = max }
        //
        selectedIndex = index
        //
        updateOptionsColors()
    }
    //
    function close(ok) {
        //
        box.close()
        //
        if (! callback) { return }
        //
        if (ok) { callback(values[selectedIndex]) } else { callback(null) }
    }
    //
    function createOption(text, index) {
        //
        const option = document.createElement("div")
        //
        option.style.display = "inline-block"
        option.style.width = "100%"
        option.style.padding = "5px 0 5px 10px"
        option.innerText = text
        //
        option.onclick = function() {
            //
            if (index == selectedIndex) { close(true); return }
            //
            selectedIndex = index; updateOptionsColors()
        }
        //
        return option
    }
    //
    function updateOptionsColors() {
        //
        let index = 0
        //
        for (const child of openSelector.children) {
            //
            let color = "black"
            let bgColor = "transparent"
            //
            if (index == selectedIndex) { color = "white"; bgColor = "dodgerblue" }
            //
            child.style.color = color
            child.style.backgroundColor = bgColor
            //
            index += 1
        }
    }
}


// ## file: editor/popup/custom-prompt.js ##

function customPositiveInteger(message, callback, value) {
    //
    customPromptCore(textIsBad, message, callback, value)
    //
    function textIsBad(txt) {
        //
        const reference = "01234567890"
        //
        for (const c of txt) { if (! reference.includes(c)) { return true } }
        //
     // if (txt[0] == "0") { return true }
        //
        return false
    }
}

function liberalPrompt(message, callback, value) {
    //
    customPromptCore(textIsBad, message, callback, value)
    //
    function textIsBad(txt) {
        //
        for (const c of txt) {
            //
            if (c < " ") { return true }
        }
        //
        return false
    }
}

function customPrompt(message, callback, value) {
    //
    customPromptCore(textIsBad, message, callback, value)
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

function namePrompt(message, callback, value) {
    //
    if (value == null  ||  value == undefined) { value = "" }
    //
    value = value.replace("--", "-") // maybe name was adjusted against duplication
    //
    customPromptCore(textIsBad, message, callback, value)
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


// ## file: editor/popup/custom-prompt-core.js ##

function customPromptCore(textIsBad, message, callback, value) {
    //
    if (value == null  ||  value == undefined) { value = "" }
    //
    const box = createCustomBox(keyDownHandler)
    //
    box.head.innerHTML = message
    //
    const input = box.createInput()
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
    const buttonCancel = box.createFootButton("cancel")
    //
    buttonCancel.onclick = function() { close(null) }
    //
    const buttonOk = box.createFootButton("ok")
    //
    buttonOk.onclick = function() { close(value) }
    //
    function keyDownHandler(e) {
        //
        if (e.altKey)  { return false }
        if (e.ctrlKey) { return false }
        //
        const low = e.key.toLowerCase()
        //
        if (low == "enter")  { close(value); return false }
        //
        if (low == "escape") { close(null); return false }
        //
        if (low == "f5")  { return true }
        //
        if (low == "f12") { return true }
        //
        return true // false
    }
    //
    function close(val) {
        //
        box.close()
        //
        if (callback) { callback(val) }
    }
}


// ## file: editor/popup/custom-report.js ##

function customReport(message, callback, data) {
    //
    const box = createCustomBox(keyDownHandler)
    //
    box.head.innerHTML = message
    //
    const mural = document.createElement("div")
    //
    box.body.appendChild(mural)
    //
    mural.style.padding = "10px"
    //
    mural.style.color = "black"
    //
    mural.style.backgroundColor = "white"
    //
    let s = ""
    //
    for (const item of data) {
        //
        if (s != "") { s += "<br><br>" }
        //
        const index = item.indexOf(":") + 1
        //
        s += "<b>" + item.substr(0, index) + "</b> " + item.substr(index)
    }
    //
    mural.innerHTML = s
    //
    const buttonOk = box.createFootButton("ok")
    //
    buttonOk.onclick = function() { close(true) }
    //
    function keyDownHandler(e) {
        //
        const low = e.key.toLowerCase()
        //
        if (low == "enter")  { close(true); return false }
        //
        if (low == "escape") { close(false); return false }
        //
        if (low == "f5")  { return true }
        //
        if (low == "f12") { return true }
        //
        return false
    }
    //
    function close() {
        //
        box.close()
        //
        if (callback) { callback() }
    }
}


// ## file: editor/css/atomic.js ##

// TRUE ATOMIC - just one single declaration per rule

const atomicDeclarations = { // just for efficiency
    //
    "b":    "background-color: transparent;", // reserved // absence means inherit
 // "c":    "color: _;", // absence means inherit
    "dn":   "display: none;",
    "dib":  "display: inline-block;",
    "dif":  "display: inline-flex;",
 // "ff_":  "font-family: _;"
 // "fs_":  "font-size: _;"
    "h":    "height: 100%;",
    "hm":   "min-height: 100%;",
    "ha":   "height: auto;",
 // "ip_":  "background-position: _;"
 // "iu_":  "background-image: url_;" // FILTERED OFF at parsing, pseudo atomic, non-universal
    "jcsb": "justify-content: space-between;",
    "ofd":  "object-fit: scale-down;",
    "ofn":  "object-fit: none;", // original image
    "oft":  "object-fit: contain;",
    "ofv":  "object-fit: cover;", // the default
 // "op_":  "object-position: _;"
 // "m_":   "margin: _;"
    "oxa":  "overflow-x: auto;",
    "oxh":  "overflow-x: hidden;",
    "oxs":  "overflow-x: scroll;",
    "oya":  "overflow-y: auto;",
    "oyh":  "overflow-y: hidden;",
    "oys":  "overflow-y: scroll;",
    "p":    "padding: 0",
    "pt":   "padding-top: 0",
    "pl":   "padding-left: 0",
    "pb":   "padding-bottom: 0",
    "pr":   "padding-right: 0",
 // "p_":   "padding: _;"
    "w":    "width: 100%;",
    "wa":   "width: auto;",
    "wx":   "max-width: 100%;",
    "tal":  "text-align: left;",
    "tac":  "text-align: center;",
    "tar":  "text-align: right;"
}

function makeAtomicDeclaration(clas) {
    //
    const res = atomicDeclarations[clas]
    //
    if (res != undefined) { return res }
    //
    const atomic = makeAtomicDeclaration2(clas)
    //
    if (atomic != null) { atomicDeclarations[clas] = atomic }
    //
    return atomic
}

function makeAtomicDeclaration2(clas) { // not for default classes (w, hm, c...)
    //
    if (clas[0] == "b") { return atomicBgColor(clas) }
    //
    if (clas[0] == "c") { return atomicColor(clas) }
    //
    if (clas[0] == "h") { return atomicDimension(clas, "height") }
    //
    if (clas[0] == "w") { return atomicDimension(clas, "width") }
    //
    if (clas.startsWith("fs")) { return atomicFontSize(clas) }
    //
    if (clas.startsWith("ip")) { return atomicBackgroundPosition(clas) }
    //
    if (clas.startsWith("op")) { return atomicObjectPosition(clas) }
    //
    return null
}

function atomicBgColor(s) {
    //
    return "background-color: " + colorFromAtomic(s.substr(1)) + ";"
}

function atomicColor(s) {
    //
    return "color: " + colorFromAtomic(s.substr(1)) + ";"
}

function colorFromAtomic(s) { // expecting s != ""
    //
    try { return colorFromAtomicCore(s) } catch (e) { console.log(e); return null }
}

function colorFromAtomicCore(s) {
    //
    const list = s.split("-")
    //
    if (list.length != 3) { return null }
    //
    return "rgb(" + list[0] + "," + list[1] + "," + list[2] + ")"
}

function atomicDimension(clas, dim) {
    //
    let prefix = ""
    //
    let s = clas.substr(1)
    //
    if (s[0] == "m") { prefix = "min-"; s = s.substr(1) }
    //
    if (s[0] == "x") { prefix = "max-"; s = s.substr(1) }
    //
    return prefix + dim + ": " + dimensionFromAtomic(s) + ";"
}

function dimensionFromAtomic(s) {
    //
    const number = parseInt(s)
    //
    if (s.endsWith("r"))  { return "calc(" + number + "rem / 16)" }
    //
    if (s.endsWith("pc")) { return number + "%" }
    //
    return number + "px"
}

function atomicObjectPosition(clas) {
    //
    const s = clas.substr(2)
    //
    const left = parseInt(s)
    //
    if (isNaN(left)) { return null }
    //
    const top = parseInt(s.replace(""+left, "").substr(1)) // strips '-'
    //
    if (isNaN(top)) { return null }
    //
    if (s != left + "-" + top) { return null }
    //
    return "object-position: " + left + "% " + top + "%;"
}

function atomicBackgroundPosition(clas) {
    //
    const s = atomicObjectPosition(clas)
    //
    return (s == null) ? null : s.replace("object", "background")
}

function atomicFontSize(clas) { // always converted to rem - need not the posfix 'r'
    //
    const size = parseInt(clas.substr(2))
    //
    if (isNaN(size)) { return null }
    //
    if (size < 12) { return null }
    //
    return "font-size: calc(" + size + "rem / 16);"
}


// ## file: editor/css/molecular.js ##

// all molecular classes are built in the WAYW editor

const molecularClasses = [
    //
    "-anim-bounce", "-anim-spin",
    //
    "-box",
    //
    "-bgimg",
    //
    "-division",
    //
    "-div-arrows-outer", "-div-arrows-inner",
    //
    "-larrow-icon", "-rarrow-icon",
    //
    "-ltbt", "-dkbt",
    //
    "-wa-icon"
]


// ## file: editor/css/templates.js ##

const cssTemplateReset =
`
    <style>
        :root {
            font-size: max(1rem, 16px);
        }
        html {
            height: 100%;
        }
        html, body, body * {
            border: 0;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: inherit;
            vertical-align: top;
            user-select: text;
        }
        body {
            height: 100%;
            min-width: 20rem;
            margin: 0 auto;
            font-size: 1rem;
            font-family: sans-serif;
        }
        div, header, main, nav, footer, h1, h2, h3, h4, h5, h6 {
            display: inline-block;
            width: 100%;
            min-height: 10px;
            overflow: auto;
            text-align: left;
        }
        span, a, p, img, label, button, input {
            display: inline-block;
            width: auto;
            overflow: hidden;
        }
        button, select, textarea, input {
            padding: 5px;
            outline: none;
            font-size: 1rem;
            font-weight: 500;
            color: black;
            background-color: white;
        }
        textarea {
            resize: none;
        }
        img {
            object-fit: cover;
            object-position: center;
        }
    </style>`

const cssTemplateDefault =
`
    <style>
        .-bgimg {
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }
    </style>
    <style>
        header, footer {
            min-height: 100px;
        }
    </style>
    <style>
        .-division {
            min-height: 100px;
            display: inline-flex;
            flex-direction: row;
            padding: 20px 0;
            flex-wrap: wrap;
            justify-content: space-around;
            row-gap: 20px;
        }
        .-box {
            min-height: 100px;
            max-width: min(100%, 50rem);
            align-self: stretch;
            padding: 15px 5px;
            overflow: auto;
            font-size: 1rem;
        }
    </style>
    <style>
        /* px based */
        @media (min-width: 360px) {
            .-box {
                padding-left: 10px;
                padding-right: 10px;
            }
        }
        @media (min-width: 412px) {
            .-box {
                font-size: 1.0625rem;
            }
        }
        @media (min-width: 480px) {
            .-box {
                font-size: 1.125rem;
            }
        }
        @media (min-width: 560px) {
            .-box {
                font-size: 1.1875rem;
            }
        }
        @media (min-width: 640px) {
            .-box {
                padding: 20px 3%;
            }
        }
        @media (min-width: 640px) {
            .-box {
                font-size: 1.25rem;
            }
        }
    </style>
    <style>
        /* rem based */
        @media (min-width: 50rem) {
            .-thin2, .-thin3, .-thin4 {
                width: 45%;
            }
        }
        @media (min-width: 75rem) {
            .-thin3 {
                width: 30%;
            }
        }
        @media (min-width: 100rem) {
            .-division {
                padding-top: 30px;
                padding-bottom: 30px;
                row-gap: 30px;
            }
            .-thin4 {
                width: 22.5%;
            }
        }
    </style>`

const cssTemplateAnimation =
`
    <style>
        @keyframes -keyframe-spin {
            0% { transform: rotate(360deg); }
            100% { transform: rotate(0deg); }
        }
        @keyframes -keyframe-bounce {
            35% { transform: scale(1); }
            45% { transform: scale(1.5); }
            55% { transform: scale(1); }
            65% { transform: scale(1.3); }
            75% { transform: scale(1); }
        }
        .-anim-bounce {
            animation: -keyframe-bounce 3s infinite;
        }
        .-anim-spin {
            animation: -keyframe-spin 3s linear 0s infinite normal;
        }
    </style>`

const cssTemplateWhatsApp =
`
    <style>
        .-wa-icon {
            width: 100%;
            height: 100%;
            min-width: 30px;
            min-height: 30px;
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center center;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;' viewBox='0 0 24 24'%3E%3Cpath d='M4.018,17.048c-0.96,-1.484 -1.518,-3.253 -1.518,-5.151c0,-5.243 4.257,-9.5 9.5,-9.5c5.243,0 9.5,4.257 9.5,9.5c0,5.243 -4.257,9.5 -9.5,9.5c-1.777,0 -3.44,-0.489 -4.863,-1.339l-4.637,1.545l1.518,-4.555Z' style='fill:%23f3f3f3;' /%3E%3Cpath d='M5.795,16.304c-0.886,-1.244 -1.407,-2.765 -1.407,-4.407c0,-4.201 3.411,-7.612 7.612,-7.612c4.201,0 7.612,3.411 7.612,7.612c0,4.201 -3.411,7.611 -7.612,7.611c-1.59,0 -3.066,-0.488 -4.288,-1.323l-2.862,0.954l0.945,-2.835Z' style='fill:%2300a82d;' /%3E%3Cpath d='M9.714,13.873c-1.124,-1.374 -1.874,-3.056 -2.109,-4.88c-0.063,-0.508 0.106,-1.018 0.461,-1.387c0.355,-0.369 0.858,-0.558 1.368,-0.515l0.049,0.005c0,0 0.561,0.15 0.868,0.233c0.122,0.033 0.219,0.124 0.26,0.243c0.138,0.41 0.464,1.373 0.618,1.826c0.05,0.147 0.004,0.31 -0.114,0.41c-0.233,0.196 -0.618,0.52 -0.858,0.723c-0.129,0.109 -0.17,0.29 -0.1,0.443c0.279,0.608 0.635,1.176 1.057,1.69c0.434,0.502 0.933,0.949 1.485,1.327c0.14,0.095 0.325,0.085 0.454,-0.024c0.241,-0.202 0.626,-0.526 0.858,-0.722c0.119,-0.1 0.287,-0.117 0.424,-0.043c0.42,0.228 1.314,0.712 1.694,0.918c0.111,0.06 0.185,0.172 0.196,0.297c0.029,0.317 0.083,0.895 0.083,0.895l-0.004,0.049c-0.044,0.51 -0.315,0.974 -0.739,1.261c-0.424,0.288 -0.955,0.368 -1.445,0.22c-1.772,-0.545 -3.313,-1.581 -4.479,-2.937l-0.027,-0.032Z' style='fill:%23f3f3f3;' /%3E%3C/svg%3E");
        }
    </style>`

const cssTemplateHorizArrows =
`
    <style>
        .-div-arrows-outer {
            background: black;
            text-align: center;
        }
        .-div-arrows-inner {
            display: inline-flex;
            max-width: 1366px;
            justify-content: space-between;
            padding: 0 25px;
        }
        .-larrow-icon {
            width: 25px;
            height: 25px;
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center center;
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAoBJREFUSEvNlcuOaUEUhtem3Q1cBkx7wIBoiReQiNvMM6A1HSSGZuIRvEd7BHNDQbyA7oQwaAwQt5N/JcvZumlO4pycSmTX3lW1vvX/q6ooRHSgv9yU/w6i1WpJr9fTdrulzWZzs/6blTw8PJDX66VwOExvb280mUzuC4GCYDBIxWKRHA4Hlctlen9/vx8ECgKBAOXzeQZ9fn5SLpe7HwQAv99PpVKJfD4f6XQ6mk6nVCgUaDgc/qjkcPi9aS/WBIBQKESZTIaVwDKNRkOKolCz2aSPjw/uIxie+/2en/iNx2NqtVq8QdDOQkQBagAlAGAxIBiDImm73e44BpDRaKR2u00vLy+0Wq3OQxDw6emJiywAzkZRCAExjmDqzNV9QLrdLtftLARZAvD6+nqiQGwRa6AIVuA7mnxH32KxUKfToefn5+8QLMQ5qFQqDMI7spYgyFYUifdQJg0gzDeZTAyBXcvl8tQuqPB4PFSr1ejx8fG4WFSoAWKPegehj8QMBsNluxAME5LJJGdhs9mOu0ltkygCFEG/1kdqclaJZIpJ8XicC+d0Oo+WyTiAAgJE7BTpSLTX6523S32y4GsikaB0Ok1ut5sLi4Bij/opxYfdqBGSBARJfquJGoKFAEWjUd5psE6UQMVoNKLFYsFQsVIOpNVq5SunWq3Ser2+fBgFiO0YiUQom82Sy+Xiz7PZjBqNBp94aaIG79hhUNTv9/nJyV3704J8WIdC2u12ms/nfFn+dHeJwmMS1yCYCOtisRhfjLALELUStdXn+leVyCKAUqkU16ler1+9hU9qfIsSKbrZbObbYDAYcG1ubTcrUZ/4r55fg/0R5FqwS+P/BPILx4ZOECpT3Z0AAAAASUVORK5CYII=");
        }
        .-rarrow-icon {
            width: 25px;
            height: 25px;
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center center;
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAnpJREFUSEvNlUlqckEUha8dmoHNQFEwbiCoOHTuEsw+sgRx5lBQMfZrcBYbBDcgqMRBHDiNA5uBsW/CKbjFs38GfvgL5NlU1VfnnFtXDREd6B8PzX8HMRgMpNfrab1e0263U63/ISUOh4NeX1+p2WzS19cXbbdbVaCHIM/Pz5RIJGg8HlMqlaJ2u61K0cOQXC5HNptNADKZDHW73buKjiAaDT5eHx6Ph97f38lut9Nms6Fer0fJZJI+Pz9vgiQEgYZCIXI6nXQ4HMRLq9WKJ+B4ut1uCofD4v1+vxdWQUmxWKRWq3UVJCEmk4my2SwFg0FaLpcCgI2woU6nk/KgAIHzbwBBCTK6pugIAr/9fr+AnKphZYBjY4DxHYYS1Ol0zorhCJLP5ykQCNDPz49YzFbxe1jKCmAh24h5DEqn0wSQsrwl5OnpSdgFyGKxEIuUhcAnZ4UAQxXPwXwcAIB4PC7uET5jXLRrtVqJCUoIn5qLga3i7zm0wWBA0WiU+v2+VHOm5FImXAS8kbIoGIJDTadT4cbHxwfhoPIg3CDZLp/PJybwYDUsnS3iDTj40WhEKJxqtSoLR+6hhGASIKguZMDhKQuAoXiypd/f31QqlahSqYg8T4e0y2g0UiwWI/Sn2WwmLyIDsKnZbCaXyyV/w2awCBVVr9cFQKnwTAlO7vV6hQJlG1cuwo1/e3sjq9Uq1g+HQyoUCtRoNGTZX2pKZ73rVv9C70JTtFgsNJlMRMiwCPbeGg91YSgBBOGjUdZqtYsZXM1Ezb8PlEQiEeF/uVxWBTi6jGogyOLl5UXc6vl8fjHku5ncA532q3vzz6pL7YK/zHso+L8AsOYXtofPEB1YDbMAAAAASUVORK5CYII=");
        }
    </style>`

const cssTemplateAtomic =
`
        .@class@ { @declarations@ }`

const cssTemplateMQAtomic =
`
            .@class@ { @declarations@ }`

const cssTemplateMediaQueries =
`
    <style>
        @media (max-width: 412px) {@qa-rules@
        }
        @media (min-width: 413px) and (max-width: 1024px) {@qb-rules@
        }
        @media (min-width: 1025px) and (max-width: 1366px) {@qc-rules@
        }
        @media (min-width: 1367px) {@qd-rules@
        }
    </style>`


// ## file: editor/data/builtin-images.js ##

// favicons are not stored because
// - probable name clash
// - they don't appear in the samples

const dataUrls = { // filename: dataUrl
    //
    "blank.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC",

    "golden-lamp.png": "data:image/png;base64,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",


    "deno-cover-large.jpg": "data:image/jpeg;base64,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"

}


// ## file: editor/data/data.js ##

function getNodeById(id) {
    //
    let nodes = [ webpage.body ]
    //
    let futureNodes = [ ]
    //
    while (nodes.length != 0) {
        //
        for (const node of nodes) {
            //
            if (node.id == id) { return node }
            //
            for (const child of node.children) { futureNodes.push(child) }
        }
        //
        nodes = futureNodes
        //
        futureNodes = [ ]
    }
    return null
}

function getParentNode(target) {
    //
    let nodes = [ webpage.body ]
    //
    let futureNodes = [ ]
    //
    while (nodes.length != 0) {
        //
        for (const node of nodes) {
            //
            for (const child of node.children) {
                //
                if (child == target) { return node }
                //
                futureNodes.push(child)
            }
        }
        //
        nodes = futureNodes
        //
        futureNodes = [ ]
    }
    //
    return null
}

function getNodeClassByPrefix(node, prefix) {
    //
    for (const clas of node.classes) { if (clas.startsWith(prefix)) { return clas } }
    //
    return ""
}

function removeNodeClassesByPrefix(node, prefix) {
    //
    const classes = [ ]
    //
    for (const clas of node.classes) {
        //
        if (! clas.startsWith(prefix))  { classes.push(clas) }
    }
    //
    node.classes = classes
}

function sanitizeBody(body) { // expected to be called from a try-catch block
    //
    if (body.tagname != "body") { throw "Missing body" }
    //
    for (const node of body.children) {
        //
        if (node.tagname == "div")    { continue }
        if (node.tagname == "header") { continue }
        if (node.tagname == "footer") { continue }
        //
        throw "Bad child for body"
    }
}


// ## file: editor/data/data-urls.js ##

// favicons are not stored because
// - probable name clash
// - they don't appear in the samples

const usedDataUrls = { "blank.png": true, "golden-lamp.png": true, "deno-cover-large.jpg": true }

function noteUsedDataUrlsFor(wp) { // called (indirectly) by initLocalStorage
    //
    let nodes = [ wp.body ]
    //
    let futureNodes = [ ]
    //
    while (nodes.length != 0) {
        //
        for (const node of nodes) {
            //
            maybeNoteThisUsedDataUrl(node)
            //
            if (! node.children) { continue }
            //
            for (const child of node.children) { futureNodes.push(child) }
        }
        //
        nodes = futureNodes
        //
        futureNodes = [ ]
    }
}

function maybeNoteThisUsedDataUrl(node) {
    //
    const src = node.attributes["src"]
    //
    if (src) { usedDataUrls[src] = true }
    //
    const bgImgSrc = node.attributes["bgimg-src"]
    //
    if (bgImgSrc) { usedDataUrls[bgImgSrc] = true }
}

function removeObsoleteDataUrls() {
    //
    for (const id of Object.keys(dataUrls)) {
        //
        if (usedDataUrls[id]) { continue }
        //
        delete dataUrls[id]
        //
        unstoreItem("data-url-" + id)
    }
}

function idOfStoredDataUrl(dataUrl) {
    //
    for (const id of Object.keys(dataUrls)) {
        //
        if (dataUrls[id] == dataUrl) { return id }
    }
    //
    return null
}


// ## file: editor/data/image.js ##

function loadImage(parentNode, cb) {
    //
    fileSelector.value = "" // or else same file will not trigger onchange event again
    //
    fileSelector.onchange = function () { loadImage2(parentNode, cb) }
    //
    fileSelector.click()
}

function loadImage2(parentNode, cb) {
    //
    const file = fileSelector.files[0]
    //
    if (file == undefined) { customAbort("Internal error"); return } // should not happen
    //
    console.log("loading:", file.type, "  ", file.name, "  bytes:", file.size)
    //
    //
    const reader = new FileReader()
    //
    reader.onloadend = function (e) { loadImage3(parentNode, cb, file.name, e.target.result) }
    //
    reader.readAsDataURL(file)
}

function loadImage3(parentNode, cb, filename, dataUrl) {
    //
    const img = new Image()
    //
    img.onload = function () { loadImage4(parentNode, cb, filename, dataUrl, img) }
    //
    img.onerror = function () { customAbort("Invalid image file"); return }
    //
    img.src = dataUrl
}

function loadImage4(parentNode, cb, filename, dataUrl, img) {
    //
    if (img.width == 0) { customAbort("Invalid image file"); return }
    //
    //
    const toobig = dataUrl.length > (150 * 1000)
    //
    if (toobig) { dataUrl = imageToDataUrl(img, true) }
    //
    //
    function callback1() { cb(parentNode, filename) }
    //
    //
    function callback2() { storeDataUrl(filename, dataUrl, callback1) }
    //
    //
    const oldname = idOfStoredDataUrl(dataUrl)
    //
    if (oldname == filename) { // same image already stored with same name
        //
        callback1()
        //
        return
    }
    //
    //
    if (oldname != null) { // same image already stored with different name
        //
        unstoreItem("data-url-" + oldname)
        //
        const msg = "The new image matches old image '" + oldname + "'; the old image is being removed from browser's storage"
        //
        customAlert(msg, callback2)
        //
        return
    }
    //
    //
    if (dataUrls[filename]) { // different image stored with same name
        //
        unstoreItem("data-url-" + oldname)
        //
        const msg = "A different image with same name '" + filename + "' is being removed from browser's storage"
        //
        customAlert(msg, callback2)
        //
        return
    }
    //
    //
    callback2() // fresh image with fresh name
}


// ## file: editor/data/local-storage.js ##

function unstoreItem(key) {
    //
    console.log("Removing '" + key + "' from local storage")
    //
    localStorage.removeItem(key)
}

function initLocalStorage() { // gets all data and cleans trash
    //
    for (const key of Object.keys(localStorage)) {
        //
        if (key.startsWith("data-url-")) { retrieveDataUrl(key); continue }
        //
        if (key.startsWith("definition-")) { retrieveDefinition(key); continue }
        //
        unstoreItem(key)
    }
}

function retrieveDataUrl(key) {
    //
    const name = key.replace("data-url-", "")
    //
    if (name == "") { unstoreItem(key); return }
    //
 // if (name.startsWith("-")) { unstoreItem(key); return }
    //
    dataUrls[name] = localStorage[key] // bad image src does not crash the page
}

function retrieveDefinition(key) { // also calls noteUsedDataUrlsFor
    //
    const name = key.replace("definition-", "")
    //
    if (name == "") { unstoreItem(key); return }
    //
    if (name.startsWith("-")) { unstoreItem(key); return }
    //
    const json = localStorage[key]
    //
    const obj = parseJson(json)
    //
    if (obj == null) { unstoreItem(key); return }
    //
    try { sanitizeBody(obj.body) } catch (__e) { unstoreItem(key); return }
    //
    // in this function for efficiency
    try { noteUsedDataUrlsFor(obj) } catch (__e2) { unstoreItem(key); return }
    //
    definitions[name] = json
}

function storeDataUrl(id, dataUrl, cb) {
    //
    try {
        //
        localStorage["data-url-" + id] = dataUrl
        //
        dataUrls[id] = dataUrl
        //
        cb()
    }
    catch (__e) {
        //
        customError("Could not save the loaded image in browser's storage. Probably it is full. Delete old and redundant webpages and refresh (F5) the browser (this webpage).")
    }
}

function storeDefinition() {
    //
    const key = "definition-" + webpage.name
    //
    const json = JSON.stringify(webpage)
    //
    try {
        //
        localStorage[key] = json
    }
    catch (__e) {
        //
        customError("Could not save the webpage in browser's storage. Probably it is full. Delete old and redundant webpages and refresh (F5) the browser (this webpage).")
    }
}


// ## file: editor/data/objects.js ##

// JSON cannot stringify true html nodes!

// including the field 'parent' in the nodeObj,
// breaks JSON.stringify or makes a very clumsy string

const htmlSubset = [ // body tags (without "text")
    //
    "body", "div", "span", "br", "h1", "h2", "h3", "header",
    "footer", "nav", "p", "b", "i", "a", "img"
]

const inlineAlikeTags = [ "span", "h1", "h2", "h3", "b", "i", "a" ]


const waysNotes = [ ] // for data-custom inside tags // unused now

function createWebpageObj(name) {
    //
    const obj = {
        //
        "name": name,
        "lang": "en",
        "title": "",
        "favicon": "", // just the filename
        "description": "",
        "analytics-id": "",
        "body": createNodeObj("body")
    }
    //
    Object.seal(obj)
    return obj
}

function createNodeObj(tagname) {
    //
    const obj = {
        //
        "tagname": tagname,
        "id": "",
        "classes": [ ],
        "children": [ ],
        "attributes": { },  // ref target | src alt title | bgimg-src (no match in the html tags)
        "text": ""
    }
    //
    Object.seal(obj)
    return obj
}


// ## file: editor/demos/demo1.js ##

const demo1 = `
<!DOCTYPE html>
<!--
     # This webpage was generated using Web As You Wish #
     # (at webasyouwish.com) #
     # Do NOT edit this webpage manually! #
-->
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Demo 1</title>
    <meta name="description" content="Demo 1 is a demo built in the Web As You Wish editor.">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        :root {
            font-size: max(1rem, 16px);
        }
        html {
            height: 100%;
        }
        html, body, body * {
            border: 0;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: inherit;
            vertical-align: top;
            user-select: text;
        }
        body {
            height: 100%;
            min-width: 20rem;
            margin: 0 auto;
            font-size: 1rem;
            font-family: sans-serif;
        }
        div, header, main, nav, footer, h1, h2, h3, h4, h5, h6 {
            display: inline-block;
            width: 100%;
            min-height: 10px;
            overflow: auto;
            text-align: left;
        }
        span, a, p, img, label, button, input {
            display: inline-block;
            width: auto;
            overflow: hidden;
        }
        button, select, textarea, input {
            padding: 5px;
            outline: none;
            font-size: 1rem;
            font-weight: 500;
            color: black;
            background-color: white;
        }
        textarea {
            resize: none;
        }
        img {
            object-fit: cover;
            object-position: center;
        }
    </style>
    <style>
        .-bgimg {
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }
    </style>
    <style>
        .-division {
            min-height: 2rem;
            display: inline-flex;
            flex-direction: row;
            padding: 20px 0;
            flex-wrap: wrap;
            justify-content: space-around;
            row-gap: 20px;
        }
        .-box {
            min-height: 2rem;
            max-width: min(100%, 50rem);
            align-self: stretch;
            padding: 15px 5px;
            overflow: auto;
            font-size: 1rem;
        }
    </style>
    <style>
        /* px based */
        @media (min-width: 360px) {
            .-box {
                padding-left: 10px;
                padding-right: 10px;
            }
        }
        @media (min-width: 412px) {
            .-box {
                font-size: 1.0625rem;
            }
        }
        @media (min-width: 480px) {
            .-box {
                font-size: 1.125rem;
            }
        }
        @media (min-width: 560px) {
            .-box {
                font-size: 1.1875rem;
            }
        }
        @media (min-width: 640px) {
            .-box {
                padding: 20px 3%;
            }
        }
        @media (min-width: 640px) {
            .-box {
                font-size: 1.25rem;
            }
        }
    </style>
    <style>
        /* rem based */
        @media (min-width: 50rem) {
            .-thin2, .-thin3, .-thin4 {
                width: 45%;
            }
        }
        @media (min-width: 75rem) {
            .-thin3 {
                width: 30%;
            }
        }
        @media (min-width: 100rem) {
            .-division {
                padding-top: 30px;
                padding-bottom: 30px;
                row-gap: 30px;
            }
            .-thin4 {
                width: 22.5%;
            }
        }
    </style>
    <style>
        .-div-arrows-outer {
            background: black;
            text-align: center;
        }
        .-div-arrows-inner {
            display: inline-flex;
            max-width: 1366px;
            justify-content: space-between;
            padding: 0 25px;
        }
        .-larrow-icon {
            width: 25px;
            height: 25px;
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center center;
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAoBJREFUSEvNlcuOaUEUhtem3Q1cBkx7wIBoiReQiNvMM6A1HSSGZuIRvEd7BHNDQbyA7oQwaAwQt5N/JcvZumlO4pycSmTX3lW1vvX/q6ooRHSgv9yU/w6i1WpJr9fTdrulzWZzs/6blTw8PJDX66VwOExvb280mUzuC4GCYDBIxWKRHA4Hlctlen9/vx8ECgKBAOXzeQZ9fn5SLpe7HwQAv99PpVKJfD4f6XQ6mk6nVCgUaDgc/qjkcPi9aS/WBIBQKESZTIaVwDKNRkOKolCz2aSPjw/uIxie+/2en/iNx2NqtVq8QdDOQkQBagAlAGAxIBiDImm73e44BpDRaKR2u00vLy+0Wq3OQxDw6emJiywAzkZRCAExjmDqzNV9QLrdLtftLARZAvD6+nqiQGwRa6AIVuA7mnxH32KxUKfToefn5+8QLMQ5qFQqDMI7spYgyFYUifdQJg0gzDeZTAyBXcvl8tQuqPB4PFSr1ejx8fG4WFSoAWKPegehj8QMBsNluxAME5LJJGdhs9mOu0ltkygCFEG/1kdqclaJZIpJ8XicC+d0Oo+WyTiAAgJE7BTpSLTX6523S32y4GsikaB0Ok1ut5sLi4Bij/opxYfdqBGSBARJfquJGoKFAEWjUd5psE6UQMVoNKLFYsFQsVIOpNVq5SunWq3Ser2+fBgFiO0YiUQom82Sy+Xiz7PZjBqNBp94aaIG79hhUNTv9/nJyV3704J8WIdC2u12ms/nfFn+dHeJwmMS1yCYCOtisRhfjLALELUStdXn+leVyCKAUqkU16ler1+9hU9qfIsSKbrZbObbYDAYcG1ubTcrUZ/4r55fg/0R5FqwS+P/BPILx4ZOECpT3Z0AAAAASUVORK5CYII=");
        }
        .-rarrow-icon {
            width: 25px;
            height: 25px;
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center center;
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAnpJREFUSEvNlUlqckEUha8dmoHNQFEwbiCoOHTuEsw+sgRx5lBQMfZrcBYbBDcgqMRBHDiNA5uBsW/CKbjFs38GfvgL5NlU1VfnnFtXDREd6B8PzX8HMRgMpNfrab1e0263U63/ISUOh4NeX1+p2WzS19cXbbdbVaCHIM/Pz5RIJGg8HlMqlaJ2u61K0cOQXC5HNptNADKZDHW73buKjiAaDT5eHx6Ph97f38lut9Nms6Fer0fJZJI+Pz9vgiQEgYZCIXI6nXQ4HMRLq9WKJ+B4ut1uCofD4v1+vxdWQUmxWKRWq3UVJCEmk4my2SwFg0FaLpcCgI2woU6nk/KgAIHzbwBBCTK6pugIAr/9fr+AnKphZYBjY4DxHYYS1Ol0zorhCJLP5ykQCNDPz49YzFbxe1jKCmAh24h5DEqn0wSQsrwl5OnpSdgFyGKxEIuUhcAnZ4UAQxXPwXwcAIB4PC7uET5jXLRrtVqJCUoIn5qLga3i7zm0wWBA0WiU+v2+VHOm5FImXAS8kbIoGIJDTadT4cbHxwfhoPIg3CDZLp/PJybwYDUsnS3iDTj40WhEKJxqtSoLR+6hhGASIKguZMDhKQuAoXiypd/f31QqlahSqYg8T4e0y2g0UiwWI/Sn2WwmLyIDsKnZbCaXyyV/w2awCBVVr9cFQKnwTAlO7vV6hQJlG1cuwo1/e3sjq9Uq1g+HQyoUCtRoNGTZX2pKZ73rVv9C70JTtFgsNJlMRMiwCPbeGg91YSgBBOGjUdZqtYsZXM1Ezb8PlEQiEeF/uVxWBTi6jGogyOLl5UXc6vl8fjHku5ncA532q3vzz6pL7YK/zHso+L8AsOYXtofPEB1YDbMAAAAASUVORK5CYII=");
        }
    </style>
    <style>
        .iu1 { background-image: url("deno-cover-large.jpg"); }
    </style>
    <style>
        @media (max-width: 412px) {
        }
        @media (min-width: 413px) and (max-width: 1024px) {
        }
        @media (min-width: 1025px) and (max-width: 1366px) {
        }
        @media (min-width: 1367px) {
        }
    </style>
</head>
<body>
    <div class="-bgimg iu1 hm400"></div>
    <div>
        <img alt="Golden Lamp" title="Golden Lamp" src="golden-lamp.png">
    </div>
</body>
</html>
`

function createWebpageDemo1() {
    //
    const obj = parseHtmlFile(demo1)
    //
    obj.name = "-demo1"
    //
    return JSON.stringify(obj)
}


// ## file: editor/division/division.js ##

var addDivisionMenuItem = "empty"

function showAddDivisionMenu() {
    //
    const list = ["(footer)", "(header)", "horiz arrows", "(large map)", "empty"]
    //
    customPick("Add division", showAddDivisionMenu2, list, list, addDivisionMenuItem)
}

function showAddDivisionMenu2(answer) {
    //
    if (answer == null) { showMainMenu(); return }
    //
    addDivisionMenuItem = answer
    //
    if (answer == "footer") { addFooter() }
    //
    if (answer == "header") { addHeader() }
    //
    if (answer == "horiz arrows") { chooseDivisionPosition(addHorizontalArrowsDivision); return }
    //
    if (answer == "large map") { addLargeMapDivision() }
    //
    if (answer == "empty") { chooseDivisionPosition(addEmptyDivision); return }
    //
    customAbort("Feature not implemented yet")
}

function addHeader() {
    //
    if (divisionExists("header")) { customAbort("<b>header</b> already exists"); return }
}

function addFooter() {
    //
    if (divisionExists("footer")) { customAbort("'<b>footer</b> already exists"); return }
}

function addEmptyDivision(position) {
    //
    if (position == null) { showAddDivisionMenu(); return }
    //
    const node = createEmptyDivision()
    //
    addThisDivision(node, position)
}

function addHorizontalArrowsDivision(position) {
    //
    if (position == null) { showAddDivisionMenu(); return }
    //
    const node = createHorizontalArrowsDivision()
    //
    addThisDivision(node, position)
}

function chooseDivisionPosition(cb) {
    //
    const list = [ "on the top", "at the bottom" ]
    //
    customPick("Position", cb, list, list)
}

function addThisDivision(node, position) {
    //
    if (position == "on the top") {
        //
        webpage.body.children.unshift(node)
    }
    else {
        //
        webpage.body.children.push(node)
    }
    //
    updateSample()
}

function divisionExists(tagname) {
    //
    for (const child of webpage.body.children) {
        //
        if (child.tagname == tagname) { return true }
    }
    //
    return false
}


// ## file: editor/edit/bgimg.js ##

var callerOfEditBgImage = null

function editBgImage(node, caller) {
    //
    if (caller) { callerOfEditBgImage = caller }
    //
    const list = [ "load", "remove", "balance" ]
    //
    const item = (selectedNode.attributes["bgimg-src"]) ? "balance" : "choose"
    //
    customPick("Bg image", callback, list, list, item)
    //
    function callback(answer) { editBgImage2(answer, node) }
}

function editBgImage2(answer, node) {
    //
    if (answer == null) { callerOfEditBgImage(node); return }
    //
    if (answer == "load") { loadImage(node, bgImageLoaded); return }
    //
    if (answer == "remove") { removeBgImage(node); return }
    //
    if (answer == "balance") { prepareToBalanceBgImage(node); return }
}

function bgImageLoaded(node, filename) {
    //
    node.attributes["bgimg-src"] = filename
    //
    removeBgImageClasses(node)
    //
    node.classes.push("-bgimg")
    //
    if (node == selectedNode) { unselectNode() }
    //
    updateSample()
}

function removeBgImage(node) {
    //
    if (! node.attributes["bgimg-src"]) {
        //
        customAbort("There is no bg image to remove", function() { editBgImage(node) })
        //
        return
    }
    //
    delete node.attributes["bgimg-src"]
    //
    removeBgImageClasses(node)
    //
    unselectNode()
    //
    updateSample()
}

function removeBgImageClasses(node) {
    //
    const classes = [ ]
    //
    for (const clas of node.classes) {
        //
        if (clas == "-bgimg") { continue }
        //
        if (clas.startsWith("qaip")) { continue }
        if (clas.startsWith("qbip")) { continue }
        if (clas.startsWith("qcip")) { continue }
        if (clas.startsWith("qdip")) { continue }
        //
        classes.push(clas)
    }
    //
    node.classes = classes
}

function prepareToBalanceBgImage(node) {
    //
    if (! node.attributes["bgimg-src"]) {
        //
        customAbort("There is no bg image to balance", function() { editBgImage(node) })
        //
        return
    }
    //
    const msg = "When a background image is not entirely visible, you can choose which part of it should appear.<br><br>A background image has FOUR different balances: for smartphone, for tablet for laptop and for desktop - according to the simulated screen.<br><br>During the balancing mode, you set the balance of an background image by clicking on the element that has this background image.<br><br>Clicking near the edges has a stronger effect than clicking near the center."
    //
    customMessage("Bg image balancing", msg, startModeBalancing)
}


// ## file: editor/edit/color.js ##

function editBgColor(node, caller) {
    //
    const list = [ "own color", "inherit" ]
    //
    customPick(capitalized() + " bg color", choose, list, list)
    //
    function choose(answer) {
        //
        if (answer == null) { caller(node); return }
        //
        if (answer == "inherit") {
            //
            removeNodeClassesByPrefix(node, "b"); unselectNode(); updateSample(); return
        }
        //
        const color = getNodeClassByPrefix(node, "b").substr(1)  ||  "255-255-255"
        //
        customColorPicker(capitalized() + " bg color", pick, color)
    }
    //
    function pick(answer) {
        //
        if (answer == null) { caller(node); return }
        //
        removeNodeClassesByPrefix(node, "b")
        //
        node.classes.push("b" + answer)
        //
        unselectNode()
        //
        updateSample()
    }
}

function editFgColor(node, caller) {
    //
    const list = [ "own color", "inherit" ]
    //
    customPick(capitalized() + " fg color", choose, list, list)
    //
    function choose(answer) {
        //
        if (answer == null) { caller(node); return }
        //
        if (answer == "inherit") {
            //
            removeNodeClassesByPrefix(node, "c"); unselectNode(); updateSample(); return
        }
        //
        const color = getNodeClassByPrefix(node, "c").substr(1)  ||  "0-0-0"
        //
        customColorPicker(capitalized() + " fg color", pick, color)
    }
    //
    function pick(answer) {
        //
        if (answer == null) { caller(node); return }
        //
        removeNodeClassesByPrefix(node, "c")
        //
        node.classes.push("c" + answer)
        //
        unselectNode()
        //
        updateSample()
    }
}


// ## file: editor/edit/components.js ##
/*
function tryAddChild() {
    //
    const node = nodeForAddChild()
    //
    if (node == null) { customError("Cannot add child to this element", showEditMenu); return }
    //
    const list = [ "box", "image", "link button", "text" ]
    //
    customPick("Kind of the new child", callback, list, list, "image")
    //
    function callback(answer) { tryAddChild2(answer, node) }
}

function tryAddChild2(answer, node) {
    //
    if (answer == null) { showEditMenu(); return }
    //
    if (answer == "image") { addImage(node); return }
}

function nodeForAddChild() { // cannot rely on sampleNode because empty division messes it up
    //
    let node = selectedNode
    //
    if (webpage.body.children.includes(node)) { node = node.children[0] }
    //
    //
    if (node.tagname == "img") { return null }
    //
    if (node.classes.includes("-div-arrows-inner")) { return null }
    //
    return node
}
*/

function createHorizontalArrowsDivision() {
    //
    const outer = createNodeObj("div")
    //
    outer.classes = [ "-div-arrows-outer" ]
    //
    const inner = createNodeObj("div")
    //
    inner.classes = [ "-div-arrows-inner", "-x" ]
    //
    const larrow = createNodeObj("div")
    //
    larrow.classes = ["-larrow-icon", "-x"]
    //
    const rarrow = createNodeObj("div")
    //
    rarrow.classes = ["-rarrow-icon", "-x"]
    //
    inner.children.push(larrow)
    inner.children.push(rarrow)
    //
    outer.children.push(inner)
    //
    return outer
}

function createEmptyDivision() {
    //
    return createNodeObj("div")
}

function addLargeMapDivision() {
    //

}


// ## file: editor/edit/division.js ##

var modifyDivisionItem = "bg image"

function modifyDivision(node) {
    //
    const list = [ "fg color", "bg color", "bg image", "min height" ]
    //
    customPick("Division modify", callback, list, list, modifyDivisionItem)
    //
    function callback(answer) { modifyDivision2(answer, node) }
}

function modifyDivision2(answer, node) {
    //
    if (answer == null) { showEditMenu(); return }
    //
    modifyDivisionItem = answer
    //
    if (answer == "fg color") { editFgColor(node, modifyDivision); return }
    //
    if (answer == "bg color") { editBgColor(node, modifyDivision); return }
    //
    if (answer == "bg image") { editBgImage(node, modifyDivision); return }
    //
    if (answer == "min height") { editMinimumHeight(node, modifyDivision); return }
}

// ## file: editor/edit/edit.js ##

const prefixByDevice = { "all": "", "smartphone": "qa", "tablet": "qb", "laptop": "qc", "desktop": "qd" }

var editMenuItem = "modify"

var moveMenuItem = "up or left"

function showEditMenu() {
    //
    const list = [ "parent", "modify", "move", "rename", "delete", "report" ]
    //
    customPick(capitalized(), showEditMenu2, list, list, editMenuItem)
}

function showEditMenu2(answer) {
    //
    if (answer == null) { unselectNode(); return }
    //
    editMenuItem = answer
    //
    if (answer == "parent") { selectParentOfSelectedNode(); return }
    //
    if (answer == "modify") { modifySelectedNode(); return }
    //
    if (answer == "move")   { moveSelectedNode(); return }
    //
    if (answer == "rename") { renameSelectedNode(); return }
    //
    if (answer == "delete") { deleteSelectedNode(); return }
    //
    if (answer == "report") { reportSelectedNode(); return }
}

function moveSelectedNode() {
    //
    const list = [ "up or left", "down or right" ]
    //
    customPick(capitalized() + " move", moveSelectedNode2, list, list, moveMenuItem)
}

function moveSelectedNode2(answer) {
    //
    if (answer == null) { editMenuItem = "modify"; showEditMenu(); return }
    //
    moveMenuItem = answer
    //
    if (answer == "up or left") { moveSelectedNode3(-1); return }
    //
    if (answer == "down or right") { moveSelectedNode3(+1); return }
}

function moveSelectedNode3(delta) {
    //
    const child = selectedNode
    //
    const parent = getParentNode(child)
    //
    const index = parent.children.indexOf(child)
    //
    if (index + delta < 0) { errorMove("first"); return }
    //
    if (index + delta  == parent.children.length) { errorMove("last"); return }
    //
    const a = parent.children[index]
    const b = parent.children[index + delta]
    //
    parent.children[index] = b
    parent.children[index + delta] = a
    //
    unselectNode()
    //
    updateSample()
}

function errorMove(pos) {
    //
    customError("This <b>" + lowercase() + "</b> is already in the " + pos + " position", moveSelectedNode)
}

function deleteSelectedNode() {
    //
    const msg = "Are you sure you want to *DELETE* this element?"
    //
    safeConfirm(msg, deleteSelectedNode2, showEditMenu)
}

function deleteSelectedNode2() {
    //
    const child = selectedNode
    //
    const parent = getParentNode(selectedNode)
    //
    const index = parent.children.indexOf(child)
    //
    parent.children.splice(index, 1)
    //
    unselectNode()
    //
    updateSample()
}

function renameSelectedNode() {
    //
    const id = selectedNode.id
    //
    namePrompt(capitalized() + " optional id", renameSelectedNode2, id)
}

function renameSelectedNode2(name) {
    //
    if (name == null) { showEditMenu(); return }
    //
    const node = selectedNode
    //
    if (name == "") { node.id = ""; return }
    //
    if (name == node.id) { customError("This is the current id", renameSelectedNode); return }
    //
    if (getNodeById(name) != null) { customError("This id is used by other element", renameSelectedNode); return }
    //
    node.id = name
}

function selectParentOfSelectedNode() {
    //
    const parent = getParentNode(selectedNode)
    //
    if (parent == webpage.body) { customError("<b>body</b> cannot be selected", showEditMenu); return }
    //
    selectNode(parent)
}

function modifySelectedNode() {
    //
    let node = selectedNode
    //
    if (node.tagname == "img") { modifyImage(node); return }
    //
    if (node.tagname == "div") {
        //
        if (webpage.body.children.includes(node)) { modifyDivision(node) }
    }
}

function reportSelectedNode() {
    //
    const node = selectedNode
    //
    if (node.tagname == "img") { reportImage(node); return }
    //
    reportCommonNode(node)
}

function reportCommonNode(node) {
    //
    customReport(capitalized() + " report", showEditMenu, [
        //
        "id: "+ node.id
    ])
}


// ## file: editor/edit/filling-balance.js ##

function editFilling(node, caller) {
    //
    const list = [ "original", "cover", "contain", "scale-down" ]
    //
    const value = fillingLabel(node)
    //
    customPick("Image filling", callback, list, list, value)
    //
    function callback(answer) { editFilling2(answer, node, caller) }
}

function editFilling2(answer, node, caller) {
    //
    if (answer == null) { caller(node); return }
    //
    const classes = [ ]
    //
    for (const clas of node.classes) {
        //
        if (clas == "ofd") { continue }
        if (clas == "ofn") { continue }
        if (clas == "oft") { continue }
        if (clas == "ofv") { continue } // not supposed to happen because 'cover' is the default
        //
        classes.push(clas)
    }
    //
    node.classes = classes
    //
    if (answer == "cover")    { } // 'cover' is the default
    //
    if (answer == "original") { classes.push("ofn") } // 'none'
    //
    if (answer == "contain")  { classes.push("oft") }
    //
    if (answer == "scale-down") { classes.push("ofd") }
    //
    updateSample()
}

function fillingLabel(node) {
    //
    for (const clas of node.classes) {
        //
        if (clas == "ofn") { return "original" } // 'none'
        //
        if (clas == "oft") { return "contain" }
        //
        if (clas == "ofd") { return "scale-down" }
    }
    //
    return "cover"
}

function balanceSomething(node, xpc, ypc) {
    //
    const sufix = (node.attributes["bgimg-src"]) ? "ip" : "op"
    //
    balanceThis(node, xpc, ypc, sufix)
}

function balanceThis(node, xpc, ypc, sufix) {
    //
    const deltaleft = delta(1 - xpc)
    const deltatop  = delta(1 - ypc)
    //
    function delta(n) {
        //
        if (n <= 0.20) { return -10 }
        if (n <= 0.40) { return  -5 }
        if (n <= 0.45) { return  -2 }
        if (n <= 0.50) { return  -1 }
        if (n <= 0.55) { return   1 }
        if (n <= 0.60) { return   2 }
        if (n <= 0.80) { return   5 }
        return 10
    }
    //
    const device = deviceByScreenWidth()
    //
    const values = balanceValues(node, device, sufix)
    //
    let left = values[0] + deltaleft
    if (left <   0) { left =   0 }
    if (left > 100) { left = 100 }
    //
    let top = values[1] + deltatop
    if (top < 0)   { top =   0 }
    if (top > 100) { top = 100 }
    //
    if (left == values[0]  &&  top == values[1]) { return }
    //
    const prefix = prefixByDevice[device] + sufix
    //
    const classes = [ ]
    //
    for (const clas of node.classes) {
        //
        if (clas.startsWith(prefix)) { continue } else { classes.push(clas) }
    }
    //
    node.classes = classes
    //
    const clas = prefix + left + "-" + top
    //
    node.classes.push(clas)
    //
    updateSample()
}

function balanceValues(node, device, sufix) {
    //
    const prefix = prefixByDevice[device] + sufix
    //
    for (const clas of node.classes) {
        //
        if (! clas.startsWith(prefix)) { continue }
        //
        const parts = clas.replace(prefix, "").split("-")
        //
        return [ fix(parts[0]), fix(parts[1]) ]
    }
    //
    return [ 50, 50 ]
    //
    function fix(s) {
        //
        const number = parseInt(s)
        //
        if (isNaN(number)) { return 50 }
        //
        if (number < 0) { return 50 }
        //
        return Math.min(number, 100)
    }
}


// ## file: editor/edit/image.js ##

var itemOfModifyImage = "balance"

function addImage(parentNode) {
    //
    loadImage(parentNode, afterImageLoaded)
}

function afterImageLoaded(parentNode, filename, imageId) {
    //
    const node = createNodeObj("img")
    //
    node.attributes.alt = ""
    //
    node.attributes.src = filename
    //
    node.attributes["data-img-id"] = imageId
    //
    parentNode.children.push(node)
    //
    updateSample()
}

function modifyImage(node) {
    //
    const list = [ "(filling)","(balance)", "(border)", "(corner)", "(shadow)", "title", "altern text" ]
    //
    customPick("Image modify", callback, list, list, itemOfModifyImage)
    //
    function callback(answer) { modifyImage2(answer, node) }
}

function modifyImage2(answer, node) {
    //
    if (answer == null) { showEditMenu(); return }
    //
    itemOfModifyImage = answer
    //
    if (answer == "filling") { editFilling(node, modifyImage); return }
    //
    if (answer == "balance") { prepareToBalanceImage(); return }
    //
    if (answer == "border")  { return }
    //
    if (answer == "corner")  { return }
    //
    if (answer == "shadow")  { return }
    //
    if (answer == "title")   { editImageTitle(node); return }
    //
    if (answer == "altern text") { editAlternText(node); return }
    //
    customAbort("Feature not implemented yet")
}

function editAlternText(node) {
    //
    liberalPrompt("Image alternative text", callback, node.attributes.alt)
    //
    function callback(answer) { editAlternText2(answer, node) }
}

function editAlternText2(answer, node) {
    //
    if (answer == null) { modifyImage(node); return }
    //
    const raw = answer.trim()
    //
    node.attributes.alt = noDoubleQuotes(raw)
    //
    modifyImage(node)
}

function editImageTitle(node) {
    //
    liberalPrompt("Image title", callback, node.attributes.title)
    //
    function callback(answer) { editImageTitle2(answer, node) }
}

function editImageTitle2(answer, node) {
    //
    if (answer == null) { modifyImage(node); return }
    //
    const raw = answer.trim()
    //
    node.attributes.title = noDoubleQuotes(raw)
    //
    modifyImage(node)
}

function prepareToBalanceImage() {
    //
    const msg = "When an image is not entirely visible, you can choose which part of it should appear.<br><br>An image has FOUR different balances: for smartphone, for tablet, for laptop and for desktop - according to the simulated screen.<br><br>During the balancing mode, you set the balance of an image by clicking on it.<br><br>Clicking near the edges has a stronger effect than clicking near the center."
    //
    customMessage("Image balancing", msg, startModeBalancing)
}

function reportImage(node) {
    //
    customReport("Image report", showEditMenu, [
        //
        "id: "+ node.id,
        "title: " + node.attributes.title,
        "altern text: " + node.attributes.alt
    ])
}


// ## file: editor/edit/other.js ##

function editMinimumHeight(node, caller) {
    //
    const value = nodeMinimumHeight(node)
    //
    customPositiveInteger(capitalized() + " minimum height in pixels", callback, value)
    //
    function callback(answer) { editMinimumHeight2(answer, node, caller) }
}

function editMinimumHeight2(answer, node, caller) {
    //
    if (answer == null) { caller(node); return }
    //
    removeNodeClassesByPrefix(node, "hm")
    //
    node.classes.push("hm" + parseInt(answer)) // parseInt excludes left zeroes
    //
    updateSample()
}

function nodeMinimumHeight(node) {
    //
    const clas = getNodeClassByPrefix(node, "hm")
    //
    if (clas != "") { return parseInt(clas.substr(2)) }
    //
    if (node.classes.includes("-box")) { return 100 }
    //
    if (node.classes.includes("-division")) { return 100 }
    //
    if (webpage.body.children.includes(node)) { return 100 }
}


// ## file: editor/head/head.js ##

const languages = [

    "af", "sq", "ar-SA", "ar-IQ", "ar-EG", "ar-LY", "ar-DZ", "ar-MA", "ar-TN", "ar-OM",
    "ar-YE", "ar-SY", "ar-JO", "ar-LB", "ar-KW", "ar-AE", "ar-BH", "ar-QA", "eu", "bg",
    "be", "ca", "zh-TW", "zh-CN", "zh-HK", "zh-SG", "hr", "cs", "da", "nl", "nl-BE", "en",
    "en-US", "en-EG", "en-AU", "en-GB", "en-CA", "en-NZ", "en-IE", "en-ZA", "en-JM",
    "en-BZ", "en-TT", "et", "fo", "fa", "fi", "fr", "fr-BE", "fr-CA", "fr-CH", "fr-LU",
    "gd", "gd-IE", "de", "de-CH", "de-AT", "de-LU", "de-LI", "el", "he", "hi", "hu",
    "is", "id", "it", "it-CH", "ja", "ko", "lv", "lt", "mk", "mt", "no", "pl",
    "pt-BR", "pt", "rm", "ro", "ro-MO", "ru", "ru-MI", "sz", "sr", "sk", "sl", "sb",
    "es", "es-AR", "es-GT", "es-CR", "es-PA", "es-DO", "es-MX", "es-VE", "es-CO",
    "es-PE", "es-EC", "es-CL", "es-UY", "es-PY", "es-BO", "es-SV", "es-HN", "es-NI",
    "es-PR", "sx", "sv", "sv-FI", "th", "ts", "tn", "tr", "uk", "ur", "ve", "vi", "xh",
    "ji", "zu"
]

const analyticsTemplate =
`
    <meta name="analytics-id" content="@analytics-id@">
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=@analytics-id@"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '@analytics-id@');
    </script>`

var headMenuItem  = "report"

function showHeadMenu() {
    //
    const list = [ "language", "title", "favicon", "description", "analytics id", "report" ]
    //
    customPick("Head", showHeadMenu2, list, list, headMenuItem)
}

function showHeadMenu2(answer) {
    //
    if (answer == null) { showMainMenu(); return }
    //
    headMenuItem = answer
    //
    if (answer == "language") { editLanguage(); return }
    //
    if (answer == "title") { editTitle(); return }
    //
    if (answer == "favicon") { editFavicon(); return }
    //
    if (answer == "description") { editDescription(); return }
    //
    if (answer == "analytics id") { editAnalyticsId(); return }
    //
    if (answer == "report") { reportHead(); return }
}

function editLanguage() {
    //
    customChoose("Language", editLanguage2, languages, null, webpage.lang)
}

function editLanguage2(answer) {
    //
    if (answer != null) { webpage.lang = answer }
    //
    showHeadMenu()
}

function editTitle() {
    //
    liberalPrompt("Title", editTitle2, webpage.title)
}

function editTitle2(answer) {
    //
    if (answer == null) { showHeadMenu(); return }
    //
    const raw = answer.trim()
    //
    if (raw == "") { customError("Missing title", editTitle); return }
    //
    webpage.title = noTag(raw)
    //
    showHeadMenu()
}

function editDescription() {
    //
    liberalPrompt("Description", editDescription2, webpage.description)
}

function editDescription2(answer) {
    //
    if (answer == null) { showHeadMenu(); return }
    //
    const raw = answer.trim()
    //
    webpage.description = noDoubleQuotes(raw)
    //
    showHeadMenu()
}

function editFavicon() {
    //
    liberalPrompt("Favicon (filename)", editFavicon2, webpage.favicon)
}

function editFavicon2(answer) {
    //
    if (answer == null) { showHeadMenu(); return }
    //
    const raw = answer.trim()
    //
    webpage.favicon = noDoubleQuotes(raw)
    //
    showHeadMenu()
}

function editAnalyticsId() {
    //
    liberalPrompt("Analytics Id", editAnalyticsId2, webpage["analytics-id"])
}

function editAnalyticsId2(answer) {
    //
    if (answer == null) { showHeadMenu(); return }
    //
    const raw = answer.trim()
    //
    webpage["analytics-id"] = noQuoteNoTagReally(raw)
    //
    showHeadMenu()
}

function reportHead() {
    //
    customReport("Head", showHeadMenu, [
        //
        "language: " + webpage.lang,
        "title: " + webpage.title,
        "favicon: " + webpage.favicon,
        "description: " + webpage.description,
        "analytics id: " + webpage["analytics-id"]
    ])
}


// ## file: editor/helping/help.js ##

function help() {
    //
    helpMenuTrees()
}

function helpMenuTrees() {
    //
    const msg = "There are two menu trees:<br><br>- the <b>Main</b> menu tree<br><br>- the <b>Edit</b> menu tree"
    //
    customMessage("Two menu trees", msg, helpMenuButton)
}

function helpMenuButton() {
    //
    const msg = "The menu black bar can be moved to the bottom (and back to the top) of the webpage."
    //
    customMessage("Menu bar", msg, helpMouse)
}

function helpMouse() {
    //
    const msg = "The first click on an element selects it.<br><br>" +
    //
    "The second click on an element opens the Edit menu."
    //
    customMessage("Mouse", msg, helpSelectElement)
}

function helpSelectElement() {
    //
    const msg = "Changing the simulated screen may be necessary to show an element."
    //
    customMessage("Selecting element", msg, helpHotkeys)
}

function helpHotkeys() {
    //
    const msg = "<b>-</b>&nbsp; and &nbsp;<b>+</b> change the simulated screen<br><br>" +
    //
    "<b>ENTER</b> clicks the 'ok' button or opens the main menu<br><br>" +
    //
    "<b>ESCAPE</b> clicks the 'cancel' button; unselects element<br><br>" +
    //
    "<b>HOME</b> and <b>END</b> change selection in menu<br><br>" +
    //
    "<b>PAGE UP</b> and <b>PAGE DOWN</b> change selection in menu<br><br>" +
    //
    "<b>ARROW UP</b> and <b>ARROW DOWN</b> change selection in menu"
    //
    customMessage("Hotkeys", msg)
}


// ## file: editor/helping/helper-universal.js ##

function scrollWindowToBottom() {
    //
    window.scrollTo(window.scrollX, 999999)
}

function isDigit(c) {
    //
    if(typeof c != "string") { return false }
    //
    return (c >= "0"  &&  c <= "9")
}

function isLetter(c) {
    //
    if(typeof c != "string") { return false }
    //
    c = c.toLowerCase()
    //
    return (c >= "a"  &&  c <= "z")
}

function unquote(value) {
    //
    if (value[0] != "'"  &&  value[0] != '"') { return value }
    //
    return value.substr(1, value.length - 2)
}

function convertTextToDataUrl(src) {
    //
    return "data:text/plain;charset=utf-8," + encodeURIComponent(src)
}

function imageToDataUrl(img, compressed) {
    //
    try {
        //
        return imageToDataUrlCore(img, compressed)
    }
    catch (__e) {
        //
        return null
    }
}

function imageToDataUrlCore(img, compressed) {
    //
    const canvas = document.createElement("canvas")
    //
    canvas.width = img.width
    //
    canvas.height = img.height
    //
    canvas.getContext("2d").drawImage(img, 0, 0)
    //
    if (compressed) {
        //
        return canvas.toDataURL("image/jpeg", 0.4)
    }
    else {
        return canvas.toDataURL()
    }
}

function noTag(src) {
    //
    let s = ""
    //
    for (const c of src) {
        //
        if (c == "<") { s += "&lt;"; continue }
        if (c == ">") { s += "&gt;"; continue }
        if (c == "/") { s += "&frasl;"; continue }
        //
        s += c
    }
    //
    return s
}

function noDoubleQuotes(src) {
    //
    let s = ""
    //
    for (const c of src) {
        //
        if (c == '"')  { s += "&quot;"; continue }
        //
        s += c
    }
    //
    return s
}

function noQuoteNoTagReally(src) {
    //
    let s = ""
    //
    for (const c of src) {
        //
        if (c == "<") { continue }
        if (c == ">") { continue }
        if (c == '"') { continue }
        if (c == "'") { continue }
        //
        s += c
    }
    //
    return s
}

function parseJson(src) {
    //
    try {
        //
        return JSON.parse(src)
    }
    catch (__e) {
        //
        return null
    }
}

function cloneObj(obj) {
    //
    const s = JSON.stringify(obj)
    //
    return JSON.parse(s)
}

function simpleSort(list) {
    //
    list.sort(algorithm)
    //
    function algorithm(a, b) {
        //
        if (a < b) { return -1 }
        if (a > b) { return +1 }
        return 0
    }
}

function fillSelector(selector, values, texts) {
    //
    selector.innerHTML = ""
    //
    const off = values.length
    //
    for (let n = 0; n < off; n++) {
        //
        const option = document.createElement("option")
        option.value = values[n]
        option.text = (texts) ? texts[n] : values[n]
        selector.appendChild(option)
    }
}

function justIndent(src, len) {
    //
    const margin = " ".repeat(len)
    //
    let lines = src.split("\n")
    //
    for (let n = 0; n < lines.length; n++) {
        //
        if (lines[n] !== "") { lines[n] = margin + lines[n] }
    }
    //
    return lines.join("\n")
}

function cleanIndent(src, len) {
    //
    const lines = src.split("\n")
    //
    const margin = " ".repeat(len)
    //
    let res = ""
    //
    for (const line of lines) {
        //
        const trim = line.trim()
        //
        if (trim == "") { continue }
        //
        if (res != "") { res += "\n" }
        //
        res += margin + trim
    }
    //
    return res
}


// ## file: editor/main/main.js ##

var DEVELOPMENT = window.location.href.startsWith("file:")

var mainMenuItem = "help"

var modeBalancing = false

function reset() {
    //
    unselectNode()
}

function giveUp() {
    //
    if (modeBalancing) { leaveModeBalancing() }
    //
    unselectNode()
}

function startModeBalancing() {
    //
    modeBalancing = true
    //
    setAimMark()
}

function leaveModeBalancing() {
    //
    modeBalancing = false
    //
    setStandardMark()
}

function main() {
    //
    initLocalStorage()
    //
    removeObsoleteDataUrls()
    //
    definitions["-demo1"] = createWebpageDemo1()
    //
    updateNamesOfWebpages()
    //
    selectThisWebpage("-demo1")
    //
    document.onkeydown = keyDownHandler
    //
    if (! DEVELOPMENT) {
        //
        const msg = "Are you sure you want to leave this page?"
        //
        window.onbeforeunload = function (e) { e.returnValue = msg }
    }
}

function keyDownHandler(e) {
    //
    const low = e.key.toLowerCase()
    //
    if (low == "enter") {
        //
        if (DEVELOPMENT) { displayWebpage() } else { showMainMenu() }
        //
        return false
    }
    //
    if (low == "escape") { giveUp(); return false }
    //
    if (low == "-") { changePseudoScreenByKeyboard(-1); return false }
    //
    if (low == "+") { changePseudoScreenByKeyboard(+1); return false }
    //
    return true
}

function showMainMenu() {
    //
    giveUp()
    //
    const list = [ "add division", "head", "screen", "webpage", "help", "move menu bar" ]
    //
    customPick("Main", showMainMenu2, list, list, mainMenuItem)
}

function showMainMenu2(answer) {
    //
    if (answer == null) { return }
    //
    mainMenuItem = answer
    //
    if (answer == "add division") { showAddDivisionMenu(); return }
    //
    if (answer == "head") { showHeadMenu(); return }
    //
    if (answer == "screen") { showScreenMenu(); return }
    //
    if (answer == "webpage") { showWebpageMenu(); return }
    //
    if (answer == "help") { help(); return }
    //
    if (answer == "move menu bar") { moveMenuBar(); return }
}

function moveMenuBar() {
    //
    const button1 = document.querySelector("#-menu-button1-div")
    //
    const button2 = document.querySelector("#-menu-button2-div")
    //
    const breka = document.querySelector("#-break-for-menu-button1-div")
    //
    if (button1.style.display == "none") {
        //
        button1.style.display = "inline-block"
        //
        breka.style.display = "block"
        //
        button2.style.display = "none"
    }
    else {
        //
        button1.style.display = "none"
        //
        breka.style.display = "none"
        //
        button2.style.display = "inline-block"
    }
}

function updateWebpageInMenuButton() {
    //
    document.querySelector("#-menu-button1-name").innerText = webpage.name
    //
    document.querySelector("#-menu-button2-name").innerText = webpage.name
}


// ## file: editor/parser/parser.js ##


var parserSource = ""

var parserPos = -1

var parserMaxPos = -1

var parserFoundBody = false

var parserWebpage = null

var parserError = "" // keeps obsolete value

function parseHtmlFile(src) {
    //
    parserSource = src
    //
    parserPos = -1
    //
    parserMaxPos = parserSource.length - 1
    //
    parserWebpage = createWebpageObj("unnamed")
    //
    parserError = parseHtmlStartAndHead()
    //
    if (parserError != "") { return null }
    //
    parserError = parseHtmlBody()
    //
    if (parserError != "") { return null }
    //
    try {
        //
        sanitizeBody(parserWebpage.body)
    }
    catch (e) {
        //
        parserError = e; return null
    }
    //
    return parserWebpage
}

function parserEatChar() {
    //
    parserPos += 1
    //
    return parserSource[parserPos]
}

function parserEatChars(count) {
    //
    let s = ""
    //
    for (let n = 0; n < count; n++) { s += parserEatChar() }
    //
    return s
}

function parserNext() {
    //
    return parserSource[parserPos + 1]
}

function parserEatCrap() {
    //
    while (parserPos < parserMaxPos) {
        //
        if (parserNext() <= " ") { parserEatChar() } else { return }
    }
}

function parserStartsWith(target) {
    //
    return parserSource.substr(parserPos + 1, target.length) == target
}

function parserStartsWithAnyCase(target) {
    //
    return parserSource.substr(parserPos + 1, target.length).toLowerCase() == target.toLowerCase()
}

function parserEatRemark() {
    //
    parserEatChars(3) // !--
    //
    while (parserNext() != undefined) {
        //
        if (parserStartsWith("-->")) { parserEatChars(3); return }
        //
        parserEatChar()
    }
    //
    throw "Unfinished remark"
}

function parserEatName() {
    //
    if (! isLetter(parserNext())) { return null }
    //
    let name = ""
    //
    while (parserPos < parserMaxPos) {
        //
        const c = parserNext()
        //
        if (isLetter(c)  ||  isDigit(c)  ||  c == "-") { name += parserEatChar() } else { break }
    }
    //
    return name
}

function parserEatValue() {
    //
    if (parserNext() == undefined) { return null }
    //
    if (parserNext() == '"') { return parserEatQuotedValue('"') }
    if (parserNext() == "'") { return parserEatQuotedValue("'") }
    //
    let value = ""
    //
    while (parserPos < parserMaxPos) {
        //
        const c = parserNext()
        //
        if (c == " "  ||  c == ">") { break }
        //
        value += parserEatChar()
    }
    //
    return value
}

function parserEatQuotedValue(delimiter) {
    //
    const backSlash = "\\"
    //
    let value = parserEatChar() // delimiter
    //
    while (parserPos < parserMaxPos) {
        //
        if (parserStartsWith(backSlash + backSlash)) { value += parserEatChars(2); continue }
        //
        if (parserStartsWith(backSlash + delimiter)) { value += parserEatChars(2); continue }
        //
        const c = parserEatChar()
        //
        if (c == "\n") { throw "Newline inside quoted value" }
        //
        value += c
        //
        if (c == delimiter) { return value }
    }
    //
    throw "Unfinished quoted value"
}

function parserFinishEatingIgnored(tagname) {
    //
    parserEatToEndOfTag()
    //
    while (true) {
        //
        const c = parserEatChar()
        //
        if (c == undefined) { throw "Unfinished " + tagname + " tag" }
        //
        if (c != "<") { continue }
        //
        if (parserNext() != "/") { continue }
        //
        parserEatChar() // /
        //
        parserEatCrap()
        //
        const name = parserEatName()
        //
        if (name == null) { continue }
        //
        if (name.toLowerCase() == tagname) { parserEatToEndOfTag(); return }
    }
}

function parserEatUntilStartOfTag() {
    //
    let s = ""
    //
    while (true) {
        //
        if (parserStartsWith("</")) { return s }
        //
        const c = parserEatChar()
        //
        if (c == undefined) { throw "Unfinished tag" }
        //
        s += c
    }
}

function parserEatToEndOfTag() {
    //
    while (true) {
        //
        if (parserNext() == undefined) { throw "Unfinished tag" }
        //
        const c = parserEatChar()
        //
        if (c == ">") { return }
    }
}

function parserRowAtPos(startpos) {
    //
    let row = 0
    //
    for (let n = 0; n <= startpos; n++) {
        //
        if (parserSource[n] == "\n") { row += 1 }
    }
    //
    return row
}

function parserResetPosition(newpos) {
    //
    parserPos = newpos
}


// ## file: editor/parser/parser-body.js ##

var openTags = null

function parseHtmlBody() {
    //
    parserFoundBody = false
    //
    openTags = [ ] // [ nodeObj ]
    //
    let startPos = -1 // any number is ok
    //
    while (true) {
        //
        parserEatCrap() // necessary for correct token and correct startPos
        //
        if (parserNext() == undefined) {
            //
            return (openTags.length == 0) ? "" : "File ended without closing all opened tags"
        }
        //
        startPos = parserPos + 1
        //
        try {
            //
            if (parserNext() == "<") { eatTag() } else { eatText() }
        }
        catch (e) {
            //
            const row = parserRowAtPos(startPos) + 1
            //
            return e + " (at row " + row + ")"
        }
    }
}

function eatText() { // not expecting <pre>
    //
    assureBodyPresent()
    //
    let txt = ""
    //
    while (true) {
        //
        const c = parserNext()
        //
        if (c == undefined) { break }
        //
        if (c == "<") { break }
        //
        parserEatChar() // c
        //
        if (c > " ") { txt += c; continue }
        //
        if (! txt.endsWith(" ")) { txt += " " }  // converts newline, tab, etc
    }
    //
    txt = txt.trim()
    //
    if (txt == "") { return } // may happen at the end of the file
    //
    const nodeObj = createNodeObj("text")
    //
    nodeObj.text = txt
    //
    assureParentIsInlineAlikeObj()
    //
    pushChild(nodeObj)
}

function eatTag() {
    //
    parserEatChar() // <
    //
    parserEatCrap()
    //
    if (parserNext() == "/") { eatTagClose(); return }
    //
    if (parserStartsWith("!--")) { parserEatRemark(); return }
    //
    eatTagOpenOrVoid()
}

function eatTagClose() {
    //
    parserEatChar() // /
    //
    parserEatCrap()
    //
    const name = parserEatName()
    //
    if (name == null) { throw "Invalid closing tag" }
    //
    parserEatToEndOfTag()
    //
    const tagname = name.toLowerCase()
    //
    if (tagname == "html") {
        //
        if (openTags.length != 0) { throw "Body tag is not closed yet" }
        //
        return
    }
    //
    assureBodyPresent()
    //
    const lastOpenTag = openTags[openTags.length - 1]
    //
    if (lastOpenTag.tagname != tagname) { throw "Mismatched closing tag" }
    //
    openTags.pop()
}

function eatTagOpenOrVoid() {
    //
    const name = parserEatName()
    //
    if (name == null) { throw "Missing tag name" }
    //
    const tagname = name.toLowerCase()
    //
    if (tagname == "body") { finishEatingBodyTag(); return }
    //
    if (tagname == "script") { parserFinishEatingIgnored(tagname); return }
    //
    if (! htmlSubset.includes(tagname)) { throw "Invalid tag for a WAYW webpage" }
    //
    const nodeObj = createNodeObj(tagname)
    //
    pushChild(nodeObj)
    //
    maybePushParent(nodeObj)
    //
    parseAttributesToEnd(nodeObj, tagname)
}

function finishEatingBodyTag() {
    //
    if (parserFoundBody) { throw "Body tag already declared" }
    //
    parserFoundBody = true
    //
    openTags.push(parserWebpage.body)
    //
   parserEatToEndOfTag()
}

function parseAttributesToEnd(nodeObj, tagname) {
    //
    while (true) {
        //
        parserEatCrap()
        //
        if (parserNext() == undefined) { throw "Unfinished tag" }
        //
        if (parserNext() == ">") { parserEatChar(); return }
        //
        const name = parserEatName()
        //
        if (name == null) { throw "Invalid attribute" }
        //
        const attributeName = name.toLowerCase()
        //
        parseThisAttribute(nodeObj, tagname, attributeName)
    }
}

function parseThisAttribute(nodeObj, tagname, name) {
    //
    parserEatCrap()
    //
    if (name == "id") { nodeObj.id = readAttributeValue(); return }
    //
    if (name == "class") { nodeObj.classes = getClassesFromString(nodeObj, readAttributeValue()); return }
    //
    if (tagname == "a") {
        //
        if (name == "href") { nodeObj.attributes.href = readAttributeValue(); return }
        //
        if (name == "target") { nodeObj.attributes.target = readAttributeValue(); return }
    }
    //
    if (tagname == "img") {
        //
        if (name == "src") { nodeObj.attributes.src = readAttributeValue(); return }
        //
        if (name == "alt") { nodeObj.attributes.alt = readAttributeValue(); return }
        //
        if (name == "title") { nodeObj.attributes.title = readAttributeValue(); return }
    }
    //
    if (waysNotes.includes(name)) {
        //
        if (parserNext() != "=")  { nodeObj.attributes[name] = ""; return }
        //
        nodeObj.attributes[name] = readAttributeValue()
        //
        return
    }
    //
    throw "Invalid attribute name (for WAYW)"
}

function readAttributeValue() {
    //
    if (parserEatChar() != "=") { throw "Missing '=' after attribute declaration" }
    //
    parserEatCrap()
    //
    const rawValue = parserEatValue()
    //
    if (rawValue == null) { throw "Invalid value for attribute" }
    //
    return unquote(rawValue)
}

function getClassesFromString(nodeObj, src) {
    //
    const list = [ ]
    //
    for (const item of src.split(" ")) {
        //
        const clas = item.trim()
        //
        if (clas == "") { continue }
        //
        if (clas.startsWith("iu")) {
            //
            const index = parseInt(clas.substr(2)) - 1
            //
            const src = parserDataUrls[index]
            //
            if (! src) { throw "No matching background image for class '" + clas + "'" }
            //
            nodeObj.attributes["bgimg-src"] = src
            //
            continue // FILTERS OFF the background image class
        }
        //
        list.push(clas)
    }
    //
    return list
}

function pushChild(nodeObj) {
    //
    const parent = openTags[openTags.length - 1]
    //
    parent.children.push(nodeObj)
}

function maybePushParent(nodeObj) {
    //
    if (nodeObj.tagname == "br") { return }
    //
    if (nodeObj.tagname == "img") { return }
    //
    openTags.push(nodeObj)
}

function assureParentIsInlineAlikeObj() {
    //
    const parent = openTags[openTags.length - 1]
    //
    if (inlineAlikeTags.includes(parent.tagname)) { return }
    //
    throw "Got text outside a text tag"
}

function assureBodyPresent() {
    //
    if (! parserFoundBody) { throw "Missing body tag" }
    //
    if (openTags.length == 0) { throw "Body tag is already closed" }
}


// ## file: editor/parser/parser-head.js ##

// VERY forgiving algorithm
// Doesn't expect tags (excepting html and head) with children

var parserDataUrls = [ ]

function parseHtmlStartAndHead() {
    //
    parserDataUrls = [ ]
    //
    parserFoundBody = false
    //
    let startPos = -1 // any number is ok
    //
    while (true) {
        //
        if (parserNext() == undefined) { return "" }
        //
        if (parserFoundBody) { parserResetPosition(startPos - 1); return "" }
        //
        if (parserNext() != "<") { parserEatChar(); continue } // skips content before tag start
        //
        startPos = parserPos + 1
        //
        try {
            //
            eatHeadTag()
        }
        catch (e) {
            //
            const row = parserRowAtPos(startPos) + 1
            //
            return e + " (at row " + row + ")"
        }
    }
}

function eatHeadTag() {
    //
    parserEatChar() // <
    //
    parserEatCrap()
    //
    if (parserNext() == "/") { parserEatToEndOfTag(); return }
    //
    if (parserStartsWith("!--")) { parserEatRemark(); return }
    //
    if (parserNext() == "!") { eatSpecial(); return }
    //
    eatHeadTagOpenOrVoid()
}

function eatSpecial() { // probably doctype
    //
    while (parserNext() != undefined) {
        //
        if (parserEatChar() == ">") { return }
    }
    //
    throw "Unfinished special tag"
}

function eatHeadTagOpenOrVoid() {
    //
    parserEatCrap()
    //
    const name = parserEatName()
    //
    if (name == null) { parserEatToEndOfTag(); return }
    //
    const low = name.toLowerCase()
    //
    parserEatCrap()
    //
    if (low == "html") { finishEatingHtml(); return }
    //
    if (low == "head") { parserEatToEndOfTag(); return }
    //
    if (low == "title") { finishEatingTitle(); return }
    //
    if (low == "meta") { finishEatingMeta(); return }
    //
    if (low == "style") { parserEatEmbeddeStyleSheet(); return }
    //
    if (low == "script") { parserFinishEatingIgnored("script"); return }
    //
    if (low == "body") { parserFoundBody = true; return }
    //
    parserEatToEndOfTag() // anything else is ignored
}

function finishEatingHtml() {
    //
    const name = parserEatName()
    //
    if (name == null) { parserEatToEndOfTag(); return }
    //
    if (name.toLowerCase() != "lang") { parserEatToEndOfTag(); return }
    //
    parserEatCrap()
    //
    if (parserNext() != "=") { parserEatToEndOfTag(); return }
    //
    parserEatChar();parserEatCrap()
    //
    const value = unquote(parserEatValue())
    //
    if (languages.includes(value)) { parserWebpage.lang = value }
    //
    parserEatToEndOfTag()
}

function finishEatingTitle() {
    //
    parserEatToEndOfTag()
    //
    parserEatCrap()
    //
    parserWebpage.title = parserEatUntilStartOfTag()
}

function finishEatingMeta() {
    //
    if (! parserStartsWithAnyCase("name")) { parserEatToEndOfTag(); return }
    //
    parserEatChars(4); parserEatCrap()
    //
    if (parserNext() != "=") { parserEatToEndOfTag(); return }
    //
    parserEatChar(); parserEatCrap()
    //
    let quotedName = parserEatValue()
    //
    if (quotedName == null) { parserEatToEndOfTag(); return }
    //
    const name = unquote(quotedName)
    //
    if (name == "description") { parserWebpage.description = eatMetaValue(); return }
    //
    if (name == "analytics-id") { parserWebpage["analytics-id"] = eatMetaValue(); return }
    //
    parserEatToEndOfTag()
 }

 function eatMetaValue() {
    //
    parserEatCrap()
    //
    if (! parserStartsWithAnyCase("content")) { parserEatToEndOfTag(); return "" }
    //
    parserEatChars(7); parserEatCrap()
    //
    if (parserNext() != "=") { parserEatToEndOfTag(); return "" }
    //
    parserEatChar(); parserEatCrap()
    //
    const value = parserEatValue()
    //
    if (value == null) { parserEatToEndOfTag(); return "" }
    //
    parserEatToEndOfTag()
    //
    return unquote(value)
}

function parserEatEmbeddeStyleSheet() {
    //
    const start = parserPos
    //
    parserFinishEatingIgnored("style")
    //
    const sheet = parserSource.substring(start, parserPos) // broken at the ends
    //
    const lines = sheet.split("\n")
    //
    for (const rawline of lines) {
        //
        let line = rawline.trim()
        //
        if (! line.startsWith(".iu")) { continue }
        //
        line = line.replace('{ background-image: url("', "")
        //
        line = line.replace('"); }', "")
        //
        const src = line.split(" ")[1]
        //
        parserDataUrls.push(src)
    }
}

// ## file: editor/result/body1.js ##

// the text tag is a pseudo tag

var closeTagMissesTail = false

function createTag(node, kind, indentation) {
    //
    return {
        //
        "node": node,
        "kind": kind,    // text, void, open, close
        "indentation": indentation, // number of whitespaces
        "closingEmptyTag": false
    }
}

function createHtmlBody() {
    //
    const tags = [ ]
    //
    bodyWalkNodes(tags, [webpage.body], 0)
    //
    return tagsAsString(tags)
}

function bodyWalkNodes(tags, nodes, indentation) {
    //
    for (const node of nodes) { bodyWalkNode(tags, node, indentation) }
}

function bodyWalkNode(tags, node, indentation) {
    //
    if (node.tagname == "text") {
        //
        const pseudoTag = createTag(node, "text", indentation)
        //
        tags.push(pseudoTag)
        //
        return
    }
    //
    //
    if (node.tagname == "br"  ||  node.tagname == "img") {
        //
        const voidTag = createTag(node, "void", indentation)
        //
        tags.push(voidTag)
        //
        return
    }
    //
    //
    const openTag = createTag(node, "open", indentation)
    //
    tags.push(openTag)
    //
    bodyWalkNodes(tags, node.children, indentation + 1)
    //
    const closeTag = createTag(node, "close", indentation)
    //
    if (node.children.length == 0) { closeTag.closingEmptyTag = true }
    //
    tags.push(closeTag)
}

function tagsAsString(tags) {
    //
    let s = ""
    //
    const off = tags.length
    //
    for (let n = 0; n < off; n++) {
        //
        const previous = tags[n - 1]
        //
        const tag = tags[n]
        //
        const next = tags[n + 1]
        //
        if (tag.kind == "void")  { s += tagVoidAsString(tag, next); continue }
        //
        if (tag.kind == "open")  { s += tagOpenAsString(tag, previous); continue }
        //
        if (tag.kind == "close") { s += tagCloseAsString(tag, previous, next); continue }
        //
        s += pseudoTagAsString(tag, previous) // "text"
    }
    //
    return s
}

function pseudoTagAsString(tag, previous) {
    //
    const txt = textToHtml(tag.node.text)
    //
    if (isInlineAlike(previous)) { return txt }
    //
    return "\n" + justIndent(txt, 4 * tag.indentation)
}

function tagOpenAsString(tag, previous) {
    //
    let s = ""
    //
    if (closeTagMissesTail) {
        //
        s = "\n" + " ".repeat(4 * tag.indentation - 1) + "><"
        //
        closeTagMissesTail = false
    }
    //
    else if (isInlineAlike(tag)  &&  isInlineAlike(previous)) {
        //
        s = "<"
    }
    //
    else {
        //
        s = "\n" + " ".repeat(4 * tag.indentation) + "<"
    }
    //
    const node = tag.node
    //
    s += node.tagname + nodeId(node) + nodeClass(node) + nodeExtra(node) + ">"
    //
    return s
}

function tagCloseAsString(tag, previous, next) {
    //
    let s = "\n" + " ".repeat(4 * tag.indentation)
    //
    if (shallRelaxIndentOnCloseTag(tag, previous)) { s = "" }
    //
    s += "</" + tag.node.tagname
    //
    if (shallFinishCloseTag(tag, next)) { s += ">" } else { closeTagMissesTail = true }
    //
    return s
}

function shallRelaxIndentOnCloseTag(tag, previous) {
    //
    if (tag.closingEmptyTag) { return true }
    //
    return isInlineAlike(tag)  &&  isInlineAlike(previous)
}

function shallFinishCloseTag(tag, next) {
    //
    if (next == undefined) { return true }
    //
    if (isInlineAlike(next)) { return true }
    //
    if (next.node.tagname == "br") { return true }
    //
    return next.indentation != tag.indentation
}

function tagVoidAsString(tag, next) {
    //
    const node = tag.node
    //
    let s = ""
    //
    if (closeTagMissesTail) {
        //
        s = "\n" + " ".repeat(4 * tag.indentation - 1) + "><"
        //
        closeTagMissesTail = false
    }
    //
    else {
        //
        s = "\n" + " ".repeat(4 * tag.indentation) + "<"
    }
    //
    //
    s += node.tagname + nodeId(node) + nodeClass(node) + nodeExtra(node)
    //
    if (shallFinishVoidTag(tag, next)) { return s + ">" }
    //
    closeTagMissesTail = true
    //
    return s
}

function shallFinishVoidTag(tag, next) {
    //
    if (tag.node.tagname == "br") { return true }
    //
    if (next == undefined) { return true }
    //
    if (next.kind == "text") { return true }
    //
    if (next.node.tagname == "br") { return true }
    //
    return next.indentation != tag.indentation
}


// ## file: editor/result/body2.js ##

function isInlineAlike(tag) {
    //
    if (tag == undefined) { return false }
    //
    if (tag.kind == "text") { return true }
    //
    return inlineAlikeTags.includes(tag.node.tagname)
}

function nodeId(node) {
    //
    if (node.id != "") { return ' id="' + node.id + '"' } else { return "" }
}

function nodeClass(node) {
    //
    const bgimg = node.attributes["bgimg-src"]
    //
    if (bgimg != undefined) { return nodeClassWithBgImage(node, bgimg) }
    //
    //
    if (node.classes.length == 0) { return "" }
    //
    simpleSort(node.classes)
    //
    return ' class="' + node.classes.join(" ") + '"'
}

function nodeClassWithBgImage(node, bgimg) {
    //
    const index = allBackgroundImages.indexOf(bgimg)
    //
    const classes = [ "iu" + (index + 1) ]
    //
    for (const clas of node.classes) { classes.push(clas) }
    //
    simpleSort(classes)
    //
    return ' class="' + classes.join(" ") + '"'
}

function nodeExtra(node) {
    //
    const keys = Object.keys(node.attributes)
    //
    if (keys.length == 0) { return "" }
    //
    let list = [ ]
    //
    for (const key of keys) {
        //
        if (key == "bgimg-src") { continue } // internal attribute only
        //
        const value = node.attributes[key]
        //
        if (value == "") {
            //
            if (key.startsWith("data-")) { list.push(key) }
            //
            continue
        }
        //
        list.push(key + '="' + value + '"')
    }
    //
    if (list.length == 0) { return "" }
    //
    return " " + list.join(" ")
}


// ## file: editor/result/css.js ##

var allBackgroundImages = [ ]

function createCssSheet() {
    //
    updateAllBackgroundImages()
    //
    const classes = [ ]
    //
    const mqClasses = [ ]
    //
    const moleculars = { }
    //
    for (const clas of getAllUsedClasses()) {
        //
        if (clas == "-x") { continue }
        //
        if (molecularClasses.includes(clas)) { moleculars[clas] = true; continue }
        //
        if (clas[0] == "q") { mqClasses.push(clas); continue }
        //
        classes.push(clas)
    }
    //
    simpleSort(classes)
    //
    simpleSort(mqClasses)
    //
    return "" +
    //
    cssTemplateReset +
    //
    cssTemplateDefault +
    //
    createCssSheetsMolecular(moleculars) +
    //
    createCssSheetBackgroundImages() +
    //
    createCssSheetAtomic(classes) +
    //
    createCssSheetsMediaQuery(mqClasses)
}

function updateAllBackgroundImages() {
    //
    allBackgroundImages = [ ]
    //
    for (const node of allNodes) {
        //
        const bgimg = node.attributes["bgimg-src"]
        //
        if (! bgimg) { continue }
        //
        if (allBackgroundImages.includes(bgimg)) { continue }
        //
        allBackgroundImages.push(bgimg)
    }
}

function getAllUsedClasses() {
    //
    const useds = { }
    //
    let nodes = [ webpage.body ]
    //
    let futureNodes = [ ]
    //
    while (nodes.length != 0) {
        //
        for (const node of nodes) {
            //
            for (const clas of node.classes) { useds[clas] = true }
            //
            for (const child of node.children) { futureNodes.push(child) }
        }
        //
        nodes = futureNodes
        //
        futureNodes = [ ]
    }
    //
    return Object.keys(useds)
}

function createCssSheetsMolecular(moleculars) {
    //
    let sheets = ""
    //
    if (moleculars["-anim-bounce"]  ||  moleculars["-anim-speed"]) { sheets += cssTemplateAnimation }
    //
    if (moleculars["-wa-icon"]) { sheets += cssTemplateWhatsApp }
    //
    if (moleculars["-larrow-icon"]  ||  moleculars["-rarrow-icon"]) { sheets += cssTemplateHorizArrows }
    //
    return sheets
}

function createCssSheetBackgroundImages() {
    //
    if (allBackgroundImages.length == 0) { return "" }
    //
    let sheet = "\n    <style>"
    //
    let n = 0
    //
    for (const bgimg of allBackgroundImages) {
        //
        n += 1
        //
        const clas = "iu" + n
        //
        const declaration = "background-image: url(\"" + bgimg + "\");"
        //
        sheet += cssTemplateAtomic.replace("@class@", clas).replace("@declarations@", declaration)
    }
    //
    return sheet + "\n    </style>"
}

function createCssSheetAtomic(classes) {
    //
    if (classes.length == 0) { return "" }
    //
    let s = "\n    <style>"
    //
    for (const clas of classes) { s += createCssAtomicRule(clas) }
    //
    return s + "\n    </style>"
}

function createCssAtomicRule(clas) {
    //
    const declaration = makeAtomicDeclaration(clas)
    //
    if (declaration == null) { throw "Invalid CSS class '" + clas + "'" }
    //
    return cssTemplateAtomic.replace("@class@", clas).replace("@declarations@", declaration)
}

function createCssSheetsMediaQuery(mqClasses) {
    //
    const a = createCssMediaQueriesFor(mqClasses, "qa")
    //
    const b = createCssMediaQueriesFor(mqClasses, "qb")
    //
    const c = createCssMediaQueriesFor(mqClasses, "qc")
    //
    const d = createCssMediaQueriesFor(mqClasses, "qd")
    //
    return cssTemplateMediaQueries.replace("@qa-rules@", a).
                                   replace("@qb-rules@", b).
                                   replace("@qc-rules@", c).
                                   replace("@qd-rules@", d)
}

function createCssMediaQueriesFor(mqClasses, prefix) {
    //
    let s = ""
    //
    for (const clas of mqClasses) {
        //
        if (! clas.startsWith(prefix)) { continue }
        //
        const core = clas.replace(prefix, "")
        //
        const declaration = makeAtomicDeclaration(core)
        //
        if (declaration == null) { throw "Invalid CSS class '" + clas + "'" }
        //
        s += cssTemplateMQAtomic.replace("@class@", clas).replace("@declarations@", declaration)
    }
    //
    return s
}


// ## file: editor/result/head.js ##

function createHtmlHead() {
    //
    const s = "" +
    //
    createHeadStart() +
    //
    createHeadTitle() +
    //
    createHeadDescription() +
    //
    createHeadViewport() +
    //
    createHeadFavicon() +
    //
    createCssSheet() +
    //
    createHeadAnalytics() +
    //
    createHeadEnd()
    //
    return s
}

function createHeadStart() {
    //
    return "" +
    //
    "<!DOCTYPE html>" +
    "\n<!--" +
    "\n     # This webpage was generated using Web As You Wish #" +
    "\n     # (at webasyouwish.com) #" +
    "\n     # Do NOT edit this webpage manually! #" +
    "\n-->" +
    '\n<html lang="' + webpage.lang + '">' +
    '\n<head>' +
    '\n    <meta charset="utf-8">'
}

function createHeadTitle() {
    //
    const value = noTag(webpage.title).trimRight()
    //
    return "\n    <title>" + value + "</title>"
}

function createHeadDescription() {
    //
    const value = webpage.description.trimRight()
    //
    if (value == "") { return "" }
    //
    return '\n    <meta name="description" content="' + value + '">'
}

function createHeadViewport() {
    //
    return '\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">'
}

function createHeadFavicon() {
    //
    return '\n    <link rel="icon" href="' + webpage.favicon + '">'
}

function createHeadAnalytics() {
    //
    const value = webpage["analytics-id"]
    //
    if (value == "") { return "" }
    //
    return analyticsTemplate.replace("@analytics-id@", value).
                             replace("@analytics-id@", value).
                             replace("@analytics-id@", value)
}

function createHeadEnd() {
    //
    return "\n</head>"
}


// ## file: editor/result/result.js ##

// In local storage, replacing "children" for "trash"
// produces internal error in createHtml

function createHtml() {
    //
    try {
        //
        return createHtmlHead() + createHtmlBody() + "\n</html>"
    }
    catch (e) {
        //
        deleteFlawedWebpage(e)
        //
        return null
    }
}


// ## file: editor/result/text.js ##

function textToHtml(txt) {
    //
    let s = ""
    //
    let style = ""
    //
    while (txt != "") {
        //
        if (txt.startsWith("{{"))   { s += "{"; txt = txt.substr(2); continue }
        //
        if (txt.startsWith("{}"))  { s += endStyle(); continue }
        //
        if (txt.startsWith("{b}"))  { s += bStart(); continue }
        //
        if (txt.startsWith("{i}"))  { s += iStart(); continue }
        //
        if (txt.startsWith("{bi}")) { s += biStart(); continue }
        //
        const c = txt[0]
        //
        txt = txt.substr(1)
        //
        if (c == "<")  { s += "&lt;"; continue }
        //
        if (c == ">")  { s += "&gt;"; continue }
        //
        if (c == "&")  { s += "&amp;"; continue }
        //
        s += c
    }
    //
    //
    s = s.split("\n").join("\n<br>\n")
    //
    s = s.split("\n\n").join("\n")
    //
    if (s.startsWith("\n")) { s = s.substr(1) }
    //
    if (s.endsWith("\n")  &&  style == "") { s = s.substr(0, s.length - 1) }
    //
    if (style == "b")  { s += "</b>" }
    if (style == "i")  { s += "</i>" }
    if (style == "bi") { s += "</i></b>" }
    //
    return fixWhiteSpaceInHtml(s)
    //
    //
    function endStyle() {
        //
        txt = txt.substr(2)
        //
        const stl = style
        //
        style = ""
        //
        if (stl == "")  { return "" }
        if (stl == "b") { return "</b>" }
        if (stl == "i") { return "</i>" }
        return "</i></b>" // bi
    }
    //
    function bStart() {
        //
        txt = txt.substr(3)
        //
        const stl = style
        //
        style = "b"
        //
        if (stl == "")  { return "<b>" }
        if (stl == "b") { return "" }
        if (stl == "i") { return "</i><b>" }
        return "</i>" // bi
    }
    //
    function iStart() {
        //
        txt = txt.substr(3)
        //
        const stl = style
        //
        style = "i"
        //
        if (stl == "")  { return "<i>" }
        if (stl == "b") { return "</b><i>" }
        if (stl == "i") { return "" }
        return "</i></b><i>" // bi
    }
    //
    function biStart() {
        //
        txt = txt.substr(4)
        //
        const stl = style
        //
        style = "bi"
        //
        if (stl == "")  { return "<b><i>" }
        if (stl == "b") { return "<i>" }
        if (stl == "i") { return "</i><b><i>" }
        return "" // bi
    }
}

function fixWhiteSpaceInHtml(txt) {
    //
    let s = ""
    //
    while (txt != "") {
        //
        const c = txt[0]
        //
        txt = txt.substr(1)
        //
        if (c != " ") { s += c; continue }
        //
        if (s == "") { s += "&nbsp;"; continue }
        //
        const last = s[s.length - 1]
        //
        if (last == " ") { s += "&nbsp;"; continue  }
        //
        if (last == ">") { s += "&nbsp;"; continue  }
        //
        if (txt == "")   { s += "&nbsp;"; continue  }
        //
        const next = txt[0]
        //
        if (next == "<") { s += "&nbsp;"; continue  }
        //
        if (next == " ") { s += "&nbsp;"; continue  }
        //
        s += " "
    }
    //
    return s
}


// ## file: editor/sample/mark.js ##

// Clicking on an element always selects it,
// making the mark to cover it, so it cannot be clicked again
//
// Clicking on the mark always opens the edit menu

var selectedNode = null

const mark = document.querySelector("#mark")

function capitalized() {
    //
    if (selectedNode.tagname == "div") { return "Division" }
    //
    if (selectedNode.tagname == "img") { return "Image" }
    //
    if (selectedNode.tagname == "header") { return "Header" }
    //
    if (selectedNode.tagname == "footer") { return "Footer" }
}

function lowercase() { return capitalized().toLowerCase() }

function setStandardMark() {
    //
    mark.className = mark.className.replace("-aim-mark", "-checkersbg-small")
}

function setAimMark() {
    //
    mark.className = mark.className.replace("-checkersbg-small", "-aim-mark")
}

function selectNode(node) {
    //
    selectedNode = node
    //
    adjustMarkToSelectedNode()
}

function unselectNode() {
    //
    selectedNode = null
    //
    mark.style.display = "none"
}

function adjustMarkToSelectedNode() { // also called by updateSample
    //
    if (selectedNode == null) { mark.style.display = "none"; return }
    //
    const sampleElement = matchForNode(selectedNode)
    //
    if (sampleElement.style.display == "none") { mark.style.display = "none"; return }
    //
    // this code was moved to an outer function
    // because of this bug in Chrome:
    // a dismissed vscroll bar was messing up
    // with this assignment:
    // mark.style.width = sampleElement.offsetWidth + "px"
    // simply it wasn't assigning (or was assigning the previous value)
    makeMarkMatch(sampleElement)
    //
    mark.style.display = "inline-block"
    //
    mark.onclick = function (e) { e.stopPropagation(); markClicked(e.offsetX, e.offsetY) }
}

function makeMarkMatch(sampleElement) {
    //
    mark.style.width = sampleElement.offsetWidth + "px"
    mark.style.height = sampleElement.offsetHeight + "px"
    //
    mark.style.top = sampleElement.offsetTop + "px"
    mark.style.left = sampleElement.offsetLeft + "px"
}

function markClicked(x, y) {
    //
    // fixing border error
    if (x < 0) { x = 0 }
    if (y < 0) { y = 0 }
    if (x > mark.offsetWidth  - 1) { x = mark.offsetWidth - 1 }
    if (y > mark.offsetHeight - 1) { y = mark.offsetHeight - 1 }
    //
    const xpc = x / mark.offsetWidth
    const ypc = y / mark.offsetHeight
    //
    if (modeBalancing) { balanceSomething(selectedNode, xpc, ypc); return }
    //
    showEditMenu()
}


// ## file: editor/sample/sample1.js ##

// we cannot write media query in the sample nodes because
// media queries ignore the simulation of the window screen

const pseudoScreen = document.querySelector("#pseudo-screen")

const pseudoBody = document.querySelector("#pseudo-body")

var allNodes = [ ]

var allSampleNodes = [ ]

function updateSample() {
    //
    try {
        updateSampleCore()
    }
    //
    catch (e) {
        //
        deleteFlawedWebpage(e)
    }
}

function updateSampleCore() {
    //
    pseudoBody.innerHTML = ""
    //
    allNodes = [ ]
    //
    allSampleNodes = [ ]
    //
    createSampleNodes()
    //
    applyCssToSample()
    //
    adjustMarkToSelectedNode()
}

function createSampleNodes() {
    //
    let nodes = [ webpage.body ]
    let sampleNodes = [ pseudoBody ]
    //
    let futureNodes = [ ]
    let futureSampleNodes = [ ]
    //
    while (nodes.length != 0) {
        //
        const off = nodes.length
        //
        for (let n = 0; n < off; n++) {
            //
            const node = nodes[n]
            const sampleNode = sampleNodes[n]
            //
            allNodes.push(node)
            allSampleNodes.push(sampleNode)
            //
            if (node.children.length == 0) { continue }
            //
            for (const child of node.children) {
                //
                futureNodes.push(child)
                //
                //
                const sampleChild = createSampleNode(child)
                //
                sampleNode.appendChild(sampleChild)
                //
                futureSampleNodes.push(sampleChild)
            }
        }
        //
        nodes = futureNodes
        futureNodes = [ ]
        //
        sampleNodes = futureSampleNodes
        futureSampleNodes = [ ]
    }
}

function createSampleNode(node) {
    //
    // not clickable; not stylable
    if (node.tagname == "text") { return document.createTextNode(node.text) }
    //
    //
    const element = document.createElement(node.tagname)
    //
    //
    if (node.tagname == "img") { setSampleNodeImage(element, node) }
    //
    //
    if (node.attributes["bgimg-src"]) { setSampleNodeBgImage(element, node) }
    //
    element.onclick = function (e) { e.stopPropagation(); sampleElementClicked(element) }
    //
    return element
}

function setSampleNodeImage(element, node) {
    //
    const src = node.attributes["src"]
    //
    const dataUrl = dataUrls[src]
    //
    element.src = dataUrl
    //
    element.alt = node.attributes.alt  ||  ""
    //
    element.title = node.attributes.title  ||  ""
    //
    while (element.title.includes("&quot;")) {
        //
        element.title = element.title.replace("&quot;", "\"")
    }
    //
    if (! dataUrl) { element.alt = "*ERROR*" }
}

function setSampleNodeBgImage(element, node) {
    //
    const src = node.attributes["bgimg-src"]
    //
    const dataUrl = dataUrls[src]
    //
    element.style.backgroundImage = "url('" + dataUrl + "')"
}

function matchForNode(node) {
    //
    const index = allNodes.indexOf(node)
    //
    return allSampleNodes[index]
}

function matchForSampleNode(sampleNode) {
    //
    const index = allSampleNodes.indexOf(sampleNode)
    //
    return allNodes[index]
}

function sampleElementClicked(element) {
    //
    giveUp()
    //
    const candidate = matchForSampleNode(element)
    //
    const node = findSelectableNode(candidate)
    //
    selectNode(node)
}

function findSelectableNode(node) {
    //
    for (const clas of node.classes) {
        //
        if (clas.trim() != "-x") { continue }
        //
        const parent = getParentNode(node)
        //
        if (parent == pseudoBody) { return node } // for safety only
        //
        return findSelectableNode(parent)
    }
    //
    return node
}


// ## file: editor/sample/sample2.js ##

function applyCssToSample() {
    //
    const device = deviceByScreenWidth()
    //
    const prefix = prefixByDevice[device]
    //
    for (let n = 0; n < allNodes.length; n++) {
        //
        const node = allNodes[n]
        //
        const sampleNode = allSampleNodes[n]
        //
        if (sampleNode.nodeName == "#text") { continue }
        //
        applyCssToSampleElement(sampleNode, node, prefix)
    }
}

function applyCssToSampleElement(element, node, prefix) {
    //
    for (const clas of node.classes) {
        //
        if (clas == "-x") { continue }
        //
     // if (clas.startsWith("iu")) { continue } // bgimg url: filtered by parser, processed by setSampleNodeBgImage
        //
        if (molecularClasses.includes(clas)) { element.className += " " + clas; continue }
        //
        if (! clas.startsWith("q")) { applyAtomicCssToSampleElement(element, clas); continue }
        //
        // filters media query that matches the current simulated screen:
        //
        if (clas.startsWith(prefix)) { applyAtomicCssToSampleElement(element, clas.substr(2)); continue }
    }
    //
    if (isEmptyDivision(node)) { beautifyEmptyDivision(node, element) }
}

function isEmptyDivision(node) {
    //
    if (! webpage.body.children.includes(node)) { return false }
    //
    return node.children.length == 0
}

function beautifyEmptyDivision(node, element) { // must not clash with the real bg color
    //
    const b = document.createElement("button")
    //
    b.innerText = "* empty division *"
    //
    b.style.padding = "5px 10px"
    b.style.fontSize = "20px"
    b.style.fontWeight = "bold"
    b.style.fontFamily = "arial, sans-serif"
    b.style.border = "2px solid black"
    b.style.borderRadius = "20px"
    b.style.color = "white"
    b.style.backgroundColor = "grey"
    //
    element.appendChild(b)
    //
    element.style.width = "100%"
    element.style.minHeight = nodeMinimumHeight(node) + "px"
    element.style.padding = "50px 0"
    element.style.textAlign = "center"
    element.style.border = "2px dotted black"
}

function applyAtomicCssToSampleElement(element, clas) { // expects single declaration rule only
    //
    const declaration = makeAtomicDeclaration(clas)
    //
    if (declaration == null) { throw "Unknow class '" + clas + "'" }
    //
    const parts = declaration.split(":")
    //
    const property = parts[0].trim()
    //
    const rawval = parts[1].trim()
    //
    const value = rawval.substr(0, rawval.length - 1) // strips the semicolon
    //
    element.style[property] = value
}


// ## file: editor/sample/screen.js ##

const allScreens = [
    //
    "320px (IPhone 5)",
    "360px (Galaxy S3)",
    "375px (IPhone 6/7/8)",
    "412px (Google Pixel)",
    "480px (Nokia N9)",
    "540px (Surface Duo)",
    "640px (Galaxy S3 - landscape)",
    "768px (IPad)",
    "800px (Kindle Fire HDX)",
    "1024px (Nest Hub)",
    "1280px (old laptop)",
    "1366px (modern laptop)",
    "1536px (large desktop screen)",
    "1920px (larger desktop screen)"
]

const allWidths = [ 320, 360, 375, 412, 480, 540, 640, 768, 800, 1024, 1280, 1366, 1536, 1920 ]

var selectedScreenWidth = 360

function deviceByScreenWidth() {
    //
    if (selectedScreenWidth <= 412)  { return "smartphone" }
    if (selectedScreenWidth <= 1024) { return "tablet" }
    if (selectedScreenWidth <= 1366) { return "laptop" }
    return "desktop"
}

function showScreenMenu() {
    //
    customPick("Screen to be simulated", showScreenMenu2, allWidths, allScreens, selectedScreenWidth)
}

function showScreenMenu2(width) {
    //
    if (width == null) { showMainMenu(); return }
    //
    if (width == selectedScreenWidth) { return }
    //
    selectedScreenWidth = parseInt(width)
    //
    applyScreenWidth()
}

function changePseudoScreenByKeyboard(delta) {
    //
    const index = allWidths.indexOf(selectedScreenWidth)
    //
    if (delta == -1  &&  index == 0) { return }
    //
    if (delta == +1  &&  index == allWidths.length - 1) { return }
    //
    selectedScreenWidth = allWidths[index + delta]
    //
    applyScreenWidth()
}

function applyScreenWidth() {
    //
    const w = selectedScreenWidth + "px"
    //
    pseudoScreen.style.width = w
    //
    document.querySelector("#-menu-button1-div").style.width = w
    //
    document.querySelector("#-menu-button1-screen").innerHTML = w + "<br>" + deviceByScreenWidth()
    //
    document.querySelector("#-menu-button2-div").style.width = w
    //
    document.querySelector("#-menu-button2-screen").innerHTML = w + "<br>" + deviceByScreenWidth()
    //
    updateSample()
}


// ## file: editor/webpage/display.js ##

function displayWebpage() {
    //
    const result = createHtml()
    //
    if (result == null) { return }
    //
    const dokd = document.onkeydown
    document.onkeydown = null
    //
    const layer = document.createElement("div")
    document.body.appendChild(layer)
    layer.style.position = "fixed"
    layer.style.left = "0"
    layer.style.top = "0"
    layer.style.width = "100%"
    layer.style.height = "100%"
    layer.style.overflow = "auto"
    layer.style.textAlign = "left"
    layer.style.zIndex = "99999999"
    layer.style.color = "rgb(240,240,255)"
    layer.style.backgroundColor = "dimgrey"
    layer.setAttribute("tabindex", "0")
    layer.focus()
    //
    const center = document.createElement("div")
    layer.appendChild(center)
    center.style.textAlign = "center"
    center.style.backgroundColor = "grey"
    //
    const button = document.createElement("button")
    center.appendChild(button)
    button.innerText = "close"
    button.className = "-dkbt"
    button.style.margin = "20px 0"
    button.onclick = close
    //
    center.appendChild(document.createElement("br"))
    //
    const span = document.createElement("span")
    center.appendChild(span)
    span.style.fontWeight = "600"
    span.style.backgroundColor = "Sslategrey"
    const len = Math.round(result.length / 1000)
    span.innerHTML = "Size of the file (HTML + CSS + JS): &nbsp;<b>" + len + " kB</b>"
    //
    center.appendChild(document.createElement("br"))
    center.appendChild(document.createElement("br"))
    //
    layer.appendChild(document.createElement("br"))
    layer.appendChild(document.createElement("br"))
    //
    const core = document.createElement("div")
    layer.appendChild(core)
    core.style.width = "100%"
    core.style.padding = "10px 30px"
    core.style.fontFamily = "monospace"
    core.style.whiteSpace = "pre"
    core.style.userSelect = "text"
    core.innerText = result
    //
    document.onkeydown = function (e) {
        //
        if (e.key.toLowerCase() == "enter")  { close() }
        if (e.key.toLowerCase() == "escape") { close() }
    }
    //
    function close() {
        document.onkeydown = dokd
        document.body.removeChild(layer)
    }
}

 // doesn't work because of images;
 // embedding the images:
 //  heavy webpage + low qualiy for big images;
 //  the user could use that as the final result even
 //  when warned not to do (language barrier + distraction)

function __openWebpageInNewTab() {
    //
    const newtab = window.open()
    //
    const html = createHtml()
    //
    if (html == null) { return }
    //
    newtab.document.documentElement.innerHTML = html
    //
    newtab.document.title = webpage.title
    //
    newtab.document.onclick = function() { newtab.close() }
    //
    newtab.document.onkeydown = function () { newtab.close() }
}


// ## file: editor/webpage/load-save.js ##

const fileSelector = document.querySelector("#file-selector")

function trySaveWebpage() {
    //
    if (webpage.name.startsWith("-")) {
        //
        customAlert("A demo webpage can only be 'saved as'", saveWebpageAs)
        //
        return
    }
    //
    if (! webpageIsEdited()) {
        //
        customAbort("No need to save: the webpage <b>" + webpage.name  + "</b> has no new edit", showWebpageMenu)
        //
        return
    }
    //
    storeDefinition() // may fail
    //
    definitions[webpage.name] = JSON.stringify(webpage)
}

function saveWebpageAs() {
    //
    const msg = "Name of the copy"
    //
    namePrompt(msg, saveWebpageAs2)
}

function saveWebpageAs2(name) {
    //
    if (name == null) { showWebpageMenu(); return }
    //
    if (name == "") { customError("Missing name", saveWebpageAs); return }
    //
    if (name == webpage.name) { customError("This is the current name", saveWebpageAs); return }
    //
    if (definitions[name]) {
        //
        const msg = "The webpage <b>" + name + "</b> already exists. Are you sure you want to overwrite it?"
        //
        safeConfirm(msg, function() { saveWebpageAs3(name) }, showWebpageMenu)
        //
        return
    }
    //
    saveWebpageAs3(name)
}

function saveWebpageAs3(name) {
    //
    webpage.name = name
    //
    storeDefinition() // may fail
    //
    definitions[name] = JSON.stringify(webpage)
    //
    updateNamesOfWebpages()
    //
    selectThisWebpage(name)
}

function loadWebpage() {
    //
    const msg = "You should ONLY load webpages created with WAYW<br><br>" +
                "NEVER load any WAYW webpage if edited somewhere else<br><br>" +
             // "Any script inside the loading webpage is ignored<br><br>" +
                "Maybe WAYW has to memorize some images again"
    //
    customAlert(msg, loadWebpage1)
}

function loadWebpage1() {
    //
    namePrompt("Name of the new webpage", loadWebpage2)
}

function loadWebpage2(name) {
    //
    if (! name) { showWebpageMenu(); return }
    //
    if (definitions[name]) { customError("This name is already used by a webpage", loadWebpage); return }
    //
    fileSelector.value = "" // or else same file will not trigger onchange event again
    //
    fileSelector.onchange = function() { loadWebpage3(name) }
    //
    fileSelector.click()
}

function loadWebpage3(name) {
    //
    const file = fileSelector.files[0]
    //
    if (file == undefined) { customAbort("Internal error"); return } // should not happen
    //
    const reader = new FileReader()
    //
    reader.onload = function (e) { loadWebpage4(name, e.target.result) }
    //
    reader.readAsText(file)
}

function loadWebpage4(name, html) {
    //
    const obj = parseHtmlFile(html)
    //
    if (obj != null) { loadWebpage5(name, obj); return }
    //
    customError(parserError, cb)
    //
    function cb() { customAbort("Loaded file is not a WAYW webpage or is corrupted") }
}

function loadWebpage5(name, obj) {
    //
    obj.name = name
    //
    const definition = JSON.stringify(obj)
    //
    definitions[name] = definition
    //
    updateNamesOfWebpages()
    //
    selectThisWebpage(name)
    //
    storeDefinition() // may fail
}


// ## file: editor/webpage/webpage.js ##

var webpage = { } // object

var webpageMenuItem = "load from browser"

function showWebpageMenu() {
    //
    const list = [ "delete", "download", "load from disk", "load from browser", "rename", "restore",
                   "save", "save as", "display code" ]
    //
    customPick("Webpage", showWebpageMenu2, list, list, webpageMenuItem)
}

function showWebpageMenu2(answer) {
    //
    if (answer == null) { showMainMenu(); return }
    //
    webpageMenuItem = answer
    //
    if (answer == "delete") { tryDeleteWebpage(); return }
    //
    if (answer == "download") { downloadWebpage(); return }
    //
    if (answer == "load from disk") { loadFromDisk(); return }
    //
    if (answer == "load from browser") { loadFromBrowser(); return }
    //
    if (answer == "rename") { tryRenameWebpage(); return }
    //
    if (answer == "restore") { tryRestoreWebpage(); return }
    //
    if (answer == "save") { trySaveWebpage(); return }
    //
    if (answer == "save as") { saveWebpageAs(); return }
    //
    if (answer == "display code") { displayWebpage(); return }
}

function webpageIsEdited() {
    //
    return definitions[webpage.name] != JSON.stringify(webpage)
}

function loadFromDisk() {
    //
    if (webpageIsEdited()) {
        //
        customAbort("Current webpage must be restored or saved", showWebpageMenu)
    }
    else {
        //
        loadWebpage()
    }
}

function loadFromBrowser() {
    //
    if (webpageIsEdited()) {
        //
        customAbort("Current webpage must be restored or saved", showWebpageMenu)
    }
    else {
        //
        showWebpageSelector()
    }
}

function resetCurrentWebpage() {
    //
    selectThisWebpage(webpage.name)
}

function downloadWebpage() {
    //
    const msg = "Put the used images in the same directory of the <b>.html</b> file and double-click the file"
    //
    customAlert(msg, downloadWebpage2)
}

function downloadWebpage2() {
    //
    const data = createHtml()
    //
    if (data == null) { return } // got error
    //
    customMessage("(pseudo) Downloading webpage", "<b>" + webpage.name + "</b>")
    //
    const link = document.querySelector("#download-webpage")
    //
    link.download = webpage.name + ".html"
    //
    link.href = convertTextToDataUrl(data)
    //
    link.click()
}

function tryRestoreWebpage() {
    //
    if (! webpageIsEdited()) {
        //
        customAbort("No need to restore: the webpage <b>" + webpage.name  + "</b> has no new edit", showWebpageMenu)
        //
        return
    }
    //
    const msg = "Are you sure you want to RESTORE the webpage <b>" + webpage.name  + "</b> ?"
    //
    customConfirm(msg, resetCurrentWebpage)
}

function tryDeleteWebpage() {
    //
    if (webpage.name.startsWith("-")) {
        //
        customAbort("A demo webpage cannot be deleted", showWebpageMenu)
        //
        return
    }
    //
    const msg = "Are you sure you want to *DELETE* the webpage <b>" + webpage.name  + "</b> ?"
    //
    safeConfirm(msg, deleteWebpage, showWebpageMenu)
}

function deleteWebpage() {
    //
    justDeleteWebpage()
    //
    const name = namesOfWebpages[0]
    //
    selectThisWebpage(name)
}

function justDeleteWebpage() {
    //
    unstoreItem("definition-" + webpage.name)
    //
    delete definitions[webpage.name]
    //
    updateNamesOfWebpages()
}

function tryRenameWebpage() {
    //
    if (webpage.name.startsWith("-")) {
        //
        customAlert("A demo webpage cannot be renamed. Starting to 'save as' it", saveWebpageAs)
        //
        return
    }
    //
    namePrompt("New name", renameWebpage)
}

function renameWebpage(name) {
    //
    if (name == null) { showWebpageMenu(); return }
    //
    if (name == "") { customError("Missing name", tryRenameWebpage); return }
    //
    if (name == webpage.name) { customError("This is the current name", tryRenameWebpage); return }
    //
    if (definitions[name]) { customError("This name is used by other webpage", tryRenameWebpage); return }
    //
    const oldname = webpage.name
    //
    webpage.name = name
    //
    definitions[name] = JSON.stringify(webpage)
    //
    delete definitions[oldname]
    //
    updateNamesOfWebpages()
    //
    selectThisWebpage(name)
}


// ## file: editor/webpage/webpages.js ##

var definitions = { } // json strings

var namesOfWebpages = [ ]

function updateNamesOfWebpages() {
    //
    namesOfWebpages = Object.keys(definitions)
    //
    simpleSort(namesOfWebpages)
}

function showWebpageSelector() {
    //
    customPick("Select webpage", showWebpageSelector2, namesOfWebpages, namesOfWebpages, webpage.name)
}

function showWebpageSelector2(name) {
    //
    if (name == null) { showWebpageMenu(); return }
    //
    if (name == webpage.name) { return }
    //
    selectThisWebpage(name)
}

function selectThisWebpage(name) {
    //
    reset()
    //
    webpage = parseJson(definitions[name])
    //
    updateSample()
    //
    updateWebpageInMenuButton()
}

function deleteFlawedWebpage(e) {
    //
    console.log(e)
    //
    customError("This webpage has flaw(s) and is being deleted")
    //
    justDeleteWebpage()
    //
    const newname = namesOfWebpages[0]
    //
    if (newname != undefined) { selectThisWebpage(newname) }
}


// ## file: editor/TEMP.js ##

/////////////////////////////////////////////////////////////////////////////////

function __for_dirty_rat() {
    //
    console.log(

        // webpage
        showMainMenu,

        // main
        main,

        // helper-universal
        cleanIndent, cloneObj, fillSelector, justIndent, scrollWindowToBottom,

        // popups
        customPrompt
    )
}


/////////////////////////////////////////////////////////////////////////////////
/*
function floatingTool() {
    //
    const ft = document.createElement("div")
    document.body.appendChild(ft)
    //
    ft.style.position = "fixed"
    ft.style.left = "0"
    ft.style.top = "0"
    ft.style.width = "100vw"
    ft.style.height = "100vh"
    ft.style.textAlign = "left"
    ft.style.padding = "10px 30px"
    ft.style.color = "rgb(240,240,255)"
    ft.style.backgroundColor = "dimgrey"
    ft.style.fontFamily = "monospace"
    ft.style.whiteSpace = "pre"
    ft.style.userSelect = "text"
    ft.style.zIndex = "99999999"
    ft.style.overflow = "auto"
    ft.style.display = "none"
    return ft

}

*/


main()

