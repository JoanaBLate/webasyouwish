
"use strict"

const pageBreak = createDiv("dn w wx600 shell tac") 
                                                    
const break_count = createSelector("w80", function() { currentNode.count=parseInt(this.value) })
                                   
///////////////////////////////////////////////////////////////////////////////

function initPageBreak() {
    //
    fillSelector(break_count, [1,2,3,4,5,6])
    //
    //
    mainDivision.appendChild(pageBreak)
    //
    pageBreak.appendChild(break_count)
    //
    appendBreak(pageBreak, 1)
    //
    pageBreak.appendChild(createLabel("number of line breaks", "mt3"))
}
  
///////////////////////////////////////////////////////////////////////////////

function showPageBreak() {
    //
    showPage(pageBreak, bgColorData)
    //
    h1return.onclick = function() { showPageBody() }
    //
    h1title.innerHTML = "line break&nbsp;"
    //
    break_count.value = currentNode.count
}

