
"use strict"

var dataDisplays = { }

///////////////////////////////////////////////////////////////////////////////

function resetDataDisplays() {
    //
    dataDisplays = { }
    //
    dataDisplays["-default"] = createDisplayObj()
    //
    dataDisplays["**temporary**"] = createDisplayObj()
    //
    for (const key of Object.keys(webpage.displays)) { dataDisplays[key] = webpage.displays[key] }
}

///////////////////////////////////////////////////////////////////////////////

function fillDisplaySelector(selector, favorite) {
    //
    let chosen = selector.value
    //
    if (favorite) { chosen = favorite } // doesn't accept ""
    //
    const keys = Object.keys(dataDisplays)
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

function isDisplayUsed(name) {
    //
    return isRuleUsed("d:" + name)
}

///////////////////////////////////////////////////////////////////////////////
/*
function renameDisplayInNodes(oldname, newname) {
    //
    renameRuleInNodes("d:" + oldname, "d:" + newname)
}
*/

