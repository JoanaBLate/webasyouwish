
"use strict"

var dataMargins = { }

///////////////////////////////////////////////////////////////////////////////

function resetDataMargins() {
    //
    dataMargins = { }
    //
    dataMargins["-default"] = createMarginObj()
    //
    dataMargins["**temporary**"] = createMarginObj()
    //
    for (const key of Object.keys(webpage.margins)) { dataMargins[key] = webpage.margins[key] }
}

///////////////////////////////////////////////////////////////////////////////

function fillMarginSelector(selector, favorite) {
    //
    let chosen = selector.value
    //
    if (favorite) { chosen = favorite } // doesn't accept ""
    //
    const keys = Object.keys(dataMargins)
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

function isMarginUsed(name) {
    //
    return isRuleUsed("p:" + name)
}

///////////////////////////////////////////////////////////////////////////////
/*
function renameMarginInNodes(oldname, newname) {
    //
    renameRuleInNodes("p:" + oldname, "p:" + newname)
}
*/

