
"use strict"

const overflowValues = [ "auto", "hidden", "scroll" ]

var dataOverflows = { }

///////////////////////////////////////////////////////////////////////////////

function resetDataOverflows() {
    //
    dataOverflows = { }
    //
    dataOverflows["-default"] = createOverflowObj()
    //
    dataOverflows["**temporary**"] = createOverflowObj()
    //
    for (const key of Object.keys(webpage.overflows)) { dataOverflows[key] = webpage.overflows[key] }
}

///////////////////////////////////////////////////////////////////////////////

function fillOverflowSelector(selector, favorite) {
    //
    let chosen = selector.value
    //
    if (favorite) { chosen = favorite } // doesn't accept ""
    //
    const keys = Object.keys(dataOverflows)
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

function isOverflowUsed(name) {
    //
    return isRuleUsed("o:" + name)
}

///////////////////////////////////////////////////////////////////////////////
/*
function renameOverflowInNodes(oldname, newname) {
    //
    renameRuleInNodes("o:" + oldname, "o:" + newname)
}
*/

