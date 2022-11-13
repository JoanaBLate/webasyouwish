// # Copyright (c) 2022 Feudal Code Limitada # 

"use strict"


// ## file: examples.js ##

function createWebpageBlank() {
    //
    return JSON.stringify(createWebpageObj("-blank"))
}

function createWebpageDemo1() {
    //
    return `{"name":"-demo1","remark":"(just a remark)","language":"en","title":"WAYW Demo","favicon":"","description":"WAYW very simple demo.","analytics":"","fontImport":"@import url('https://fonts.googleapis.com/css2?family=Averia+Sans+Libre:wght@700&display=swap');","fontFace":"","bodyJsFiles":"","colors":{"rgb 238 229 170":"#eee5aa"},"displays":{"flexrow w sa c c 0px 0px":{"display":"flex row","textAlign":"left","vertAlign":"top","flexWrap":"wrap","justCont":"space-around","alignItems":"center","alignCont":"center","rowGap":"0px","columnGap":"0px","alignSelf":"auto","flexGrow":0,"screen":0},"flexrow w c c c 0px 0px":{"display":"flex row","textAlign":"left","vertAlign":"top","flexWrap":"wrap","justCont":"center","alignItems":"center","alignCont":"center","rowGap":"0px","columnGap":"0px","alignSelf":"auto","flexGrow":0,"screen":0},"inline-block center top":{"display":"inline-block","textAlign":"center","vertAlign":"top","flexWrap":"wrap","justCont":"center","alignItems":"center","alignCont":"center","rowGap":"0px","columnGap":"0px","alignSelf":"auto","flexGrow":0,"screen":0}},"fonts":{"26px normal i serif":{"family":"serif","weight":"normal","size":"26px","italic":true,"strike":false,"screen":0},"35px 900 serif":{"family":"serif","weight":"900","size":"35px","italic":false,"strike":false,"screen":0}},"heights":{"auto 220px _":{"height":"auto","minHeight":"220px","maxHeight":"none","screen":0}},"keyframes":{},"margins":{},"paddings":{"5px 0px 5px 0px":{"top":"5px","right":"0px","bottom":"5px","left":"0px","screen":0},"20px 10px 20px 10px":{"top":"20px","right":"10px","bottom":"20px","left":"10px","screen":0},"10px 0px 10px 0px":{"top":"10px","right":"0px","bottom":"10px","left":"0px","screen":0}},"overflows":{},"widths":{"90px _ _":{"width":"90px","minWidth":"0px","maxWidth":"none","screen":0},"5% _ _":{"width":"5%","minWidth":"0px","maxWidth":"none","screen":0},"320px _ _":{"width":"320px","minWidth":"0px","maxWidth":"none","screen":0},"100px _ _":{"width":"100px","minWidth":"0px","maxWidth":"none","screen":0}},"xrules":{"averia":{"pure":"font-family: 'Averia Sans Libre', cursive;","link":"","visited":"","hover":"","active":"","disabled":"","screen":0},"button-link":{"pure":"padding: 3px 5px;\\nfont-weight: 600;\\ncolor: beige;\\nbackground-color: #666666;\\ntext-decoration: none;\\noutline: none;\\nborder: 1px solid transparent; \\nborder-radius: 3px;","link":"","visited":"","hover":"color: dimgrey;\\nbackground-color: silver;\\nborder: 1px solid black;","active":"color: silver;\\nbackground-color: dimgrey;\\nborder: 1px solid black;","disabled":"","screen":0}},"body":{"name":"","type":"body","rules":["b:-black"],"children":[{"name":"","type":"remark","text":"This simple demo is going to be improved."},{"name":"header","type":"frame","rules":["b:rgb 238 229 170","c:-firebrick","p:10px 0px 10px 0px"],"children":[{"name":"","type":"div","subtype":"","rules":["d:flexrow w c c c 0px 0px","f:35px 900 serif","x:averia"],"children":[{"name":"logo","type":"img","subtype":"","rules":["w:90px _ _"],"title":"Golden Lamp","alt":"Golden Lamp","src":"images/golden-lamp.png","previewSrc":"https://www.webasyouwish.com/images/golden-lamp.png"},{"name":"","type":"div","subtype":"","rules":["w:5% _ _"],"children":[]},{"name":"title","type":"text","text":"Web As You Wish"}]}]},{"name":"","type":"frame","rules":["b:-white","c:-silver","f:26px normal i serif","p:5px 0px 5px 0px"],"children":[{"name":"","type":"div","subtype":"","rules":["d:inline-block center top"],"children":[{"name":"","type":"text","text":"simple demo"}]}]},{"name":"main","type":"frame","rules":[],"children":[{"name":"","type":"div","subtype":"","rules":["d:flexrow w sa c c 0px 0px"],"children":[{"name":"spin","type":"div","subtype":"","rules":["b:-black","c:-white","d:flexrow w sa c c 0px 0px","h:auto 220px _","w:320px _ _"],"children":[{"name":"","type":"text","text":"Just an animation."},{"name":"","type":"img","subtype":"","rules":["w:100px _ _","x:-spin"],"title":"Spiral","alt":"Spiral","src":"images/spiral.png","previewSrc":"https://www.webasyouwish.com/images/spiral.png"}]},{"name":"wa","type":"div","subtype":"","rules":["b:-black","c:-white","d:flexrow w sa c c 0px 0px","h:auto 220px _","w:320px _ _"],"children":[{"name":"","type":"text","text":"Click the icon."},{"name":"","type":"whatsapp","subtype":"","number":"1122333333333","message":"Hello!","rules":["w:100px _ _","x:-bounce"]}]}]},{"name":"","type":"div","subtype":"","rules":["d:flexrow w sa c c 0px 0px"],"children":[]}]},{"name":"footer","type":"frame","rules":["b:-white","p:20px 10px 20px 10px"],"children":[{"name":"","type":"div","subtype":"","rules":["d:inline-block center top"],"children":[{"name":"say-click","type":"button","subtype":"","innerHtml":"simple button","rules":["x:-dark-button"],"onclick":"console.log('clicked')"},{"name":"","type":"br","subtype":"","count":2,"rules":[]},{"name":"","type":"a","subtype":"","innerHtml":"standard link ","href":"https://www.example.com","newtab":true,"rules":[]},{"name":"","type":"br","subtype":"","count":2,"rules":[]},{"name":"","type":"a","subtype":"","innerHtml":"button-like link","href":"https://www.example.com","newtab":true,"rules":["x:button-link"]}]}]}]}}`
}


// ## file: webpages.js ##

var webpage = { }

var definitions = { }

var namesOfWebpages = [ ]

function initWebpages() {
    //
    retrieveDefinitionsFromLocalStorage()
    //
    definitions["-blank"] = createWebpageBlank()
    //
    definitions["-demo1"] = createWebpageDemo1()
    //
    updateNamesOfWebpages()
}

function updateNamesOfWebpages() {
    //
    namesOfWebpages = Object.keys(definitions)
    //
    simpleSort(namesOfWebpages)
}

function webpageIsEdited() {
    //
    return definitions[webpage.name] != JSON.stringify(webpage)
}

function retrieveDefinitionsFromLocalStorage() {
    //
    for (const key of Object.keys(localStorage)) {
        //
        const json = retrieveDefinitionFromLocalStorage(key)
        //
        if (json == null) {
            //
            localStorage.removeItem(key)
            //
            console.log("Removing '" + key + "' from local storage.")
        }
        else {
            //
            const name = key.replace("wayw-", "")
            //
            definitions[name] = json
        }
    }
}

function retrieveDefinitionFromLocalStorage(key) {
    //
    if (! key.startsWith("wayw-")) { return null }
    //
    const name = key.replace("wayw-", "")
    //
    if (name == "") { return null }
    //
    const json = localStorage[key]
    //
    const def = parseJson(json)
    //
    if (def == null) { return null }
    //
    if (def.name != name) { return null }
    //
    return json
}

function saveDefinitionInLocalStorage() {
    //
    const key = "wayw-" + webpage.name
    //
    const json = JSON.stringify(webpage)
    //
    try {
        //
        localStorage[key] = json; return true
    }
    catch(__e) {
        //
        customError("Could not save the definition in browser's storage; maybe it is full.")
        //
        return false
    }
}

function updateCssDataInDefinition() {
    //
    updateCssDataInDefinitionThis("colors", dataColors)
    //
    updateCssDataInDefinitionThis("displays", dataDisplays)
    //
    updateCssDataInDefinitionThis("fonts", dataFonts)
    //
    updateCssDataInDefinitionThis("heights", dataHeights)
    //
    updateCssDataInDefinitionThis("keyframes", dataKeyframes)
    //
    updateCssDataInDefinitionThis("margins", dataMargins)
    //
    updateCssDataInDefinitionThis("paddings", dataPaddings)
    //
    updateCssDataInDefinitionThis("overflows", dataOverflows)
    //
    updateCssDataInDefinitionThis("widths", dataWidths)
    //
    updateCssDataInDefinitionThis("xrules", dataXRules)
}

function updateCssDataInDefinitionThis(kind, srcdict) {
    //
    const dict = { }
    //
    for (const key of Object.keys(srcdict)) {
        //
        if (key.startsWith("-")) { continue }
        //
        if (key == "**temporary**") { continue }
        //
        dict[key] = srcdict[key]
    }
    //
    webpage[kind] = dict
}


// ## file: main.js ##

const allScreens = [

    "0px", "320px (IPhone 5)", "360px (Galaxy S3)", "375px (IPhone 6/7/8)",
    "412px (Google Pixel)", "480px (Nokia N9)", "540px (Surface Duo)",
    "768px (IPad)", "800px (Kindle Fire HDX)", "1024px (Nest Hub)",
    "1280px (old laptop)", "1366px (modern laptop)", "1536px (large desktop screen)",
    "1920px (larger desktop screen)"
]

const allWidths = [ 0, 320, 360, 375, 412, 480, 540, 768, 800, 1024, 1280, 1366, 1536, 1920 ]

var currentPage = null

var previousPage = null

var preferPageCss = false

const h1return = document.querySelector("#h1-return")

const h1title = document.querySelector("#h1-title")

const mainDivision = document.querySelectorAll("main")[0]

const footer = document.querySelectorAll("footer")[0]

const navigation = document.querySelectorAll("nav")[0]

const fileSelector = document.querySelector("#file-selector")

const bgColorMain = "rgb(0,50,50)"

const bgColorCss = "rgb(140,60,30)" // rgb(100,50,20) rgb(30,110,60)

const bgColorData = "rgb(10,70,20)" // rgb(30,40,50)

function corrupted(e) {
    //
    console.log(e)
    //
    customError("Current definition/webpage is corrupted.", function() {
        //
        if (currentPage != pageManager) { showPageManager() }
    })
}

function main() {
    //
    initDimensions()
    //
    initWebpages()
    //
    initPageManager()
    //
    initPageDownload()
    //
    initPagePresent()
    //
    initPagePreview()
    //
    initPageHead()
    //
    initPageScripts()
    //
    initPageBody()
    //
    initPageCss()
    //
    initPageKeyframe()
    //
    initPageColor()
    //
    initPageDisplay()
    //
    initPageFont()
    //
    initPageHeight()
    //
    initPageMargin()
    //
    initPagePadding()
    //
    initPageOverflow()
    //
    initPageWidth()
    //
    initPageXRule()
    //
    initPageRemark()
    //
    initPageButton()
    //
    initPageImage()
    //
    initPageText()
    //
    initPageLink()
    //
    initPageWhatsApp()
    //
    initPageBreak()
    //
    selectThisWebpage("-blank")
    //
    window.onbeforeunload = function () { return "leaving?" }
    //
    document.onkeydown = keyDownHandler
}

function showPage(page, bgColor) {
    //
    if (page == currentPage) { return } // just a page refresh
    //
    previousPage = currentPage
    //
    if (previousPage) { currentPage.style.display = "none" } // currentPage is null at start
    //
    currentPage = page
    //
    window.scrollTo(0, 0)
    //
    currentPage.style.display = "inline-block"
    //
    if (bgColor) { document.body.style.backgroundColor = bgColor }
    //
    footer.style.display = shallShowFooter() ? "inline-block" : "none"
}

function shallShowFooter() {
    //
    if (currentPage == pageManager) { return false }
    //
    if (currentPage == pageDownload) { return false }
    //
    if (currentPage == pageHead) { return false }
    //
    if (currentPage == pageScripts) { return false }
    //
    if (currentPage == pagePreview) { return false }
    //
    if (currentPage == pagePresent) { return false }
    //
    return true
}

function keyDownHandler(e) {
    //
    const key = e.key.toLowerCase()
    //
    if (key == " ") { return callbackForSpace() }
    //
    if (key == "escape") { h1return.click(); return false }
    //
    if (key == "enter" && currentPage == pageManager) { manager_body.click(); return false}
}

function callbackForSpace() {
    //
    if (spaceCallbackOk()) {  preview(true); return false } else { return true }
}

function spaceCallbackOk() {
    //
    if (currentPage == pageColor) { return true }
    //
    if (currentPage == pageText) {
        //
        return document.activeElement != text_board
    }
    //
    const focused = document.activeElement.tagName.toLowerCase()
    //
    if (focused == "input") { return false }
    //
    if (focused == "textarea") { return false }
    //
    const pages = [ pageManager, pageDownload, pageHead ]
    //
    if (pages.includes(currentPage)) { return false }
    //
    return true
}


// ## file: popup/name-prompt.js ##

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


// ## file: popup/custom-confirm.js ##

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


// ## file: popup/custom-prompt.js ##

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


// ## file: popup/custom-choose.js ##

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


// ## file: popup/custom-box.js ##

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


// ## file: popup/custom-alert.js ##

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


// ## file: popup/safe-confirm.js ##

