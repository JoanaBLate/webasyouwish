
"use strict"

// about checks of conflicting rules:
// checking 2 background color rules is easy
// but checking conflict or not by screen width
// is hard because later the user can edit the 
// screen width of some rule creating conflict

const css_frame = createDiv("css-frame")

const css_stage = createDiv("css-stage")

const css_attach = createButton("attach CSS class", "w130 fs12", attachCssClass)  

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

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

