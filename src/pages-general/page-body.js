
"use strict"

const pageBody = createDiv("dn w wx1400 tac")

const body_spacer = createDiv("page-body-spacer")

///////////////////////////////////////////////////////////////////////////////

function initPageBody() {
    //
    mainDivision.appendChild(pageBody)
    //
    initBodyTree()
    //
    pageBody.appendChild(body_spacer)
    //
    initBodyCss()
    //
    appendBreak(pageBody, 3)
    //
    pageBody.appendChild(createLabel("(click the red buttons in the node tree for further editing)", "w tac cgry"))
}

///////////////////////////////////////////////////////////////////////////////

function showPageBody() {
    //
    preferPageCss = false
    //
    h1return.onclick = function() { showPageManager() }
    //
    h1title.innerHTML = "body&nbsp;"
    //
    showPage(pageBody, bgColorMain)
    //
    updateBodyTree()
    //
    updateBodyCss()
}

