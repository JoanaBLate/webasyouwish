
"use strict"

const pageButton = createDiv("dn w320 tac") 
                                                    
const button_text = createSimpleInput("w300", function() { currentNode.innerHtml = this.value })

const button_onclick = createSimpleInput("w300", function() { currentNode.onclick = this.value }, "console.log('click')")
                                   
///////////////////////////////////////////////////////////////////////////////

function initPageButton() {
    //
    mainDivision.appendChild(pageButton)
    //
    pageButton.appendChild(button_text)
    //
    appendBreak(pageButton, 1)
    //
    pageButton.appendChild(createLabel("text", "mt3"))
    //
    appendBreak(pageButton, 2)
    //
    pageButton.appendChild(button_onclick)
    //
    appendBreak(pageButton, 1)
    //
    pageButton.appendChild(createLabel("onclick (don't use double quote)", "mt3"))
}
  
///////////////////////////////////////////////////////////////////////////////

function showPageButton() {
    //
    showPage(pageButton, bgColorData)
    //
    h1return.onclick = function() { showPageBody() }
    //
    h1title.innerHTML = "button&nbsp;"
    //
    button_text.value = currentNode.innerHtml
    //
    button_onclick.value = currentNode.onclick
}

