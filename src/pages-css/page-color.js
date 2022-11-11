
"use strict"

const pageColor = createDiv("dn w320 tac") 

const color_picker = createHtmlElement("input") // classname does not work

const color_colors = createSelector("w300", colorSelectorChanged) 

const color_clone = createButton("clone", "w80 mr30", cloneColor)

const color_apply = createButton("apply", "w80 mr30", applyColor)

const color_delete = createButton("delete", "w80", deleteColor)

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

function colorSelectorChanged() {
    //
    const name = color_colors.value
    //
    color_picker.value = dataColors[name]
    //
    showPageColor()
}

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

function deleteColor() {
    //
    const name = color_colors.value
    //
    const msg = "Shall *DELETE* the color <b>" + name + "</b> ?"
    //
    safeConfirm(msg, function() { delete dataColors[name]; showPageColor() })
}

