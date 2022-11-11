
"use strict"

const pageRemark = createDiv("dn w wx600 shell tac") 
                                                    
const remark_remark = createTextArea("", function() { currentNode.text = this.value }, "# This is my remark! #")
                                   
///////////////////////////////////////////////////////////////////////////////

function initPageRemark() {
    //
    remark_remark.rows = 5
    //
    //
    mainDivision.appendChild(pageRemark)
    //
    pageRemark.appendChild(remark_remark)
    //
    appendBreak(pageRemark, 1)
    //
    pageRemark.appendChild(createLabel("remark", "mt3"))
}
  
///////////////////////////////////////////////////////////////////////////////

function showPageRemark() {
    //
    showPage(pageRemark, bgColorData)
    //
    h1return.onclick = function() { showPageBody() }
    //
    h1title.innerHTML = "remark&nbsp;"
    //
    remark_remark.value = currentNode.text
}

