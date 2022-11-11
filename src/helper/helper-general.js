
"use strict"

function convertTextToDataUrl(src) {
    //
    return "data:text/plain;charset=utf-8," + encodeURIComponent(src)
}

///////////////////////////////////////////////////////////////////////////////

function noTag(src) {
    //
    let s = ""
    //
    for (const c of src) {
        //
        if (c == "<") { s += "&lt;"; continue }
        if (c == ">") { s += "&gt;"; continue }
        if (c == "/") { s += "&frasl;"; continue }
        //
        s += c
    }
    //
    return s
}

function noTagReally(src) {
    //
    let s = ""
    //
    for (const c of src) {
        //
        if (c == "<") { continue }
        if (c == ">") { continue }
     // if (c == "/") { continue }
        //
        s += c
    }
    //
    return s
}

function noQuoteNoBreak(src) {
    //
    let s = ""
    //
    for (const c of src) {
        //
        if (c == "\n") { continue }
        //
        if (c == '"')  { s += "'"; continue }
        //
        s += c
    }
    //
    return s
}

///////////////////////////////////////////////////////////////////////////////

function parseJson(src) {
    //
    try {
        //
        return JSON.parse(src)
    }
    catch(__e) {
        //
        return null
    }
}

///////////////////////////////////////////////////////////////////////////////

function cloneObj(obj) {
    //
    const s = JSON.stringify(obj)
    //
    return JSON.parse(s)
}

///////////////////////////////////////////////////////////////////////////////

function simpleSort(list) {
    //
    list.sort(algorithm)
    //
    function algorithm(a, b) {
        //
        if (a < b) { return -1 }
        if (a > b) { return +1 }
        return 0
    }
}

///////////////////////////////////////////////////////////////////////////////

function justIndent(src, len) {
    //
    const margin = " ".repeat(len)
    //
    let lines = src.split("\n")
    //
    for (let n = 0; n < lines.length; n++) { 
        //
        if (lines[n] !== "") { lines[n] = margin + lines[n] }
    }
    //
    return lines.join("\n")
}

function cleanIndent(src, len) {
    //
    const lines = src.split("\n")
    //
    const margin = " ".repeat(len)
    //
    let res = ""
    //
    for (const line of lines) {
        //
        const trim = line.trim()
        //
        if (trim == "") { continue }
        //
        if (res != "") { res += "\n" }
        //
        res += margin + trim
    }
    //
    return res
}

function indentFontFace(src, len) {
    //
    const lines = src.split("\n")
    //
    const margin = " ".repeat(len)
    //
    let res = ""
    //
    for (const line of lines) {
        //
        const trim = line.trim()
        //
        if (trim == "") { continue }
        //
        let extra = (trim.startsWith("@font-face")  ||  trim == "}") ? "" : "    "
        //
        if (res != "") { res += "\n" }
        //
        res += margin + extra + trim
    }
    //
    return res
}

