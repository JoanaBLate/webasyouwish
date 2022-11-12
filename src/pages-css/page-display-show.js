
"use strict"

var currentDisplay = null

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

function cloneDisplay() {
    //
    const name = "**temporary**"
    //
    dataDisplays[name] = cloneObj(currentDisplay)
    //
    showPageDisplay(name)
}

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

function deleteDisplay() {
    //
    const name = display_displays.value
    //
    const msg = "Shall *DELETE* the display <b>" + name + "</b> ?"
    //
    safeConfirm(msg, function() { delete dataDisplays[name]; showPageDisplay() })
}
