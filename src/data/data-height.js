
"use strict"

var dataHeights = { }

///////////////////////////////////////////////////////////////////////////////

function resetDataHeights() {
    //
    dataHeights = { }
    //
    dataHeights["-default"] = createHeightObj()
    //
    dataHeights["**temporary**"] = createHeightObj()
    //
    for (const key of Object.keys(webpage.heights)) { dataHeights[key] = webpage.heights[key] }
}

///////////////////////////////////////////////////////////////////////////////

function fillHeightSelector(selector, favorite) {
    //
    let chosen = selector.value
    //
    if (favorite) { chosen = favorite } // doesn't accept ""
    //
    const keys = Object.keys(dataHeights)
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

function isHeightUsed(name) {
    //
    return isRuleUsed("h:" + name)
}

///////////////////////////////////////////////////////////////////////////////
/*
function renameHeightInNodes(oldname, newname) {
    //
    renameRuleInNodes("h:" + oldname, "h:" + newname)
}
*/

