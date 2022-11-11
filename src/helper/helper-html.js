
"use strict"

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

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

function appendBreak(parent, _count) {
    //
    const count = _count || 1
    //
    for (let n = 0; n < count; n++) { parent.appendChild(document.createElement("br")) }
}

