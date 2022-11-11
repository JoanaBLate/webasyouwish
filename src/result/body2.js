
"use strict"

// the text tag is a pseudo tag

// some elements (like button) are treated like void elements, but they are not

var closeTagMissesTail = false

///////////////////////////////////////////////////////////////////////////////

function createTag(node, kind, indentation) {
    //
    return {
        //
        "node": node,
        "kind": kind,    // text, void, open, close    
        "indentation": indentation // number of whitespaces
    }
}

///////////////////////////////////////////////////////////////////////////////

function createBodyContent() {
    //
    const tags = [ ]
    //
    bodyWalkNodes(tags, [webpage.body], 0)
    //
    return tagsAsString(tags)
}

///////////////////////////////////////////////////////////////////////////////

function bodyWalkNodes(tags, nodes, indentation) {
    //
    for (const node of nodes) { bodyWalkNode(tags, node, indentation) }
}

function bodyWalkNode(tags, node, indentation) {
    //
    if (node.type == "text") {
        //
        const pseudoTag = createTag(node, "text", indentation)
        //
        tags.push(pseudoTag)
        //
        return
    }
    //
    if (! node.children) {
        //
        const voidTag = createTag(node, "void", indentation)
        //
        tags.push(voidTag)
        //
        return
    }
    //
    // children list exists:
    //
    const openTag = createTag(node, "open", indentation)
    //
    tags.push(openTag)
    //
    //
    bodyWalkNodes(tags, node.children, indentation + 1)
    //
    //
    const closeTag = createTag(node, "close", indentation)
    //
    tags.push(closeTag)
}

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

function tagsAsString(tags) {
    //
    let s = ""
    //
    let index = -1
    //
    for (const tag of tags) {
        //
        index += 1
        //
        if (tag.kind == "void")  { s += tagVoidAsString(tag, tags, index); continue }
        //
        if (tag.kind == "open")  { s += tagOpenAsString(tag); continue }
        //
        if (tag.kind == "close") { s += tagCloseAsString(tag, tags, index); continue }
        //
        s += pseudoTagAsString(tag) 
    }
    //
    return s
}

///////////////////////////////////////////////////////////////////////////////

function pseudoTagAsString(tag) {
    //
    const txt = textToHtml(tag.node.text)
    //
    return "\n" + justIndent(txt, 4 * tag.indentation)
}

///////////////////////////////////////////////////////////////////////////////

function tagOpenAsString(tag) {
    //
    let s = ""
    //
    if (closeTagMissesTail) { 
        //
        s = "\n" + " ".repeat(4 * tag.indentation - 1) + "><"
        //
        closeTagMissesTail = false
    }
    else {
        //
        s = "\n" + " ".repeat(4 * tag.indentation) + "<" 
    }
    //
    const node = tag.node
    //
    s += nodeTag(node) + nodeId(node) + nodeClass(node) + nodeExtra(node) + ">"
    //
    return s
}

///////////////////////////////////////////////////////////////////////////////

function tagCloseAsString(tag, tags, index) {
    //
    let s = "\n" + "    ".repeat(tag.indentation) + "</" + nodeTag(tag.node)
    //
    if (shallFinishCloseTag(tag, tags, index)) { s += ">" } else { closeTagMissesTail = true }   
    //
    return s
}

function shallFinishCloseTag(tag, tags, index) {
    //
    const next = tags[index + 1]
    //
    if (next == undefined) { return true }
    //
    if (next.kind == "text") { return true }
    //
    if (next.node.type == "br") { return true }
    //
    if (next.node.type == "frame") { return true }
    //
    if (next.node.type == "remark") { return true }
    //
    return next.indentation != tag.indentation
}

///////////////////////////////////////////////////////////////////////////////

function tagVoidAsString(tag, tags, index) {
    //
    const node = tag.node
    //
    if (node.type == "remark") { return remarkAsString(node) }
    //
    let s = ""
    //
    if (closeTagMissesTail) { 
        //
        s = "\n" + " ".repeat(4 * tag.indentation - 1) + "><"
        //
        closeTagMissesTail = false
    }
    //    
    else {
        //
        s = "\n" + " ".repeat(4 * tag.indentation) + "<"
    }
    //
    //
    s += nodeTag(node) + nodeId(node) + nodeClass(node) + nodeExtra(node)
    //
    if (node.type == "br") { return s + ">" + "<br>".repeat(node.count - 1) }
    //
    //
    let end = ""
    //    
    if (shallFinishVoidTag(tag, tags, index)) { end = ">" } else { closeTagMissesTail = true }
    //
    //
    if (node.type == "button") { return s + ">" + node.innerHtml + "</button" + end }
    //
    if (node.type == "a") { return s + ">" + node.innerHtml + "</a" + end }
    //
    if (node.type == "whatsapp") { return whatsappAsString(s, tag, end) }
    //
    return s + end
}

function shallFinishVoidTag(tag, tags, index) {
    //
    return shallFinishCloseTag(tag, tags, index)
}

