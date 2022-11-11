
"use strict"

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

///////////////////////////////////////////////////////////////////////////////

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

