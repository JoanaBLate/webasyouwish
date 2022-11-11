
"use strict"

const titleForRule = {
    //
 // "a": "animation",
    "b": "bg color",
    "c": "color",
    "d": "display",
    "f": "font",
    "h": "height",
    "m": "margin",
    "o": "overflow",
    "p": "padding",
    "w": "width",
    "x": "X class"
}

const prefixForRandomNameForRule = { 
    //
 // "a": "animation-",
    "b": "color-",
    "c": "color-",
    "d": "display-",
    "f": "font-",
    "h": "height-",
    "m": "margin-",
    "o": "overflow-",
    "p": "padding-",
    "w": "width-",
    "x": "xclass-"
}

///////////////////////////////////////////////////////////////////////////////

function resetCssData() {
    //
    try {
        //
        resetDataColors()
        //
        resetDataDisplays()
        //
        resetDataFonts()
        //
        resetDataHeights()
        //
        resetDataKeyframes()
        //
        resetDataMargins()
        //
        resetDataOverflows()
        //
        resetDataPaddings()
        //
        resetDataWidths()
        //
        resetDataXRules()
    }
    catch (e) {
        //
        corrupted(e); return
    }
}

///////////////////////////////////////////////////////////////////////////////

function screenAsLetter(__screen) {
    //
    const index = allWidths.indexOf(__screen)
    //
    return "ABCDEFGHIJKLMN"[index]
}

///////////////////////////////////////////////////////////////////////////////

function dictByRuleKind(kind) {
    //
    if (kind == "b") { return dataColors }
    //
    if (kind == "c") { return dataColors }
    //
    if (kind == "d") { return dataDisplays }
    //
    if (kind == "f") { return dataFonts }
    //
    if (kind == "h") { return dataHeights }
    //
    if (kind == "m") { return dataMargins }
    //
    if (kind == "o") { return dataOverflows }
    //
    if (kind == "p") { return dataPaddings }
    //
    if (kind == "w") { return dataWidths }
    //
    if (kind == "x") { return dataXRules }
}

function getRuleObj(kind, name) {
    //
    const dict = dictByRuleKind(kind)
    //
    return dict[name]
}

///////////////////////////////////////////////////////////////////////////////

function screenForRule(rule) {
    //
    const kind = rule[0]
    //
    const name = rule.substr(2)
    //
    const obj = getRuleObj(kind, name)
    //
    if (obj == undefined) { console.log("Unknown rule: {" + rule + "}") } // error
    //
    return obj.screen || 0
}

///////////////////////////////////////////////////////////////////////////////

function randomNameForRule(kind, prefix) { 
    //
    const dict = dictByRuleKind(kind)
    //
    let n = 0
    //
    while (true) {
        //
        n += 1
        //
        const name = prefix + n
        //
        if (dict[name] == undefined) { return name }
    }
}

///////////////////////////////////////////////////////////////////////////////

function isRuleUsed(rule) {
    //
    let nodes = [ webpage.body ]
    //
    let futureNodes = [ ]
    //
    while (nodes.length != 0) {
        //
        for (const node of nodes) {
            //
            if (node.rules) { 
                //
                if (node.rules.includes(rule)) { return true }
            }
            //
            if (! node.children) { continue }
            //
            for (const child of node.children) { futureNodes.push(child) }
        }
        //
        nodes = futureNodes
        //
        futureNodes = [ ]
    }
    //
    return false
}

///////////////////////////////////////////////////////////////////////////////

function replaceTemporaryInNodes(prefix, name) {
    //
    renameRuleInNodes(prefix + "**temporary**", prefix + name)
}

///////////////////////////////////////////////////////////////////////////////

function renameRuleInNodes(oldname, newname) { // like c:beige to c:red
    //
    renameRuleInBranch(webpage.body, oldname, newname) 
}    
    
function renameRuleInBranch(branch, oldname, newname) {
    //
    let nodes = [ branch ]
    //
    let futureNodes = [ ]
    //
    while (nodes.length != 0) {
        //
        for (const node of nodes) {
            //
            renameRuleInNode(node, oldname, newname)
            //
            if (! node.children) { continue }
            //
            for (const child of node.children) { futureNodes.push(child) }
        }
        //
        nodes = futureNodes
        //
        futureNodes = [ ]
    }
}

function renameRuleInNode(node, oldname, newname) {
    //
    if (! node.rules) { return }
    //
    for (let i = 0; i < node.rules.length; i++) {
        //
        if (node.rules[i] == oldname) { node.rules[i] = newname }
    }
}

///////////////////////////////////////////////////////////////////////////////

function sortRulesByKind(rules) {
    //
    let index = 0
    //
    while (true) {
        //
        if (index > rules.length - 2) { return }
        //
        const current = rules[index]
        //
        const next = rules[index + 1]
        //
        if (current[0] <= next[0]) { index += 1; continue }
        //
        rules[index] = next
        //
        rules[index + 1] = current
        //
        index = 0
    }
}

///////////////////////////////////////////////////////////////////////////////

function allUsedRules() {
    //
    const useds = { }
    //
    let nodes = [ webpage.body ]
    //
    let futureNodes = [ ]
    //
    while(nodes.length != 0) {
        //
        for (const node of nodes) { 
            //
            if (node.children) { 
                //
                for (const child of node.children) { futureNodes.push(child) }
            }
            //
            if (! node.rules) { continue }
            //
            for (const rule of node.rules) { useds[rule] = true }
        }
        //
        nodes = futureNodes
        //
        futureNodes = [ ]
    }
    //
    return Object.keys(useds)
}

///////////////////////////////////////////////////////////////////////////////

function anyUsedTemporaryRule(root) {
    //
    if (! root) { root = webpage.body }
    //
    let nodes = [ root ]
    //
    let futureNodes = [ ]
    //
    while (nodes.length != 0) {
        //
        for (const node of nodes) {
            //
            if (node.rules) { 
                //
                for (const rule of node.rules) { if (rule.endsWith("**")) { return rule } }
            }
            //
            if (! node.children) { continue }
            //
            for (const child of node.children) { futureNodes.push(child) }
        }
        //
        nodes = futureNodes
        //
        futureNodes = [ ]
    }
    //
    return ""
}

