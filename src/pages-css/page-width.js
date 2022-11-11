
"use strict"

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

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

function cloneWidth() {
    //
    const name = "**temporary**"
    //
    dataWidths[name] = cloneObj(currentWidth)
    //
    showPageWidth(name)
}

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

function deleteWidth() {
    //
    const name = width_widths.value
    //
    const msg = "Shall *DELETE* the width <b>" + name + "</b> ?"
    //
    safeConfirm(msg, function() { delete dataWidths[name]; showPageWidth() })
}

