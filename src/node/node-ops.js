
"use strict"

// header, main and footer are reserved for frame

const typesForCommonNode = [ "a", "br", "button", "div", "h1", "h2", "h3", "h4", "h5", "h6",
                             "img", "label", "p", "select", "span", "text", "textarea", "whatsapp" ]
                             
var newNodeType = ""
                            
var newNodeSubtype = ""

var transferNode = null

var transferCss = null

///////////////////////////////////////////////////////////////////////////////

function copyNode() {
    //
    const used = anyUsedTemporaryRule(currentNode)
    //
    if (used) { customError("Cannot copy: using **temporary** " + titleForRule[used[0]] + "."); return }
    //
    transferNode = cloneObj(currentNode)
    //
    cloneCssOfCurrentBranch()
    //
    showPageBody() // allows to paste a container in itself now
}

///////////////////////////////////////////////////////////////////////////////

function pasteNode() {
    //
    customConfirm("Confirm paste branch on node?", pasteNode2, null)
}

function pasteNode2() {
    //
    const newnode = cloneObj(transferNode)
    //
    const renameds = pasteClonedCss() // a dictionary
    //
    for (const oldname of Object.keys(renameds)) {    
        //
        renameRuleInBranch(newnode, oldname, renameds[oldname]) 
    }
    //
    const adjustCount = adjustDuplicateNodeNames(newnode) // a number
    //
    const renamedsCount = Object.keys(renameds).length
    //
    currentNode.children.push(newnode)
    //
    currentNode = newnode
    //
    showPageBody() 
    //
    //
    function callback() { pasteNode3(adjustCount) }
    //
    if (renamedsCount == 0) { callback(); return }
    //
    if (renamedsCount == 1) { customAlert("1 CSS class was renamed in the new branch.", callback); return }
    //
    if (renameds  > 1) { customAlert(renamedsCount + "&nbsp;CSS classes were renamed in the new branch.", callback); return }    
}
    
function pasteNode3(adjusts) {
    //
    if (adjusts == 1) { customAlert("1 duplicate id was adjusted in the new branch."); return }
    //
    if (adjusts  > 1) { customAlert(adjusts + "&nbsp;duplicate ids were adjusted in the new branch."); return }
}   

///////////////////////////////////////////////////////////////////////////////

function moveUpNode() {
    //
    moveNode(-1)
}

function moveDownNode() {
    //
    moveNode(+1)
}

function moveNode(delta) {
    //
    const indexA = currentParent.children.indexOf(currentNode)
    //
    const indexB = indexA + delta
    //
    const childA = currentParent.children[indexA]
    //
    const childB = currentParent.children[indexB]
    //
    currentParent.children[indexA] = childB
    //
    currentParent.children[indexB] = childA
    //
    showPageBody() 
}

///////////////////////////////////////////////////////////////////////////////

function renameNode() {
    //
    const msg = "Enter the new id or leave it blank."
    //
    namePrompt(msg, renameNode2, currentNode.name)
}

function renameNode2(name) {
    //
    if (name == null) { return }
    //
    if (name == currentNode.name) { 
        //
        if (name == "") { return }
        //
        customError("This is the current id.", renameNode); return
    }
    //
    if (name != "") { 
        //
        if (getNodeByName(name) != null) { customError("This id is already used.", renameNode); return }
    }
    //
    currentNode.name = name
    //
    showPageBody() 
}

///////////////////////////////////////////////////////////////////////////////

function deleteNode() { 
    //
    let question = "Are you sure you want to *DELETE* <b>&nbsp;" + currentNode.type + " "
    //
    if (currentNode.name != "") { question += currentNode.name + " " } else { question += "</b>?" }
    //
    safeConfirm(question, deleteNode2, null)
}

function deleteNode2() {
    //
    const index = currentParent.children.indexOf(currentNode)
    //
    currentParent.children.splice(index, 1)
    //
    if (index < currentParent.children.length - 1) {
        //
        currentNode = currentParent.children[index]     
    }
    else if (index > 0) {    
        //
        currentNode = currentParent.children[index - 1]      
    }
    else {
        currentNode = currentParent
    }
    //
    showPageBody() 
}

///////////////////////////////////////////////////////////////////////////////

function cutNode() { 
    //
    let question = "Are you sure you want to CUT <b>&nbsp;" + currentNode.type + " "
    //
    if (currentNode.name != "") { question += currentNode.name + " " } else { question += "</b>?" }
    //
    safeConfirm(question, cutNode2, null)
}

function cutNode2() {
    //
    const used = anyUsedTemporaryRule(currentNode)
    //
    if (used) { customError("Cannot cut: using **temporary** " + titleForRule[used[0]] + "."); return }
    //
    transferNode = cloneObj(currentNode)
    //
    cloneCssOfCurrentBranch()
    //
    const index = currentParent.children.indexOf(currentNode)
    //
    currentParent.children.splice(index, 1)
    //
    if (index < currentParent.children.length - 1) {
        //
        currentNode = currentParent.children[index]     
    }
    else if (index > 0) {    
        //
        currentNode = currentParent.children[index - 1]      
    }
    else {
        currentNode = currentParent
    }
    //
    showPageBody() 
}
  
///////////////////////////////////////////////////////////////////////////////

function createNode() {
    //
    let types = typesForCommonNode 
    //
    let value = "div"
    //
    if (currentNode.type == "body")  { types = ["frame", "remark"]; value = "frame" }
    //
    const options = {
        //
        "values": types,
        "texts": types,
        "value": value,
        "classname": ""    
    }
    //
    customChoose("Choose the type for the new node.", createNode2, options)
}

function createNode2(type) {
    //
    if (! type) { return }
    //
    newNodeType = type
    //
    if (newNodeType != "input") { createNode3(); return }
    //
    createNode3() // TODO CODE FOR SUBTYPE
}

function createNode3() {
    //
    namePrompt("Enter the id for the new node or leave it blank.", createNode4)
}

function createNode4(name) {
    //
    if (name == null) { return }
    //
    if (name != "") { 
        //
        if (getNodeByName(name) != null) { customError("This id is already used.", createNode3); return }
    }
    //
    const node = createNodeObjByType(name, newNodeType)
    //
    currentNode.children.push(node)
    //
    currentNode = node
    //
    showPageBody() 
}

