
"use strict"

function createHtmlBody() {
    //
    const body = createBodyContent()
    //
    const files = createBodyScriptsFiles(previewWidth)
    //
    const n = body.lastIndexOf("\n</body>")
    //
    return body.substr(0, n) + files + "\n</body>"
}

///////////////////////////////////////////////////////////////////////////////

function createBodyScriptsFiles() {
    //
    if (previewWidth) { return "" }
    //
    let res = ""
    //
    const lines = webpage.bodyJsFiles.split("\n")
    //
    for (const rawline of lines) {
        //
        const line = rawline.trim()
        //
        if (line == "") { continue }
        //
        res += '\n    <script src="' + line + '"><' + "/script>"
    }
    //
    return res
}

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

function textToHtml(txt) {
    //
    let s = ""
    //
    let style = ""
    //
    while (txt != "") {
        //
        if (txt.startsWith("{{"))   { s += "{"; txt = txt.substr(2); continue }
        //
        if (txt.startsWith("{}"))  { s += endStyle(); continue }
        //
        if (txt.startsWith("{b}"))  { s += bStart(); continue }
        //
        if (txt.startsWith("{i}"))  { s += iStart(); continue }
        //
        if (txt.startsWith("{bi}")) { s += biStart(); continue }
        //
        const c = txt[0]
        //
        txt = txt.substr(1)
        //
        if (c == "<")  { s += "&lt;"; continue }
        //
        if (c == ">")  { s += "&gt;"; continue }
        //
        if (c == "&")  { s += "&amp;"; continue }
        //
        s += c
    }
    //
    //
    s = s.split("\n").join("\n<br>\n")
    //
    s = s.split("\n\n").join("\n")
    //
    if (s.startsWith("\n")) { s = s.substr(1) }
    //
    if (s.endsWith("\n")  &&  style == "") { s = s.substr(0, s.length - 1) }
    //
    if (style == "b")  { s += "</b>" }
    if (style == "i")  { s += "</i>" }
    if (style == "bi") { s += "</i></b>" }
    //
    return fixWhiteSpaceInHtml(s)
    //   
    //
    function endStyle() {
        //
        txt = txt.substr(2)
        //
        const stl = style
        //
        style = ""
        //
        if (stl == "")  { return "" }
        if (stl == "b") { return "</b>" }
        if (stl == "i") { return "</i>" }
        return "</i></b>" // bi
    } 
    //    
    function bStart() {
        //
        txt = txt.substr(3)
        //
        const stl = style
        //
        style = "b"
        //
        if (stl == "")  { return "<b>" }
        if (stl == "b") { return "" }
        if (stl == "i") { return "</i><b>" }
        return "</i>" // bi
    }   
    //
    function iStart() {
        //
        txt = txt.substr(3)
        //
        const stl = style
        //
        style = "i"
        //
        if (stl == "")  { return "<i>" }
        if (stl == "b") { return "</b><i>" }
        if (stl == "i") { return "" }
        return "</i></b><i>" // bi
    } 
    //
    function biStart() {
        //
        txt = txt.substr(4)
        //
        const stl = style
        //
        style = "bi"
        //
        if (stl == "")  { return "<b><i>" }
        if (stl == "b") { return "<i>" }
        if (stl == "i") { return "</i><b><i>" }
        return "" // bi
    }    
}

function fixWhiteSpaceInHtml(txt) {
    //
    let s = ""
    //
    while (txt != "") {
        //
        const c = txt[0]
        //
        txt = txt.substr(1)
        //
        if (c != " ") { s += c; continue }
        //
        if (s == "") { s += "&nbsp;"; continue }
        //
        const last = s[s.length - 1]
        //
        if (last == " ") { s += "&nbsp;"; continue  }
        //
        if (last == ">") { s += "&nbsp;"; continue  } 
        //
        if (txt == "")   { s += "&nbsp;"; continue  }
        //
        const next = txt[0]
        //
        if (next == "<") { s += "&nbsp;"; continue  } 
        //
        if (next == " ") { s += "&nbsp;"; continue  } 
        //
        s += " "
    }
    //
    return s
}

