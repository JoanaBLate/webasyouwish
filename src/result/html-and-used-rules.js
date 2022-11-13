
"use strict"

var previewWidth = null

var ruleAlias = { } // "my-color": "c3"

var usedRulesByKind = { } // "b": [ "b:-white",... ]

///////////////////////////////////////////////////////////////////////////////

function createHtml(width) {
    //
    previewWidth = width || null
    //
    udpateUsedCss()
    //
    return createHtmlHead() + createHtmlBody() + "\n</html>"
}

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

function udpateUsedCss() {
    //
    ruleAlias = { }
    //
    usedRulesByKind = { }
    //
    cssWalkNodes([webpage.body]) // reads used rules
    //
    sortAndAliasUsedRules()
}

///////////////////////////////////////////////////////////////////////////////

function cssWalkNodes(nodes) {
    //
    for (const node of nodes) { cssWalkNode(node) }
}

function cssWalkNode(node) {
    //
    if (node.rules) {
        //
        for (const rule of node.rules) { readNodeRule(rule) }
    }
    //
    if (node.children) { cssWalkNodes(node.children) }
}

function readNodeRule(rule) {
    //
    const kind = rule[0]
    //
    let list = usedRulesByKind[kind]
    //
    if (list == undefined) { list = [ ]; usedRulesByKind[kind] = list }
    //
    if (! list.includes(rule)) { list.push(rule) }
}

/////////////////////////////////////////////////////////////////////////////

function sortAndAliasUsedRules() {
    //
    const kinds = Object.keys(usedRulesByKind)
    //
    for (const kind of kinds) { sortAndAliasByKind(kind) }
}

///////////////////////////////////////////////////////////////////////////////

function sortAndAliasByKind(kind) {
    //
    const list = usedRulesByKind[kind]
    //
    sortTheeseUsedRulesOfSameKind(list)
    //
    let n = 0
    //
    for (const rule of list) { n += 1; ruleAlias[rule] = kind + n }
}

///////////////////////////////////////////////////////////////////////////////

function sortTheeseUsedRulesOfSameKind(list) {
    //
    let index = 0
    //
    while (true) {
        //
        if (index > list.length - 2) { return }
        //
        const current = list[index]
        //
        const next = list[index + 1]
        //
        if (orderIsOk(current, next)) { index += 1; continue }
        //
        list[index] = next
        //
        list[index + 1] = current
        //
        index = 0
    }
    //
    function orderIsOk(a, b) {
        //
        if (screenForRule(a) < screenForRule(b)) { return true }
        //
        if (screenForRule(a) > screenForRule(b)) { return false }
        //
        return a <= b // same screen width
    }
}

