
"use strict"

function getNodeByName(name) { 
    //
    let nodes = [ webpage.body ]
    //
    let futureNodes = [ ]
    //
    while (nodes.length != 0) {
        //
        for (const node of nodes) {
            //
            if (node.name == name) { return node }
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
    return null
}

///////////////////////////////////////////////////////////////////////////////

function adjustDuplicateNodeNames(rootNode) { // rootNode is not part of tree yet
    //
    const names = namesOfAllNodes()
    //
    let adjusts = 0
    //
    let nodes = [ rootNode ]
    //
    let futureNodes = [ ]
    //
    while (nodes.length != 0) {
        //
        for (const node of nodes) {
            //
            if (node.children) { 
                //
                for (const child of node.children) { futureNodes.push(child) }
            }
            //
            if (node.name == "") { continue }
            //
            if (! names.includes(node.name)) { continue }
            //
            node.name = adjustDuplicateNodeName(node.name, names)            
            //
            names.push(node.name)
            //
            adjusts += 1
        }
        //
        nodes = futureNodes
        //
        futureNodes = [ ]
    }
    //
    return adjusts
}

///////////////////////////////////////////////////////////////////////////////

function adjustDuplicateNodeName(name, names) {
    //
    if (! name.includes("--")) {
        //
        if (name.endsWith("-")) { return name + "-2" } else { return name + "--2" }
    }
    //
    const prefix = name.split("--")[0]
    //
    let index = 1
    //
    while (true) {
        //
        index += 1
        //
        const newname = prefix + "--" + index
        //
        if (! names.includes(newname)) { return newname }    
    }
}

///////////////////////////////////////////////////////////////////////////////

function namesOfAllNodes() {
    //
    const names = [ ]
    //
    let nodes = [ webpage.body ]
    //
    let futureNodes = [ ]
    //
    while (nodes.length != 0) {
        //
        for (const node of nodes) {
            //
            if (node.children) { 
                //
                for (const child of node.children) { futureNodes.push(child) }
            }
            //
            if (node.name != "") { names.push(node.name) }
        }
        //
        nodes = futureNodes
        //
        futureNodes = [ ]
    }
    //
    return names
}

///////////////////////////////////////////////////////////////////////////////

function parentOfNode(target) {
    //
    let parents = [ webpage.body ]
    //
    let futureParents = [ ]
    //
    while (parents.length != 0) {
        //
        for (const parent of parents) {
            //
            for (const child of parent.children) {
                //
                if (child == target) { return parent }
                //
                if (child.children) { futureParents.push(child) }
            }
        }
        //
        parents = futureParents
        //
        futureParents = [ ]
    }
}

