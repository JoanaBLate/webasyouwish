
"use strict"

const pagePresent = createDiv("dn shell") 

const present_content = createDiv("present-content")

///////////////////////////////////////////////////////////////////////////////

function initPagePresent() {
    //
    mainDivision.appendChild(pagePresent)
    //
    pagePresent.appendChild(present_content)
}

///////////////////////////////////////////////////////////////////////////////

function presentDefinition() {
    //
    showPage(pagePresent, bgColorMain)
    //
    h1return.onclick = function() { showPageDownload() }
    //
    h1title.innerHTML = "definition &nbsp;"
    //
    present_content.style.color = "firebrick"
    //
    present_content.style.whiteSpace = "normal"
    //    
    present_content.innerText = jsonForPresent(JSON.stringify(webpage))
}

function presentWebpage() {
    //
    showPage(pagePresent, bgColorMain)
    //
    h1return.onclick = function() { showPageDownload() }
    //
    h1title.innerHTML = "code &nbsp;"
    //
    present_content.style.color = "darkgreen"
    //
    present_content.style.whiteSpace = "pre"
    //
    try {
        present_content.textContent = createHtml() 
    }
    catch (e) {
        //
        corrupted(e); return
    }
}

function presentCss(title, content) {
    //
    showPage(pagePresent, bgColorCss)
    //
    h1return.onclick = function() { showPageCss() }
    //
    h1title.innerHTML = title + "&nbsp;"
    //
    present_content.style.color = "#222222"
    //
    present_content.style.whiteSpace = "pre"
    //
    present_content.textContent = content
}

///////////////////////////////////////////////////////////////////////////////

function jsonForPresent(json) {
    //
    let s = ""
    //
    while (json != "") {
        //
        if (json.startsWith("\\n")) { s += "\\\\n"; json = json.substr(2); continue }
        //
        if (json.startsWith("\\'")) { s += "\\\\'"; json = json.substr(2); continue }
        //
        if (json.startsWith('\\"')) { s += '\\\\"'; json = json.substr(2); continue }
        //
        s += json[0]
        //
        json = json.substr(1)
    }
    //
    return s
}

