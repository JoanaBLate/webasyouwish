
"use strict"

var dataPaddings = { }

///////////////////////////////////////////////////////////////////////////////

function resetDataPaddings() {
    //
    dataPaddings = { }
    //
    dataPaddings["-default"] = createPaddingObj()
    //
    dataPaddings["**temporary**"] = createPaddingObj()
    //
    for (const key of Object.keys(webpage.paddings)) { dataPaddings[key] = webpage.paddings[key] }
}

///////////////////////////////////////////////////////////////////////////////

function fillPaddingSelector(selector, favorite) {
    //
    let chosen = selector.value
    //
    if (favorite) { chosen = favorite } // doesn't accept ""
    //
    const keys = Object.keys(dataPaddings)
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

function isPaddingUsed(name) {
    //
    return isRuleUsed("p:" + name)
}

///////////////////////////////////////////////////////////////////////////////
/*
function renamePaddingInNodes(oldname, newname) {
    //
    renameRuleInNodes("p:" + oldname, "p:" + newname)
}
*/

