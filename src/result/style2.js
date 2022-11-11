
"use strict"

function createHeadCssRuleBgColor(name) {
    //
    const alias = ruleAlias["b:" + name]
    //
    const value = dataColors[name]
    //
    const s = templateCssRule.replace("@alias@", alias).replace("@name@", name)
    //
    return s.replace("@data@", "background-color: " + value + ";")
}

///////////////////////////////////////////////////////////////////////////////

function createHeadCssRuleColor(name) {
    //
    const alias = ruleAlias["c:" + name]
    //
    const value = dataColors[name]
    //
    const s = templateCssRule.replace("@alias@", alias).replace("@name@", name)
    //
    return s.replace("@data@", "color: " + value + ";")
}

///////////////////////////////////////////////////////////////////////////////

function createHeadCssRuleFont(name) {
    //
    const obj = dataFonts[name]
    //
    let s = templateCssFont
    //
    s = s.replace("@alias@", ruleAlias["f:" + name])
    //
    s = s.replace("@name@", name)
    //
    s = s.replace("@fontFamily@", obj.family)
    //
    s = s.replace("@fontWeight@", obj.weight)
    //
    s = s.replace("@fontSize@", obj.size)
    //
    s = s.replace("@fontStyle@", obj.italic ? "italic" : "normal")
    //
    s = s.replace("@textDecoration@", obj.strike ? "line-through" : "none")
    //
    return s
}

///////////////////////////////////////////////////////////////////////////////

function createHeadCssRuleHeight(name) {
    //
    const obj = dataHeights[name]
    //
    let s = templateCssHeight
    //
    s = s.replace("@alias@", ruleAlias["h:" + name])
    //
    s = s.replace("@name@", name)
    //
    s = s.replace("@height@", obj.height)
    //
    s = s.replace("@minHeight@", obj.minHeight)
    //
    s = s.replace("@maxHeight@", obj.maxHeight)
    //
    return s
}

///////////////////////////////////////////////////////////////////////////////

function createHeadCssRuleMargin(name) {
    //
    const obj = dataMargins[name]
    //
    let s = templateCssMargin
    //
    s = s.replace("@alias@", ruleAlias["m:" + name])
    //
    s = s.replace("@name@", name)
    //
    const value = obj.top + " " + obj.right + " " + obj.bottom + " " + obj.left
    //
    s = s.replace("@value@", value)
    //
    return s
}

///////////////////////////////////////////////////////////////////////////////

function createHeadCssRulePadding(name) {
    //
    const obj = dataPaddings[name]
    //
    let s = templateCssPadding
    //
    s = s.replace("@alias@", ruleAlias["p:" + name])
    //
    s = s.replace("@name@", name)
    //
    const value = obj.top + " " + obj.right + " " + obj.bottom + " " + obj.left
    //
    s = s.replace("@value@", value)
    //
    return s
}

///////////////////////////////////////////////////////////////////////////////

function createHeadCssRuleOverflow(name) {
    //
    const obj = dataOverflows[name]
    //
    let s = templateCssOverflow
    //
    s = s.replace("@alias@", ruleAlias["o:" + name])
    //
    s = s.replace("@name@", name)
    //
    s = s.replace("@overflowX@", obj.overflowX)
    //
    s = s.replace("@overflowY@", obj.overflowY)
    //
    return s
}

///////////////////////////////////////////////////////////////////////////////

function createHeadCssRuleWidth(name) {
    //
    const obj = dataWidths[name]
    //
    let s = templateCssWidth
    //
    s = s.replace("@alias@", ruleAlias["w:" + name])
    //
    s = s.replace("@name@", name)
    //
    s = s.replace("@width@", obj.width)
    //
    s = s.replace("@minWidth@", obj.minWidth)
    //
    s = s.replace("@maxWidth@", obj.maxWidth)
    //
    return s
}

///////////////////////////////////////////////////////////////////////////////

function createHeadCssRuleXClass(name) {
    //
    const alias = ruleAlias["x:" + name]
    //
    const obj = dataXRules[name]
    //
    let ss = ""
    //    
    for (const item of ["pure", "link", "visited", "hover", "active", "disabled"]) {    
        //
        const txt = obj[item]
        //
        if (! txt) { continue } // also skips ""
        //
        const tail = (item=="pure")  ?  "" : ":" + item
        //
        let s = templateCssRule.replace("@alias@", alias + tail)
        //
        s = s.replace("@name@", name)
        //
        const data = cleanIndent(txt, 12).trimLeft()
        //
        ss += s.replace("@data@", data)
    }
    //
    if (ss == "") { // -blank
        ss = templateCssRule.replace("@alias@", alias)
        ss = ss.replace("@name@", name)
        ss = ss.replace("@data@", "")
    }
    //
    return ss
}

///////////////////////////////////////////////////////////////////////////////

function createHeadCssRuleDisplay(name) {
    //
    const obj = dataDisplays[name]
    //
    const alias = ruleAlias["d:" + name]
    //
    if (obj.display == "inline-block") { return createHeadCssRuleDisplayInlineBlock(name, alias, obj) }
    //
    if (obj.display == "flex row") { return createHeadCssRuleDisplayFlexContainer(name, alias, obj) }
    // 
    if (obj.display == "flex col") { return createHeadCssRuleDisplayFlexContainer(name, alias, obj) }
    //
    if (obj.display == "flex item") { return createHeadCssRuleDisplayFlexItem(name, alias, obj) }
    //
    return createHeadCssRuleDisplayNone(name, alias)  
}
    
///////////////////////////////////////////////////////////////////////////////

function createHeadCssRuleDisplayNone(name, alias) {
    //
    let s = templateCssDisplayNone
    //
    return s.replace("@alias@", alias).replace("@name@", name)
}

function createHeadCssRuleDisplayInlineBlock(name, alias, obj) {
    //
    let s = templateCssDisplayInlineBlock
    //
    s = s.replace("@alias@", alias).replace("@name@", name)
    //
    s = s.replace("@textAlign@", obj.textAlign)
    //
    s = s.replace("@verticalAlign@", obj.vertAlign)
    //
    return s
}

function createHeadCssRuleDisplayFlexContainer(name, alias, obj) {
    //
    let s = templateCssDisplayFlexContainer
    //
    s = s.replace("@alias@", alias).replace("@name@", name)
    //
    s = s.replace("@flexDirection@", obj.display == "flex row" ? "row" : "column")
    //
    s = s.replace("@flexWrap@", obj.flexWrap)
    //
    s = s.replace("@justCont@", obj.justCont)
    //
    s = s.replace("@alignItems@", obj.alignItems)
    //
    s = s.replace("@alignCont@", obj.alignCont)
    //
    s = s.replace("@rowGap@", obj.rowGap)
    //
    s = s.replace("@columnGap@", obj.columnGap)
    //
    return s
}

function createHeadCssRuleDisplayFlexItem(name, alias, obj) {
    //
    let s = templateCssDisplayFlexItem
    //
    s = s.replace("@alias@", alias).replace("@name@", name)
    //
    s = s.replace("@alignSelf@", obj.alignSelf)
    //
    s = s.replace("@flexGrow@", obj.flexGrow)
    //
    return s
}

