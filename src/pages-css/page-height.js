
"use strict"

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

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

function cloneHeight() {
    //
    const name = "**temporary**"
    //
    dataHeights[name] = cloneObj(currentHeight)
    //
    showPageHeight(name)
}

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

function deleteHeight() {
    //
    const name = height_heights.value
    //
    const msg = "Shall *DELETE* the height <b>" + name + "</b> ?"
    //
    safeConfirm(msg, function() { delete dataHeights[name]; showPageHeight() })
}

