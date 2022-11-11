
"use strict"

var currentXRule = null

///////////////////////////////////////////////////////////////////////////////

function showPageXRule(favorite) {
    //
    showPage(pageXRule, bgColorCss)
    //
    h1return.onclick = function() { if (preferPageCss) { showPageCss() } else { showPageBody() } }
    //
    h1title.innerHTML = "X class&nbsp;"
    //
    const name = fillXRuleSelector(xrule_xrules, favorite)
    //
    currentXRule = dataXRules[name]
    //
    xrule_pure.value = currentXRule.pure
    //
    xrule_link.value = currentXRule.link
    //
    xrule_visited.value = currentXRule.visited
    //
    xrule_hover.value = currentXRule.hover
    //
    xrule_active.value = currentXRule.active
    //
    xrule_disabled.value = currentXRule.disabled
    //
    xrule_screen.value = currentXRule.screen
    //
    adjustTextAreaRows(xrule_pure)
    //
    adjustTextAreaRows(xrule_link)
    //
    adjustTextAreaRows(xrule_visited)
    //
    adjustTextAreaRows(xrule_hover)
    //
    adjustTextAreaRows(xrule_active)
    //
    adjustTextAreaRows(xrule_disabled)
    //
    setPageXRuleDisableds(name)
}

///////////////////////////////////////////////////////////////////////////////

function setPageXRuleDisableds(name) {
    //
    xrule_clone.disabled = (name == "**temporary**")
    //
    xrule_rename.disabled = (name != "**temporary**")
    //
    xrule_delete.disabled = (name == "**temporary**"  ||  name.startsWith("-")  ||  isXRuleUsed(name))
    //
    const disabled = (name != "**temporary**")
    //
    xrule_pure.disabled = disabled
    //
    xrule_link.disabled = disabled
    //
    xrule_visited.disabled = disabled
    //
    xrule_hover.disabled = disabled
    //
    xrule_active.disabled = disabled
    //
    xrule_disabled.disabled = disabled
    //
    xrule_screen.disabled = disabled
}

///////////////////////////////////////////////////////////////////////////////

function cloneXRule() {
    //
    const name = "**temporary**"
    //
    dataXRules[name] = cloneObj(currentXRule)
    //
    showPageXRule(name)
}

///////////////////////////////////////////////////////////////////////////////

function renameXRule() {
    //
    namePrompt("Enter a name for the X class.", renameXRule2)
}

function renameXRule2(name) {
    //
    if (name == null) { return }
    //
    if (name == "") { customError("Name cannot be blank.", renameXRule); return }
    //
    if (dataXRules[name] != undefined) { 
        //
        customError("This name is already used by an X class.", renameXRule); return 
    }
    //
    dataXRules[name] = cloneObj(currentXRule)
    //
    showPageXRule(name)
    //
    replaceTemporaryInNodes("x:", name)
}

///////////////////////////////////////////////////////////////////////////////

function deleteXRule() {
    //
    const name = xrule_xrules.value
    //
    const msg = "Shall *DELETE* the X class <b>" + name + "</b> ?"
    //
    safeConfirm(msg, function() { delete dataXRules[name]; showPageXRule() })
}

