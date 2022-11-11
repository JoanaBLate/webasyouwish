
"use strict"

function restoreWebpage() {
    //
    const msg = "Are you sure you want to RESTORE the webpage <b>" + webpage.name  + "</b> ?"
    //
    customConfirm(msg, selectWebpage, null)
}

///////////////////////////////////////////////////////////////////////////////

function saveWebpage() {
    //
    const used = anyUsedTemporaryRule()
    //
    if (used) { customError("Cannot save: using **temporary** " + titleForRule[used[0]] + "."); return }
    //
    saveDefinitionInLocalStorage() // may fail
    //
    definitions[webpage.name] = JSON.stringify(webpage)
    //    
    showPageManager()
}

/////////////////////////////////////////////////////////////////////

function deleteWebpage() {
    //
    const msg = "Are you sure you want to *DELETE* the webpage <b>" + webpage.name  + "</b> ?"
    //
    safeConfirm(msg, deleteWebpage2, null)
}

function deleteWebpage2() {
    //
    localStorage.removeItem("wayw-" + webpage.name)
    //
    delete definitions[webpage.name]
    //
    let index = namesOfWebpages.indexOf(webpage.name)
    //
    updateNamesOfWebpages()
    //
    if (index > namesOfWebpages.length - 1) { index = 0 }
    //
    const name = namesOfWebpages[index]
    //
    selectThisWebpage(name)
}

///////////////////////////////////////////////////////////////////////////////

function saveWebpageAs() {
    //
    const used = anyUsedTemporaryRule()
    //
    if (used) { customError("Cannot save: using **temporary** " + titleForRule[used[0]] + "."); return }
    //
    const msg = "Enter name for the copy."
    //
    namePrompt(msg, saveWebpageAs2)
}

function saveWebpageAs2(name) { 
    //
    if (! name) { return }
    //
    if (name == webpage.name) { customError("This is the current name.", saveWebpageAs); return } 
    //
    if (definitions[name]) { 
        //
        const msg = "The webpage <b>" + name + "</b> already exists. Are you sure you want to overwrite it?"
        // 
        safeConfirm(msg, function() { saveWebpageAs3(name) }, null)
        //
        return 
    }
    //
    saveWebpageAs3(name)
}

function saveWebpageAs3(name) {
    //
    webpage.name = name
    //
    saveDefinitionInLocalStorage() // may fail
    //
    definitions[name] = JSON.stringify(webpage)
    //    
    updateNamesOfWebpages()
    //
    selectThisWebpage(name)
}

///////////////////////////////////////////////////////////////////////////////

function loadWebpage() {
    //
    const msg = "Loading definition. Enter name for the new webpage."
    //
    namePrompt(msg, loadWebpage2)
}

function loadWebpage2(name) {
    //
    if (! name) { return }
    //
    if (definitions[name]) { customError("This name is already used by a webpage.", loadWebpage); return }
    //
    fileSelector.value = "" // or else same file will not trigger onchange event again
    //
    fileSelector.onchange = function() { loadWebpage3(name) }
    //
    fileSelector.click()
}

function loadWebpage3(name) {
    //
    const file = fileSelector.files[0]
    //
    if (file == undefined) { customAlert("Definition loading aborted."); return } // should not happen
    //
    const reader = new FileReader()
    //
    reader.onload = function (e) { loadWebpage4(name, e.target.result) }
    //
    reader.readAsText(file)
}

function loadWebpage4(name, json) {
    //
    const wp = parseJson(json)
    //
    if (wp == null) { customError("Content of loaded file is not a definition or is corrupted."); return }
    //
    wp.name = name // maybe different name
    //
    webpage = wp
    //
    definitions[name] = JSON.stringify(webpage)
    //
    updateNamesOfWebpages()
    //
    saveDefinitionInLocalStorage() // may fail
    //
    selectThisWebpage(name)
}

