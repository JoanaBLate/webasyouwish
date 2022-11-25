
"use strict"

var webpage = { }

var definitions = { }

var namesOfWebpages = [ ]

///////////////////////////////////////////////////////////////////////////////

function initWebpages() {
    //
    retrieveDefinitionsFromLocalStorage()
    //
    definitions["-blank"] = createWebpageBlank()
    //
    definitions["-demo1"] = createWebpageDemo1()
    //
    updateNamesOfWebpages() 
}

///////////////////////////////////////////////////////////////////////////////

function updateNamesOfWebpages() {
    //
    namesOfWebpages = Object.keys(definitions)
    //
    simpleSort(namesOfWebpages)
}

///////////////////////////////////////////////////////////////////////////////

function webpageIsEdited() {
    //
    return definitions[webpage.name] != JSON.stringify(webpage)
}

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

function retrieveDefinitionsFromLocalStorage() {
    //
    for (const key of Object.keys(localStorage)) {
        //
        const json = retrieveDefinitionFromLocalStorage(key)
        //
        if (json == null) {
            //
            localStorage.removeItem(key)
            //
            console.log("Removing '" + key + "' from local storage.")
        }
        else {
            //
            const name = key.replace("wayw-", "")
            //
            definitions[name] = json
        }
    }
}

function retrieveDefinitionFromLocalStorage(key) {
    //
    if (! key.startsWith("wayw-")) { return null }
    //
    const name = key.replace("wayw-", "")
    //
    if (name == "") { return null }
    //
    const json = localStorage[key]
    //
    const def = parseJson(json)
    //
    if (def == null) { return null }
    //
    if (def.name != name) { return null }
    //
    return json
}

///////////////////////////////////////////////////////////////////////////////

function saveDefinitionInLocalStorage() {
    //
    const key = "wayw-" + webpage.name
    //
    const json = JSON.stringify(webpage)
    //
    try {
        //
        localStorage[key] = json; return true
    }
    catch(__e) {
        //
        customError("Could not save the definition in browser's storage; maybe it is full.")
        //
        return false
    }
}

///////////////////////////////////////////////////////////////////////////////

function updateCssDataInDefinition() {
    //
    updateCssDataInDefinitionThis("colors", dataColors)
    //
    updateCssDataInDefinitionThis("displays", dataDisplays)
    //
    updateCssDataInDefinitionThis("fonts", dataFonts)
    //
    updateCssDataInDefinitionThis("heights", dataHeights)
    //
    updateCssDataInDefinitionThis("keyframes", dataKeyframes)
    //
    updateCssDataInDefinitionThis("margins", dataMargins)
    //
    updateCssDataInDefinitionThis("paddings", dataPaddings)
    //
    updateCssDataInDefinitionThis("overflows", dataOverflows)
    //
    updateCssDataInDefinitionThis("widths", dataWidths)
    //
    updateCssDataInDefinitionThis("xrules", dataXRules)
}

function updateCssDataInDefinitionThis(kind, srcdict) {
    //
    const dict = { }
    //
    for (const key of Object.keys(srcdict)) {
        //
        if (key.startsWith("-")) { continue }
        //
        if (key == "**temporary**") { continue }
        //
        dict[key] = srcdict[key] 
    }
    //
    webpage[kind] = dict
}

