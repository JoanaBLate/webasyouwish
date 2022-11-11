
"use strict"

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

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

function cloneMargin() {
    //
    const name = "**temporary**"
    //
    dataMargins[name] = cloneObj(currentMargin)
    //
    showPageMargin(name)
}

///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////

function deleteMargin() {
    //
    const name = margin_margins.value
    //
    const msg = "Shall *DELETE* the margin <b>" + name + "</b> ?"
    //
    safeConfirm(msg, function() { delete dataMargins[name]; showPageMargin() })
}

