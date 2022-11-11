
"use strict"

const pageOverflow = createDiv("dn w320 tac") 

const overflow_overflows = createSelector("w300", function() { showPageOverflow() }) // captures the event

const overflow_clone = createButton("clone", "w80 mr30", cloneOverflow)

const overflow_apply = createButton("apply", "w80 mr30", applyOverflow)

const overflow_delete = createButton("delete", "w80", deleteOverflow)

const overflow_x = createSelector("w130 mr40", function() { currentOverflow.overflowX = this.value }) 

const overflow_y = createSelector("w130", function() { currentOverflow.overflowY = this.value }) 

var currentOverflow = null

///////////////////////////////////////////////////////////////////////////////

function initPageOverflow() {
    //
    fillSelector(overflow_x, overflowValues)
    //
    fillSelector(overflow_y, overflowValues)
    //
    //
    mainDivision.appendChild(pageOverflow)
    //
    pageOverflow.appendChild(overflow_overflows)
    //
    pageOverflow.appendChild(createLabel("name", "mt3"))
    //
    appendBreak(pageOverflow, 2)    
    //
    pageOverflow.appendChild(overflow_clone)
    //
    pageOverflow.appendChild(overflow_apply)
    //
    pageOverflow.appendChild(overflow_delete)
    //
    appendBreak(pageOverflow, 2)
    //
    const html = "Only <i>**temporary**</i> can be edited. Cannot delete <i>-class</i>, <i>**temporary**</i> or any class that is in use."
    //
    pageOverflow.appendChild(createLabel(html, "w300 mt10 taj"))
    //
    appendBreak(pageOverflow, 3)
    //
    pageOverflow.appendChild(overflow_x)
    //
    pageOverflow.appendChild(overflow_y)
    //
    appendBreak(pagePadding, 1)
    //
    pageOverflow.appendChild(createLabel("overflow x", "w130 mr40 tac"))
    //
    pageOverflow.appendChild(createLabel("overflow y", "w130 tac"))
}

///////////////////////////////////////////////////////////////////////////////

function showPageOverflow(favorite) {
    //
    showPage(pageOverflow, bgColorCss)
    //
    h1return.onclick = function() { if (preferPageCss) { showPageCss() } else { showPageBody() } }
    //
    h1title.innerHTML = "overflow&nbsp;"
    //
    const name = fillOverflowSelector(overflow_overflows, favorite)
    //
    currentOverflow = dataOverflows[name]
    //
    overflow_x.value = currentOverflow.overflowX
    //
    overflow_y.value = currentOverflow.overflowY
    //
    setPageOverflowDisableds(name)
}

///////////////////////////////////////////////////////////////////////////////

function setPageOverflowDisableds(name) {
    //
    overflow_clone.disabled = (name == "**temporary**")
    //
    overflow_apply.disabled = (name != "**temporary**")
    //
    overflow_delete.disabled = (name == "**temporary**"  ||  name.startsWith("-")  ||  isOverflowUsed(name))
    //
    const disabled = (name != "**temporary**")
    //
    overflow_x.disabled = disabled
    //
    overflow_y.disabled = disabled
}

///////////////////////////////////////////////////////////////////////////////

function cloneOverflow() {
    //
    const name = "**temporary**"
    //
    dataOverflows[name] = cloneObj(currentOverflow)
    //
    showPageOverflow(name)
}

///////////////////////////////////////////////////////////////////////////////

function applyOverflow() { // keeps **temporary**: some node may be using it
    //
    let name = currentOverflow.overflowX + " " + currentOverflow.overflowY
    //
    dataOverflows[name] = cloneObj(currentOverflow)
    //
    showPageOverflow(name)
    //
    replaceTemporaryInNodes("o:", name)
}

///////////////////////////////////////////////////////////////////////////////

function deleteOverflow() {
    //
    const name = overflow_overflows.value
    //
    const msg = "Shall *DELETE* the overflow <b>" + name + "</b> ?"
    //
    safeConfirm(msg, function() { delete dataOverflows[name]; showPageOverflow() })
}

