
"use strict"

var dataColors = { } 

const builtInColors = {
    //
    "-white": "#FFFFFF",
    "-black": "#000000",
    "-grey": "#808080" ,
    "-cadetblue": "#5F9EA0",
    "-chocolate": "#D2691E",
    "-firebrick": "#B22222",
    "-gold": "#FFD700",
    "-indigo": "#4B0082",
    "-mediumseagreen": "#3CB371",
    "-orange": "#FFA500",
    "-silver": "#C0C0C0"
}

///////////////////////////////////////////////////////////////////////////////

function resetDataColors() {
    //
    dataColors = cloneObj(builtInColors)
    //
    dataColors["**temporary**"] = "#FFFFFF"
    //
    for (const key of Object.keys(webpage.colors)) { dataColors[key] = webpage.colors[key] }
}

///////////////////////////////////////////////////////////////////////////////

function fillColorSelector(selector, favorite) {
    //
    let chosen = selector.value
    //
    if (favorite) { chosen = favorite } // doesn't accept ""
    //
    const keys = Object.keys(dataColors)
    //
    simpleSort(keys)
    //
    fillSelector(selector, keys)
    //
    if (! keys.includes(chosen)) { chosen = keys[0] } // '-white' always present
    //
    selector.value = chosen
    //
    return chosen
}

///////////////////////////////////////////////////////////////////////////////

function isColorUsed(name) {
    //
    if (isRuleUsed("b:" + name)) { return true }
    //
    if (isRuleUsed("c:" + name)) { return true }
    //
    return false
}

///////////////////////////////////////////////////////////////////////////////
/*
function renameColorInNodes(oldname, newname) {
    //
    renameRuleInNodes("b:" + oldname, "b:" + newname)
    //
    renameRuleInNodes("c:" + oldname, "c:" + newname)
}
*/

