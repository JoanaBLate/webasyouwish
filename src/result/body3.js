
"use strict"

function nodeTag(node) {
    //
    if (node.type == "frame") {
        //
        if (["header", "main", "nav", "section", "footer"].includes(node.name)) { return node.name }
        //
        return "div"
    }
    //
    if (node.type == "whatsapp") { return "a" }
    //
    return node.type // tag name
}

///////////////////////////////////////////////////////////////////////////////

function nodeId(node) {
    //
    if (node.name != "") { return ' id="' + node.name + '"' } else { return "" }
}

///////////////////////////////////////////////////////////////////////////////

function nodeClass(node) {
    //
    if (! node.rules) { return "" }
    //
    if (node.rules.length == 0) { return "" }
    //
    const list = [ ]
    //
    for (const rule of node.rules) { list.push(ruleAlias[rule]) }
    //
    simpleSort(list)
    //
    return ' class="' + list.join(" ") + '"'
}

///////////////////////////////////////////////////////////////////////////////

function nodeExtra(node) {
    //
    if (node.type == "a") { 
        //
        let a = ' href="' + node.href + '"' 
        //
        if (node.newtab) { a += ' target="_blank"' }
        //
        return a
    }
    //
    if (node.type == "button") { 
        //
        return (node.onclick) ? ' onclick="' + node.onclick + '"' : ""
    }
    //
    if (node.type == "img") { 
        //
        const src = (previewWidth == null) ? node.src : node.previewSrc
        //
        let i = ' src="' + src + '" alt="' + node.alt + '"'
        //
        if (node.title) { i += ' title="' + node.title + '"' }
        //
        return i
    }
    //
    return ""
}

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

function remarkAsString(node) {
    //
    return  "\n    <!-- \n" + justIndent(node.text, 9) + "\n    -->"
}

///////////////////////////////////////////////////////////////////////////////

function whatsappAsString(start, tag, end) {
    //
    const encoded = encodeURIComponent(tag.node.message)
    //
    const s1 = whatsappSet1.replace("@phoneNumber@", tag.node.number).replace("@message@", encoded)
    //
    const n = 4 * (tag.indentation)
    //    
    const s2 = "\n" + justIndent(whatsappSet2, n)
    //
    return start + s1 + s2 + end
}   

