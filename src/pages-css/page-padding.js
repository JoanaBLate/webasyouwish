
"use strict"

const pagePadding = createDiv("dn w320 tac") 

const padding_paddings = createSelector("w300", function() { showPagePadding() }) // captures the event

const padding_clone = createButton("clone", "w80 mr30", clonePadding)

const padding_apply = createButton("apply", "w80 mr30", applyPadding)

const padding_delete = createButton("delete", "w80", deletePadding)

const padding_top = createSelector("w130 mr40 tar", function() { currentPadding.top = this.value }) 

const padding_right = createSelector("w130 tar", function() { currentPadding.right = this.value }) 

const padding_bottom = createSelector("w130 mr40 tar", function() { currentPadding.bottom = this.value }) 

const padding_left = createSelector("w130 tar", function() { currentPadding.left = this.value }) 

const padding_screen = createSelector("w300", function() { currentPadding.screen = parseInt(this.value) })

var currentPadding = null

///////////////////////////////////////////////////////////////////////////////

function initPagePadding() {    
    //
    fillSelector(padding_top, px2000)    
    //
    fillSelector(padding_right, px2000)    
    //
    fillSelector(padding_bottom, px2000)    
    //
    fillSelector(padding_left, px2000)    
    //
    fillSelector(padding_screen, allWidths, allScreens)
    //
    //
    mainDivision.appendChild(pagePadding)
    //
    pagePadding.appendChild(padding_paddings)
    //
    pagePadding.appendChild(createLabel("name", "mt3"))
    //
    appendBreak(pagePadding, 2)
    //
    pagePadding.appendChild(padding_clone)
    //
    pagePadding.appendChild(padding_apply)
    //
    pagePadding.appendChild(padding_delete)
    //
    appendBreak(pagePadding, 2)
    //
    const html = "Only <i>**temporary**</i> can be edited. Cannot delete <i>-class</i>, <i>**temporary**</i> or any class that is in use."
    //
    pagePadding.appendChild(createLabel(html, "w300 mt10 taj"))
    //
    appendBreak(pagePadding, 3)
    //
    pagePadding.appendChild(padding_top)
    //
    pagePadding.appendChild(padding_right)
    //
    appendBreak(pagePadding, 1)
    //    
    pagePadding.appendChild(createLabel("top", "w130 mr40 tac"))
    //    
    pagePadding.appendChild(createLabel("right", "w130 tac"))
    //
    appendBreak(pagePadding, 2)
    //
    pagePadding.appendChild(padding_bottom)
    //
    pagePadding.appendChild(padding_left)
    //
    appendBreak(pagePadding, 1)
    //
    pagePadding.appendChild(createLabel("bottom", "w130 mr40 tac"))
    //    
    pagePadding.appendChild(createLabel("left", "w130 tac"))
    //
    appendBreak(pagePadding, 3)
    //
    pagePadding.appendChild(padding_screen)
    //
    pagePadding.appendChild(createLabel("window inner width", "mt3"))
    //
    appendBreak(pagePadding, 2)
    //
    const html2 = "The rules apply when the inner width of the browser window is the selected one or greater. Rules for larger windows may override them."
    //
    pagePadding.appendChild(createLabel(html2, "taj w300"))
}

///////////////////////////////////////////////////////////////////////////////

function showPagePadding(favorite) {
    //
    showPage(pagePadding, bgColorCss)
    //
    h1return.onclick = function() { if (preferPageCss) { showPageCss() } else { showPageBody() } }
    //
    h1title.innerHTML = "padding&nbsp;"
    //
    const name = fillPaddingSelector(padding_paddings, favorite)
    //
    currentPadding = dataPaddings[name]
    //
    padding_top.value = currentPadding.top
    //
    padding_right.value = currentPadding.right
    //
    padding_bottom.value = currentPadding.bottom
    //
    padding_left.value = currentPadding.left
    //
    padding_screen.value = currentPadding.screen
    //
    setPagePaddingDisableds(name)
    //
    replaceTemporaryInNodes("p:", name)
}

///////////////////////////////////////////////////////////////////////////////

function setPagePaddingDisableds(name) {
    //
    padding_clone.disabled = (name == "**temporary**")
    //
    padding_apply.disabled = (name != "**temporary**")
    //
    padding_delete.disabled = (name == "**temporary**"  ||  name.startsWith("-")  ||  isPaddingUsed(name))
    //
    const disabled = (name != "**temporary**")
    //
    padding_top.disabled = disabled
    //
    padding_right.disabled = disabled
    //
    padding_bottom.disabled = disabled
    //
    padding_left.disabled = disabled
    //
    padding_screen.disabled = disabled
}

///////////////////////////////////////////////////////////////////////////////

function clonePadding() {
    //
    const name = "**temporary**"
    //
    dataPaddings[name] = cloneObj(currentPadding)
    //
    showPagePadding(name)
}

///////////////////////////////////////////////////////////////////////////////

function applyPadding() { // keeps **temporary**: some node may be using it
    //
    let name = currentPadding.top + " " + currentPadding.right 
    //
    name += " " + currentPadding.bottom + " " + currentPadding.left 
    //
    if (currentPadding.screen != 0) { name += " " + screenAsLetter(currentPadding.screen) }
    //
    dataPaddings[name] = cloneObj(currentPadding)
    //
    showPagePadding(name)
}

///////////////////////////////////////////////////////////////////////////////

function deletePadding() {
    //
    const name = padding_paddings.value
    //
    const msg = "Shall *DELETE* the padding <b>" + name + "</b> ?"
    //
    safeConfirm(msg, function() { delete dataPaddings[name]; showPagePadding() })
}

