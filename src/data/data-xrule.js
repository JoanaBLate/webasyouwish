
"use strict"

var dataXRules = { }

///////////////////////////////////////////////////////////////////////////////

function resetDataXRules() {
    //
    dataXRules = { }
    //
    dataXRules["**temporary**"] = createXRuleObj(0, "")
    //
    dataXRules["-blank"] = createXRuleObj(0, "")
    //
    dataXRules["-bounce"] = createXRuleObj(0, "animation: -bounce 3s infinite;")
    //
    dataXRules["-spin"] = createXRuleObj(0, "animation: -spin 3s linear 0s infinite normal;")
    //
    dataXRules["-dark-button"] = createXRuleDarkButton()
    //
    for (const key of Object.keys(webpage.xrules)) { dataXRules[key] = webpage.xrules[key] }
}

function createXRuleDarkButton() {
    //
    const obj = createXRuleObj(0, "font-weight: 600;\ncolor: beige;\nbackground-color: #666666;")
    //
    obj["hover"] = "color: dimgrey;\nbackground-color: silver;\nborder: 1px solid black;"
    //
    obj["active"] = "color: silver;\nbackground-color: dimgrey;\nborder: 1px solid black;"
    //
    return obj
}

///////////////////////////////////////////////////////////////////////////////

function fillXRuleSelector(selector, favorite) {
    //
    let chosen = selector.value
    //
    if (favorite) { chosen = favorite } // doesn't accept ""
    //
    const keys = Object.keys(dataXRules)
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

///////////////////////////////////////////////////////////////////////////////

function isXRuleUsed(name) {
    //
    return isRuleUsed("x:" + name)
}

///////////////////////////////////////////////////////////////////////////////
/*
function renameXRuleInNodes(oldname, newname) {
    //
    renameRuleInNodes("x:" + oldname, "x:" + newname)
}
*/

