
"use strict"

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

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

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

