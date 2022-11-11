
"use strict"

const pageText= createDiv("dn w wx1200 shell tac") 

const text_board = createTextArea(
    //
    "text-board", 
    //
    function() { currentNode.text=this.value }, 
    //
    "\n   {b} Bold text followed by {i} italic text. {} Normal text with {{ (one left curly brace)."
)

///////////////////////////////////////////////////////////////////////////////

function initPageText() {    
    //
    mainDivision.appendChild(pageText)
    //
    pageText.appendChild(text_board)
    //
    appendBreak(pageText, 3)
    //
    const html = 
`
White spaces and blank lines have effect.
<br><br>
Syntax for style:<br>
<b>{b}</b>&nbsp; &nbsp;start bold and stop italic<br>
<b>{i}</b>&nbsp; &nbsp; start italic and stop bold<br>
<b>{bi}</b>&nbsp; start bold & italic<br>
<b>{}</b>&nbsp; stop bold & italic<br>
<b>{{</b>&nbsp; simple curly bracket<br><br>
You don't need to use &nbsp;<b>{}</b>&nbsp; at the end of the text.
`   
    //
    pageText.appendChild(createLabel(html, "shell320 taj"))
}
  
///////////////////////////////////////////////////////////////////////////////

function showPageText() {
    //
    showPage(pageText, bgColorData)
    //
    h1return.onclick = function() { showPageBody() }
    //
    h1title.innerHTML = "text&nbsp;"
    //
    text_board.value = currentNode.text
}

