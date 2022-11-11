
"use strict"

const tree_frame = createDiv("tree-frame")

const tree_stage_outer = createDiv("tree-stage-outer")

const tree_stage = createDiv("tree-stage")

const tree_command = createDiv("flexrow")

const tree_create = createButton("create", "w80 mt20 mh10 fs12", createNode)

const tree_rename = createButton("rename", "w80 mt20 mh10 fs12", renameNode)

const tree_delete = createButton("delete", "w80 mt20 mh10 fs12", deleteNode)

const tree_cut = createButton("cut", "w80 mt20 mh10 fs12", cutNode)

const tree_copy = createButton("copy", "w80 mt20 mh10 fs12", copyNode)

const tree_paste = createButton("paste", "w80 mt20 mh10 fs12", pasteNode)

const tree_moveUp = createButton("move up", "w80 mt20 mh10 fs12", moveUpNode)

const tree_moveDown = createButton("move down", "w80 mt20 mh10 fs12", moveDownNode)

var stageDepth = 0

var stageMaxLeft = 0

var currentNode = null 

var currentParent = null

///////////////////////////////////////////////////////////////////////////////

function initBodyTree() {
    //
    pageBody.appendChild(tree_frame)
    //
    tree_frame.appendChild(tree_stage_outer)
    //
    tree_stage_outer.appendChild(tree_stage)
    //
    appendBreak(tree_frame, 1)
    //
    tree_frame.appendChild(tree_command)
    //
    tree_command.appendChild(tree_create)
    //
    tree_command.appendChild(tree_rename)
    //
    tree_command.appendChild(tree_delete)
    //
    tree_command.appendChild(tree_cut)
    //
    tree_command.appendChild(tree_copy)
    //
    tree_command.appendChild(tree_paste)
    //
    tree_command.appendChild(tree_moveUp)
    //
    tree_command.appendChild(tree_moveDown)
}

///////////////////////////////////////////////////////////////////////////////

function updateBodyTree() {
    //
    try {
        //
        const scrollTop = tree_stage_outer.scrollTop
        //        
        updateTreeStage()
        //
        tree_stage_outer.scroll({"top": scrollTop, "left": 0 }) // , "behavior": "smooth"})
        //
        currentParent = (currentNode == webpage.body) ? null : parentOfNode(currentNode) 
        //
        updateTreeCommandButtons()
    }
    catch (e) {
        //
        corrupted(e); return
    }
}

///////////////////////////////////////////////////////////////////////////////

function updateTreeStage() {
    //
    stageDepth = -1
    //
    stageMaxLeft = 0
    //
    tree_stage.innerHTML = ""
    //
    treeStageWalkNodes([webpage.body])
    //
    const width = stageMaxLeft + 180 // 180 -> button width + right padding + eventual
    //
    tree_stage.style.width = width + "px"
}

function treeStageWalkNodes(nodes) {
    //
    stageDepth += 1
    //
    for (const node of nodes) { treeStageWalkNode(node) }
    //
    stageDepth -= 1
}

function treeStageWalkNode(node) {
    //
    let html = node.type
    //
    if (node.type == "br"  &&  node.count != 1) { html += " x " + node.count }
    //
    if (node.name != "") { html += ": " + node.name }
    //
    function onclick() { 
        //
        if (node != currentNode) { 
            //
            currentNode = node; showPageBody() 
        } 
        else {
            treeButtonClicked()
        }
    }
    //
    const button = createButton(html, "tree-stage-button", onclick) 
    //
    let left = 50 * stageDepth
    //
    button.style.marginLeft = left + "px"
    //
    if (left > stageMaxLeft) { stageMaxLeft = left }
    //
    tree_stage.appendChild(button)
    //
    appendBreak(tree_stage, 1)
    //
    if (node == currentNode) { highlightButton(button, node.type); button.focus() }
    //
    if (node.children) { treeStageWalkNodes(node.children) }
}

function highlightButton(button, type) {
    //
    let bgColor = "rgb(60,100,160)"
    //
    if (["a","body","br","img","link","remark","text","whatsapp"].includes(type)) { bgColor = "orangered" }
    //
    button.style.fontWeight = "bold"
    button.style.color = "white"
    button.style.backgroundColor = bgColor
}

///////////////////////////////////////////////////////////////////////////////

function updateTreeCommandButtons() {
    //
    const isBody = (currentNode.type == "body")
    //
    tree_create.disabled = ! currentNode.children
    //
    tree_rename.disabled = isBody
    //
    tree_delete.disabled = isBody
    //
    tree_cut.disabled = isBody
    //
    tree_copy.disabled = isBody
    //
    tree_paste.disabled = ! mayPasteNode()
    //
    tree_moveUp.disabled = true
    //
    tree_moveDown.disabled = true
    //
    if (isBody) { return } // no currentParent
    //
    const index = currentParent.children.indexOf(currentNode)
    //
    if (index > 0) { tree_moveUp.disabled = false }
    //
    if (index < currentParent.children.length - 1) { tree_moveDown.disabled = false }
}

function mayPasteNode() { 
    //
    if (transferNode == null) { return false }
    //
    if (! currentNode.children) { return false }
    //
    if (currentNode.type == "body") {
        //
        return (transferNode.type == "frame"  ||  transferNode.type == "remark")
    }
    //
    if (transferNode.type == "frame"  ||  transferNode.type == "remark") { return currentNode.type == "body" }
    //
    return true
} 

///////////////////////////////////////////////////////////////////////////////

function treeButtonClicked() {
    //
    if (currentNode.type == "a") { showPageLink(); return }
    //
    if (currentNode.type == "body") { showPageScripts(); return }
    //
    if (currentNode.type == "br") { showPageBreak(); return }
    //
    if (currentNode.type == "button") { showPageButton(); return }
    //
    if (currentNode.type == "img") { showPageImage(); return }
    //
    if (currentNode.type == "remark") { showPageRemark(); return }
    //
    if (currentNode.type == "text") { showPageText(); return }
    //
    if (currentNode.type == "whatsapp") { showPageWhatsApp(); return }
}   

