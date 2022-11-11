
"use strict"

const pageDownload = createDiv("dn w wx400 shell tac") 

const download_definition = createButton("download<br>definition", "pv8 mp20", downloadDefinition)

const download_webpage = createButton("download<br>webpage", "pv8 mp20", downloadWebpage)

const download_presentDefinition = createButton("present<br>definition", "pv8 mp20", presentDefinition)

const download_presentWebpage = createButton("present<br>webpage", "pv8 mp20", presentWebpage)

///////////////////////////////////////////////////////////////////////////////

function initPageDownload() {
    //
    mainDivision.appendChild(pageDownload)
    //
    const flex1 = createDiv("flexrow w")
    //
    pageDownload.appendChild(flex1)
    //
    flex1.appendChild(download_definition)
    //
    flex1.appendChild(download_webpage)
    //
    appendBreak(pageDownload, 3)
    //
    const flex2 = createDiv("flexrow w wx400")
    //
    pageDownload.appendChild(flex2)
    //
    flex2.appendChild(download_presentDefinition)
    //
    flex2.appendChild(download_presentWebpage)
    //
    appendBreak(pageDownload, 3)
    //
    pageDownload.appendChild(createParagraph("Unsaved edits are included.<br>The download of the <b><i>definition</i></b> is your <b><i>backup</i></b> !", "fs14"))
}

///////////////////////////////////////////////////////////////////////////////

function showPageDownload() { 
    //
    showPage(pageDownload, bgColorMain)
    //
    h1return.onclick = function() { showPageManager() }
    //
    h1title.innerHTML = "download &amp; present&nbsp;"
}

///////////////////////////////////////////////////////////////////////////////

function downloadWebpage() {
    //
    const used = anyUsedTemporaryRule(currentNode)
    //
    if (used) { customError("Cannot download: using **temporary** " + titleForRule[used[0]] + "."); return }
    //
    const link = document.querySelector("#download-webpage")
    //
    link.download = webpage.name + ".html"
    //
    try {
        link.href = convertTextToDataUrl(createHtml())
    }
    catch (e) {
        //
        corrupted(e); return
    }
    //
    link.click()
}

function downloadDefinition() {
    //
    const used = anyUsedTemporaryRule(currentNode)
    //
    if (used) { customError("Cannot download: using **temporary** " + titleForRule[used[0]] + "."); return }
    //
    const link = document.querySelector("#download-definition")
    //
    link.download = webpage.name + ".json"
    //
    const json = JSON.stringify(webpage)
    //
    link.href = convertTextToDataUrl(json)
    //
    link.click()
}

