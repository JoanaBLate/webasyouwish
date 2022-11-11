
"use strict"

var dataWidths = { }

///////////////////////////////////////////////////////////////////////////////

function resetDataWidths() {
    //
    dataWidths = { }
    //
    dataWidths["-default"] = createWidthObj()
    //
    dataWidths["**temporary**"] = createWidthObj()
    //
    for (const key of Object.keys(webpage.widths)) { dataWidths[key] = webpage.widths[key] }
}

///////////////////////////////////////////////////////////////////////////////

function fillWidthSelector(selector, favorite) {
    //
    let chosen = selector.value
    //
    if (favorite) { chosen = favorite } // doesn't accept ""
    //
    const keys = Object.keys(dataWidths)
    //
    simpleSort(keys)
    //
    fillSelector(selector, keys)
    //
    if (! keys.includes(chosen)) { chosen = keys[0] } // '-default' always present
    //
    selector.value = chosen
    //
    return chosen
}

///////////////////////////////////////////////////////////////////////////////

function isWidthUsed(name) {
    //
    return isRuleUsed("w:" + name)
}

///////////////////////////////////////////////////////////////////////////////
/*
function renameWidthInNodes(oldname, newname) {
    //
    renameRuleInNodes("w:" + oldname, "w:" + newname)
}
*/

