
"use strict"

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

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

function createKeyframeObj(data) {
    //
    const obj = { "data": data }
    //
    Object.seal(obj)
    return obj
}

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

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

