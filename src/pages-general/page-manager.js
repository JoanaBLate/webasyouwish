
"use strict"

const pageManager = createDiv("dn w320 tac")

const manager_webpages = createSelector("w300", selectWebpage)

const manager_head = createButton("head", "w80 pv8 mt10 mr30", function() { leavingPageManager(); showPageHead() })

const manager_css = createButton("CSS", "w80 pv8 mt10 mr30", function() { leavingPageManager(); showPageCss() })

const manager_body = createButton("body", "w80 pv8 mt10", function() { leavingPageManager(); showPageBody() })

const manager_save = createButton("save", "pv8 mt10 mr40", saveWebpage)

const manager_saveAs = createButton("save as", "pv8 mt10", saveWebpageAs)

const manager_restore = createButton("restore", "pv8 mt10 mr40", restoreWebpage)

const manager_delete = createButton("delete", "pv8 mt10", deleteWebpage)

const manager_load = createButton("load", "pv8 mt10 mr40", loadWebpage)

const manager_download = createButton("download", "pv8 mt10", function() { leavingPageManager(); showPageDownload() })

///////////////////////////////////////////////////////////////////////////////

function initPageManager() {
    //
    mainDivision.appendChild(pageManager)
    //
    pageManager.appendChild(manager_webpages)
    //
    appendBreak(pageManager)
    //
    pageManager.appendChild(createLabel("webpage"))
    //
    appendBreak(pageManager, 2)
    //
    pageManager.appendChild(manager_head)
    //
    pageManager.appendChild(manager_css)
    //
    pageManager.appendChild(manager_body)
    //
    appendBreak(pageManager, 2)
    //
    pageManager.appendChild(manager_save)
    //
    pageManager.appendChild(manager_saveAs)
    //
    appendBreak(pageManager, 2)
    //
    pageManager.appendChild(manager_restore)
    //
    pageManager.appendChild(manager_delete)
    //
    appendBreak(pageManager, 2)
    //
    pageManager.appendChild(manager_load)
    //
    pageManager.appendChild(manager_download)
    //
    appendBreak(pageManager, 3)
    //
    pageManager.appendChild(createParagraph(
        //
        `Any &nbsp;<i><b>-example</b></i>&nbsp; cannot be saved using its name.
        <br><br>
        <b><i>Unsaved edits</i></b> lock the webpage selector and the load button.`,
        //
        "ph10"
    ))
}

///////////////////////////////////////////////////////////////////////////////

function leavingPageManager() {
    //
    h1return.style.display = "inline-block"
    //
    document.querySelector("#webpage-name").style.display = "inline-block"
    //
    document.querySelector("#webpage-name").innerHTML = "# " + webpage.name + " #"
    //
    navigation.style.display = "none"  
}

///////////////////////////////////////////////////////////////////////////////

function showPageManager() {
    //
    showPage(pageManager, bgColorMain)
    //
    h1return.onclick = function() { } // for hotkey
    //
    h1return.style.display = "none"
    //
    h1title.innerHTML = "webpage&nbsp;"  
    //
    document.querySelector("#webpage-name").style.display = "none"
    //
    navigation.style.display = "inline-flex"  
    //
    //
    updateCssDataInDefinition()
    //
    //
    fillSelector(manager_webpages, namesOfWebpages)
    //
    manager_webpages.value = webpage.name
    //
    manager_delete.disabled = false
    //
    const edited = webpageIsEdited()
    //
    manager_webpages.disabled = edited
    manager_load.disabled = edited
    manager_save.disabled = ! edited
    manager_restore.disabled = ! edited
    //
    if (webpage.name.startsWith("-")) {
        //
        manager_save.disabled = true
        manager_delete.disabled = true
    }
}

///////////////////////////////////////////////////////////////////////////////

function selectWebpage() {
    //
    const name = manager_webpages.value
    //    
    selectThisWebpage(name)
}

function selectThisWebpage(name) {
    //
    webpage = parseJson(definitions[name])
    //
    resetCssData()
    //
    currentNode = webpage.body
    //
    showPageManager()
}

