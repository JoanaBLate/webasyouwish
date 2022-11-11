
"use strict"

const pageScripts = createDiv("dn w wx600 shell") 

const scripts_scripts = createTextArea("w hm120 script", function() { webpage.bodyJsFiles = this.value }, "code/example.js\ncode/example2.js")

///////////////////////////////////////////////////////////////////////////////

function initPageScripts() {
    //
    mainDivision.appendChild(pageScripts)
    //
    pageScripts.appendChild(scripts_scripts)
    //
    appendBreak(pageScripts, 1)  
    //
    pageScripts.appendChild(createLabel("just one path per line (without tags)", "w mt3 tac"))
}

///////////////////////////////////////////////////////////////////////////////

function showPageScripts() { 
    //
    showPage(pageScripts, bgColorMain)
    //
    h1return.onclick = function() { showPageBody() }
    //
    h1title.innerHTML = "scripts&nbsp;"
    //
    scripts_scripts.value = webpage.bodyJsFiles   
}

