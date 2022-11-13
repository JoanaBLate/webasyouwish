
"use strict"

// code for preview cannot write media query because the preview
// simulates the window inner width (and the browser doesn't simulate);
// the solution is simply skipping media query and writing directly the
// classes that apply to the chosen width

var usedRulesByWidth = { }

///////////////////////////////////////////////////////////////////////////////

function createHeadCss() {
    //
    return templateCssReset + createHeadKeyframes() + createHeadCssRulesByWidth()
}

///////////////////////////////////////////////////////////////////////////////

function createHeadKeyframes() {
    //
    const names = Object.keys(dataKeyframes)
    //
    let s = ""
    //
    for (const name of names) {
        //
        if (name == "**temporary**") { continue } // keyframes have no alias!
        //
        let data = dataKeyframes[name].data
        //
        data = cleanIndent(data, 12).trimLeft()
        //
        s += templateCssKeyframe.replace("@data@", data).replace("@name@", name)  
    }
    //
    return s
}

///////////////////////////////////////////////////////////////////////////////

function createHeadCssRulesByWidth() {
    //
    updateUsedRulesByWidth()
    //
    let s = ""
    //
    for (const width of allWidths) {
        //
        const list = (usedRulesByWidth["" + width])
        //
        if (list) { s += createHeadCssRulesForWidth(width, list) }
     }
    //
    return s
}

///////////////////////////////////////////////////////////////////////////////

function updateUsedRulesByWidth() {
    //
    usedRulesByWidth = { }    
    //
    const kinds = Object.keys(usedRulesByKind)
    //    
    for (const kind of kinds) { 
        //
        const rules = usedRulesByKind[kind]
        //
        updateUsedRulesByWidthThisKind(rules) 
    }
}

function updateUsedRulesByWidthThisKind(rules) {
    //
    for (const rule of rules) { 
        //
        const width = screenForRule(rule)
        //
        const key = "" + width
        //
        if (usedRulesByWidth[key] == undefined) { usedRulesByWidth[key] = [ ] }
        //
        usedRulesByWidth[key].push(rule)
    }    
}

///////////////////////////////////////////////////////////////////////////////        
        
function createHeadCssRulesForWidth(width, list) {
    //        
    simpleSort(list) // necessary?
    //
    let isMediaQuery = (width > 0)
    //
    if (previewWidth != null) { 
        //
        if (width > previewWidth) { return "" }
        //
        isMediaQuery = false
    }
    //
    let sInners = ""
    //
    for (const rule of list) { sInners += createHeadCssRule(rule, isMediaQuery) }
    //
    if (! isMediaQuery) { return sInners }
    //
    const sOuter = templateCssRulesByScreenOuter.replace("@minWidth@", width)
    //
    return sOuter.replace("@innerRules@", sInners)
}

///////////////////////////////////////////////////////////////////////////////

function createHeadCssRule(rule, shallIndent) {
    //
    const kind = rule[0]
    //
    const name = rule.substr(2)
    //
    let s = createHeadCssRuleCore(kind, name)
    //
    if (shallIndent) { return justIndent(s, 4) }
    //
    return s
}

function createHeadCssRuleCore(kind, name) {
    //
    if (kind == "b") { return createHeadCssRuleBgColor(name) }
    //
    if (kind == "c") { return createHeadCssRuleColor(name) }
    //
    if (kind == "d") { return createHeadCssRuleDisplay(name) }
    //
    if (kind == "f") { return createHeadCssRuleFont(name) }
    //
    if (kind == "h") { return createHeadCssRuleHeight(name) }
    //
    if (kind == "m") { return createHeadCssRuleMargin(name) }
    //
    if (kind == "p") { return createHeadCssRulePadding(name) }
    //
    if (kind == "o") { return createHeadCssRuleOverflow(name) }
    //
    if (kind == "w") { return createHeadCssRuleWidth(name) }
    //
    if (kind == "x") { return createHeadCssRuleXClass(name) }
}

