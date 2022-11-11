
"use strict"

var dataKeyframes = { }

///////////////////////////////////////////////////////////////////////////////

function resetDataKeyframes() {
    //
    dataKeyframes = { }
    //
    dataKeyframes["-bounce"] = createKeyframeObj(templateCssKeyframeBounce)
    //
    dataKeyframes["-spin"] = createKeyframeObj(templateCssKeyframeSpin) 
    //
    dataKeyframes["**temporary**"] = createKeyframeObj("") 
    //
    for (const key of Object.keys(webpage.keyframes)) { dataKeyframes[key] = webpage.keyframes[key] }
}

///////////////////////////////////////////////////////////////////////////////

function fillKeyframeSelector(selector, favorite) {
    //
    let chosen = selector.value
    //
    if (favorite) { chosen = favorite } // doesn't accept ""
    //
    const keys = Object.keys(dataKeyframes)
    //
    simpleSort(keys)
    //
    fillSelector(selector, keys)
    //
    if (! keys.includes(chosen)) { chosen = keys[0] } // '-bounce' always present
    //
    selector.value = chosen
    //
    return chosen
}

