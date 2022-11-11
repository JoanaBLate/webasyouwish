
"use strict"

const pageLink = createDiv("dn w wx600 shell tac") 
                                                    
const link_innerHtml = createSimpleInput("w", function() { currentNode.innerHtml=this.value }, "some <b>text/html</b> here")
                                                    
const link_href = createSimpleInput("w", function() { currentNode.href=this.value }, "https://www.example.com")

const link_newtab = createSimpleInput(null, function() { currentNode.newtab = this.checked }, null)

///////////////////////////////////////////////////////////////////////////////

function initPageLink() {
    //
    link_newtab.type = "checkbox"
    //
    //
    mainDivision.appendChild(pageLink)
    //
    pageLink.appendChild(link_innerHtml)
    //
    appendBreak(pageLink, 1)
    //
    pageLink.appendChild(createLabel("anchor text (accepts html)", "mt3"))
    //
    appendBreak(pageLink, 3)
    //
    pageLink.appendChild(link_href)
    //
    appendBreak(pageLink, 1)
    //
    pageLink.appendChild(createLabel("anchor address (href)", "mt3"))
    //
    appendBreak(pageLink, 3)
    //
    pageLink.appendChild(link_newtab)
    //
    pageLink.appendChild(createLabel("&nbsp; open link in a new tab", ""))
}
  
///////////////////////////////////////////////////////////////////////////////

function showPageLink() {
    //
    showPage(pageLink, bgColorData)
    //
    h1return.onclick = function() { showPageBody() }
    //
    h1title.innerHTML = "anchor&nbsp;"
    //
    link_innerHtml.value = currentNode.innerHtml
    //
    link_href.value = currentNode.href
    //
    link_newtab.checked = currentNode.newtab
}

