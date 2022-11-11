
"use strict"

function appendRuleBoxToCssStage(rule) {
    //
    const kind = rule[0]
    //
    const name = rule.substr(2)    
    //
    const box = createRuleBox(kind, name)
    //    
    css_stage.appendChild(box.panel)
    //
    if (kind == "b") { fillColorSelector(box.selector, name); return }
    //
    if (kind == "c") { fillColorSelector(box.selector, name); return }
    //
    if (kind == "d") { fillDisplaySelector(box.selector, name); return }
    //
    if (kind == "f") { fillFontSelector(box.selector, name); return }
    //
    if (kind == "h") { fillHeightSelector(box.selector, name); return }
    //
    if (kind == "m") { fillMarginSelector(box.selector, name); return }
    //
    if (kind == "o") { fillOverflowSelector(box.selector, name); return }
    //
    if (kind == "p") { fillPaddingSelector(box.selector, name); return }
    //
    if (kind == "w") { fillWidthSelector(box.selector, name); return }
    //
    if (kind == "x") { fillXRuleSelector(box.selector, name); return }
}
    
///////////////////////////////////////////////////////////////////////////////

function createRuleBox(kind, name) {
    //
    const box = { "kind": kind, "name": name, "panel": null, "selector": null, "byScreen": null }
    //
    box.panel = createDiv("rule-box")
    //
    const h2 = createHtmlElement("h2", titleForRule[kind], "rule-box-h2")
    //
    const right = createHtmlElement("span")
    //
    const more = createButton("+", "rule-box-coin mr10")
    //
    const less = createButton("-", "rule-box-coin")
    //
    box.selector = createSelector("rule-box-selector") 
    //
    box.byScreen = createLabel("", "w tac mt5 fs12")
    //
    updateRuleBoxByScreenLabel(box)
    //
    box.panel.appendChild(h2)
    h2.appendChild(right)
    right.appendChild(more)
    right.appendChild(less)
    appendBreak(box.panel)
    box.panel.appendChild(box.selector)
    appendBreak(box.panel, 1)
    box.panel.appendChild(box.byScreen)
    //    
    less.onclick = function() { removeRuleBox(box) }
    //
    more.onclick = function() { showPageForRule(box.kind, box.name) }
    //
    box.selector.onchange = function() { ruleBoxSelectorOnChange(box) }
    //
    Object.seal(box)
    //
    return box
}

///////////////////////////////////////////////////////////////////////////////

function removeRuleBox(box) {
    //
    const index = indexOfRuleBox(box) 
    //
    css_stage.removeChild(box.panel)
    //
    currentNode.rules.splice(index, 1)
}

///////////////////////////////////////////////////////////////////////////////

function ruleBoxSelectorOnChange(box) {
    //
    box.name = box.selector.value
    //
    const index = indexOfRuleBox(box) 
    //
    currentNode.rules[index] = box.kind + ":" + box.name
    //
    updateRuleBoxByScreenLabel(box)
}

///////////////////////////////////////////////////////////////////////////////

function showPageForRule(kind, name) {
    //
    if (kind == "b") { showPageColor(name); return }
    //
    if (kind == "c") { showPageColor(name); return }
    //
    if (kind == "d") { showPageDisplay(name); return }
    //
    if (kind == "f") { showPageFont(name); return }
    //
    if (kind == "h") { showPageHeight(name); return }
    //
    if (kind == "m") { showPageMargin(name); return }
    //
    if (kind == "o") { showPageOverflow(name); return }
    //
    if (kind == "p") { showPagePadding(name); return }
    //
    if (kind == "w") { showPageWidth(name); return }
    //
    if (kind == "x") { showPageXRule(name); return }
}

///////////////////////////////////////////////////////////////////////////////

function updateRuleBoxByScreenLabel(box) {
    //
    const width = screenForRule(box.kind + ":" + box.name)
    //
    const html = width == 0 ? "" : "min window inner width " + width + "px" // "" = "all window widths"
    //
    box.byScreen.innerHTML = html
}

///////////////////////////////////////////////////////////////////////////////

function indexOfRuleBox(box) {
    //
    let index = -1
    //
    for (const child of css_stage.children) {
        //
        index += 1
        //
        if (child == box.panel) { return index }
    }
}

