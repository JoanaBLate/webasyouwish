
"use strict"

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
    let s = ""
    //
    for (const width of allWidths) { s += createHeadCssRulesForWidth(width) }
    //
    return s
}
    
function createHeadCssRulesForWidth(width) {
    //
    const list = [ ]
    //
    const kinds = Object.keys(usedRulesByKind)
    //    
    for (const kind of kinds) {
        //
        const rules = usedRulesByKind[kind]
        //
        for (const rule of rules) { 
            //
            if (screenForRule(rule) == width) { list.push(rule) }
        }    
    }
    //
    if (list.length == 0) { return "" }
    //
    simpleSort(list)
    //
    //
    const shallIndent = width != 0
    //
    let sInners = ""
    //
    for (const rule of list) { sInners += createHeadCssRule(rule, shallIndent) }
    //
    if (width == 0) { return sInners }
    //
    let sOuter = templateCssRulesByScreenOuter.replace("@minWidth@", width)
    //
    return sOuter.replace("@innerRules@", sInners)
}

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