function safeConfirm(message, callback, callback2) {
    //
    function keyDownHandler(e) {
        //
     // if (e.keyCode == 13) { close(true) }
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


// ## file: helper/helper-html.js ##

function createDiv(classname) {
    //
    const div = document.createElement("div")
    //
    if (classname) { div.className = classname }
    //
    return div
}

function createButton(html, classname, onclick) {
    //
    const button = document.createElement("button")
    //
    if (html) { button.innerHTML = html }
    //
    if (classname) { button.className = classname }
    //
    if (onclick) { button.onclick = onclick }
    //
    return button
}

function createSimpleInput(classname, oninput, placeholder) {
    //
    const input = document.createElement("input")
    //
    if (classname) { input.className = classname }
    //
    if (oninput) { input.oninput = oninput }
    //
    if (placeholder) { input.placeholder = placeholder }
    //
    return input
}

function createLabel(html, classname) {
    //
    return createHtmlElement("label", html, classname)
}

function createParagraph(html, classname) {
    //
    return createHtmlElement("p", html, classname)
}

function createTextArea(classname, oninput, placeholder) {
    //
    const input = document.createElement("textarea")
    //
    if (classname) { input.className = classname }
    //
    if (oninput) { input.oninput = oninput }
    //
    if (placeholder) { input.placeholder = placeholder }
    //
    return input
}

function adjustTextAreaRows(ta) {
    //
    const rows = ta.value.split("\n").length
    //
    ta.rows = Math.max(2, rows)
}

function createHtmlElement(type, html, classname) {
    //
    const element = document.createElement(type)
    //
    if (html) { element.innerHTML = html }
    //
    if (classname) { element.className = classname }
    //
    return element
}

function createSelector(classname, onchange) {
    //
    const selector = document.createElement("select")
    //
    if (classname) { selector.className = classname }
    //
    if (onchange) { selector.onchange = onchange }
    //
    return selector
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

function appendBreak(parent, _count) {
    //
    const count = _count || 1
    //
    for (let n = 0; n < count; n++) { parent.appendChild(document.createElement("br")) }
}


// ## file: helper/helper-general.js ##

function convertTextToDataUrl(src) {
    //
    return "data:text/plain;charset=utf-8," + encodeURIComponent(src)
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

function noTagReally(src) {
    //
    let s = ""
    //
    for (const c of src) {
        //
        if (c == "<") { continue }
        if (c == ">") { continue }
     // if (c == "/") { continue }
        //
        s += c
    }
    //
    return s
}

function noQuoteNoBreak(src) {
    //
    let s = ""
    //
    for (const c of src) {
        //
        if (c == "\n") { continue }
        //
        if (c == '"')  { s += "'"; continue }
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
    catch(__e) {
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

function indentFontFace(src, len) {
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
        let extra = (trim.startsWith("@font-face")  ||  trim == "}") ? "" : "    "
        //
        if (res != "") { res += "\n" }
        //
        res += margin + extra + trim
    }
    //
    return res
}


// ## file: pages-elements/page-break.js ##

const pageBreak = createDiv("dn w wx600 shell tac")

const break_count = createSelector("w80", function() { currentNode.count=parseInt(this.value) })

function initPageBreak() {
    //
    fillSelector(break_count, [1,2,3,4,5,6])
    //
    //
    mainDivision.appendChild(pageBreak)
    //
    pageBreak.appendChild(break_count)
    //
    appendBreak(pageBreak, 1)
    //
    pageBreak.appendChild(createLabel("number of line breaks", "mt3"))
}

function showPageBreak() {
    //
    showPage(pageBreak, bgColorData)
    //
    h1return.onclick = function() { showPageBody() }
    //
    h1title.innerHTML = "line break&nbsp;"
    //
    break_count.value = currentNode.count
}


// ## file: pages-elements/page-remark.js ##

const pageRemark = createDiv("dn w wx600 shell tac")

const remark_remark = createTextArea("", function() { currentNode.text = this.value }, "# This is my remark! #")

function initPageRemark() {
    //
    remark_remark.rows = 5
    //
    //
    mainDivision.appendChild(pageRemark)
    //
    pageRemark.appendChild(remark_remark)
    //
    appendBreak(pageRemark, 1)
    //
    pageRemark.appendChild(createLabel("remark", "mt3"))
}

function showPageRemark() {
    //
    showPage(pageRemark, bgColorData)
    //
    h1return.onclick = function() { showPageBody() }
    //
    h1title.innerHTML = "remark&nbsp;"
    //
    remark_remark.value = currentNode.text
}


// ## file: pages-elements/page-image.js ##

const pageImage = createDiv("dn w wx600 shell tac")

const image_frame = createDiv("image-frame")

const image_image = createHtmlElement("img", null, "image")

const image_preview_src = createSimpleInput("w", function() { currentNode.previewSrc=noTagReally(this.value) },
                                            //
                                            "https://www.example.com/images/my-image.png")

const image_title = createSimpleInput("w", function() { currentNode.title=noTagReally(this.value) }, "My image")

const image_alt = createSimpleInput("w", function() { currentNode.alt=noTagReally(this.value) }, "My image")

const image_src = createSimpleInput("w", function() { currentNode.src=noTagReally(this.value) }, "images/my-image.png")

function initPageImage() {
    //
    image_image.title = "image"
    //
    image_image.alt = "image"
    //
    image_preview_src.onchange = function() { showPageImage() }
    //
    //
    mainDivision.appendChild(pageImage)
    //
    pageImage.appendChild(image_frame)
    //
    image_frame.appendChild(image_image)
    //
    appendBreak(pageImage, 1)
    //
    pageImage.appendChild(createLabel("preview-image", "mt3"))
    //
    appendBreak(pageImage, 3)
    //
    pageImage.appendChild(image_preview_src)
    //
    pageImage.appendChild(createLabel("*external* address for preview", "mt3"))
    //
    appendBreak(pageImage, 1)
    //
    pageImage.appendChild(createLabel("(after filling this address, click elsewhere)", "cgry"))
    //
    appendBreak(pageImage, 3)
    //
    pageImage.appendChild(image_title)
    //
    pageImage.appendChild(createLabel("title", "mt3"))
    //
    appendBreak(pageImage, 3)
    //
    pageImage.appendChild(image_alt)
    //
    pageImage.appendChild(createLabel("alternative text", "mt3"))
    //
    appendBreak(pageImage, 3)
    //
    pageImage.appendChild(image_src)
    //
    pageImage.appendChild(createLabel("address in resulting webpage", "mt3"))
}

function showPageImage() {
    //
    showPage(pageImage, bgColorData)
    //
    h1return.onclick = function() { showPageBody() }
    //
    h1title.innerHTML = "img&nbsp;"
    //
    image_image.src = currentNode.previewSrc
    //
    image_preview_src.value = currentNode.previewSrc
    //
    image_title.value = currentNode.title
    //
    image_alt.value = currentNode.alt
    //
    image_src.value = currentNode.src
}


// ## file: pages-elements/page-button.js ##

const pageButton = createDiv("dn w320 tac")

const button_text = createSimpleInput("w300", function() { currentNode.innerHtml = this.value })

const button_onclick = createSimpleInput("w300", function() { currentNode.onclick = this.value }, "console.log('click')")

function initPageButton() {
    //
    mainDivision.appendChild(pageButton)
    //
    pageButton.appendChild(button_text)
    //
    appendBreak(pageButton, 1)
    //
    pageButton.appendChild(createLabel("text", "mt3"))
    //
    appendBreak(pageButton, 2)
    //
    pageButton.appendChild(button_onclick)
    //
    appendBreak(pageButton, 1)
    //
    pageButton.appendChild(createLabel("onclick (don't use double quote)", "mt3"))
}

function showPageButton() {
    //
    showPage(pageButton, bgColorData)
    //
    h1return.onclick = function() { showPageBody() }
    //
    h1title.innerHTML = "button&nbsp;"
    //
    button_text.value = currentNode.innerHtml
    //
    button_onclick.value = currentNode.onclick
}


// ## file: pages-elements/page-whatsapp.js ##

const pageWhatsApp = createDiv("dn w wx600 shell tac")

const whatsapp_number = createSimpleInput("w", function() { currentNode.number=noTagReally(this.value) }, "1122333333333")

const whatsapp_message = createSimpleInput("w", function() { currentNode.message=this.value }, "Hi! I want information.")

function initPageWhatsApp() {
    //
    whatsapp_number.onchange = function() { whatsapp_number.value = currentNode.number }
    //
    whatsapp_message.onchange = function() { whatsapp_message.value = currentNode.message }
    //
    mainDivision.appendChild(pageWhatsApp)
    //
    pageWhatsApp.appendChild(whatsapp_number)
    //
    appendBreak(pageWhatsApp, 1)
    //
    pageWhatsApp.appendChild(createLabel("whatsapp number", "mt3"))
    //
    appendBreak(pageWhatsApp, 3)
    //
    pageWhatsApp.appendChild(whatsapp_message)
    //
    appendBreak(pageWhatsApp, 1)
    //
    pageWhatsApp.appendChild(createLabel("whatsapp message", "mt3"))
}

function showPageWhatsApp() {
    //
    showPage(pageWhatsApp, bgColorData)
    //
    h1return.onclick = function() { showPageBody() }
    //
    h1title.innerHTML = "whatsapp&nbsp;"
    //
    whatsapp_number.value = currentNode.number
    //
    whatsapp_message.value = currentNode.message
}


// ## file: pages-elements/page-text.js ##

const pageText= createDiv("dn w wx1200 shell tac")

const text_board = createTextArea(
    //
    "text-board",
    //
    function() { currentNode.text=this.value },
    //
    "\n   {b} Bold text followed by {i} italic text. {} Normal text with {{ (one left curly brace)."
)

function initPageText() {
    //
    mainDivision.appendChild(pageText)
    //
    pageText.appendChild(text_board)
    //
    appendBreak(pageText, 3)
    //
    const html =
`
White spaces and blank lines have effect.
<br><br>
Syntax for style:<br>
<b>{b}</b>&nbsp; &nbsp;start bold and stop italic<br>
<b>{i}</b>&nbsp; &nbsp; start italic and stop bold<br>
<b>{bi}</b>&nbsp; start bold & italic<br>
<b>{}</b>&nbsp; stop bold & italic<br>
<b>{{</b>&nbsp; simple curly bracket<br><br>
You don't need to use &nbsp;<b>{}</b>&nbsp; at the end of the text.
`
    //
    pageText.appendChild(createLabel(html, "shell320 taj"))
}

function showPageText() {
    //
    showPage(pageText, bgColorData)
    //
    h1return.onclick = function() { showPageBody() }
    //
    h1title.innerHTML = "text&nbsp;"
    //
    text_board.value = currentNode.text
}


// ## file: pages-elements/page-link.js ##

const pageLink = createDiv("dn w wx600 shell tac")

const link_innerHtml = createSimpleInput("w", function() { currentNode.innerHtml=this.value }, "some <b>text/html</b> here")

const link_href = createSimpleInput("w", function() { currentNode.href=this.value }, "https://www.example.com")

const link_newtab = createSimpleInput(null, function() { currentNode.newtab = this.checked }, null)

function initPageLink() {
    //
    link_newtab.type = "checkbox"
    //
    //
    mainDivision.appendChild(pageLink)
    //
    pageLink.appendChild(link_innerHtml)
    //
    appendBreak(pageLink, 1)
    //
    pageLink.appendChild(createLabel("anchor text (accepts html)", "mt3"))
    //
    appendBreak(pageLink, 3)
    //
    pageLink.appendChild(link_href)
    //
    appendBreak(pageLink, 1)
    //
    pageLink.appendChild(createLabel("anchor address (href)", "mt3"))
    //
    appendBreak(pageLink, 3)
    //
    pageLink.appendChild(link_newtab)
    //
    pageLink.appendChild(createLabel("&nbsp; open link in a new tab", ""))
}

function showPageLink() {
    //
    showPage(pageLink, bgColorData)
    //
    h1return.onclick = function() { showPageBody() }
    //
    h1title.innerHTML = "anchor&nbsp;"
    //
    link_innerHtml.value = currentNode.innerHtml
    //
    link_href.value = currentNode.href
    //
    link_newtab.checked = currentNode.newtab
}


// ## file: node/node-ops.js ##

// header, main and footer are reserved for frame

const typesForCommonNode = [ "a", "br", "button", "div", "h1", "h2", "h3", "h4", "h5", "h6",
                             "img", "label", "p", "select", "span", "text", "textarea", "whatsapp" ]

var newNodeType = ""

var newNodeSubtype = ""

var transferNode = null

var transferCss = null

function copyNode() {
    //
    const used = anyUsedTemporaryRule(currentNode)
    //
    if (used) { customError("Cannot copy: using **temporary** " + titleForRule[used[0]] + "."); return }
    //
    transferNode = cloneObj(currentNode)
    //
    cloneCssOfCurrentBranch()
    //
    showPageBody() // allows to paste a container in itself now
}

function pasteNode() {
    //
    customConfirm("Confirm paste branch on node?", pasteNode2, null)
}

function pasteNode2() {
    //
    const newnode = cloneObj(transferNode)
    //
    const renameds = pasteClonedCss() // a dictionary
    //
    for (const oldname of Object.keys(renameds)) {
        //
        renameRuleInBranch(newnode, oldname, renameds[oldname])
    }
    //
    const adjustCount = adjustDuplicateNodeNames(newnode) // a number
    //
    const renamedsCount = Object.keys(renameds).length
    //
    currentNode.children.push(newnode)
    //
    currentNode = newnode
    //
    showPageBody()
    //
    //
    function callback() { pasteNode3(adjustCount) }
    //
    if (renamedsCount == 0) { callback(); return }
    //
    if (renamedsCount == 1) { customAlert("1 CSS class was renamed in the new branch.", callback); return }
    //
    if (renameds  > 1) { customAlert(renamedsCount + "&nbsp;CSS classes were renamed in the new branch.", callback); return }
}

function pasteNode3(adjusts) {
    //
    if (adjusts == 1) { customAlert("1 duplicate id was adjusted in the new branch."); return }
    //
    if (adjusts  > 1) { customAlert(adjusts + "&nbsp;duplicate ids were adjusted in the new branch."); return }
}

function moveUpNode() {
    //
    moveNode(-1)
}

function moveDownNode() {
    //
    moveNode(+1)
}

function moveNode(delta) {
    //
    const indexA = currentParent.children.indexOf(currentNode)
    //
    const indexB = indexA + delta
    //
    const childA = currentParent.children[indexA]
    //
    const childB = currentParent.children[indexB]
    //
    currentParent.children[indexA] = childB
    //
    currentParent.children[indexB] = childA
    //
    showPageBody()
}

function renameNode() {
    //
    const msg = "Enter the new id or leave it blank."
    //
    namePrompt(msg, renameNode2, currentNode.name)
}

function renameNode2(name) {
    //
    if (name == null) { return }
    //
    if (name == currentNode.name) {
        //
        if (name == "") { return }
        //
        customError("This is the current id.", renameNode); return
    }
    //
    if (name != "") {
        //
        if (getNodeByName(name) != null) { customError("This id is already used.", renameNode); return }
    }
    //
    currentNode.name = name
    //
    showPageBody()
}

function deleteNode() {
    //
    let question = "Are you sure you want to *DELETE* <b>&nbsp;" + currentNode.type + " "
    //
    if (currentNode.name != "") { question += currentNode.name + " " } else { question += "</b>?" }
    //
    safeConfirm(question, deleteNode2, null)
}

function deleteNode2() {
    //
    const index = currentParent.children.indexOf(currentNode)
    //
    currentParent.children.splice(index, 1)
    //
    if (index < currentParent.children.length - 1) {
        //
        currentNode = currentParent.children[index]
    }
    else if (index > 0) {
        //
        currentNode = currentParent.children[index - 1]
    }
    else {
        currentNode = currentParent
    }
    //
    showPageBody()
}

function cutNode() {
    //
    let question = "Are you sure you want to CUT <b>&nbsp;" + currentNode.type + " "
    //
    if (currentNode.name != "") { question += currentNode.name + " " } else { question += "</b>?" }
    //
    safeConfirm(question, cutNode2, null)
}

function cutNode2() {
    //
    const used = anyUsedTemporaryRule(currentNode)
    //
    if (used) { customError("Cannot cut: using **temporary** " + titleForRule[used[0]] + "."); return }
    //
    transferNode = cloneObj(currentNode)
    //
    cloneCssOfCurrentBranch()
    //
    const index = currentParent.children.indexOf(currentNode)
    //
    currentParent.children.splice(index, 1)
    //
    if (index < currentParent.children.length - 1) {
        //
        currentNode = currentParent.children[index]
    }
    else if (index > 0) {
        //
        currentNode = currentParent.children[index - 1]
    }
    else {
        currentNode = currentParent
    }
    //
    showPageBody()
}

function createNode() {
    //
    let types = typesForCommonNode
    //
    let value = "div"
    //
    if (currentNode.type == "body")  { types = ["frame", "remark"]; value = "frame" }
    //
    const options = {
        //
        "values": types,
        "texts": types,
        "value": value,
        "classname": ""
    }
    //
    customChoose("Choose the type for the new node.", createNode2, options)
}

function createNode2(type) {
    //
    if (! type) { return }
    //
    newNodeType = type
    //
    if (newNodeType != "input") { createNode3(); return }
    //
    createNode3() // TODO CODE FOR SUBTYPE
}

function createNode3() {
    //
    namePrompt("Enter the id for the new node or leave it blank.", createNode4)
}

function createNode4(name) {
    //
    if (name == null) { return }
    //
    if (name != "") {
        //
        if (getNodeByName(name) != null) { customError("This id is already used.", createNode3); return }
    }
    //
    const node = createNodeObjByType(name, newNodeType)
    //
    currentNode.children.push(node)
    //
    currentNode = node
    //
    showPageBody()
}


// ## file: node/rule-box.js ##

function appendRuleBoxToCssStage(rule) {
    //
    const kind = rule[0]
    //
    const name = rule.substr(2)
    //
    const box = createRuleBox(kind, name)
    //
    css_stage.appendChild(box.panel)
    //
    if (kind == "b") { fillColorSelector(box.selector, name); return }
    //
    if (kind == "c") { fillColorSelector(box.selector, name); return }
    //
    if (kind == "d") { fillDisplaySelector(box.selector, name); return }
    //
    if (kind == "f") { fillFontSelector(box.selector, name); return }
    //
    if (kind == "h") { fillHeightSelector(box.selector, name); return }
    //
    if (kind == "m") { fillMarginSelector(box.selector, name); return }
    //
    if (kind == "o") { fillOverflowSelector(box.selector, name); return }
    //
    if (kind == "p") { fillPaddingSelector(box.selector, name); return }
    //
    if (kind == "w") { fillWidthSelector(box.selector, name); return }
    //
    if (kind == "x") { fillXRuleSelector(box.selector, name); return }
}

function createRuleBox(kind, name) {
    //
    const box = { "kind": kind, "name": name, "panel": null, "selector": null, "byScreen": null }
    //
    box.panel = createDiv("rule-box")
    //
    const h2 = createHtmlElement("h2", titleForRule[kind], "rule-box-h2")
    //
    const right = createHtmlElement("span")
    //
    const more = createButton("+", "rule-box-coin mr10")
    //
    const less = createButton("-", "rule-box-coin")
    //
    box.selector = createSelector("rule-box-selector")
    //
    box.byScreen = createLabel("", "w tac mt5 fs12")
    //
    updateRuleBoxByScreenLabel(box)
    //
    box.panel.appendChild(h2)
    h2.appendChild(right)
    right.appendChild(more)
    right.appendChild(less)
    appendBreak(box.panel)
    box.panel.appendChild(box.selector)
    appendBreak(box.panel, 1)
    box.panel.appendChild(box.byScreen)
    //
    less.onclick = function() { removeRuleBox(box) }
    //
    more.onclick = function() { showPageForRule(box.kind, box.name) }
    //
    box.selector.onchange = function() { ruleBoxSelectorOnChange(box) }
    //
    Object.seal(box)
    //
    return box
}

function removeRuleBox(box) {
    //
    const index = indexOfRuleBox(box)
    //
    css_stage.removeChild(box.panel)
    //
    currentNode.rules.splice(index, 1)
}

function ruleBoxSelectorOnChange(box) {
    //
    box.name = box.selector.value
    //
    const index = indexOfRuleBox(box)
    //
    currentNode.rules[index] = box.kind + ":" + box.name
    //
    updateRuleBoxByScreenLabel(box)
}

function showPageForRule(kind, name) {
    //
    if (kind == "b") { showPageColor(name); return }
    //
    if (kind == "c") { showPageColor(name); return }
    //
    if (kind == "d") { showPageDisplay(name); return }
    //
    if (kind == "f") { showPageFont(name); return }
    //
    if (kind == "h") { showPageHeight(name); return }
    //
    if (kind == "m") { showPageMargin(name); return }
    //
    if (kind == "o") { showPageOverflow(name); return }
    //
    if (kind == "p") { showPagePadding(name); return }
    //
    if (kind == "w") { showPageWidth(name); return }
    //
    if (kind == "x") { showPageXRule(name); return }
}

function updateRuleBoxByScreenLabel(box) {
    //
    const width = screenForRule(box.kind + ":" + box.name)
    //
    const html = width == 0 ? "" : "min window inner width " + width + "px" // "" = "all window widths"
    //
    box.byScreen.innerHTML = html
}

function indexOfRuleBox(box) {
    //
    let index = -1
    //
    for (const child of css_stage.children) {
        //
        index += 1
        //
        if (child == box.panel) { return index }
    }
}


// ## file: data/css-copy-paste.js ##

function cloneCssOfCurrentBranch() {
    //
    const rules = { }
    //
    let nodes = [ currentNode ]
    //
    let futureNodes = [ ]
    //
    while(nodes.length != 0) {
        //
        for (const node of nodes) {
            //
            if (node.children) {
                //
                for (const child of node.children) { futureNodes.push(child) }
            }
            //
            if (! node.rules) { continue }
            //
            for (const rule of node.rules) {
                //
                if (rules[rule]) { continue }
                //
                rules[rule] = getRuleObj(rule[0], rule.substr(2))
            }
        }
        //
        nodes = futureNodes
        //
        futureNodes = [ ]
    }
    //
    transferCss = cloneObj(rules)
}

function pasteClonedCss() {
    //
    const renameds = { }
    //
    for (const rule of Object.keys(transferCss)) {
        //
        const ruleObj = cloneObj(transferCss[rule])
        //
        const kind = rule[0]
        //
        const name = rule.substr(2)
        //
        const dict = dictByRuleKind(kind)
        //
        const currentRuleObj = dict[name]
        //
        if (currentRuleObj == undefined) { dict[name] = ruleObj; continue }
        //
        if (JSON.stringify(currentRuleObj) == JSON.stringify(ruleObj)) { continue }
        //
        const prefix = prefixForRandomNameForRule[kind]
        //
        const newname = randomNameForRule(kind, prefix)
        //
        dict[newname] = ruleObj
        //
        renameds[rule] = kind + ":" + newname
    }
    //
    return renameds
}


// ## file: data/data-font.js ##

const fontFamilies = [ "inherit", "serif", "sans-serif", "monospace" ]

const fontWeights = [ "100", "200", "300", "normal", "500", "600", "bold", "800", "900" ]

const fontSizes = [
    //
    "8px", "9px", "10px", "11px", "12px", "13px", "14px", "15px", "16px", "17px", "18px",
    "19px", "20px", "21px", "22px", "23px", "24px", "25px", "26px", "27px", "28px", "29px",
    "30px", "35px", "40px", "45px", "50px", "55px", "60px", "65px", "70px", "75px", "80px"
]

var dataFonts = { }

function resetDataFonts() {
    //
    dataFonts = { }
    //
    dataFonts["-default"] = createFontObj()
    //
    dataFonts["**temporary**"] = createFontObj()
    //
    for (const key of Object.keys(webpage.fonts)) { dataFonts[key] = webpage.fonts[key] }
}

function fillFontSelector(selector, favorite) {
    //
    let chosen = selector.value
    //
    if (favorite) { chosen = favorite } // doesn't accept ""
    //
    const keys = Object.keys(dataFonts)
    //
    simpleSort(keys)
    //
    fillSelector(selector, keys)
    //
    if (! keys.includes(chosen)) { chosen = keys[0] } // '-default' always present
    //
    selector.value = chosen
    //
    return chosen
}

function isFontUsed(name) {
    //
    return isRuleUsed("f:" + name)
}
/*
function renameFontInNodes(oldname, newname) {
    //
    renameRuleInNodes("f:" + oldname, "f:" + newname)
}
*/


// ## file: data/data-width.js ##

var dataWidths = { }

function resetDataWidths() {
    //
    dataWidths = { }
    //
    dataWidths["-default"] = createWidthObj()
    //
    dataWidths["**temporary**"] = createWidthObj()
    //
    for (const key of Object.keys(webpage.widths)) { dataWidths[key] = webpage.widths[key] }
}

function fillWidthSelector(selector, favorite) {
    //
    let chosen = selector.value
    //
    if (favorite) { chosen = favorite } // doesn't accept ""
    //
    const keys = Object.keys(dataWidths)
    //
    simpleSort(keys)
    //
    fillSelector(selector, keys)
    //
    if (! keys.includes(chosen)) { chosen = keys[0] } // '-default' always present
    //
    selector.value = chosen
    //
    return chosen
}

function isWidthUsed(name) {
    //
    return isRuleUsed("w:" + name)
}
/*
function renameWidthInNodes(oldname, newname) {
    //
    renameRuleInNodes("w:" + oldname, "w:" + newname)
}
*/


// ## file: data/data-node.js ##

function getNodeByName(name) {
    //
    let nodes = [ webpage.body ]
    //
    let futureNodes = [ ]
    //
    while (nodes.length != 0) {
        //
        for (const node of nodes) {
            //
            if (node.name == name) { return node }
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
    //
    return null
}

function adjustDuplicateNodeNames(rootNode) { // rootNode is not part of tree yet
    //
    const names = namesOfAllNodes()
    //
    let adjusts = 0
    //
    let nodes = [ rootNode ]
    //
    let futureNodes = [ ]
    //
    while (nodes.length != 0) {
        //
        for (const node of nodes) {
            //
            if (node.children) {
                //
                for (const child of node.children) { futureNodes.push(child) }
            }
            //
            if (node.name == "") { continue }
            //
            if (! names.includes(node.name)) { continue }
            //
            node.name = adjustDuplicateNodeName(node.name, names)
            //
            names.push(node.name)
            //
            adjusts += 1
        }
        //
        nodes = futureNodes
        //
        futureNodes = [ ]
    }
    //
    return adjusts
}

function adjustDuplicateNodeName(name, names) {
    //
    if (! name.includes("--")) {
        //
        if (name.endsWith("-")) { return name + "-2" } else { return name + "--2" }
    }
    //
    const prefix = name.split("--")[0]
    //
    let index = 1
    //
    while (true) {
        //
        index += 1
        //
        const newname = prefix + "--" + index
        //
        if (! names.includes(newname)) { return newname }
    }
}

function namesOfAllNodes() {
    //
    const names = [ ]
    //
    let nodes = [ webpage.body ]
    //
    let futureNodes = [ ]
    //
    while (nodes.length != 0) {
        //
        for (const node of nodes) {
            //
            if (node.children) {
                //
                for (const child of node.children) { futureNodes.push(child) }
            }
            //
            if (node.name != "") { names.push(node.name) }
        }
        //
        nodes = futureNodes
        //
        futureNodes = [ ]
    }
    //
    return names
}

function parentOfNode(target) {
    //
    let parents = [ webpage.body ]
    //
    let futureParents = [ ]
    //
    while (parents.length != 0) {
        //
        for (const parent of parents) {
            //
            for (const child of parent.children) {
                //
                if (child == target) { return parent }
                //
                if (child.children) { futureParents.push(child) }
            }
        }
        //
        parents = futureParents
        //
        futureParents = [ ]
    }
}


// ## file: data/data-display.js ##

var dataDisplays = { }

function resetDataDisplays() {
    //
    dataDisplays = { }
    //
    dataDisplays["-default"] = createDisplayObj()
    //
    dataDisplays["**temporary**"] = createDisplayObj()
    //
    for (const key of Object.keys(webpage.displays)) { dataDisplays[key] = webpage.displays[key] }
}

function fillDisplaySelector(selector, favorite) {
    //
    let chosen = selector.value
    //
    if (favorite) { chosen = favorite } // doesn't accept ""
    //
    const keys = Object.keys(dataDisplays)
    //
    simpleSort(keys)
    //
    fillSelector(selector, keys)
    //
    if (! keys.includes(chosen)) { chosen = keys[0] } // '-default' always present
    //
    selector.value = chosen
    //
    return chosen
}

function isDisplayUsed(name) {
    //
    return isRuleUsed("d:" + name)
}
/*
function renameDisplayInNodes(oldname, newname) {
    //
    renameRuleInNodes("d:" + oldname, "d:" + newname)
}
*/


// ## file: data/data-keyframe.js ##

var dataKeyframes = { }

function resetDataKeyframes() {
    //
    dataKeyframes = { }
    //
    dataKeyframes["-bounce"] = createKeyframeObj(templateCssKeyframeBounce)
    //
    dataKeyframes["-spin"] = createKeyframeObj(templateCssKeyframeSpin)
    //
    dataKeyframes["**temporary**"] = createKeyframeObj("")
    //
    for (const key of Object.keys(webpage.keyframes)) { dataKeyframes[key] = webpage.keyframes[key] }
}

function fillKeyframeSelector(selector, favorite) {
    //
    let chosen = selector.value
    //
    if (favorite) { chosen = favorite } // doesn't accept ""
    //
    const keys = Object.keys(dataKeyframes)
    //
    simpleSort(keys)
    //
    fillSelector(selector, keys)
    //
    if (! keys.includes(chosen)) { chosen = keys[0] } // '-bounce' always present
    //
    selector.value = chosen
    //
    return chosen
}


// ## file: data/data-overflow.js ##

const overflowValues = [ "auto", "hidden", "scroll" ]

var dataOverflows = { }

function resetDataOverflows() {
    //
    dataOverflows = { }
    //
    dataOverflows["-default"] = createOverflowObj()
    //
    dataOverflows["**temporary**"] = createOverflowObj()
    //
    for (const key of Object.keys(webpage.overflows)) { dataOverflows[key] = webpage.overflows[key] }
}

function fillOverflowSelector(selector, favorite) {
    //
    let chosen = selector.value
    //
    if (favorite) { chosen = favorite } // doesn't accept ""
    //
    const keys = Object.keys(dataOverflows)
    //
    simpleSort(keys)
    //
    fillSelector(selector, keys)
    //
    if (! keys.includes(chosen)) { chosen = keys[0] } // '-default' always present
    //
    selector.value = chosen
    //
    return chosen
}

function isOverflowUsed(name) {
    //
    return isRuleUsed("o:" + name)
}
/*
function renameOverflowInNodes(oldname, newname) {
    //
    renameRuleInNodes("o:" + oldname, "o:" + newname)
}
*/


// ## file: data/data-color.js ##

var dataColors = { }

const builtInColors = {
    //
    "-white": "#FFFFFF",
    "-black": "#000000",
    "-grey": "#808080" ,
    "-cadetblue": "#5F9EA0",
    "-chocolate": "#D2691E",
    "-firebrick": "#B22222",
    "-gold": "#FFD700",
    "-indigo": "#4B0082",
    "-mediumseagreen": "#3CB371",
    "-orange": "#FFA500",
    "-silver": "#C0C0C0"
}

function resetDataColors() {
    //
    dataColors = cloneObj(builtInColors)
    //
    dataColors["**temporary**"] = "#FFFFFF"
    //
    for (const key of Object.keys(webpage.colors)) { dataColors[key] = webpage.colors[key] }
}

function fillColorSelector(selector, favorite) {
    //
    let chosen = selector.value
    //
    if (favorite) { chosen = favorite } // doesn't accept ""
    //
    const keys = Object.keys(dataColors)
    //
    simpleSort(keys)
    //
    fillSelector(selector, keys)
    //
    if (! keys.includes(chosen)) { chosen = keys[0] } // '-white' always present
    //
    selector.value = chosen
    //
    return chosen
}

function isColorUsed(name) {
    //
    if (isRuleUsed("b:" + name)) { return true }
    //
    if (isRuleUsed("c:" + name)) { return true }
    //
    return false
}
/*
function renameColorInNodes(oldname, newname) {
    //
    renameRuleInNodes("b:" + oldname, "b:" + newname)
    //
    renameRuleInNodes("c:" + oldname, "c:" + newname)
}
*/


// ## file: data/dimensions.js ##

const const100 = [ ]

const px100 = [ ]

const pc100 = [ ]

const pcAuto = [ "auto" ]

const pcNone = [ "none" ]

const px2000 = [ ]

const pxVh = [ "100vh" ]

const pxAuto = [ "auto" ]

const pxNone = [ "none" ]

const pxAutoVh = [ "auto", "100vh" ]

const pxNoneVh = [ "none", "100vh" ]

function initDimensions() {
    //
    for (let n = 0; n < 101; n++) {
        //
        const100.push(n)
        //
        px100.push(n + "px")
        //
        pc100.push(n + "%")
    }
    //
    //
    for (let n = 0; n < 151; n++) { px2000.push(n + "px") }
    //
    for (let n = 155; n < 501; n += 5) { px2000.push(n + "px") }
    //
    for (let n = 510; n < 2001; n += 10) { px2000.push(n + "px") }
    //
    //
    for (const val of pc100) {
        //
        pcAuto.push(val)
        //
        pcNone.push(val)
    }
    //
    for (const val of px2000) {
        //
        pxVh.push(val)
        //
        pxAuto.push(val)
        //
        pxNone.push(val)
        //
        pxAutoVh.push(val)
        //
        pxNoneVh.push(val)
    }
}


// ## file: data/data-margin.js ##

var dataMargins = { }

function resetDataMargins() {
    //
    dataMargins = { }
    //
    dataMargins["-default"] = createMarginObj()
    //
    dataMargins["**temporary**"] = createMarginObj()
    //
    for (const key of Object.keys(webpage.margins)) { dataMargins[key] = webpage.margins[key] }
}

function fillMarginSelector(selector, favorite) {
    //
    let chosen = selector.value
    //
    if (favorite) { chosen = favorite } // doesn't accept ""
    //
    const keys = Object.keys(dataMargins)
    //
    simpleSort(keys)
    //
    fillSelector(selector, keys)
    //
    if (! keys.includes(chosen)) { chosen = keys[0] } // '-default' always present
    //
    selector.value = chosen
    //
    return chosen
}

function isMarginUsed(name) {
    //
    return isRuleUsed("p:" + name)
}
/*
function renameMarginInNodes(oldname, newname) {
    //
    renameRuleInNodes("p:" + oldname, "p:" + newname)
}
*/


// ## file: data/data-xrule.js ##

var dataXRules = { }

function resetDataXRules() {
    //
    dataXRules = { }
    //
    dataXRules["**temporary**"] = createXRuleObj(0, "")
    //
    dataXRules["-blank"] = createXRuleObj(0, "")
    //
    dataXRules["-bounce"] = createXRuleObj(0, "animation: -bounce 3s infinite;")
    //
    dataXRules["-spin"] = createXRuleObj(0, "animation: -spin 3s linear 0s infinite normal;")
    //
    dataXRules["-dark-button"] = createXRuleDarkButton()
    //
    for (const key of Object.keys(webpage.xrules)) { dataXRules[key] = webpage.xrules[key] }
}

function createXRuleDarkButton() {
    //
    const obj = createXRuleObj(0, "font-weight: 600;\ncolor: beige;\nbackground-color: #666666;")
    //
    obj["hover"] = "color: dimgrey;\nbackground-color: silver;\nborder: 1px solid black;"
    //
    obj["active"] = "color: silver;\nbackground-color: dimgrey;\nborder: 1px solid black;"
    //
    return obj
}

function fillXRuleSelector(selector, favorite) {
    //
    let chosen = selector.value
    //
    if (favorite) { chosen = favorite } // doesn't accept ""
    //
    const keys = Object.keys(dataXRules)
    //
    simpleSort(keys)
    //
    fillSelector(selector, keys)
    //
    if (! keys.includes(chosen)) { chosen = keys[0] } // '-bounce' always present
    //
    selector.value = chosen
    //
    return chosen
}

function isXRuleUsed(name) {
    //
    return isRuleUsed("x:" + name)
}
/*
function renameXRuleInNodes(oldname, newname) {
    //
    renameRuleInNodes("x:" + oldname, "x:" + newname)
}
*/


// ## file: data/data-height.js ##

var dataHeights = { }

function resetDataHeights() {
    //
    dataHeights = { }
    //
    dataHeights["-default"] = createHeightObj()
    //
    dataHeights["**temporary**"] = createHeightObj()
    //
    for (const key of Object.keys(webpage.heights)) { dataHeights[key] = webpage.heights[key] }
}

function fillHeightSelector(selector, favorite) {
    //
    let chosen = selector.value
    //
    if (favorite) { chosen = favorite } // doesn't accept ""
    //
    const keys = Object.keys(dataHeights)
    //
    simpleSort(keys)
    //
    fillSelector(selector, keys)
    //
    if (! keys.includes(chosen)) { chosen = keys[0] } // '-default' always present
    //
    selector.value = chosen
    //
    return chosen
}

function isHeightUsed(name) {
    //
    return isRuleUsed("h:" + name)
}
/*
function renameHeightInNodes(oldname, newname) {
    //
    renameRuleInNodes("h:" + oldname, "h:" + newname)
}
*/


// ## file: data/data-padding.js ##

var dataPaddings = { }

function resetDataPaddings() {
    //
    dataPaddings = { }
    //
    dataPaddings["-default"] = createPaddingObj()
    //
    dataPaddings["**temporary**"] = createPaddingObj()
    //
    for (const key of Object.keys(webpage.paddings)) { dataPaddings[key] = webpage.paddings[key] }
}

function fillPaddingSelector(selector, favorite) {
    //
    let chosen = selector.value
    //
    if (favorite) { chosen = favorite } // doesn't accept ""
    //
    const keys = Object.keys(dataPaddings)
    //
    simpleSort(keys)
    //
    fillSelector(selector, keys)
    //
    if (! keys.includes(chosen)) { chosen = keys[0] } // '-default' always present
    //
    selector.value = chosen
    //
    return chosen
}

function isPaddingUsed(name) {
    //
    return isRuleUsed("p:" + name)
}
/*
function renamePaddingInNodes(oldname, newname) {
    //
    renameRuleInNodes("p:" + oldname, "p:" + newname)
}
*/


// ## file: data/data-rule.js ##

const titleForRule = {
    //
 // "a": "animation",
    "b": "bg color",
    "c": "color",
    "d": "display",
    "f": "font",
    "h": "height",
    "m": "margin",
    "o": "overflow",
    "p": "padding",
    "w": "width",
    "x": "X class"
}

const prefixForRandomNameForRule = {
    //
 // "a": "animation-",
    "b": "color-",
    "c": "color-",
    "d": "display-",
    "f": "font-",
    "h": "height-",
    "m": "margin-",
    "o": "overflow-",
    "p": "padding-",
    "w": "width-",
    "x": "xclass-"
}

function resetCssData() {
    //
    try {
        //
        resetDataColors()
        //
        resetDataDisplays()
        //
        resetDataFonts()
        //
        resetDataHeights()
        //
        resetDataKeyframes()
        //
        resetDataMargins()
        //
        resetDataOverflows()
        //
        resetDataPaddings()
        //
        resetDataWidths()
        //
        resetDataXRules()
    }
    catch (e) {
        //
        corrupted(e); return
    }
}

function screenAsLetter(__screen) {
    //
    const index = allWidths.indexOf(__screen)
    //
    return "ABCDEFGHIJKLMN"[index]
}

function dictByRuleKind(kind) {
    //
    if (kind == "b") { return dataColors }
    //
    if (kind == "c") { return dataColors }
    //
    if (kind == "d") { return dataDisplays }
    //
    if (kind == "f") { return dataFonts }
    //
    if (kind == "h") { return dataHeights }
    //
    if (kind == "m") { return dataMargins }
    //
    if (kind == "o") { return dataOverflows }
    //
    if (kind == "p") { return dataPaddings }
    //
    if (kind == "w") { return dataWidths }
    //
    if (kind == "x") { return dataXRules }
}

function getRuleObj(kind, name) {
    //
    const dict = dictByRuleKind(kind)
    //
    return dict[name]
}

function screenForRule(rule) {
    //
    const kind = rule[0]
    //
    const name = rule.substr(2)
    //
    const obj = getRuleObj(kind, name)
    //
    if (obj == undefined) { console.log("Unknown rule: {" + rule + "}") } // error
    //
    return obj.screen || 0
}

function randomNameForRule(kind, prefix) {
    //
    const dict = dictByRuleKind(kind)
    //
    let n = 0
    //
    while (true) {
        //
        n += 1
        //
        const name = prefix + n
        //
        if (dict[name] == undefined) { return name }
    }
}

function isRuleUsed(rule) {
    //
    let nodes = [ webpage.body ]
    //
    let futureNodes = [ ]
    //
    while (nodes.length != 0) {
        //
        for (const node of nodes) {
            //
            if (node.rules) {
                //
                if (node.rules.includes(rule)) { return true }
            }
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
    //
    return false
}

function replaceTemporaryInNodes(prefix, name) {
    //
    renameRuleInNodes(prefix + "**temporary**", prefix + name)
}

function renameRuleInNodes(oldname, newname) { // like c:beige to c:red
    //
    renameRuleInBranch(webpage.body, oldname, newname)
}

function renameRuleInBranch(branch, oldname, newname) {
    //
    let nodes = [ branch ]
    //
    let futureNodes = [ ]
    //
    while (nodes.length != 0) {
        //
        for (const node of nodes) {
            //
            renameRuleInNode(node, oldname, newname)
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

function renameRuleInNode(node, oldname, newname) {
    //
    if (! node.rules) { return }
    //
    for (let i = 0; i < node.rules.length; i++) {
        //
        if (node.rules[i] == oldname) { node.rules[i] = newname }
    }
}

function sortRulesByKind(rules) {
    //
    let index = 0
    //
    while (true) {
        //
        if (index > rules.length - 2) { return }
        //
        const current = rules[index]
        //
        const next = rules[index + 1]
        //
        if (current[0] <= next[0]) { index += 1; continue }
        //
        rules[index] = next
        //
        rules[index + 1] = current
        //
        index = 0
    }
}

function allUsedRules() {
    //
    const useds = { }
    //
    let nodes = [ webpage.body ]
    //
    let futureNodes = [ ]
    //
    while(nodes.length != 0) {
        //
        for (const node of nodes) {
            //
            if (node.children) {
                //
                for (const child of node.children) { futureNodes.push(child) }
            }
            //
            if (! node.rules) { continue }
            //
            for (const rule of node.rules) { useds[rule] = true }
        }
        //
        nodes = futureNodes
        //
        futureNodes = [ ]
    }
    //
    return Object.keys(useds)
}

function anyUsedTemporaryRule(root) {
    //
    if (! root) { root = webpage.body }
    //
    let nodes = [ root ]
    //
    let futureNodes = [ ]
    //
    while (nodes.length != 0) {
        //
        for (const node of nodes) {
            //
            if (node.rules) {
                //
                for (const rule of node.rules) { if (rule.endsWith("**")) { return rule } }
            }
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
    //
    return ""
}


// ## file: objects/objects-css.js ##

function createDisplayObj() {
    //
    const obj = {
        //
        "display": "inline-block",
        // inline-block
        "textAlign": "left",
        "vertAlign": "top",
        // flex container
        "flexWrap": "wrap",
        "justCont": "center",
        "alignItems": "center",
        "alignCont": "center",
        "rowGap": "0px",
        "columnGap": "0px",
        // flex item
        "alignSelf": "auto",
        "flexGrow": 0,
        //
        //
        "screen": 0
    }
    //
    Object.seal(obj)
    return obj
}

function createFontObj() {
    //
    const obj = {
        //
        "family": "inherit",
        "weight": "normal",
        "size": "16px",
        "italic": false,
        "strike": false,
        //
        "screen": 0
    }
    //
    Object.seal(obj)
    return obj
}

function createHeightObj() {
    //
    const obj = {
        //
        "height":  "auto",
        "minHeight": "0px",
        "maxHeight": "none",
        //
        "screen": 0
    }
    //
    Object.seal(obj)
    return obj
}

function createKeyframeObj(data) {
    //
    const obj = { "data": data }
    //
    Object.seal(obj)
    return obj
}

function createMarginObj() {
    //
    const obj = {
        //
        "top": "0px",
        "right": "0px",
        "bottom": "0px",
        "left": "0px",
        //
        "screen": 0
    }
    //
    Object.seal(obj)
    return obj
}

function createPaddingObj() {
    //
    const obj = {
        //
        "top": "0px",
        "right": "0px",
        "bottom": "0px",
        "left": "0px",
        //
        "screen": 0
    }
    //
    Object.seal(obj)
    return obj
}

function createWidthObj() {
    //
    const obj = {
        //
        "width":  "auto",
        "minWidth": "0px",
        "maxWidth": "none",
        //
        "screen": 0
    }
    //
    Object.seal(obj)
    return obj
}

function createXRuleObj(__screen, pure) {
    //
    const obj = {
        //
        "pure": pure,
        "link": "",
        "visited": "",
        "hover": "",
        "active": "",
        "disabled": "",
        //
        "screen": __screen
    }
    //
    Object.seal(obj)
    return obj
}

function createOverflowObj() {
    //
    const obj = {
        "overflowX": "auto",
        "overflowY": "auto"
    }
    //
    Object.seal(obj)
    return obj
}


// ## file: objects/objects-html.js ##

function createWebpageObj(name) {
    //
    const obj = {
        //
        "name": name,
        "remark": "",
        "language": "en",
        "title": "",
        "favicon": "",
        "description": "",
        "analytics": "",
        "fontImport": "",
        "fontFace": "",
        "bodyJsFiles": "",
        //
        "colors": { }, // { "name": "#value" }
        //
        "displays": { },
        //
        "fonts": { },
        //
        "heights": { },
        //
        "keyframes": { },
        //
        "margins": { },
        //
        "paddings": { },
        //
        "overflows": { },
        //
        "widths": { },
        //
        "xrules": { },
        //
        "body": createBodyObj()
    }
    //
    Object.seal(obj)
    //
    return obj
}

function createBodyObj() {
    //
    const obj = {
        //
        "name": "",
        "type": "body",
        "rules": [ ],
        "children": [ ]
    }
    //
    Object.seal(obj)
    return obj
}

function createNodeObjByType(name, type) {
    //
    if (type == "a") { return createAnchorObj(name) }
    //
    if (type == "br") { return createBreakObj(name) }
    //
    if (type == "img") { return createImageObj(name) }
    //
    if (type == "text") { return createTextObj(name) }
    //
    if (type == "frame") { return createFrameObj(name) }
    //
    if (type == "button") { return createButtonObj(name) }
    //
    if (type == "remark") { return createRemarkObj(name) }
    //
    if (type == "whatsapp") { return createWhatsAppObj(name) }
    //
    return createGeneralNodeObj(name, type)
}

function createGeneralNodeObj(name, type) {
    //
    const obj = {
        //
        "name": name,
        "type": type,  // tag name
        "subtype": "", // for tag input type="range" etc
        "rules": [ ],  // [ name ]
        "children": [ ]
    }
    //
    Object.seal(obj)
    return obj
}

function createAnchorObj(name) {
    //
    const obj = {
        //
        "name": name,
        "type": "a",
        "subtype": "",
        "innerHtml": "",
        "href": "",
        "newtab": true,
        "rules": [ ]  // [ name ]
    }
    //
    Object.seal(obj)
    return obj
}

function createBreakObj(name) {
    //
    const obj = {
        //
        "name": name,
        "type": "br",
        "subtype": "",
        "count": 1,
        "rules": [ ]  // [ name ]
    }
    //
    Object.seal(obj)
    return obj
}

function createButtonObj(name) {
    //
    const obj = {
        //
        "name": name,
        "type": "button",
        "subtype": "",
        "innerHtml": "(text)",
        "onclick": "",
        "rules": [ ]  // [ name ]
    }
    //
    Object.seal(obj)
    return obj
}

function createFrameObj(name) {
    //
    const obj = {
        //
        "name": name, // header, main, footer, custom
        "type": "frame",
        "rules": [ ],
        "children": [ ]
    }
    //
    Object.seal(obj)
    return obj
}

function createImageObj(name) {
    //
    const obj = {
        //
        "name": name,
        "type": "img",
        "subtype": "",
        "rules": [ ],  // [ name ]
        "title": "Golden Lamp",
        "alt": "Golden Lamp",
        "src": "images/golden-lamp.png",
        "previewSrc": "https://www.webasyouwish.com/images/golden-lamp.png"
    }
    //
    Object.seal(obj)
    return obj
}

function createRemarkObj(name) { // not the head remark
    //
    const obj = {
        //
        "name": name,
        "type": "remark",
        "text": ""
    }
    //
    Object.seal(obj)
    return obj
}

function createTextObj(name, txt) {
    //
    const obj = {
        //
        "name": name,
        "type": "text",
        "text": txt || ""
    }
    //
    Object.seal(obj)
    return obj
}

function createWhatsAppObj(name) {
    //
    const obj = {
        //
        "name": name,
        "type": "whatsapp",
        "subtype": "",
        "number": "",
        "message": "",
        "rules": [ ]  // [ name ]
    }
    //
    Object.seal(obj)
    return obj
}


// ## file: pages-css/page-margin.js ##

const pageMargin = createDiv("dn w320 tac")

const margin_margins = createSelector("w300", function() { showPageMargin() }) // captures the event

const margin_clone = createButton("clone", "w80 mr30", cloneMargin)

const margin_apply = createButton("apply", "w80 mr30", applyMargin)

const margin_delete = createButton("delete", "w80", deleteMargin)

const margin_top = createSelector("w130 mr40 tar", function() { currentMargin.top = this.value })

const margin_right = createSelector("w130 tar", function() { currentMargin.right = this.value })

const margin_bottom = createSelector("w130 mr40 tar", function() { currentMargin.bottom = this.value })

const margin_left = createSelector("w130 tar", function() { currentMargin.left = this.value })

const margin_screen = createSelector("w300", function() { currentMargin.screen = parseInt(this.value) })

var currentMargin = null

function initPageMargin() {
    //
    fillSelector(margin_top, px2000)
    //
    fillSelector(margin_right, px2000)
    //
    fillSelector(margin_bottom, px2000)
    //
    fillSelector(margin_left, px2000)
    //
    fillSelector(margin_screen, allWidths, allScreens)
    //
    //
    mainDivision.appendChild(pageMargin)
    //
    pageMargin.appendChild(margin_margins)
    //
    pageMargin.appendChild(createLabel("name", "mt3"))
    //
    appendBreak(pageMargin, 2)
    //
    pageMargin.appendChild(margin_clone)
    //
    pageMargin.appendChild(margin_apply)
    //
    pageMargin.appendChild(margin_delete)
    //
    appendBreak(pageMargin, 2)
    //
    const html = "Only <i>**temporary**</i> can be edited. Cannot delete <i>-class</i>, <i>**temporary**</i> or any class that is in use."
    //
    pageMargin.appendChild(createLabel(html, "w300 mt10 taj"))
    //
    appendBreak(pageMargin, 3)
    //
    pageMargin.appendChild(margin_top)
    //
    pageMargin.appendChild(margin_right)
    //
    appendBreak(pageMargin, 1)
    //
    pageMargin.appendChild(createLabel("top", "w130 mr40 tac"))
    //
    pageMargin.appendChild(createLabel("right", "w130 tac"))
    //
    appendBreak(pageMargin, 2)
    //
    pageMargin.appendChild(margin_bottom)
    //
    pageMargin.appendChild(margin_left)
    //
    appendBreak(pageMargin, 1)
    //
    pageMargin.appendChild(createLabel("bottom", "w130 mr40 tac"))
    //
    pageMargin.appendChild(createLabel("left", "w130 tac"))
    //
    appendBreak(pageMargin, 3)
    //
    pageMargin.appendChild(margin_screen)
    //
    pageMargin.appendChild(createLabel("window inner width", "mt3"))
    //
    appendBreak(pageMargin, 2)
    //
    const html2 = "The rules apply when the inner width of the browser window is the selected one or greater. Rules for larger windows may override them."
    //
    pageMargin.appendChild(createLabel(html2, "taj w300"))
}

function showPageMargin(favorite) {
    //
    showPage(pageMargin, bgColorCss)
    //
    h1return.onclick = function() { if (preferPageCss) { showPageCss() } else { showPageBody() } }
    //
    h1title.innerHTML = "margin&nbsp;"
    //
    const name = fillMarginSelector(margin_margins, favorite)
    //
    currentMargin = dataMargins[name]
    //
    margin_top.value = currentMargin.top
    //
    margin_right.value = currentMargin.right
    //
    margin_bottom.value = currentMargin.bottom
    //
    margin_left.value = currentMargin.left
    //
    margin_screen.value = currentMargin.screen
    //
    setPageMarginDisableds(name)
}

function setPageMarginDisableds(name) {
    //
    margin_clone.disabled = (name == "**temporary**")
    //
    margin_apply.disabled = (name != "**temporary**")
    //
    margin_delete.disabled = (name == "**temporary**"  ||  name.startsWith("-")  ||  isMarginUsed(name))
    //
    const disabled = (name != "**temporary**")
    //
    margin_top.disabled = disabled
    //
    margin_right.disabled = disabled
    //
    margin_bottom.disabled = disabled
    //
    margin_left.disabled = disabled
    //
    margin_screen.disabled = disabled
}

function cloneMargin() {
    //
    const name = "**temporary**"
    //
    dataMargins[name] = cloneObj(currentMargin)
    //
    showPageMargin(name)
}

function applyMargin() { // keeps **temporary**: some node may be using it
    //
    let name = currentMargin.top + " " + currentMargin.right
    //
    name += " " + currentMargin.bottom + " " + currentMargin.left
    //
    if (currentMargin.screen != 0) { name += " " + screenAsLetter(currentMargin.screen) }
    //
    dataMargins[name] = cloneObj(currentMargin)
    //
    showPageMargin(name)
    //
    replaceTemporaryInNodes("m:", name)
}

function deleteMargin() {
    //
    const name = margin_margins.value
    //
    const msg = "Shall *DELETE* the margin <b>" + name + "</b> ?"
    //
    safeConfirm(msg, function() { delete dataMargins[name]; showPageMargin() })
}


// ## file: pages-css/page-color.js ##

const pageColor = createDiv("dn w320 tac")

const color_picker = createHtmlElement("input") // classname does not work

const color_colors = createSelector("w300", colorSelectorChanged)

const color_clone = createButton("clone", "w80 mr30", cloneColor)

const color_apply = createButton("apply", "w80 mr30", applyColor)

const color_delete = createButton("delete", "w80", deleteColor)

function initPageColor() {
    //
    mainDivision.appendChild(pageColor)
    //
    color_picker.type = "color"
    //
    pageColor.appendChild(color_picker)
    //
    appendBreak(pageColor, 3)
    //
    pageColor.appendChild(color_colors)
    //
    pageColor.appendChild(createLabel("name", "mt3"))
    //
    appendBreak(pageColor, 2)
    //
    pageColor.appendChild(color_clone)
    //
    pageColor.appendChild(color_apply)
    //
    pageColor.appendChild(color_delete)
    //
    appendBreak(pageColor, 2)
    //
    const html = "Only <i>**temporary**</i> can be edited. Cannot delete <i>-class</i>, <i>**temporary**</i> or any class that is in use."
    //
    pageColor.appendChild(createLabel(html, "w300 mt10 taj"))
    //
    //
    color_picker.onclick = colorPickerClicked
    //
    color_picker.onchange = colorPickerChanged
}

function showPageColor(favorite) {
    //
    showPage(pageColor, bgColorCss)
    //
    h1return.onclick = function() { if (preferPageCss) { showPageCss() } else { showPageBody() } }
    //
    h1title.innerHTML = "color&nbsp;"
    //
    const name = fillColorSelector(color_colors, favorite)
    //
    color_picker.value = dataColors[name]
    //
    setPageColorDisableds(name)
}

function setPageColorDisableds(name) {
    //
    color_clone.disabled = (name == "**temporary**")
    //
    color_apply.disabled = (name != "**temporary**")
    //
    color_delete.disabled = (name == "**temporary**"  ||  name.startsWith("-")  ||  isColorUsed(name))
}

function colorPickerClicked() {
    //
    if (color_colors.value == "**temporary**") { return true }
    //
    customAlert("Can only edit <i>**temporary**</i>.")
    //
    return false
}

function colorPickerChanged() {
    //
    const name = color_colors.value
    //
    dataColors[name] = color_picker.value
}

function colorSelectorChanged() {
    //
    const name = color_colors.value
    //
    color_picker.value = dataColors[name]
    //
    showPageColor()
}

function cloneColor() {
    //
    const name = "**temporary**"
    //
    const value = dataColors[color_colors.value]
    //
    dataColors[name] = value
    //
    showPageColor(name)
}

function applyColor() { // keeps **temporary**: some node may be using it
    //
    const r = parseInt(color_picker.value.substr(1, 2), 16)
    //
    const g = parseInt(color_picker.value.substr(3, 2), 16)
    //
    const b = parseInt(color_picker.value.substr(5, 2), 16)
    //
    const name = "rgb " + r + " " + g + " " + b
    //
    dataColors[name] = color_picker.value
    //
    showPageColor(name)
    //
    replaceTemporaryInNodes("b:", name)
    //
    replaceTemporaryInNodes("c:", name)
}

function deleteColor() {
    //
    const name = color_colors.value
    //
    const msg = "Shall *DELETE* the color <b>" + name + "</b> ?"
    //
    safeConfirm(msg, function() { delete dataColors[name]; showPageColor() })
}


// ## file: pages-css/page-css1.js ##

const pageCss = createDiv("dn w320 tac")

const pageCssFlex = createDiv("w300 flexrow jcbet rowgap30")

const css_color = createButton("color", "pv8", showPageColor)

const css_display = createButton("display", "pv8", showPageDisplay)

const css_font = createButton("font", "pv8", showPageFont)

const css_height = createButton("height", "pv8", showPageHeight)

const css_margin = createButton("margin", "pv8", showPageMargin)

const css_padding = createButton("padding", "pv8", showPagePadding)

const css_overflow = createButton("overflow", "pv8", showPageOverflow)

const css_width = createButton("width", "pv8", showPageWidth)

const css_xrule = createButton("X class", "pv8", showPageXRule)

const css_keyframe = createButton("keyframe", "pv8", showPageKeyframe)

const css_unused = createButton("unused custom classes", "w300 pv8", showUnusedClasses)

const css_redundant = createButton("redundant classes", "w300 pv8", showRedundantClasses)

const css_replace = createButton("replace class in nodes", "w300 pv8", replaceClass)

function initPageCss() {
    //
    mainDivision.appendChild(pageCss)
    //
    pageCss.appendChild(pageCssFlex)
    //
    pageCssFlex.appendChild(css_color)
    //
    pageCssFlex.appendChild(css_font)
    //
    pageCssFlex.appendChild(css_width)
    //
    pageCssFlex.appendChild(css_height)
    //
    pageCssFlex.appendChild(css_margin)
    //
    pageCssFlex.appendChild(css_padding)
    //
    pageCssFlex.appendChild(css_display)
    //
    pageCssFlex.appendChild(css_overflow)
    //
    pageCssFlex.appendChild(css_keyframe)
    //
    pageCssFlex.appendChild(css_xrule)
    //
    pageCssFlex.appendChild(css_unused)
    //
    pageCssFlex.appendChild(css_redundant)
    //
    pageCssFlex.appendChild(css_replace)
}

function showPageCss() {
    //
    preferPageCss = true
    //
    showPage(pageCss, bgColorCss)
    //
    h1return.onclick = function() { showPageManager() }
    //
    h1title.innerHTML = "CSS&nbsp;"
}



// ## file: pages-css/page-keyframe.js ##

const pageKeyframe = createDiv("dn w wx600 shell tac")

const keyframe_keyframes = createSelector("w300", function() { showPageKeyframe() }) // captures the event

const keyframe_clone = createButton("clone", "w80 mr30", cloneKeyframe)

const keyframe_rename = createButton("apply", "w80 mr30", renameKeyframe)

const keyframe_delete = createButton("delete", "w80", deleteKeyframe)

const keyframe_data = createTextArea("pseudo-class", function() { currentKeyframe.data = noTagReally(this.value) })

var currentKeyframe = null

function initPageKeyframe() {
    //
    keyframe_data.rows = 4
    //
    mainDivision.appendChild(pageKeyframe)
    //
    pageKeyframe.appendChild(keyframe_keyframes)
    //
    appendBreak(pageKeyframe, 1)
    //
    pageKeyframe.appendChild(createLabel("name", "mt3"))
    //
    appendBreak(pageKeyframe, 2)
    //
    pageKeyframe.appendChild(keyframe_clone)
    //
    pageKeyframe.appendChild(keyframe_rename)
    //
    pageKeyframe.appendChild(keyframe_delete)
    //
    appendBreak(pageKeyframe, 2)
    //
    const html = "Only <i>**temporary**</i> can be edited. Cannot delete <i>-keyframe</i> or <i>**temporary**</i>. Currently WAYW is <b>NOT</b> protecting used keyframes from being deleted. You have to *manually* adjust your X classes after renaming or deleting a keyframe set."
    //
    pageKeyframe.appendChild(createLabel(html, "w300 mt10 taj"))
    //
    appendBreak(pageKeyframe, 3)
    //
    pageKeyframe.appendChild(keyframe_data)
    //
    pageKeyframe.appendChild(createLabel("data", "mt3"))
}

function showPageKeyframe(favorite) {
    //
    showPage(pageKeyframe, bgColorCss)
    //
    h1return.onclick = function() { if (preferPageCss) { showPageCss() } else { showPageBody() } }
    //
    h1title.innerHTML = "keyframe&nbsp;"
    //
    const name = fillKeyframeSelector(keyframe_keyframes, favorite)
    //
    currentKeyframe = dataKeyframes[name]
    //
    keyframe_data.value = currentKeyframe.data
    //
    adjustTextAreaRows(keyframe_data)
    //
    keyframe_clone.disabled = (name == "**temporary**")
    //
    keyframe_delete.disabled = (name == "**temporary**"  ||  name.startsWith("-"))
    //
    const disabled = (name != "**temporary**")
    //
    keyframe_rename.disabled = disabled
    //
    keyframe_data.disabled = disabled
}

/////////////////////////////////////////////////////////////////////////////

function cloneKeyframe() {
    //
    const name = "**temporary**"
    //
    dataKeyframes[name] = cloneObj(currentKeyframe)
    //
    showPageKeyframe(name)
}

function renameKeyframe() {
    //
    namePrompt("Enter a name for the keyframe.", renameKeyframe2)
}

function renameKeyframe2(name) {
    //
    if (name == null) { return }
    //
    if (name == "") { customError("Name cannot be blank.", renameKeyframe); return }
    //
    if (dataKeyframes[name] != undefined) {
        //
        customError("This name is already used by a keyframe.", renameKeyframe); return
    }
    //
    dataKeyframes[name] = cloneObj(currentKeyframe)
    //
    showPageKeyframe(name)
}

function deleteKeyframe() {
    //
    const name = keyframe_keyframes.value
    //
    const msg = "Shall *DELETE* the keyframe <b>" + name + "</b> ?"
    //
    safeConfirm(msg, function() { delete dataKeyframes[name]; showPageKeyframe() })
}


// ## file: pages-css/page-height.js ##

const pageHeight = createDiv("dn w320 tac")

const height_heights = createSelector("w300", function() { showPageHeight() }) // captures the event

const height_clone = createButton("clone", "w80 mr30", cloneHeight)

const height_apply = createButton("apply", "w80 mr30", applyHeight)

const height_delete = createButton("delete", "w80", deleteHeight)

const height_height = createSelector("w130", function() { currentHeight.height = this.value })

const height_minHeight = createSelector("w130", function() { currentHeight.minHeight = this.value })

const height_maxHeight = createSelector("w130", function() { currentHeight.maxHeight = this.value })

const height_screen = createSelector("w300", function() { currentHeight.screen = parseInt(this.value) })

var currentHeight = null

function initPageHeight() {
    //
    fillSelector(height_height, pxAutoVh)
    //
    fillSelector(height_minHeight, pxVh)
    //
    fillSelector(height_maxHeight, pxNoneVh)
    //
    fillSelector(height_screen, allWidths, allScreens)
    //
    //
    mainDivision.appendChild(pageHeight)
    //
    pageHeight.appendChild(height_heights)
    //
    pageHeight.appendChild(createLabel("name", "mt3"))
    //
    appendBreak(pageHeight, 2)
    //
    pageHeight.appendChild(height_clone)
    //
    pageHeight.appendChild(height_apply)
    //
    pageHeight.appendChild(height_delete)
    //
    appendBreak(pageHeight, 2)
    //
    const html = "Only <i>**temporary**</i> can be edited. Cannot delete <i>-class</i>, <i>**temporary**</i> or any class that is in use."
    //
    pageHeight.appendChild(createLabel(html, "w300 mt10 taj"))
    //
    appendBreak(pageHeight, 3)
    //
    //
    pageHeight.appendChild(height_height)
    //
    appendBreak(pageHeight, 1)
    //
    pageHeight.appendChild(createLabel("height", "w130 mt3"))
    //
    appendBreak(pageHeight, 2)
    //
    pageHeight.appendChild(height_minHeight)
    //
    appendBreak(pageHeight, 1)
    //
    pageHeight.appendChild(createLabel("min height", "w130 mt3"))
    //
    appendBreak(pageHeight, 2)
    //
    pageHeight.appendChild(height_maxHeight)
    //
    appendBreak(pageHeight, 1)
    //
    pageHeight.appendChild(createLabel("max height", "w130 mt3"))
    //
    appendBreak(pageHeight, 3)
    //
    pageHeight.appendChild(height_screen)
    //
    pageHeight.appendChild(createLabel("window inner width", "mt3"))
    //
    appendBreak(pageHeight, 2)
    //
    const html2 = "The rules apply when the inner width of the browser window is the selected one or greater. Rules for larger windows may override them."
    //
    pageHeight.appendChild(createLabel(html2, "taj w300"))
}

function showPageHeight(favorite) {
    //
    showPage(pageHeight, bgColorCss)
    //
    h1return.onclick = function() { if (preferPageCss) { showPageCss() } else { showPageBody() } }
    //
    h1title.innerHTML = "height&nbsp;"
    //
    //
    const name = fillHeightSelector(height_heights, favorite)
    //
    currentHeight = dataHeights[name]
    //
    height_height.value = currentHeight.height
    //
    height_minHeight.value = currentHeight.minHeight
    //
    height_maxHeight.value = currentHeight.maxHeight
    //
    height_screen.value = currentHeight.screen
    //
    setPageHeightDisableds(name)
}

function setPageHeightDisableds(name) {
    //
    height_clone.disabled = (name == "**temporary**")
    //
    height_apply.disabled = (name != "**temporary**")
    //
    height_delete.disabled = (name == "**temporary**"  ||  name.startsWith("-")  ||  isHeightUsed(name))
    //
    const disabled = (name != "**temporary**")
    //
    height_height.disabled = disabled
    //
    height_minHeight.disabled = disabled
    //
    height_maxHeight.disabled = disabled
    //
    height_screen.disabled = disabled
}

function cloneHeight() {
    //
    const name = "**temporary**"
    //
    dataHeights[name] = cloneObj(currentHeight)
    //
    showPageHeight(name)
}

function applyHeight() { // keeps **temporary**: some node may be using it
    //
    let name = currentHeight.height
    //
    name += " "
    //
    name += (currentHeight.minHeight == "0px") ? "_" : currentHeight.minHeight
    //
    name += " "
    //
    name += (currentHeight.maxHeight == "none") ? "_" : currentHeight.maxHeight
    //
    if (currentHeight.screen != 0) { name += " " + screenAsLetter(currentHeight.screen) }
    //
    dataHeights[name] = cloneObj(currentHeight)
    //
    showPageHeight(name)
    //
    replaceTemporaryInNodes("h:", name)
}

function deleteHeight() {
    //
    const name = height_heights.value
    //
    const msg = "Shall *DELETE* the height <b>" + name + "</b> ?"
    //
    safeConfirm(msg, function() { delete dataHeights[name]; showPageHeight() })
}


// ## file: pages-css/page-padding.js ##

const pagePadding = createDiv("dn w320 tac")

const padding_paddings = createSelector("w300", function() { showPagePadding() }) // captures the event

const padding_clone = createButton("clone", "w80 mr30", clonePadding)

const padding_apply = createButton("apply", "w80 mr30", applyPadding)

const padding_delete = createButton("delete", "w80", deletePadding)

const padding_top = createSelector("w130 mr40 tar", function() { currentPadding.top = this.value })

const padding_right = createSelector("w130 tar", function() { currentPadding.right = this.value })

const padding_bottom = createSelector("w130 mr40 tar", function() { currentPadding.bottom = this.value })

const padding_left = createSelector("w130 tar", function() { currentPadding.left = this.value })

const padding_screen = createSelector("w300", function() { currentPadding.screen = parseInt(this.value) })

var currentPadding = null

function initPagePadding() {
    //
    fillSelector(padding_top, px2000)
    //
    fillSelector(padding_right, px2000)
    //
    fillSelector(padding_bottom, px2000)
    //
    fillSelector(padding_left, px2000)
    //
    fillSelector(padding_screen, allWidths, allScreens)
    //
    //
    mainDivision.appendChild(pagePadding)
    //
    pagePadding.appendChild(padding_paddings)
    //
    pagePadding.appendChild(createLabel("name", "mt3"))
    //
    appendBreak(pagePadding, 2)
    //
    pagePadding.appendChild(padding_clone)
    //
    pagePadding.appendChild(padding_apply)
    //
    pagePadding.appendChild(padding_delete)
    //
    appendBreak(pagePadding, 2)
    //
    const html = "Only <i>**temporary**</i> can be edited. Cannot delete <i>-class</i>, <i>**temporary**</i> or any class that is in use."
    //
    pagePadding.appendChild(createLabel(html, "w300 mt10 taj"))
    //
    appendBreak(pagePadding, 3)
    //
    pagePadding.appendChild(padding_top)
    //
    pagePadding.appendChild(padding_right)
    //
    appendBreak(pagePadding, 1)
    //
    pagePadding.appendChild(createLabel("top", "w130 mr40 tac"))
    //
    pagePadding.appendChild(createLabel("right", "w130 tac"))
    //
    appendBreak(pagePadding, 2)
    //
    pagePadding.appendChild(padding_bottom)
    //
    pagePadding.appendChild(padding_left)
    //
    appendBreak(pagePadding, 1)
    //
    pagePadding.appendChild(createLabel("bottom", "w130 mr40 tac"))
    //
    pagePadding.appendChild(createLabel("left", "w130 tac"))
    //
    appendBreak(pagePadding, 3)
    //
    pagePadding.appendChild(padding_screen)
    //
    pagePadding.appendChild(createLabel("window inner width", "mt3"))
    //
    appendBreak(pagePadding, 2)
    //
    const html2 = "The rules apply when the inner width of the browser window is the selected one or greater. Rules for larger windows may override them."
    //
    pagePadding.appendChild(createLabel(html2, "taj w300"))
}

function showPagePadding(favorite) {
    //
    showPage(pagePadding, bgColorCss)
    //
    h1return.onclick = function() { if (preferPageCss) { showPageCss() } else { showPageBody() } }
    //
    h1title.innerHTML = "padding&nbsp;"
    //
    const name = fillPaddingSelector(padding_paddings, favorite)
    //
    currentPadding = dataPaddings[name]
    //
    padding_top.value = currentPadding.top
    //
    padding_right.value = currentPadding.right
    //
    padding_bottom.value = currentPadding.bottom
    //
    padding_left.value = currentPadding.left
    //
    padding_screen.value = currentPadding.screen
    //
    setPagePaddingDisableds(name)
    //
    replaceTemporaryInNodes("p:", name)
}

function setPagePaddingDisableds(name) {
    //
    padding_clone.disabled = (name == "**temporary**")
    //
    padding_apply.disabled = (name != "**temporary**")
    //
    padding_delete.disabled = (name == "**temporary**"  ||  name.startsWith("-")  ||  isPaddingUsed(name))
    //
    const disabled = (name != "**temporary**")
    //
    padding_top.disabled = disabled
    //
    padding_right.disabled = disabled
    //
    padding_bottom.disabled = disabled
    //
    padding_left.disabled = disabled
    //
    padding_screen.disabled = disabled
}

function clonePadding() {
    //
    const name = "**temporary**"
    //
    dataPaddings[name] = cloneObj(currentPadding)
    //
    showPagePadding(name)
}

function applyPadding() { // keeps **temporary**: some node may be using it
    //
    let name = currentPadding.top + " " + currentPadding.right
    //
    name += " " + currentPadding.bottom + " " + currentPadding.left
    //
    if (currentPadding.screen != 0) { name += " " + screenAsLetter(currentPadding.screen) }
    //
    dataPaddings[name] = cloneObj(currentPadding)
    //
    showPagePadding(name)
}

function deletePadding() {
    //
    const name = padding_paddings.value
    //
    const msg = "Shall *DELETE* the padding <b>" + name + "</b> ?"
    //
    safeConfirm(msg, function() { delete dataPaddings[name]; showPagePadding() })
}


// ## file: pages-css/page-xrule-init.js ##

const pageXRule = createDiv("dn w wx600 shell tac")

const xrule_xrules = createSelector("w300", function() { showPageXRule() }) // captures the event

const xrule_clone = createButton("clone", "w80 mr30", cloneXRule)

const xrule_rename = createButton("apply", "w80 mr30", renameXRule)

const xrule_delete = createButton("delete", "w80", deleteXRule)

const xrule_pure = createTextArea("pseudo-class", function() { currentXRule.pure = noTagReally(this.value) })

const xrule_link = createTextArea("pseudo-class", function() { currentXRule.link = noTagReally(this.value) })

const xrule_visited = createTextArea("pseudo-class", function() { currentXRule.visited = noTagReally(this.value) })

const xrule_hover = createTextArea("pseudo-class", function() { currentXRule.hover = noTagReally(this.value) })

const xrule_active = createTextArea("pseudo-class", function() { currentXRule.active = noTagReally(this.value) })

const xrule_disabled = createTextArea("pseudo-class", function() { currentXRule.disabled = noTagReally(this.value) })

const xrule_screen = createSelector("w300", function() { currentXRule.screen = parseInt(this.value) })

function initPageXRule() {
    //
    xrule_pure.rows = 2
    //
    xrule_link.rows = 2
    //
    xrule_visited.rows = 2
    //
    xrule_hover.rows = 2
    //
    xrule_active.rows = 2
    //
    xrule_disabled.rows = 2
    //
    fillSelector(xrule_screen, allWidths, allScreens)
    //
    //
    mainDivision.appendChild(pageXRule)
    //
    pageXRule.appendChild(xrule_xrules)
    //
    appendBreak(pageXRule, 1)
    //
    pageXRule.appendChild(createLabel("name", "mt3"))
    //
    appendBreak(pageXRule, 2)
    //
    pageXRule.appendChild(xrule_clone)
    //
    pageXRule.appendChild(xrule_rename)
    //
    pageXRule.appendChild(xrule_delete)
    //
    appendBreak(pageXRule, 2)
    const html = "Only <i>**temporary**</i> can be edited. Cannot delete <i>-class</i>, <i>**temporary**</i> or any class that is in use."
    //
    pageXRule.appendChild(createLabel(html, "w300 mt10 taj"))
    //
    appendBreak(pageXRule, 3)
    //
    pageXRule.appendChild(xrule_pure)
    //
    pageXRule.appendChild(createLabel("(pure)", "mt3"))
    //
    appendBreak(pageXRule, 3)
    //
    pageXRule.appendChild(xrule_link)
    //
    pageXRule.appendChild(createLabel(":link", "mt3"))
    //
    appendBreak(pageXRule, 3)
    //
    pageXRule.appendChild(xrule_visited)
    //
    pageXRule.appendChild(createLabel(":visited", "mt3"))
    //
    appendBreak(pageXRule, 3)
    //
    pageXRule.appendChild(xrule_hover)
    //
    pageXRule.appendChild(createLabel(":hover", "mt3"))
    //
    appendBreak(pageXRule, 3)
    //
    pageXRule.appendChild(xrule_active)
    //
    pageXRule.appendChild(createLabel(":active", "mt3"))
    //
    appendBreak(pageXRule, 3)
    //
    pageXRule.appendChild(xrule_disabled)
    //
    pageXRule.appendChild(createLabel(":disabled", "mt3"))
    //
    appendBreak(pageXRule, 3)
    //
    pageXRule.appendChild(xrule_screen)
    //
    appendBreak(pageXRule, 1)
    //
    pageXRule.appendChild(createLabel("window inner width", "mt3"))
    //
    appendBreak(pageXRule, 2)
    //
    const html2 = "The rules apply when the inner width of the browser window is the selected one or greater. Rules for larger windows may override them."
    //
    pageXRule.appendChild(createLabel(html2, "taj w300"))
}


// ## file: pages-css/page-display-init.js ##

const pageDisplay = createDiv("dn w320 tac")

const display_displays = createSelector("w300", function() { showPageDisplay() }) // captures the event

const display_clone = createButton("clone", "w80 mr30", cloneDisplay)

const display_apply = createButton("apply", "w80 mr30", applyDisplay)

const display_delete = createButton("delete", "w80", deleteDisplay)

const display_display = createSelector("w300", function() { displayKindHasChanged(this.value) })

const display_area_ib = createDiv("w300")

const display_textAlign = createSelector("w130 mr40", function() { currentDisplay.textAlign = this.value })

const display_vertAlign = createSelector("w130", function() { currentDisplay.vertAlign = this.value })

const display_area_fc = createDiv("w300")

const display_flexWrap = createSelector("w130 mr40", function() { currentDisplay.flexWrap = this.value })

const display_justCont = createSelector("w130", function() { currentDisplay.justCont = this.value })

const display_alignItems = createSelector("w130 mr40", function() { currentDisplay.alignItems = this.value })

const display_alignCont = createSelector("w130", function() { currentDisplay.alignCont = this.value })

const display_rowGap = createSelector("w130 mr40", function() { currentDisplay.rowGap = this.value })

const display_columnGap = createSelector("w130", function() { currentDisplay.columnGap = this.value })

const display_area_fi = createDiv("w300")

const display_alignSelf = createSelector("w130 mr40", function() { currentDisplay.alignSelf = this.value })

const display_flexGrow = createSelector("w130", function() { currentDisplay.flexGrow = parseInt(this.value) })

const display_screen = createSelector("w300", function() { currentDisplay.screen = parseInt(this.value) })

function initPageDisplay() {
    //
    fillSelector(display_display, ["none","inline-block","flex row","flex col","flex item"])
    //
    fillSelector(display_textAlign, ["left","center","right"])
    //
    fillSelector(display_vertAlign, ["top","middle","bottom","baseline"])
    //
    fillSelector(display_flexWrap, ["wrap","no wrap"])
    //
    fillSelector(display_justCont, ["center","flex-start","flex-end","space-between","space-around","space-evenly"])
    //
    fillSelector(display_alignItems, ["center","flex-start","flex-end","baseline","stretch"])
    //
    fillSelector(display_alignCont, ["center","flex-start","flex-end","space-between","space-around","stretch"])
    //
    fillSelector(display_rowGap, px100)
    //
    fillSelector(display_columnGap, px100)
    //
    fillSelector(display_alignSelf, ["auto","center","flex-start","flex-end","baseline","stretch"])
    //
    fillSelector(display_flexGrow, const100)
    //
    fillSelector(display_screen, allWidths, allScreens)
    //
    //
    mainDivision.appendChild(pageDisplay)
    //
    pageDisplay.appendChild(display_displays)
    //
    pageDisplay.appendChild(createLabel("name", "mt3"))
    //
    appendBreak(pageDisplay, 2)
    //
    pageDisplay.appendChild(display_clone)
    //
    pageDisplay.appendChild(display_apply)
    //
    pageDisplay.appendChild(display_delete)
    //
    appendBreak(pageDisplay, 2)
    //
    const html = "Only <i>**temporary**</i> can be edited. Cannot delete <i>-class</i>, <i>**temporary**</i> or any class that is in use."
    //
    pageDisplay.appendChild(createLabel(html, "w300 mt10 taj"))
    //
    appendBreak(pageDisplay, 3)
    //
    pageDisplay.appendChild(display_display)
    //
    pageDisplay.appendChild(createLabel("display", "mt3"))
    //
    appendBreak(pageDisplay, 2)
    //
    pageDisplay.appendChild(display_area_ib) // inline-block
    //
    display_area_ib.appendChild(display_textAlign)
    //
    display_area_ib.appendChild(display_vertAlign)
    //
    appendBreak(display_area_ib, 1)
    //
    display_area_ib.appendChild(createLabel("text align", "w130 mr40 tac"))
    //
    display_area_ib.appendChild(createLabel("inline vert align", "w130 tac"))
    //
    appendBreak(display_area_ib, 3)
    //
    pageDisplay.appendChild(display_area_fc) // flex container
    //
    display_area_fc.appendChild(display_flexWrap)
    //
    display_area_fc.appendChild(display_justCont)
    //
    appendBreak(display_area_fc, 1)
    //
    display_area_fc.appendChild(createLabel("flex wrap", "w130 mr40 tac"))
    //
    display_area_fc.appendChild(createLabel("justify content", "w130 tac"))
    //
    appendBreak(display_area_fc, 2)
    //
    display_area_fc.appendChild(display_alignItems)
    //
    display_area_fc.appendChild(display_alignCont)
    //
    appendBreak(display_area_fc, 1)
    //
    display_area_fc.appendChild(createLabel("align items", "w130 mr40 tac"))
    //
    display_area_fc.appendChild(createLabel("align content", "w130 tac"))
    //
    appendBreak(display_area_fc, 2)
    //
    display_area_fc.appendChild(display_rowGap)
    //
    display_area_fc.appendChild(display_columnGap)
    //
    appendBreak(display_area_fc, 1)
    //
    display_area_fc.appendChild(createLabel("row gap", "w130 mr40 tac"))
    //
    display_area_fc.appendChild(createLabel("column gap", "w130 tac"))
    //
    appendBreak(display_area_fc, 2)
    //
    pageDisplay.appendChild(display_area_fi) // flex item
    //
    display_area_fi.appendChild(display_alignSelf)
    //
    display_area_fi.appendChild(display_flexGrow)
    //
    appendBreak(display_area_fc, 1)
    //
    display_area_fi.appendChild(createLabel("align self", "w130 mr40 tac"))
    //
    display_area_fi.appendChild(createLabel("flex grow", "w130 tac"))
    //
    appendBreak(display_area_fi, 3)
    //
    appendBreak(pageDisplay, 1)
    //
    pageDisplay.appendChild(display_screen)
    //
    pageDisplay.appendChild(createLabel("window inner width", "mt3"))
    //
    appendBreak(pageDisplay, 2)
    //
    const html2 = "The rules apply when the inner width of the browser window is the selected one or greater. Rules for larger windows may override them."
    //
    pageDisplay.appendChild(createLabel(html2, "taj w300"))
}


// ## file: pages-css/page-font-show.js ##

var currentFont = null

function showPageFont(favorite) {
    //
    showPage(pageFont, bgColorCss)
    //
    h1return.onclick = function() { if (preferPageCss) { showPageCss() } else { showPageBody() } }
    //
    h1title.innerHTML = "font&nbsp;"
    //
    const name = fillFontSelector(font_fonts, favorite)
    //
    currentFont = dataFonts[name]
    //
    font_family.value = currentFont.family
    //
    font_weight.value = currentFont.weight
    //
    font_size.value = currentFont.size
    //
    font_italic.checked = currentFont.italic
    //
    font_strike.checked = currentFont.strike
    //
    font_screen.value = currentFont.screen
    //
    setPageFontDisableds(name)
}

function setPageFontDisableds(name) {
    //
    font_clone.disabled = (name == "**temporary**")
    //
    font_apply.disabled = (name != "**temporary**")
    //
    font_delete.disabled = (name == "**temporary**"  ||  name.startsWith("-")  ||  isFontUsed(name))
    //
    const disabled = (name != "**temporary**")
    //
    font_family.disabled = disabled
    //
    font_weight.disabled = disabled
    //
    font_size.disabled = disabled
    //
    font_italic.disabled = disabled
    //
    font_strike.disabled = disabled
    //
    font_screen.disabled = disabled
}

function cloneFont() {
    //
    const name = "**temporary**"
    //
    dataFonts[name] = cloneObj(currentFont)
    //
    showPageFont(name)
}

function applyFont() { // keeps **temporary**: some node may be using it
    //
    let name = currentFont.size + " " + currentFont.weight
    //
    if (currentFont.italic) { name += " i" }
    //
    if (currentFont.strike) { name += " s" }
    //
    if (currentFont.screen != 0) { name += " " + screenAsLetter(currentFont.screen) }
    //
    name += " " + currentFont.family
    //
    dataFonts[name] = cloneObj(currentFont)
    //
    showPageFont(name)
    //
    replaceTemporaryInNodes("f:", name)
}

function deleteFont() {
    //
    const name = font_fonts.value
    //
    const msg = "Shall *DELETE* the font <b>" + name + "</b> ?"
    //
    safeConfirm(msg, function() { delete dataFonts[name]; showPageFont() })
}


// ## file: pages-css/page-overflow.js ##

const pageOverflow = createDiv("dn w320 tac")

const overflow_overflows = createSelector("w300", function() { showPageOverflow() }) // captures the event

const overflow_clone = createButton("clone", "w80 mr30", cloneOverflow)

const overflow_apply = createButton("apply", "w80 mr30", applyOverflow)

const overflow_delete = createButton("delete", "w80", deleteOverflow)

const overflow_x = createSelector("w130 mr40", function() { currentOverflow.overflowX = this.value })

const overflow_y = createSelector("w130", function() { currentOverflow.overflowY = this.value })

var currentOverflow = null

function initPageOverflow() {
    //
    fillSelector(overflow_x, overflowValues)
    //
    fillSelector(overflow_y, overflowValues)
    //
    //
    mainDivision.appendChild(pageOverflow)
    //
    pageOverflow.appendChild(overflow_overflows)
    //
    pageOverflow.appendChild(createLabel("name", "mt3"))
    //
    appendBreak(pageOverflow, 2)
    //
    pageOverflow.appendChild(overflow_clone)
    //
    pageOverflow.appendChild(overflow_apply)
    //
    pageOverflow.appendChild(overflow_delete)
    //
    appendBreak(pageOverflow, 2)
    //
    const html = "Only <i>**temporary**</i> can be edited. Cannot delete <i>-class</i>, <i>**temporary**</i> or any class that is in use."
    //
    pageOverflow.appendChild(createLabel(html, "w300 mt10 taj"))
    //
    appendBreak(pageOverflow, 3)
    //
    pageOverflow.appendChild(overflow_x)
    //
    pageOverflow.appendChild(overflow_y)
    //
    appendBreak(pagePadding, 1)
    //
    pageOverflow.appendChild(createLabel("overflow x", "w130 mr40 tac"))
    //
    pageOverflow.appendChild(createLabel("overflow y", "w130 tac"))
}

function showPageOverflow(favorite) {
    //
    showPage(pageOverflow, bgColorCss)
    //
    h1return.onclick = function() { if (preferPageCss) { showPageCss() } else { showPageBody() } }
    //
    h1title.innerHTML = "overflow&nbsp;"
    //
    const name = fillOverflowSelector(overflow_overflows, favorite)
    //
    currentOverflow = dataOverflows[name]
    //
    overflow_x.value = currentOverflow.overflowX
    //
    overflow_y.value = currentOverflow.overflowY
    //
    setPageOverflowDisableds(name)
}

function setPageOverflowDisableds(name) {
    //
    overflow_clone.disabled = (name == "**temporary**")
    //
    overflow_apply.disabled = (name != "**temporary**")
    //
    overflow_delete.disabled = (name == "**temporary**"  ||  name.startsWith("-")  ||  isOverflowUsed(name))
    //
    const disabled = (name != "**temporary**")
    //
    overflow_x.disabled = disabled
    //
    overflow_y.disabled = disabled
}

function cloneOverflow() {
    //
    const name = "**temporary**"
    //
    dataOverflows[name] = cloneObj(currentOverflow)
    //
    showPageOverflow(name)
}

function applyOverflow() { // keeps **temporary**: some node may be using it
    //
    let name = currentOverflow.overflowX + " " + currentOverflow.overflowY
    //
    dataOverflows[name] = cloneObj(currentOverflow)
    //
    showPageOverflow(name)
    //
    replaceTemporaryInNodes("o:", name)
}

function deleteOverflow() {
    //
    const name = overflow_overflows.value
    //
    const msg = "Shall *DELETE* the overflow <b>" + name + "</b> ?"
    //
    safeConfirm(msg, function() { delete dataOverflows[name]; showPageOverflow() })
}


// ## file: pages-css/page-width.js ##

const pageWidth = createDiv("dn w320 tac")

const width_widths = createSelector("w300", function() { showPageWidth() }) // captures the event

const width_clone = createButton("clone", "w80 mr30", cloneWidth)

const width_apply = createButton("apply", "w80 mr30", applyWidth)

const width_delete = createButton("delete", "w80", deleteWidth)

const width_unity = createSelector("w300", widthUnityHasChanged)

const width_width = createSelector("w130", function() { currentWidth.width = this.value })

const width_minWidth = createSelector("w130", function() { currentWidth.minWidth = this.value })

const width_maxWidth = createSelector("w130", function() { currentWidth.maxWidth = this.value })

const width_screen = createSelector("w300", function() { currentWidth.screen = parseInt(this.value) })

var previousWidth = "auto"

var previousMaxWidth = "none"

var currentWidth = null

function initPageWidth() {
    //
    fillSelector(width_unity, ["%","px"], [ "width in % | max width in px", "width in px | max width in %" ])
    //
    fillSelector(width_width, pcAuto) // pxAuto
    //
    fillSelector(width_minWidth, px2000)
    //
    fillSelector(width_maxWidth, pxNone)  // pcNone
    //
    fillSelector(width_screen, allWidths, allScreens)
    //
    //
    mainDivision.appendChild(pageWidth)
    //
    pageWidth.appendChild(width_widths)
    //
    pageWidth.appendChild(createLabel("name", "mt3"))
    //
    appendBreak(pageWidth, 2)
    //
    pageWidth.appendChild(width_clone)
    //
    pageWidth.appendChild(width_apply)
    //
    pageWidth.appendChild(width_delete)
    //
    appendBreak(pageWidth, 2)
    //
    const html = "Only <i>**temporary**</i> can be edited. Cannot delete <i>-class</i>, <i>**temporary**</i> or any class that is in use."
    //
    pageWidth.appendChild(createLabel(html, "w300 mt10 taj"))
    //
    appendBreak(pageWidth, 3)
    //
    pageWidth.appendChild(width_unity)
    //
    appendBreak(pageWidth, 1)
    //
    pageWidth.appendChild(createLabel("width unity", "mt3"))
    //
    appendBreak(pageWidth, 2)
    //
    pageWidth.appendChild(width_width)
    //
    appendBreak(pageWidth, 1)
    //
    pageWidth.appendChild(createLabel("width", "w130 mt3"))
    //
    appendBreak(pageWidth, 2)
    //
    pageWidth.appendChild(width_minWidth)
    //
    appendBreak(pageWidth, 1)
    //
    pageWidth.appendChild(createLabel("min width", "w130 mt3"))
    //
    appendBreak(pageWidth, 2)
    //
    pageWidth.appendChild(width_maxWidth)
    //
    appendBreak(pageWidth, 1)
    //
    pageWidth.appendChild(createLabel("max width", "w130 mt3"))
    //
    appendBreak(pageWidth, 3)
    //
    pageWidth.appendChild(width_screen)
    //
    pageWidth.appendChild(createLabel("window inner width", "mt3"))
    //
    appendBreak(pageWidth, 2)
    //
    const html2 = "The rules apply when the inner width of the browser window is the selected one or greater. Rules for larger windows may override them."
    //
    pageWidth.appendChild(createLabel(html2, "taj w300"))
}

function showPageWidth(favorite) {
    //
    showPage(pageWidth, bgColorCss)
    //
    h1return.onclick = function() { if (preferPageCss) { showPageCss() } else { showPageBody() } }
    //
    h1title.innerHTML = "width&nbsp;"
    //
    previousWidth = "auto"
    //
    previousMaxWidth = "none"
    //
    const name = fillWidthSelector(width_widths, favorite)
    //
    currentWidth = dataWidths[name]
    //
    width_unity.value = valueForWidthUnity()
    //
    adjustWidthSelectorsToWidthUnity()
    //
    width_width.value = currentWidth.width
    //
    width_minWidth.value = currentWidth.minWidth
    //
    width_maxWidth.value = currentWidth.maxWidth
    //
    width_screen.value = currentWidth.screen
    //
    setPageWidthDisableds(name)
}

function valueForWidthUnity() {
    //
    if (currentWidth.width.endsWith("%")) { return "%" }
    //
    if (currentWidth.width.endsWith("px")) { return "px" }
    //
    if (currentWidth.maxWidth.endsWith("px")) { return "%" }
    //
    if (currentWidth.maxWidth.endsWith("%")) { return "px" }
    //
    return "%"
}

function adjustWidthSelectorsToWidthUnity() {
    //
    if (width_unity.value == "px") {
        //
        fillSelector(width_width, pxAuto)
        //
        fillSelector(width_maxWidth, pcNone)
    }
    else {
        //
        fillSelector(width_width, pcAuto)
        //
        fillSelector(width_maxWidth, pxNone)
    }
}

function widthUnityHasChanged() {
    //
    adjustWidthSelectorsToWidthUnity()
    //
    const pw = previousWidth
    //
    const pmw = previousMaxWidth
    //
    previousWidth = currentWidth.width
    //
    previousMaxWidth = currentWidth.maxWidth
    //
    currentWidth.width = pw
    //
    currentWidth.maxWidth = pmw
    //
    width_width.value = currentWidth.width
    //
    width_maxWidth.value = currentWidth.maxWidth
}

function setPageWidthDisableds(name) {
    //
    width_clone.disabled = (name == "**temporary**")
    //
    width_apply.disabled = (name != "**temporary**")
    //
    width_delete.disabled = (name == "**temporary**"  ||  name.startsWith("-")  ||  isWidthUsed(name))
    //
    const disabled = (name != "**temporary**")
    //
    width_unity.disabled = disabled
    //
    width_width.disabled = disabled
    //
    width_minWidth.disabled = disabled
    //
    width_maxWidth.disabled = disabled
    //
    width_screen.disabled = disabled
}

function cloneWidth() {
    //
    const name = "**temporary**"
    //
    dataWidths[name] = cloneObj(currentWidth)
    //
    showPageWidth(name)
}

function applyWidth() { // keeps **temporary**: some node may be using it
    //
    let name = currentWidth.width
    //
    name += " "
    //
    name += (currentWidth.minWidth == "0px") ? "_" : currentWidth.minWidth
    //
    name += " "
    //
    name += (currentWidth.maxWidth == "none") ? "_" : currentWidth.maxWidth
    //
    if (currentWidth.screen != 0) { name += " " + screenAsLetter(currentWidth.screen) }
    //
    dataWidths[name] = cloneObj(currentWidth)
    //
    showPageWidth(name)
    //
    replaceTemporaryInNodes("w:", name)
}

function deleteWidth() {
    //
    const name = width_widths.value
    //
    const msg = "Shall *DELETE* the width <b>" + name + "</b> ?"
    //
    safeConfirm(msg, function() { delete dataWidths[name]; showPageWidth() })
}


// ## file: pages-css/page-css2.js ##

function showUnusedClasses() {
    //
    const useds = allUsedRules()
    //
    let ss = ""
    //
    ss += findUnuseds("c")
    ss += findUnuseds("d")
    ss += findUnuseds("f")
    ss += findUnuseds("h")
    ss += findUnuseds("m")
    ss += findUnuseds("p")
    ss += findUnuseds("o")
    ss += findUnuseds("w")
    ss += findUnuseds("x")
    //
    ss = ss.trimLeft()
    //
    if (ss == "") { ss = "No unused classes were found." }
    //
    presentCss("unused classes", ss.trimLeft())
    //
    //
    function findUnuseds(prefix) {
        //
        let s = ""
        //
        const dict = dictByRuleKind(prefix)
        //
        for (const key of Object.keys(dict)) {
            //
            if (key.startsWith("-")  ||  key.endsWith("**")) { continue }
            //
            const rule = prefix + ":" + key
            //
            if (useds.includes(rule)) { continue }
            //
            if (prefix == "c") { if (useds.includes("b:" + key)) { continue } }
            //
            s += "\n    " + key
        }
        //
        if (s == "") { return s } else { return "\n\n" + titleForRule[prefix] + s }
    }
}

function showRedundantClasses() {
    //
    const kinds = "cdfhmpowx"
    //
    let s = ""
    //
    for (const kind of kinds) { s += redundantClassesIn(kind) }
    //
    if (s == "") { s = "No redundant classes were found." }
    //
    presentCss("redundant classes", s.trimLeft())
}

function redundantClassesIn(kind) {
    //
    const srcdict = dictByRuleKind(kind)
    //
    const keys = Object.keys(srcdict)
    //
    const values = [ ]
    //
    for (const key of keys) { values.push(JSON.stringify(srcdict[key])) }
    //
    const alreadyCaught = [ ] // indexes
    //
    let ss = ""
    //
    let baseIndex = -1
    //
    while (true) {
        //
        baseIndex += 1
        //
        if (baseIndex > values.length - 2) { break }
        //
        if (keys[baseIndex].endsWith("**")) { continue }
        //
        if (alreadyCaught.includes(baseIndex)) { continue }
        //
        const baseValue = values[baseIndex]
        //
        let s = ""
        //
        for (let n = baseIndex + 1; n < values.length; n++) {
        //
            if (keys[n].endsWith("**")) { continue }
            //
            if (baseValue != values[n]) { continue }
            //
            if (s == "") { s = "\n" + keys[baseIndex] }
            //
            s += " == " + keys[n]
            //
            alreadyCaught.push(n)
        }
        //
        if (s != "") { ss += "\n\n" + titleForRule[kind] + s }
    }
    //
    return ss
}

function replaceClass() {
    //
    const kinds = [ "b", "c", "d", "f", "h", "m", "o", "p", "w", "x" ]
    //
    const texts = [ ]
    //
    for (const kind of kinds) { texts.push(titleForRule[kind]) }
    //
    const options = {
        //
        "values": kinds,
        "texts": texts,
        "classname": ""
    }
    //
    customChoose("Choose the kind of class to be replaced in nodes.", replaceClass2, options)
}

function replaceClass2(kind) {
    //
    if (kind == null) { return }
    //
    const dict = dictByRuleKind(kind)
    //
    const names = Object.keys(dict)
    //
    let name1 = ""
    //
    let name2 = ""
    //
    const options = {
        //
        "values": names,
        "texts": names,
        "classname": ""
    }
    //
    customChoose("Choose the class to BE REPLACED in nodes.", getName1, options)
    //
    //
    function getName1(answer) {
        //
        if (answer == null) { return }
        //
        name1 = answer
        //
        customChoose("Choose the class that will REMAIN in nodes.", getName2, options)
    }
    //
    //
    function getName2(answer) {
        //
        if (answer == null) { return }
        //
        name2 = answer
        //
        if (name1 == name2) { customError("Aborting: the same class was chosen."); return }
        //
        renameRuleInNodes(kind + ":" + name1, kind + ":" + name2)
    }
}


// ## file: pages-css/page-font-init.js ##

const pageFont = createDiv("dn w320 tac")

const font_fonts = createSelector("w300", function() { showPageFont() }) // captures the event

const font_clone = createButton("clone", "w80 mr30", cloneFont)

const font_apply = createButton("apply", "w80 mr30", applyFont)

const font_delete = createButton("delete", "w80", deleteFont)

const font_family = createSelector("w300", function() { currentFont.family = this.value })

const font_weight = createSelector("w130", function() { currentFont.weight = this.value })

const font_size = createSelector("w130", function() { currentFont.size = this.value })

const font_italic = createHtmlElement("input")

const font_strike = createHtmlElement("input")

const font_screen = createSelector("w300", function() { currentFont.screen = parseInt(this.value) })

function initPageFont() {
    //
    fillSelector(font_family, fontFamilies)
    //
    fillSelector(font_weight, fontWeights)
    //
    fillSelector(font_size, fontSizes)
    //
    font_italic.type = "checkbox"
    //
    font_italic.onchange = function() { currentFont.italic = this.checked }
    //
    font_strike.type = "checkbox"
    //
    font_strike.onchange = function() { currentFont.strike = this.checked }
    //
    fillSelector(font_screen, allWidths, allScreens)
    //
    //
    mainDivision.appendChild(pageFont)
    //
    pageFont.appendChild(font_fonts)
    //
    pageFont.appendChild(createLabel("name", "mt3"))
    //
    appendBreak(pageFont, 2)
    //
    pageFont.appendChild(font_clone)
    //
    pageFont.appendChild(font_apply)
    //
    pageFont.appendChild(font_delete)
    //
    appendBreak(pageFont, 2)
    //
    const html = "Only <i>**temporary**</i> can be edited. Cannot delete <i>-class</i>, <i>**temporary**</i> or any class that is in use."
    //
    pageFont.appendChild(createLabel(html, "w300 mt10 taj"))
    //
    appendBreak(pageFont, 3)
    //
    pageFont.appendChild(font_family)
    //
    pageFont.appendChild(createLabel("font family", "mt3"))
    //
    appendBreak(pageFont, 2)
    //
    const left = createDiv("wa tac mr40")
    //
    pageFont.appendChild(left)
    //
    left.appendChild(font_weight)
    //
    appendBreak(left, 1)
    //
    left.appendChild(createLabel("font weight", "mt3"))
    //
    appendBreak(left, 2)
    //
    left.appendChild(font_italic)
    //
    left.appendChild(createLabel("&nbsp;&nbsp; italic"))
    //
    const right = createDiv("wa tac")
    //
    pageFont.appendChild(right)
    //
    right.appendChild(font_size)
    //
    appendBreak(right, 1)
    //
    right.appendChild(createLabel("font size", "mt3"))
    //
    appendBreak(right, 2)
    //
    right.appendChild(font_strike)
    //
    right.appendChild(createLabel("&nbsp;&nbsp; strike"))
    //
    //
    appendBreak(pageFont, 3)
    //
    pageFont.appendChild(font_screen)
    //
    pageFont.appendChild(createLabel("window inner width", "mt3"))
    //
    appendBreak(pageFont, 2)
    //
    const html2 = "The rules apply when the inner width of the browser window is the selected one or greater. Rules for larger windows may override them."
    //
    pageFont.appendChild(createLabel(html2, "taj w300"))
}


// ## file: pages-css/page-xrule-show.js ##

var currentXRule = null

function showPageXRule(favorite) {
    //
    showPage(pageXRule, bgColorCss)
    //
    h1return.onclick = function() { if (preferPageCss) { showPageCss() } else { showPageBody() } }
    //
    h1title.innerHTML = "X class&nbsp;"
    //
    const name = fillXRuleSelector(xrule_xrules, favorite)
    //
    currentXRule = dataXRules[name]
    //
    xrule_pure.value = currentXRule.pure
    //
    xrule_link.value = currentXRule.link
    //
    xrule_visited.value = currentXRule.visited
    //
    xrule_hover.value = currentXRule.hover
    //
    xrule_active.value = currentXRule.active
    //
    xrule_disabled.value = currentXRule.disabled
    //
    xrule_screen.value = currentXRule.screen
    //
    adjustTextAreaRows(xrule_pure)
    //
    adjustTextAreaRows(xrule_link)
    //
    adjustTextAreaRows(xrule_visited)
    //
    adjustTextAreaRows(xrule_hover)
    //
    adjustTextAreaRows(xrule_active)
    //
    adjustTextAreaRows(xrule_disabled)
    //
    setPageXRuleDisableds(name)
}

function setPageXRuleDisableds(name) {
    //
    xrule_clone.disabled = (name == "**temporary**")
    //
    xrule_rename.disabled = (name != "**temporary**")
    //
    xrule_delete.disabled = (name == "**temporary**"  ||  name.startsWith("-")  ||  isXRuleUsed(name))
    //
    const disabled = (name != "**temporary**")
    //
    xrule_pure.disabled = disabled
    //
    xrule_link.disabled = disabled
    //
    xrule_visited.disabled = disabled
    //
    xrule_hover.disabled = disabled
    //
    xrule_active.disabled = disabled
    //
    xrule_disabled.disabled = disabled
    //
    xrule_screen.disabled = disabled
}

function cloneXRule() {
    //
    const name = "**temporary**"
    //
    dataXRules[name] = cloneObj(currentXRule)
    //
    showPageXRule(name)
}

function renameXRule() {
    //
    namePrompt("Enter a name for the X class.", renameXRule2)
}

function renameXRule2(name) {
    //
    if (name == null) { return }
    //
    if (name == "") { customError("Name cannot be blank.", renameXRule); return }
    //
    if (dataXRules[name] != undefined) {
        //
        customError("This name is already used by an X class.", renameXRule); return
    }
    //
    dataXRules[name] = cloneObj(currentXRule)
    //
    showPageXRule(name)
    //
    replaceTemporaryInNodes("x:", name)
}

function deleteXRule() {
    //
    const name = xrule_xrules.value
    //
    const msg = "Shall *DELETE* the X class <b>" + name + "</b> ?"
    //
    safeConfirm(msg, function() { delete dataXRules[name]; showPageXRule() })
}


// ## file: pages-css/page-display-show.js ##

var currentDisplay = null

function showPageDisplay(favorite) {
    //
    showPage(pageDisplay, bgColorCss)
    //
    h1return.onclick = function() { if (preferPageCss) { showPageCss() } else { showPageBody() } }
    //
    h1title.innerHTML = "display&nbsp;"
    //
    const name = fillDisplaySelector(display_displays, favorite)
    //
    currentDisplay = dataDisplays[name]
    //
    display_display.value = currentDisplay.display
    //
    updateVisibilityOfDisplayAreas(currentDisplay.display)
    //
    display_textAlign.value = currentDisplay.textAlign
    //
    display_vertAlign.value = currentDisplay.vertAlign
    //
    display_flexWrap.value = currentDisplay.flexWrap
    //
    display_justCont.value = currentDisplay.justCont
    //
    display_alignItems.value = currentDisplay.alignItems
    //
    display_alignCont.value = currentDisplay.alignCont
    //
    display_rowGap.value = currentDisplay.rowGap
    //
    display_columnGap.value = currentDisplay.columnGap
    //
    display_alignSelf.value = currentDisplay.alignSelf
    //
    display_flexGrow.value = currentDisplay.flexGrow
    //
    display_screen.value = currentDisplay.screen
    //
    setPageDisplayDisableds(name)
}

function setPageDisplayDisableds(name) {
    //
    display_clone.disabled = (name == "**temporary**")
    //
    display_apply.disabled = (name != "**temporary**")
    //
    display_delete.disabled = (name == "**temporary**"  ||  name.startsWith("-")  ||  isDisplayUsed(name))
    //
    const disabled = (name != "**temporary**")
    //
    display_display.disabled = disabled
    //
    display_textAlign.disabled = disabled
    //
    display_vertAlign.disabled = disabled
    //
    display_flexWrap.disabled = disabled
    //
    display_justCont.disabled = disabled
    //
    display_alignItems.disabled = disabled
    //
    display_alignCont.disabled = disabled
    //
    display_rowGap.disabled = disabled
    //
    display_columnGap.disabled = disabled
    //
    display_alignSelf.disabled = disabled
    //
    display_flexGrow.disabled = disabled
    //
    display_screen.disabled = disabled
}

function displayKindHasChanged(display) {
    //
    currentDisplay.display = display
    //
    updateVisibilityOfDisplayAreas(display)
    //
    resetSomeDisplayFields(display)
    //
    showPageDisplay()
}

function updateVisibilityOfDisplayAreas(display) {
    //
    display_area_ib.style.display = "none"
    //
    display_area_fc.style.display = "none"
    //
    display_area_fi.style.display = "none"
    //
    if (display == "none") { return }
    //
    if (display == "inline-block") { display_area_ib.style.display = "inline-block"; return }
    //
    if (display == "flex row") { display_area_fc.style.display = "inline-block"; return }
    //
    if (display == "flex col") { display_area_fc.style.display = "inline-block"; return }
    //
    if (display == "flex item") { display_area_fi.style.display = "inline-block"; return }
}

function resetSomeDisplayFields(display) {
    //
    if (display == "none") {
        //
        resetDisplayInlineBlock()
        //
        resetDisplayFlexContainer()
        //
        resetDisplayFlexItem()
    }
    //
    else if (display == "inline-block") {
        //
        resetDisplayFlexContainer()
        //
        resetDisplayFlexItem()
    }
    //
    else if (display == "flex row" || display == "flex col") {
        //
        resetDisplayInlineBlock()
        //
        resetDisplayFlexItem()
    }
    //
    else if (display == "flex item") {
        //
        resetDisplayInlineBlock()
        //
        resetDisplayFlexContainer()
    }
}

function resetDisplayInlineBlock() {
    //
    currentDisplay.textAlign = "left"
    //
    currentDisplay.vertAlign = "top"
}

function resetDisplayFlexContainer() {
    //
    currentDisplay.flexWrap = "wrap"
    //
    currentDisplay.justCont = "center"
    //
    currentDisplay.alignItems = "center"
    //
    currentDisplay.alignCont = "center"
    //
    currentDisplay.rowGap = "0px"
    //
    currentDisplay.rowColumn = "0px"
}

function resetDisplayFlexItem() {
    //
    currentDisplay.alignSelf = "auto"
    //
    currentDisplay.flexGrow = 0
}

function cloneDisplay() {
    //
    const name = "**temporary**"
    //
    dataDisplays[name] = cloneObj(currentDisplay)
    //
    showPageDisplay(name)
}

function applyDisplay() {// keeps **temporary**: some node may be using it
    //
    let name = baseNameForDisplay(display_display.value)
    //
    if (currentDisplay.screen != 0) { name += " " + screenAsLetter(currentDisplay.screen) }
    //
    dataDisplays[name] = cloneObj(currentDisplay)
    //
    showPageDisplay(name)
    //
    replaceTemporaryInNodes("d:", name)
}

function baseNameForDisplay(display) {
    //
    if (display == "none") { return "none" }
    //
    if (display == "inline-block") { return "inline-block " + currentDisplay.textAlign + " " + currentDisplay.vertAlign }
    //
    if (display == "flex item") { return "flexitem " + currentDisplay.alignSelf + " " + currentDisplay.flexGrow }
    //
    //
    let s = currentDisplay.display.replace(" ", "") + " "
    //
    s += shortcut(currentDisplay.flexWrap) + " "
    //
    s += shortcut(currentDisplay.justCont) + " "
    //
    s += shortcut(currentDisplay.alignItems) + " "
    //
    s += shortcut(currentDisplay.alignCont) + " "
    //
    s += currentDisplay.rowGap + " "
    //
    s += currentDisplay.columnGap
    //
    return s
    //
    //
    function shortcut(key) {
        //
        const dict = {
            //
            "wrap": "w",
            "no wrap": "no",
            "center": "c",
            "flex-start": "fs",
            "flex-end": "fe",
            "space-between": "sb",
            "space-around": "sa",
            "space-evenly": "se",
            "baseline": "b",
            "stretch": "s"
        }
        //
        return dict[key]
    }
}

function deleteDisplay() {
    //
    const name = display_displays.value
    //
    const msg = "Shall *DELETE* the display <b>" + name + "</b> ?"
    //
    safeConfirm(msg, function() { delete dataDisplays[name]; showPageDisplay() })
}

// ## file: result/preview.js ##

const chessUrl = '"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/bAEMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIADIAMgMBEQACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAABwUIBAn/xAAgEAABBAAHAQAAAAAAAAAAAAAAAgMEBQEVNVV1lLTT/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAEDBP/EAB4RAQEAAAcBAQAAAAAAAAAAAAABAhExUXGRsSFB/9oADAMBAAIRAxEAPwD7sHQ5wABfqbR6rjYPlaMMWt5vrfDpOJ40iKAAObzoc4AAv1No9VxsHytGGLW831vh0nE8aRFAAHN50OcAAX6m0eq42D5WjDFreb63w6TieNIigADNyan2qt6MX5Fzu97qZTadQyan2qt6MX5DO73umU2nUMmp9qrejF+Qzu97plNp1Ehs7OyjWVhHj2E5iOxOlssMMy32mWWWn3ENNNNIcShtptCUobbQlKUJTglOGGGGGBrJLJnJfk/GVtluVs+39eHObjdbLvSvqXKbTqJnd73TObjdbLvSvqMptOoZ3e90zm43Wy70r6jKbTqGd3vdX4wbgACA3OsWvJTvU6b4dJxPGGLW831mlQAAdIHO6AABAbnWLXkp3qdN8Ok4njDFreb6zSoAAOkDndAAAgNzrFryU71Om+HScTxhi1vN9ZpUAAH/2Q=="'

var newtabScrollY = 0

function preview() {
    //
    try {
        //
        previewCore()
    }
    catch (e) {
        //
        corrupted(e); return
    }
}

function previewCore() {
    //
    const newtab = window.open()
    //
    const width = parseInt(preview_screen.value)
    //
    const html = createHtml(width)
    //
    newtab.document.documentElement.innerHTML = html
    //
    newtab.document.title = width + "px Preview"
    //
    newtab.scrollTo(0, newtabScrollY)
    //
    newtab.onscroll = function () { newtabScrollY = newtab.scrollY }
    //
    newtab.document.onkeydown = function (e) { if (e.key == " "  ||  e.key == "Escape") { newtab.close() } }
    //
    const delay = parseInt(preview_delay.value)
    //
    if (isNaN(delay)) { return }
    //
    setTimeout(function() { newtab.close() }, delay * 1000)
}


// ## file: result/template.js ##

const templatePreview =
`
        /* preview */
        html {
            background-image: url(@chessUrl@);
            background-repeat: repeat;
            background-position: center top;
        }
        body {
            width: @width@px;
            height: 100vh;
            background-color: white;
        }`

const templateCssReset =
`
        /** reset **/
        :root {
            font-size: 16px;
        }
        html, body, body * {
            border: 0;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: sans-serif;
            vertical-align: top;
        }
        body {
            margin: 0 auto;
        }
        div, hr, h1, h2, h3, h4, h5, h6 {
            display: inline-block;
            width: 100%;
            overflow: auto;
            text-align: left;
        }
        span, a, p, img, label, button, input {
            overflow: hidden;
            display: inline-block;
        }
        textarea {
            resize: none;
        }
        button, select, textarea, input {
            padding: 5px;
            outline: none;
            font-size: 16px;
            font-weight: 500;
            color: black;
            background-color: white;
        }
        button {
            padding: 5px 0;
            width: 130px;
            border-radius: 3px;
            border: 1px solid grey;
            background-color: rgb(245,245,235);
        }
        button:hover {
            background-color: rgb(230,230,230);
        }
        button:active {
            border: 1px solid black;
            color: lightgrey;
            background-color: grey;
        }
        button:disabled {
            border: 1px solid rgb(80,80,80);
            color: rgb(100,100,100);
            background-color: rgb(190,190,190);
        }
        /** webpage **/`

const templateCssRule =
`
        .@alias@ { /* @name@ */
            @data@
        }`

const templateCssDisplayNone =
`
        .@alias@ { /* @name@ */
            display: none;
        }`

const templateCssDisplayInlineBlock =
`
        .@alias@ { /* @name@ */
            display: inline-block;
            text-align: @textAlign@;
            vertical-align: @verticalAlign@;
        }`

const templateCssDisplayFlexContainer =
`
        .@alias@ { /* @name@ */
            display: flex;
            flex-direction: @flexDirection@;
            flex-wrap: @flexWrap@;
            justify-content: @justCont@;
            align-items: @alignItems@;
            align-content: @alignCont@;
            row-gap: @rowGap@;
            column-gap: @columnGap@;
        }`

const templateCssDisplayFlexItem =
`
        .@alias@ { /* @name@ */
            align-self: @alignSelf@;
            flex-grow: @flexGrow@;
        }`

const templateCssFont =
`
        .@alias@ { /* @name@ */
            font-family: @fontFamily@;
            font-weight: @fontWeight@;
            font-size: @fontSize@;
            font-style: @fontStyle@;
            text-decoration: @textDecoration@;
        }`

const templateCssHeight =
`
        .@alias@ { /* @name@ */
            height: @height@;
            min-height: @minHeight@;
            max-height: @maxHeight@;
        }`

const templateCssMargin =
`
        .@alias@ { /* @name@ */
            margin: @value@;
        }`

const templateCssPadding =
`
        .@alias@ { /* @name@ */
            padding: @value@;
        }`

const templateCssOverflow =
`
        .@alias@ { /* @name@ */
            overflow-x: @overflowX@;
            overflow-y: @overflowY@;
        }`

const templateCssWidth =
`
        .@alias@ { /* @name@ */
            width: @width@;
            min-width: @minWidth@;
            max-width: @maxWidth@;
        }`

const templateCssRulesByScreenOuter =
`
        @media (min-width: @minWidth@px) {@innerRules@
        }`

const templateCssKeyframe =
`
        @keyframes @name@ {
            @data@
        }`

const whatsappSet1 = // without starting <a

` target="_blank" href="https://web.whatsapp.com/send?phone=@phoneNumber@&text=@message@">`

const whatsappSet2 = // without  ending >

`    <svg height="100%" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;" viewBox="0 0 24 24" width="100%"><rect height="24" style="fill:none;" width="24" x="0" y="0"></rect><g><g><path d="M4.018,17.048c-0.96,-1.484 -1.518,-3.253 -1.518,-5.151c0,-5.243 4.257,-9.5 9.5,-9.5c5.243,0 9.5,4.257 9.5,9.5c0,5.243 -4.257,9.5 -9.5,9.5c-1.777,0 -3.44,-0.489 -4.863,-1.339l-4.637,1.545l1.518,-4.555Z" style="fill:#f3f3f3;"></path><path d="M5.795,16.304c-0.886,-1.244 -1.407,-2.765 -1.407,-4.407c0,-4.201 3.411,-7.612 7.612,-7.612c4.201,0 7.612,3.411 7.612,7.612c0,4.201 -3.411,7.611 -7.612,7.611c-1.59,0 -3.066,-0.488 -4.288,-1.323l-2.862,0.954l0.945,-2.835Z" style="fill:#00a82d;"></path></g><path d="M9.714,13.873c-1.124,-1.374 -1.874,-3.056 -2.109,-4.88c-0.063,-0.508 0.106,-1.018 0.461,-1.387c0.355,-0.369 0.858,-0.558 1.368,-0.515l0.049,0.005c0,0 0.561,0.15 0.868,0.233c0.122,0.033 0.219,0.124 0.26,0.243c0.138,0.41 0.464,1.373 0.618,1.826c0.05,0.147 0.004,0.31 -0.114,0.41c-0.233,0.196 -0.618,0.52 -0.858,0.723c-0.129,0.109 -0.17,0.29 -0.1,0.443c0.279,0.608 0.635,1.176 1.057,1.69c0.434,0.502 0.933,0.949 1.485,1.327c0.14,0.095 0.325,0.085 0.454,-0.024c0.241,-0.202 0.626,-0.526 0.858,-0.722c0.119,-0.1 0.287,-0.117 0.424,-0.043c0.42,0.228 1.314,0.712 1.694,0.918c0.111,0.06 0.185,0.172 0.196,0.297c0.029,0.317 0.083,0.895 0.083,0.895l-0.004,0.049c-0.044,0.51 -0.315,0.974 -0.739,1.261c-0.424,0.288 -0.955,0.368 -1.445,0.22c-1.772,-0.545 -3.313,-1.581 -4.479,-2.937l-0.027,-0.032Z" style="fill:#f3f3f3;"></path></g></svg>
</a`

const templateCssKeyframeSpin =

`  0% { transform: rotate(360deg); }
100% { transform: rotate(0deg); }`

const templateCssKeyframeBounce =

`35% { transform: scale(1); }
45% { transform: scale(1.5); }
55% { transform: scale(1); }
65% { transform: scale(1.3); }
75% { transform: scale(1); }`


// ## file: result/html-and-used-rules.js ##

var previewWidth = null

var ruleAlias = { } // "my-color": "c3"

var usedRulesByKind = { } // "b": [ "b:-white",... ]

function createHtml(width) {
    //
    previewWidth = width || null
    //
    udpateUsedCss()
    //
    return createHtmlHead() + createHtmlBody() + "\n</html>"
}

function udpateUsedCss() {
    //
    ruleAlias = { }
    //
    usedRulesByKind = { }
    //
    cssWalkNodes([webpage.body]) // reads used rules
    //
    sortAndAliasUsedRules()
}

function cssWalkNodes(nodes) {
    //
    for (const node of nodes) { cssWalkNode(node) }
}

function cssWalkNode(node) {
    //
    if (node.rules) {
        //
        for (const rule of node.rules) { readNodeRule(rule) }
    }
    //
    if (node.children) { cssWalkNodes(node.children) }
}

function readNodeRule(rule) {
    //
    const kind = rule[0]
    //
    let list = usedRulesByKind[kind]
    //
    if (list == undefined) { list = [ ]; usedRulesByKind[kind] = list }
    //
    if (! list.includes(rule)) { list.push(rule) }
}

/////////////////////////////////////////////////////////////////////////////

function sortAndAliasUsedRules() {
    //
    const kinds = Object.keys(usedRulesByKind)
    //
    for (const kind of kinds) { sortAndAliasByKind(kind) }
}

function sortAndAliasByKind(kind) {
    //
    const list = usedRulesByKind[kind]
    //
    sortTheeseUsedRulesOfSameKind(list)
    //
    let n = 0
    //
    for (const rule of list) { n += 1; ruleAlias[rule] = kind + n }
}

function sortTheeseUsedRulesOfSameKind(list) {
    //
    let index = 0
    //
    while (true) {
        //
        if (index > list.length - 2) { return }
        //
        const current = list[index]
        //
        const next = list[index + 1]
        //
        if (orderIsOk(current, next)) { index += 1; continue }
        //
        list[index] = next
        //
        list[index + 1] = current
        //
        index = 0
    }
    //
    function orderIsOk(a, b) {
        //
        if (screenForRule(a) < screenForRule(b)) { return true }
        //
        if (screenForRule(a) > screenForRule(b)) { return false }
        //
        return a <= b // same screen width
    }
}


// ## file: result/head-less-style.js ##

function createHtmlHead() {
    //
    const s = "" +
    //
    createHeadStart() +
    //
    createHeadRemark() +
    //
    createHeadAfterRemark() +
    //
    createHeadTitle() +
    //
    createHeadDescription() +
    //
    createHeadViewport() +
    //
    createHeadFavicon() +
    //
    createHeadFontImport() +
    //
    createHeadFontFace() +
    //
    createHeadStyleOpen() +
    //
    createHeadCss() +
    //
    createHeadPreviewCss() +
    //
    createHeadStyleEnd() +
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
    "<!DOCTYPE html>\n" +
    "<!--  # This webpage was generated using Web As You Wish (www.webasyouwish.com) # -->"
}

function createHeadRemark() {
    //
    if (webpage.remark == "") { return "" }
    //
    return "\n<!-- " + webpage.remark + " -->"
}

function createHeadAfterRemark() {
    //
    return "" +
    //
    '\n<html lang="' + webpage.language + '">' +
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
    const value = webpage.favicon.trimRight()
    //
    if (value == "") { return "" }
    //
    return '\n    <link rel="icon" href="' + value + '">'
}

function createHeadFontImport() {
    //
    const value = webpage.fontImport.trimRight()
    //
    if (value == "") { return "" }
    //
    return "\n    <style>\n" + cleanIndent(value, 8) + "\n    </style>"
}

function createHeadFontFace() {
    //
    const value = webpage.fontFace.trimRight()
    //
    if (value == "") { return "" }
    //
    return "\n    <style>\n" + indentFontFace(value, 8) + "\n    </style>"
}

function createHeadStyleOpen() {
    //
    return "\n    <style>"
}

function createHeadPreviewCss() {
    //
    if (! previewWidth) { return "" }
    //
    return templatePreview.replace("@chessUrl@", chessUrl).replace("@width@", previewWidth)
}

function createHeadStyleEnd() {
    //
    return "\n    </style>"
}

function createHeadAnalytics() {
    //
    const value = webpage.analytics.trimRight()
    //
    if (value == "") { return "" }
    //
    return "\n    <script>\n" + cleanIndent(value, 8) + "\n    <" + "/script>"
}

function createHeadEnd() {
    //
    return "\n</head>"
}


// ## file: result/style1.js ##

// code for preview cannot write media query because the preview
// simulates the window inner width (and the browser doesn't simulate);
// the solution is simply skipping media query and writing directly the
// classes that apply to the chosen width

var usedRulesByWidth = { }

function createHeadCss() {
    //
    return templateCssReset + createHeadKeyframes() + createHeadCssRulesByWidth()
}

function createHeadKeyframes() {
    //
    const names = Object.keys(dataKeyframes)
    //
    let s = ""
    //
    for (const name of names) {
        //
        if (name == "**temporary**") { continue } // keyframes have no alias!
        //
        let data = dataKeyframes[name].data
        //
        data = cleanIndent(data, 12).trimLeft()
        //
        s += templateCssKeyframe.replace("@data@", data).replace("@name@", name)
    }
    //
    return s
}

function createHeadCssRulesByWidth() {
    //
    updateUsedRulesByWidth()
    //
    let s = ""
    //
    for (const width of allWidths) {
        //
        const list = (usedRulesByWidth["" + width])
        //
        if (list) { s += createHeadCssRulesForWidth(width, list) }
     }
    //
    return s
}

function updateUsedRulesByWidth() {
    //
    usedRulesByWidth = { }
    //
    const kinds = Object.keys(usedRulesByKind)
    //
    for (const kind of kinds) {
        //
        const rules = usedRulesByKind[kind]
        //
        updateUsedRulesByWidthThisKind(rules)
    }
}

function updateUsedRulesByWidthThisKind(rules) {
    //
    for (const rule of rules) {
        //
        const width = screenForRule(rule)
        //
        const key = "" + width
        //
        if (usedRulesByWidth[key] == undefined) { usedRulesByWidth[key] = [ ] }
        //
        usedRulesByWidth[key].push(rule)
    }
}

function createHeadCssRulesForWidth(width, list) {
    //
    simpleSort(list) // necessary?
    //
    let isMediaQuery = (width > 0)
    //
    if (previewWidth != null) {
        //
        if (width > previewWidth) { return "" }
        //
        isMediaQuery = false
    }
    //
    let sInners = ""
    //
    for (const rule of list) { sInners += createHeadCssRule(rule, isMediaQuery) }
    //
    if (! isMediaQuery) { return sInners }
    //
    const sOuter = templateCssRulesByScreenOuter.replace("@minWidth@", width)
    //
    return sOuter.replace("@innerRules@", sInners)
}

function createHeadCssRule(rule, shallIndent) {
    //
    const kind = rule[0]
    //
    const name = rule.substr(2)
    //
    let s = createHeadCssRuleCore(kind, name)
    //
    if (shallIndent) { return justIndent(s, 4) }
    //
    return s
}

function createHeadCssRuleCore(kind, name) {
    //
    if (kind == "b") { return createHeadCssRuleBgColor(name) }
    //
    if (kind == "c") { return createHeadCssRuleColor(name) }
    //
    if (kind == "d") { return createHeadCssRuleDisplay(name) }
    //
    if (kind == "f") { return createHeadCssRuleFont(name) }
    //
    if (kind == "h") { return createHeadCssRuleHeight(name) }
    //
    if (kind == "m") { return createHeadCssRuleMargin(name) }
    //
    if (kind == "p") { return createHeadCssRulePadding(name) }
    //
    if (kind == "o") { return createHeadCssRuleOverflow(name) }
    //
    if (kind == "w") { return createHeadCssRuleWidth(name) }
    //
    if (kind == "x") { return createHeadCssRuleXClass(name) }
}


// ## file: result/body1.js ##

function createHtmlBody() {
    //
    const body = createBodyContent()
    //
    const files = createBodyScriptsFiles()
    //
    const n = body.lastIndexOf("\n</body>")
    //
    return body.substr(0, n) + files + "\n</body>"
}

function createBodyScriptsFiles() {
    //
    if (previewWidth) { return "" }
    //
    let res = ""
    //
    const lines = webpage.bodyJsFiles.split("\n")
    //
    for (const rawline of lines) {
        //
        const line = rawline.trim()
        //
        if (line == "") { continue }
        //
        res += '\n    <script src="' + line + '"><' + "/script>"
    }
    //
    return res
}

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


// ## file: result/body3.js ##

function nodeTag(node) {
    //
    if (node.type == "frame") {
        //
        if (["header", "main", "nav", "section", "footer"].includes(node.name)) { return node.name }
        //
        return "div"
    }
    //
    if (node.type == "whatsapp") { return "a" }
    //
    return node.type // tag name
}

function nodeId(node) {
    //
    if (node.name != "") { return ' id="' + node.name + '"' } else { return "" }
}

function nodeClass(node) {
    //
    if (! node.rules) { return "" }
    //
    if (node.rules.length == 0) { return "" }
    //
    const list = [ ]
    //
    for (const rule of node.rules) { list.push(ruleAlias[rule]) }
    //
    simpleSort(list)
    //
    return ' class="' + list.join(" ") + '"'
}

function nodeExtra(node) {
    //
    if (node.type == "a") {
        //
        let a = ' href="' + node.href + '"'
        //
        if (node.newtab) { a += ' target="_blank"' }
        //
        return a
    }
    //
    if (node.type == "button") {
        //
        return (node.onclick) ? ' onclick="' + node.onclick + '"' : ""
    }
    //
    if (node.type == "img") {
        //
        const src = (previewWidth == null) ? node.src : node.previewSrc
        //
        let i = ' src="' + src + '" alt="' + node.alt + '"'
        //
        if (node.title) { i += ' title="' + node.title + '"' }
        //
        return i
    }
    //
    return ""
}

function remarkAsString(node) {
    //
    return  "\n    <!-- \n" + justIndent(node.text, 9) + "\n    -->"
}

function whatsappAsString(start, tag, end) {
    //
    const encoded = encodeURIComponent(tag.node.message)
    //
    const s1 = whatsappSet1.replace("@phoneNumber@", tag.node.number).replace("@message@", encoded)
    //
    const n = 4 * (tag.indentation)
    //
    const s2 = "\n" + justIndent(whatsappSet2, n)
    //
    return start + s1 + s2 + end
}


// ## file: result/style2.js ##

function createHeadCssRuleBgColor(name) {
    //
    const alias = ruleAlias["b:" + name]
    //
    const value = dataColors[name]
    //
    const s = templateCssRule.replace("@alias@", alias).replace("@name@", name)
    //
    return s.replace("@data@", "background-color: " + value + ";")
}

function createHeadCssRuleColor(name) {
    //
    const alias = ruleAlias["c:" + name]
    //
    const value = dataColors[name]
    //
    const s = templateCssRule.replace("@alias@", alias).replace("@name@", name)
    //
    return s.replace("@data@", "color: " + value + ";")
}

function createHeadCssRuleFont(name) {
    //
    const obj = dataFonts[name]
    //
    let s = templateCssFont
    //
    s = s.replace("@alias@", ruleAlias["f:" + name])
    //
    s = s.replace("@name@", name)
    //
    s = s.replace("@fontFamily@", obj.family)
    //
    s = s.replace("@fontWeight@", obj.weight)
    //
    s = s.replace("@fontSize@", obj.size)
    //
    s = s.replace("@fontStyle@", obj.italic ? "italic" : "normal")
    //
    s = s.replace("@textDecoration@", obj.strike ? "line-through" : "none")
    //
    return s
}

function createHeadCssRuleHeight(name) {
    //
    const obj = dataHeights[name]
    //
    let s = templateCssHeight
    //
    s = s.replace("@alias@", ruleAlias["h:" + name])
    //
    s = s.replace("@name@", name)
    //
    s = s.replace("@height@", obj.height)
    //
    s = s.replace("@minHeight@", obj.minHeight)
    //
    s = s.replace("@maxHeight@", obj.maxHeight)
    //
    return s
}

function createHeadCssRuleMargin(name) {
    //
    const obj = dataMargins[name]
    //
    let s = templateCssMargin
    //
    s = s.replace("@alias@", ruleAlias["m:" + name])
    //
    s = s.replace("@name@", name)
    //
    const value = obj.top + " " + obj.right + " " + obj.bottom + " " + obj.left
    //
    s = s.replace("@value@", value)
    //
    return s
}

function createHeadCssRulePadding(name) {
    //
    const obj = dataPaddings[name]
    //
    let s = templateCssPadding
    //
    s = s.replace("@alias@", ruleAlias["p:" + name])
    //
    s = s.replace("@name@", name)
    //
    const value = obj.top + " " + obj.right + " " + obj.bottom + " " + obj.left
    //
    s = s.replace("@value@", value)
    //
    return s
}

function createHeadCssRuleOverflow(name) {
    //
    const obj = dataOverflows[name]
    //
    let s = templateCssOverflow
    //
    s = s.replace("@alias@", ruleAlias["o:" + name])
    //
    s = s.replace("@name@", name)
    //
    s = s.replace("@overflowX@", obj.overflowX)
    //
    s = s.replace("@overflowY@", obj.overflowY)
    //
    return s
}

function createHeadCssRuleWidth(name) {
    //
    const obj = dataWidths[name]
    //
    let s = templateCssWidth
    //
    s = s.replace("@alias@", ruleAlias["w:" + name])
    //
    s = s.replace("@name@", name)
    //
    s = s.replace("@width@", obj.width)
    //
    s = s.replace("@minWidth@", obj.minWidth)
    //
    s = s.replace("@maxWidth@", obj.maxWidth)
    //
    return s
}

function createHeadCssRuleXClass(name) {
    //
    const alias = ruleAlias["x:" + name]
    //
    const obj = dataXRules[name]
    //
    let ss = ""
    //
    for (const item of ["pure", "link", "visited", "hover", "active", "disabled"]) {
        //
        const txt = obj[item]
        //
        if (! txt) { continue } // also skips ""
        //
        const tail = (item=="pure")  ?  "" : ":" + item
        //
        let s = templateCssRule.replace("@alias@", alias + tail)
        //
        s = s.replace("@name@", name)
        //
        const data = cleanIndent(txt, 12).trimLeft()
        //
        ss += s.replace("@data@", data)
    }
    //
    if (ss == "") { // -blank
        ss = templateCssRule.replace("@alias@", alias)
        ss = ss.replace("@name@", name)
        ss = ss.replace("@data@", "")
    }
    //
    return ss
}

function createHeadCssRuleDisplay(name) {
    //
    const obj = dataDisplays[name]
    //
    const alias = ruleAlias["d:" + name]
    //
    if (obj.display == "inline-block") { return createHeadCssRuleDisplayInlineBlock(name, alias, obj) }
    //
    if (obj.display == "flex row") { return createHeadCssRuleDisplayFlexContainer(name, alias, obj) }
    //
    if (obj.display == "flex col") { return createHeadCssRuleDisplayFlexContainer(name, alias, obj) }
    //
    if (obj.display == "flex item") { return createHeadCssRuleDisplayFlexItem(name, alias, obj) }
    //
    return createHeadCssRuleDisplayNone(name, alias)
}

function createHeadCssRuleDisplayNone(name, alias) {
    //
    let s = templateCssDisplayNone
    //
    return s.replace("@alias@", alias).replace("@name@", name)
}

function createHeadCssRuleDisplayInlineBlock(name, alias, obj) {
    //
    let s = templateCssDisplayInlineBlock
    //
    s = s.replace("@alias@", alias).replace("@name@", name)
    //
    s = s.replace("@textAlign@", obj.textAlign)
    //
    s = s.replace("@verticalAlign@", obj.vertAlign)
    //
    return s
}

function createHeadCssRuleDisplayFlexContainer(name, alias, obj) {
    //
    let s = templateCssDisplayFlexContainer
    //
    s = s.replace("@alias@", alias).replace("@name@", name)
    //
    s = s.replace("@flexDirection@", obj.display == "flex row" ? "row" : "column")
    //
    s = s.replace("@flexWrap@", obj.flexWrap)
    //
    s = s.replace("@justCont@", obj.justCont)
    //
    s = s.replace("@alignItems@", obj.alignItems)
    //
    s = s.replace("@alignCont@", obj.alignCont)
    //
    s = s.replace("@rowGap@", obj.rowGap)
    //
    s = s.replace("@columnGap@", obj.columnGap)
    //
    return s
}

function createHeadCssRuleDisplayFlexItem(name, alias, obj) {
    //
    let s = templateCssDisplayFlexItem
    //
    s = s.replace("@alias@", alias).replace("@name@", name)
    //
    s = s.replace("@alignSelf@", obj.alignSelf)
    //
    s = s.replace("@flexGrow@", obj.flexGrow)
    //
    return s
}


// ## file: result/body2.js ##

// the text tag is a pseudo tag

// some elements (like button) are treated like void elements, but they are not

var closeTagMissesTail = false

function createTag(node, kind, indentation) {
    //
    return {
        //
        "node": node,
        "kind": kind,    // text, void, open, close
        "indentation": indentation // number of whitespaces
    }
}

function createBodyContent() {
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
    if (node.type == "text") {
        //
        const pseudoTag = createTag(node, "text", indentation)
        //
        tags.push(pseudoTag)
        //
        return
    }
    //
    if (! node.children) {
        //
        const voidTag = createTag(node, "void", indentation)
        //
        tags.push(voidTag)
        //
        return
    }
    //
    // children list exists:
    //
    const openTag = createTag(node, "open", indentation)
    //
    tags.push(openTag)
    //
    //
    bodyWalkNodes(tags, node.children, indentation + 1)
    //
    //
    const closeTag = createTag(node, "close", indentation)
    //
    tags.push(closeTag)
}

function tagsAsString(tags) {
    //
    let s = ""
    //
    let index = -1
    //
    for (const tag of tags) {
        //
        index += 1
        //
        if (tag.kind == "void")  { s += tagVoidAsString(tag, tags, index); continue }
        //
        if (tag.kind == "open")  { s += tagOpenAsString(tag); continue }
        //
        if (tag.kind == "close") { s += tagCloseAsString(tag, tags, index); continue }
        //
        s += pseudoTagAsString(tag)
    }
    //
    return s
}

function pseudoTagAsString(tag) {
    //
    const txt = textToHtml(tag.node.text)
    //
    return "\n" + justIndent(txt, 4 * tag.indentation)
}

function tagOpenAsString(tag) {
    //
    let s = ""
    //
    if (closeTagMissesTail) {
        //
        s = "\n" + " ".repeat(4 * tag.indentation - 1) + "><"
        //
        closeTagMissesTail = false
    }
    else {
        //
        s = "\n" + " ".repeat(4 * tag.indentation) + "<"
    }
    //
    const node = tag.node
    //
    s += nodeTag(node) + nodeId(node) + nodeClass(node) + nodeExtra(node) + ">"
    //
    return s
}

function tagCloseAsString(tag, tags, index) {
    //
    let s = "\n" + "    ".repeat(tag.indentation) + "</" + nodeTag(tag.node)
    //
    if (shallFinishCloseTag(tag, tags, index)) { s += ">" } else { closeTagMissesTail = true }
    //
    return s
}

function shallFinishCloseTag(tag, tags, index) {
    //
    const next = tags[index + 1]
    //
    if (next == undefined) { return true }
    //
    if (next.kind == "text") { return true }
    //
    if (next.node.type == "br") { return true }
    //
    if (next.node.type == "frame") { return true }
    //
    if (next.node.type == "remark") { return true }
    //
    return next.indentation != tag.indentation
}

function tagVoidAsString(tag, tags, index) {
    //
    const node = tag.node
    //
    if (node.type == "remark") { return remarkAsString(node) }
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
    s += nodeTag(node) + nodeId(node) + nodeClass(node) + nodeExtra(node)
    //
    if (node.type == "br") { return s + ">" + "<br>".repeat(node.count - 1) }
    //
    //
    let end = ""
    //
    if (shallFinishVoidTag(tag, tags, index)) { end = ">" } else { closeTagMissesTail = true }
    //
    //
    if (node.type == "button") { return s + ">" + node.innerHtml + "</button" + end }
    //
    if (node.type == "a") { return s + ">" + node.innerHtml + "</a" + end }
    //
    if (node.type == "whatsapp") { return whatsappAsString(s, tag, end) }
    //
    return s + end
}

function shallFinishVoidTag(tag, tags, index) {
    //
    return shallFinishCloseTag(tag, tags, index)
}


// ## file: pages-general/page-body-css.js ##

// about checks of conflicting rules:
// checking 2 background color rules is easy
// but checking conflict or not by screen width
// is hard because later the user can edit the
// screen width of some rule creating conflict

const css_frame = createDiv("css-frame")

const css_stage = createDiv("css-stage")

const css_attach = createButton("attach CSS class", "w130 fs12", attachCssClass)

function initBodyCss() {
    //
    pageBody.appendChild(css_frame)
    //
    css_frame.appendChild(css_stage)
    //
    appendBreak(css_frame, 2)
    //
    css_frame.appendChild(css_attach)
}

function updateBodyCss() {
    //
    try {
        //
        css_stage.innerHTML = ""
        //
        if (! currentNode.rules) { css_attach.disabled = true; return }
        //
        css_attach.disabled = false
        //
        for (const rule of currentNode.rules) { appendRuleBoxToCssStage(rule) }
    }
    catch (e) {
        //
        corrupted(e); return
    }
}

function attachCssClass() {
    //
    try {
        //
        if (currentNode.type == "body") { attachCssClass2([ "b", "c", "f" ]); return }
        //
        if (currentNode.type == "frame") { attachCssClass2([ "b", "c", "f", "p" ]); return }
        //
        attachCssClass2([ "b", "c", "d", "f", "h", "m", "o", "p", "w", "x" ])
    }
    catch (e) {
        //
        corrupted(e); return
    }
}

function attachCssClass2(kinds) {
    //
    const texts = [ ]
    //
    for (const kind of kinds) { texts.push(titleForRule[kind]) }
    //
    const options = {
        //
        "values": kinds,
        "texts": texts,
        "classname": ""
    }
    //
    customChoose("Choose the kind of CSS.", attachCssClass3, options)
}

function attachCssClass3(kind) {
    //
    if (kind == null) { return }
    //
    currentNode.rules.push(kind + ":**temporary**")
    //
    sortRulesByKind(currentNode.rules)
    //
    updateBodyCss()
}


// ## file: pages-general/page-body.js ##

const pageBody = createDiv("dn w wx1400 tac")

const body_spacer = createDiv("page-body-spacer")

function initPageBody() {
    //
    mainDivision.appendChild(pageBody)
    //
    initBodyTree()
    //
    pageBody.appendChild(body_spacer)
    //
    initBodyCss()
    //
    appendBreak(pageBody, 3)
    //
    pageBody.appendChild(createLabel("(click the red buttons in the node tree for further editing)", "w tac cgry"))
}

function showPageBody() {
    //
    preferPageCss = false
    //
    h1return.onclick = function() { showPageManager() }
    //
    h1title.innerHTML = "body&nbsp;"
    //
    showPage(pageBody, bgColorMain)
    //
    updateBodyTree()
    //
    updateBodyCss()
}


// ## file: pages-general/page-head.js ##

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

const analyticsPlaceholder =
`(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'XXXXXXX', 'auto');
ga('send', 'pageview');`


const fontImportPlaceholder =
`@import url('https://fonts.googleapis.com/css?family=Faster+One|Freckle+Face|Hanalei|Plaster|Press+Start+2P|Shojumaru|VT323&display=swap');`

const fontFacePlaceholder =
`@font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 200;
    src: url(https://fonts.gstatic.com/s/montserrat/v24/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}`

const pageHead = createDiv("dn w wx1000 shell")

const head_remark = createSimpleInput("", function() { webpage.remark = this.value }, "Optional remark (like copyright).")

const head_language = createSelector("wa wm80", function() { webpage.language = this.value })

const head_title = createSimpleInput("", function() { webpage.title = this.value }, "My Webpage")

const head_favicon = createSimpleInput("", function() { webpage.favicon = this.value }, "images/favicon.png")

const head_description = createTextArea("", function() { webpage.description = this.value }, "My cool stuff.")

const head_analytics = createTextArea("fs12", function() { webpage.analytics = this.value }, analyticsPlaceholder)

const head_fontImport = createTextArea("fs12", function() { webpage.fontImport = this.value }, fontImportPlaceholder)

const head_fontFace = createTextArea("fs12", function() { webpage.fontFace = this.value }, fontFacePlaceholder)

function initPageHead() {
    //
    mainDivision.appendChild(pageHead)
    //
    pageHead.appendChild(head_remark)
    //
    appendBreak(pageHead, 1)
    //
    pageHead.appendChild(createLabel("remark", "mt3"))
    //
    appendBreak(pageHead, 3)
    //
    pageHead.appendChild(head_language)
    //
    appendBreak(pageHead, 1)
    //
    pageHead.appendChild(createLabel("lang", "mt3"))
    //
    fillSelector(head_language, languages)
    //
    head_language.value = "en"
    //
    appendBreak(pageHead, 3)
    //
    pageHead.appendChild(head_title)
    //
    appendBreak(pageHead, 1)
    //
    pageHead.appendChild(createLabel("title", "mt3"))
    //
    appendBreak(pageHead, 3)
    //
    pageHead.appendChild(head_favicon)
    //
    appendBreak(pageHead, 1)
    //
    pageHead.appendChild(createLabel("favicon", "mt3"))
    //
    appendBreak(pageHead, 3)
    //
    pageHead.appendChild(head_description)
    //
    appendBreak(pageHead, 1)
    //
    pageHead.appendChild(createLabel("description", "mt3"))
    //
    head_description.rows = 3
    //
    appendBreak(pageHead, 3)
    //
    pageHead.appendChild(head_analytics)
    //
    appendBreak(pageHead, 1)
    //
    pageHead.appendChild(createLabel("analytics", "mt3"))
    //
    head_analytics.rows = 5
    //
    appendBreak(pageHead, 3)
    //
    pageHead.appendChild(head_fontImport)
    //
    appendBreak(pageHead, 1)
    //
    pageHead.appendChild(createLabel("custom fonts (@import)"))
    //
    head_fontImport.rows = 5
    //
    appendBreak(pageHead, 3)
    //
    pageHead.appendChild(head_fontFace)
    //
    appendBreak(pageHead, 1)
    //
    pageHead.appendChild(createLabel("custom fonts (@font-face)", "mt3"))
    //
    head_fontFace.rows = 8
    //
    appendBreak(pageHead, 3)
    //
    pageHead.appendChild(createLabel("The placeholders show how to fill the fields (without tags).", "taj"))
}

function showPageHead() {
    //
    showPage(pageHead, bgColorMain)
    //
    h1return.onclick = checkRemark
    //
    h1title.innerHTML = "head&nbsp;"
    //
    head_remark.value = webpage.remark
    //
    head_language.value = webpage.language
    //
    head_title.value = webpage.title
    //
    head_favicon.value = webpage.favicon
    //
    head_description.value = webpage.description
    //
    head_analytics.value = webpage.analytics
    //
    head_fontImport.value = webpage.fontImport
    //
    head_fontFace.value = webpage.fontFace
}

function checkRemark() {
    //
    const obj = head_remark
    //
    let fix = obj.value.trim()
    //
    while (fix.includes("-->")) { fix = fix.replace("-->", "-- >") }
    //
    if (obj.value == fix) { checkTitle(); return }
    //
    obj.value = fix
    //
    webpage.remark = fix
    //
    customAlert("Value of Remark was adjusted.")
}

function checkTitle() { // quotes inside title will be replaced later: wysiwyg
    //
    const obj = head_title
    //
    const fix = obj.value.trim()
    //
    if (obj.value == fix) { checkFavicon(); return }
    //
    obj.value = fix
    //
    webpage.title = fix
    //
    customAlert("Value of Title was adjusted.")
}

function checkFavicon() {
    //
    const obj = head_favicon
    //
    const fix = noTagReally(obj.value.trim()).split(" ").join("")
    //
    if (obj.value == fix) { checkDescription(); return }
    //
    obj.value = fix
    //
    webpage.favicon = fix
    //
    customAlert("Value of Favicon was adjusted.")
}

function checkDescription() {
    //
    const obj = head_description
    //
    const fix = noQuoteNoBreak(obj.value.trim())
    //
    if (obj.value == fix) { checkAnalytics(); return }
    //
    obj.value = fix
    //
    webpage.description = fix
    //
    customAlert("Value of Description was adjusted.")
}

function checkAnalytics() {
    //
    tagCheck(head_analytics.value.trim(), "<script>", "Analytics", checkAnalytics2)
}

function checkAnalytics2(fix) {
    //
    const obj = head_analytics
    //
    if (obj.value == fix) { checkFontImport(); return }
    //
    obj.value = fix
    //
    webpage.analytics = fix
    //
    customAlert("Value of Analytics was adjusted.")
}

function checkFontImport() {
    //
    tagCheck(head_fontImport.value.trim(), "<style>", "@import", checkFontImport2)
}

function checkFontImport2(fix) {
    //
    const obj = head_fontImport
    //
    if (obj.value == fix) { checkFontFace(); return }
    //
    obj.value = fix
    //
    webpage.fontImport = fix
    //
    customAlert("Value of @import was adjusted.")
}

function checkFontFace() {
    //
    tagCheck(head_fontFace.value.trim(), "<style>", "@font-face", checkFontFace2)
}

function checkFontFace2(fix) {
    //
    const obj = head_fontFace
    //
    if (obj.value == fix) { showPageManager(); return }
    //
    obj.value = fix
    //
    webpage.fontFace = fix
    //
    customAlert("Value of @font-face was adjusted.")
}

function tagCheck(trim, tag, name, callback) {
    //
    if (trim == "") { callback(""); return }
    //
    if (trim.includes(tag)) { customError(name + " must NOT include: " + noTag(tag) ); return }
    //
    const tag2 = tag.replace("<", "</")
    //
    if (trim.includes(tag2)) { customError(name + " must NOT include: " + noTag(tag2) ); return }
    //
    if (trim.split(" ").join("").includes("</")) { customError("Bad value for " + name); return }
    //
    callback(trim)
}


// ## file: pages-general/page-download.js ##

const pageDownload = createDiv("dn w wx400 shell tac")

const download_definition = createButton("download<br>definition", "pv8 mp20", downloadDefinition)

const download_webpage = createButton("download<br>webpage", "pv8 mp20", downloadWebpage)

const download_presentDefinition = createButton("present<br>definition", "pv8 mp20", presentDefinition)

const download_presentWebpage = createButton("present<br>webpage", "pv8 mp20", presentWebpage)

function initPageDownload() {
    //
    mainDivision.appendChild(pageDownload)
    //
    const flex1 = createDiv("flexrow w")
    //
    pageDownload.appendChild(flex1)
    //
    flex1.appendChild(download_definition)
    //
    flex1.appendChild(download_webpage)
    //
    appendBreak(pageDownload, 3)
    //
    const flex2 = createDiv("flexrow w wx400")
    //
    pageDownload.appendChild(flex2)
    //
    flex2.appendChild(download_presentDefinition)
    //
    flex2.appendChild(download_presentWebpage)
    //
    appendBreak(pageDownload, 3)
    //
    pageDownload.appendChild(createParagraph("Unsaved edits are included.<br>The download of the <b><i>definition</i></b> is your <b><i>backup</i></b> !", "fs14"))
}

function showPageDownload() {
    //
    showPage(pageDownload, bgColorMain)
    //
    h1return.onclick = function() { showPageManager() }
    //
    h1title.innerHTML = "download &amp; present&nbsp;"
}

function downloadWebpage() {
    //
    const used = anyUsedTemporaryRule(currentNode)
    //
    if (used) { customError("Cannot download: using **temporary** " + titleForRule[used[0]] + "."); return }
    //
    const link = document.querySelector("#download-webpage")
    //
    link.download = webpage.name + ".html"
    //
    try {
        link.href = convertTextToDataUrl(createHtml())
    }
    catch (e) {
        //
        corrupted(e); return
    }
    //
    link.click()
}

function downloadDefinition() {
    //
    const used = anyUsedTemporaryRule(currentNode)
    //
    if (used) { customError("Cannot download: using **temporary** " + titleForRule[used[0]] + "."); return }
    //
    const link = document.querySelector("#download-definition")
    //
    link.download = webpage.name + ".json"
    //
    const json = JSON.stringify(webpage)
    //
    link.href = convertTextToDataUrl(json)
    //
    link.click()
}


// ## file: pages-general/page-scripts.js ##

const pageScripts = createDiv("dn w wx600 shell")

const scripts_scripts = createTextArea("w hm120 script", function() { webpage.bodyJsFiles = this.value }, "code/example.js\ncode/example2.js")

function initPageScripts() {
    //
    mainDivision.appendChild(pageScripts)
    //
    pageScripts.appendChild(scripts_scripts)
    //
    appendBreak(pageScripts, 1)
    //
    pageScripts.appendChild(createLabel("just one path per line (without tags)", "w mt3 tac"))
}

function showPageScripts() {
    //
    showPage(pageScripts, bgColorMain)
    //
    h1return.onclick = function() { showPageBody() }
    //
    h1title.innerHTML = "scripts&nbsp;"
    //
    scripts_scripts.value = webpage.bodyJsFiles
}


// ## file: pages-general/page-preview.js ##

const pagePreview = createDiv("dn w320 shell tac")

var preview_screen = createSelector("w", null)

var preview_delay = createSelector("w130 tar", null)

function initPagePreview() {
    //
    fillSelector(preview_screen, allWidths.slice(1), allScreens.slice(1))
    //
    fillSelector(preview_delay, ["don't close"].concat(const100))
    //
    //
    mainDivision.appendChild(pagePreview, bgColorMain)
    //
    pagePreview.appendChild(preview_screen)
    //
    appendBreak(pagePreview, 1)
    //
    pagePreview.appendChild(createLabel("window inner width", "mt3"))
    //
    appendBreak(pagePreview, 4)
    //
    pagePreview.appendChild(createButton("show preview\nin other tab", "", function() { preview(false) }))
    //
    appendBreak(pagePreview, 4)
    //
    pagePreview.appendChild(preview_delay)
    //
    appendBreak(pagePreview, 1)
    //
    pagePreview.appendChild(createLabel("seconds before closing a preview tab", "mt3"))
    //
    appendBreak(pagePreview, 3)
    //
    pagePreview.appendChild(createLabel("Your browser must allow pop-up windows from <i>webasyouwish.com</i> .", "w taj"))
    //
    appendBreak(pagePreview, 2)
    //
    pagePreview.appendChild(createLabel("Don't refresh the resulting page: create another one instead.", "w taj"))
    //
    appendBreak(pagePreview, 2)
    //
    pagePreview.appendChild(createLabel("The chessboard as background appears only in the preview.", "w taj"))
    //
    appendBreak(pagePreview, 2)
    //
    pagePreview.appendChild(createLabel("In the sections with the preview button, pressing spacebar opens the preview tab.", "w taj"))
    //
    appendBreak(pagePreview, 2)
    //
    pagePreview.appendChild(createLabel("Pressing spacebar closes the preview tab.", "w taj"))
}

function showPagePreview() {
    //
    showPage(pagePreview, bgColorMain)
    //
    h1return.onclick = returnFromPagePreview
    //
    h1title.innerHTML = "preview&nbsp;"
}

function returnFromPagePreview() {
    //
    if (previousPage == pageCss) { showPageCss(); return }
    //
    if (previousPage == pageColor) { showPageColor(); return }
    //
    if (previousPage == pageDisplay) { showPageDisplay(); return }
    //
    if (previousPage == pageFont) { showPageFont(); return }
    //
    if (previousPage == pageHeight) { showPageHeight(); return }
    //
    if (previousPage == pageKeyframe) { showPageKeyframe(); return }
    //
    if (previousPage == pageMargin) { showPageMargin(); return }
    //
    if (previousPage == pagePadding) { showPagePadding(); return }
    //
    if (previousPage == pageOverflow) { showPageOverflow(); return }
    //
    if (previousPage == pageWidth) { showPageWidth(); return }
    //
    if (previousPage == pageXRule) { showPageXRule(); return }
    //
    if (previousPage == pageBreak) { showPageBreak(); return }
    //
    if (previousPage == pageImage) { showPageImage(); return }
    //
    if (previousPage == pageLink) { showPageLink(); return }
    //
    if (previousPage == pageText) { showPageText(); return }
    //
    showPageBody()
}


// ## file: pages-general/page-present.js ##

const pagePresent = createDiv("dn shell")

const present_content = createDiv("present-content")

function initPagePresent() {
    //
    mainDivision.appendChild(pagePresent)
    //
    pagePresent.appendChild(present_content)
}

function presentDefinition() {
    //
    showPage(pagePresent, bgColorMain)
    //
    h1return.onclick = function() { showPageDownload() }
    //
    h1title.innerHTML = "definition &nbsp;"
    //
    present_content.style.color = "firebrick"
    //
    present_content.style.whiteSpace = "normal"
    //
    present_content.innerText = jsonForPresent(JSON.stringify(webpage))
}

function presentWebpage() {
    //
    showPage(pagePresent, bgColorMain)
    //
    h1return.onclick = function() { showPageDownload() }
    //
    h1title.innerHTML = "code &nbsp;"
    //
    present_content.style.color = "darkgreen"
    //
    present_content.style.whiteSpace = "pre"
    //
    try {
        present_content.textContent = createHtml()
    }
    catch (e) {
        //
        corrupted(e); return
    }
}

function presentCss(title, content) {
    //
    showPage(pagePresent, bgColorCss)
    //
    h1return.onclick = function() { showPageCss() }
    //
    h1title.innerHTML = title + "&nbsp;"
    //
    present_content.style.color = "#222222"
    //
    present_content.style.whiteSpace = "pre"
    //
    present_content.textContent = content
}

function jsonForPresent(json) {
    //
    let s = ""
    //
    while (json != "") {
        //
        if (json.startsWith("\\n")) { s += "\\\\n"; json = json.substr(2); continue }
        //
        if (json.startsWith("\\'")) { s += "\\\\'"; json = json.substr(2); continue }
        //
        if (json.startsWith('\\"')) { s += '\\\\"'; json = json.substr(2); continue }
        //
        s += json[0]
        //
        json = json.substr(1)
    }
    //
    return s
}


// ## file: pages-general/page-manager-ops.js ##

function restoreWebpage() {
    //
    const msg = "Are you sure you want to RESTORE the webpage <b>" + webpage.name  + "</b> ?"
    //
    customConfirm(msg, selectWebpage, null)
}

function saveWebpage() {
    //
    const used = anyUsedTemporaryRule()
    //
    if (used) { customError("Cannot save: using **temporary** " + titleForRule[used[0]] + "."); return }
    //
    saveDefinitionInLocalStorage() // may fail
    //
    definitions[webpage.name] = JSON.stringify(webpage)
    //
    showPageManager()
}

/////////////////////////////////////////////////////////////////////

function deleteWebpage() {
    //
    const msg = "Are you sure you want to *DELETE* the webpage <b>" + webpage.name  + "</b> ?"
    //
    safeConfirm(msg, deleteWebpage2, null)
}

function deleteWebpage2() {
    //
    localStorage.removeItem("wayw-" + webpage.name)
    //
    delete definitions[webpage.name]
    //
    let index = namesOfWebpages.indexOf(webpage.name)
    //
    updateNamesOfWebpages()
    //
    if (index > namesOfWebpages.length - 1) { index = 0 }
    //
    const name = namesOfWebpages[index]
    //
    selectThisWebpage(name)
}

function saveWebpageAs() {
    //
    const used = anyUsedTemporaryRule()
    //
    if (used) { customError("Cannot save: using **temporary** " + titleForRule[used[0]] + "."); return }
    //
    const msg = "Enter name for the copy."
    //
    namePrompt(msg, saveWebpageAs2)
}

function saveWebpageAs2(name) {
    //
    if (! name) { return }
    //
    if (name == webpage.name) { customError("This is the current name.", saveWebpageAs); return }
    //
    if (definitions[name]) {
        //
        const msg = "The webpage <b>" + name + "</b> already exists. Are you sure you want to overwrite it?"
        //
        safeConfirm(msg, function() { saveWebpageAs3(name) }, null)
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
    saveDefinitionInLocalStorage() // may fail
    //
    definitions[name] = JSON.stringify(webpage)
    //
    updateNamesOfWebpages()
    //
    selectThisWebpage(name)
}

function loadWebpage() {
    //
    const msg = "Loading definition. Enter name for the new webpage."
    //
    namePrompt(msg, loadWebpage2)
}

function loadWebpage2(name) {
    //
    if (! name) { return }
    //
    if (definitions[name]) { customError("This name is already used by a webpage.", loadWebpage); return }
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
    if (file == undefined) { customAlert("Definition loading aborted."); return } // should not happen
    //
    const reader = new FileReader()
    //
    reader.onload = function (e) { loadWebpage4(name, e.target.result) }
    //
    reader.readAsText(file)
}

function loadWebpage4(name, json) {
    //
    const wp = parseJson(json)
    //
    if (wp == null) { customError("Content of loaded file is not a definition or is corrupted."); return }
    //
    wp.name = name // maybe different name
    //
    webpage = wp
    //
    definitions[name] = JSON.stringify(webpage)
    //
    updateNamesOfWebpages()
    //
    saveDefinitionInLocalStorage() // may fail
    //
    selectThisWebpage(name)
}


// ## file: pages-general/page-body-tree.js ##

const tree_frame = createDiv("tree-frame")

const tree_stage_outer = createDiv("tree-stage-outer")

const tree_stage = createDiv("tree-stage")

const tree_command = createDiv("flexrow")

const tree_create = createButton("create", "w80 mt20 mh10 fs12", createNode)

const tree_rename = createButton("rename", "w80 mt20 mh10 fs12", renameNode)

const tree_delete = createButton("delete", "w80 mt20 mh10 fs12", deleteNode)

const tree_cut = createButton("cut", "w80 mt20 mh10 fs12", cutNode)

const tree_copy = createButton("copy", "w80 mt20 mh10 fs12", copyNode)

const tree_paste = createButton("paste", "w80 mt20 mh10 fs12", pasteNode)

const tree_moveUp = createButton("move up", "w80 mt20 mh10 fs12", moveUpNode)

const tree_moveDown = createButton("move down", "w80 mt20 mh10 fs12", moveDownNode)

var stageDepth = 0

var stageMaxLeft = 0

var currentNode = null

var currentParent = null

function initBodyTree() {
    //
    pageBody.appendChild(tree_frame)
    //
    tree_frame.appendChild(tree_stage_outer)
    //
    tree_stage_outer.appendChild(tree_stage)
    //
    appendBreak(tree_frame, 1)
    //
    tree_frame.appendChild(tree_command)
    //
    tree_command.appendChild(tree_create)
    //
    tree_command.appendChild(tree_rename)
    //
    tree_command.appendChild(tree_delete)
    //
    tree_command.appendChild(tree_cut)
    //
    tree_command.appendChild(tree_copy)
    //
    tree_command.appendChild(tree_paste)
    //
    tree_command.appendChild(tree_moveUp)
    //
    tree_command.appendChild(tree_moveDown)
}

function updateBodyTree() {
    //
    try {
        //
        const scrollTop = tree_stage_outer.scrollTop
        //
        updateTreeStage()
        //
        tree_stage_outer.scroll({"top": scrollTop, "left": 0 }) // , "behavior": "smooth"})
        //
        currentParent = (currentNode == webpage.body) ? null : parentOfNode(currentNode)
        //
        updateTreeCommandButtons()
    }
    catch (e) {
        //
        corrupted(e); return
    }
}

function updateTreeStage() {
    //
    stageDepth = -1
    //
    stageMaxLeft = 0
    //
    tree_stage.innerHTML = ""
    //
    treeStageWalkNodes([webpage.body])
    //
    const width = stageMaxLeft + 180 // 180 -> button width + right padding + eventual
    //
    tree_stage.style.width = width + "px"
}

function treeStageWalkNodes(nodes) {
    //
    stageDepth += 1
    //
    for (const node of nodes) { treeStageWalkNode(node) }
    //
    stageDepth -= 1
}

function treeStageWalkNode(node) {
    //
    let html = node.type
    //
    if (node.type == "br"  &&  node.count != 1) { html += " x " + node.count }
    //
    if (node.name != "") { html += ": " + node.name }
    //
    function onclick() {
        //
        if (node != currentNode) {
            //
            currentNode = node; showPageBody()
        }
        else {
            treeButtonClicked()
        }
    }
    //
    const button = createButton(html, "tree-stage-button", onclick)
    //
    let left = 50 * stageDepth
    //
    button.style.marginLeft = left + "px"
    //
    if (left > stageMaxLeft) { stageMaxLeft = left }
    //
    tree_stage.appendChild(button)
    //
    appendBreak(tree_stage, 1)
    //
    if (node == currentNode) { highlightButton(button, node.type); button.focus() }
    //
    if (node.children) { treeStageWalkNodes(node.children) }
}

function highlightButton(button, type) {
    //
    let bgColor = "rgb(60,100,160)"
    //
    if (["a","body","button","br","img","link","remark","text","whatsapp"].includes(type)) { bgColor = "orangered" }
    //
    button.style.fontWeight = "bold"
    button.style.color = "white"
    button.style.backgroundColor = bgColor
}

function updateTreeCommandButtons() {
    //
    const isBody = (currentNode.type == "body")
    //
    tree_create.disabled = ! currentNode.children
    //
    tree_rename.disabled = isBody
    //
    tree_delete.disabled = isBody
    //
    tree_cut.disabled = isBody
    //
    tree_copy.disabled = isBody
    //
    tree_paste.disabled = ! mayPasteNode()
    //
    tree_moveUp.disabled = true
    //
    tree_moveDown.disabled = true
    //
    if (isBody) { return } // no currentParent
    //
    const index = currentParent.children.indexOf(currentNode)
    //
    if (index > 0) { tree_moveUp.disabled = false }
    //
    if (index < currentParent.children.length - 1) { tree_moveDown.disabled = false }
}

function mayPasteNode() {
    //
    if (transferNode == null) { return false }
    //
    if (! currentNode.children) { return false }
    //
    if (currentNode.type == "body") {
        //
        return (transferNode.type == "frame"  ||  transferNode.type == "remark")
    }
    //
    if (transferNode.type == "frame"  ||  transferNode.type == "remark") { return currentNode.type == "body" }
    //
    return true
}

function treeButtonClicked() {
    //
    if (currentNode.type == "a") { showPageLink(); return }
    //
    if (currentNode.type == "body") { showPageScripts(); return }
    //
    if (currentNode.type == "br") { showPageBreak(); return }
    //
    if (currentNode.type == "button") { showPageButton(); return }
    //
    if (currentNode.type == "img") { showPageImage(); return }
    //
    if (currentNode.type == "remark") { showPageRemark(); return }
    //
    if (currentNode.type == "text") { showPageText(); return }
    //
    if (currentNode.type == "whatsapp") { showPageWhatsApp(); return }
}


// ## file: pages-general/page-manager.js ##

const pageManager = createDiv("dn w320 tac")

const manager_webpages = createSelector("w300", selectWebpage)

const manager_head = createButton("head", "w80 pv8 mt10 mr30", function() { leavingPageManager(); showPageHead() })

const manager_css = createButton("CSS", "w80 pv8 mt10 mr30", function() { leavingPageManager(); showPageCss() })

const manager_body = createButton("body", "w80 pv8 mt10", function() { leavingPageManager(); showPageBody() })

const manager_save = createButton("save", "pv8 mt10 mr40", saveWebpage)

const manager_saveAs = createButton("save as", "pv8 mt10", saveWebpageAs)

const manager_restore = createButton("restore", "pv8 mt10 mr40", restoreWebpage)

const manager_delete = createButton("delete", "pv8 mt10", deleteWebpage)

const manager_load = createButton("load", "pv8 mt10 mr40", loadWebpage)

const manager_download = createButton("download", "pv8 mt10", function() { leavingPageManager(); showPageDownload() })

function initPageManager() {
    //
    mainDivision.appendChild(pageManager)
    //
    pageManager.appendChild(manager_webpages)
    //
    appendBreak(pageManager)
    //
    pageManager.appendChild(createLabel("webpage"))
    //
    appendBreak(pageManager, 2)
    //
    pageManager.appendChild(manager_head)
    //
    pageManager.appendChild(manager_css)
    //
    pageManager.appendChild(manager_body)
    //
    appendBreak(pageManager, 2)
    //
    pageManager.appendChild(manager_save)
    //
    pageManager.appendChild(manager_saveAs)
    //
    appendBreak(pageManager, 2)
    //
    pageManager.appendChild(manager_restore)
    //
    pageManager.appendChild(manager_delete)
    //
    appendBreak(pageManager, 2)
    //
    pageManager.appendChild(manager_load)
    //
    pageManager.appendChild(manager_download)
    //
    appendBreak(pageManager, 3)
    //
    pageManager.appendChild(createParagraph(
        //
        `Any &nbsp;<i><b>-example</b></i>&nbsp; cannot be saved using its name.
        <br><br>
        <b><i>Unsaved edits</i></b> lock the webpage selector and the load button.`,
        //
        "ph10"
    ))
}

function leavingPageManager() {
    //
    h1return.style.display = "inline-block"
    //
    document.querySelector("#webpage-name").style.display = "inline-block"
    //
    document.querySelector("#webpage-name").innerHTML = "# " + webpage.name + " #"
    //
    navigation.style.display = "none"
}

function showPageManager() {
    //
    showPage(pageManager, bgColorMain)
    //
    h1return.onclick = function() { } // for hotkey
    //
    h1return.style.display = "none"
    //
    h1title.innerHTML = "webpage&nbsp;"
    //
    document.querySelector("#webpage-name").style.display = "none"
    //
    navigation.style.display = "inline-flex"
    //
    //
    updateCssDataInDefinition()
    //
    //
    fillSelector(manager_webpages, namesOfWebpages)
    //
    manager_webpages.value = webpage.name
    //
    manager_delete.disabled = false
    //
    const edited = webpageIsEdited()
    //
    manager_webpages.disabled = edited
    manager_load.disabled = edited
    manager_save.disabled = ! edited
    manager_restore.disabled = ! edited
    //
    if (webpage.name.startsWith("-")) {
        //
        manager_save.disabled = true
        manager_delete.disabled = true
    }
}

function selectWebpage() {
    //
    const name = manager_webpages.value
    //
    selectThisWebpage(name)
}

function selectThisWebpage(name) {
    //
    webpage = parseJson(definitions[name])
    //
    resetCssData()
    //
    currentNode = webpage.body
    //
    showPageManager()
}


main()

