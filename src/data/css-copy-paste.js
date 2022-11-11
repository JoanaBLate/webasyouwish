
"use strict"

function cloneCssOfCurrentBranch() {
    //
    const rules = { }
    //
    let nodes = [ currentNode ]
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
            for (const rule of node.rules) { 
                //
                if (rules[rule]) { continue }
                //
                rules[rule] = getRuleObj(rule[0], rule.substr(2))
            }
        }
        //
        nodes = futureNodes
        //
        futureNodes = [ ]
    }
    //
    transferCss = cloneObj(rules)    
}

///////////////////////////////////////////////////////////////////////////////

function pasteClonedCss() {
    //
    const renameds = { }
    //
    for (const rule of Object.keys(transferCss)) {
        //
        const ruleObj = cloneObj(transferCss[rule])
        //
        const kind = rule[0]
        //
        const name = rule.substr(2)
        //
        const dict = dictByRuleKind(kind)
        //
        const currentRuleObj = dict[name]
        //
        if (currentRuleObj == undefined) { dict[name] = ruleObj; continue }
        //
        if (JSON.stringify(currentRuleObj) == JSON.stringify(ruleObj)) { continue }
        // 
        const prefix = prefixForRandomNameForRule[kind] 
        //
        const newname = randomNameForRule(kind, prefix)
        //
        dict[newname] = ruleObj
        //
        renameds[rule] = kind + ":" + newname
    }
    //
    return renameds       
}

