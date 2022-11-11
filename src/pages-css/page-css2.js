
"use strict"

function showUnusedClasses() {
    //
    const useds = allUsedRules()
    //
    let ss = ""
    //
    ss += findUnuseds("c")
    ss += findUnuseds("d")
    ss += findUnuseds("f")
    ss += findUnuseds("h") 
    ss += findUnuseds("m")
    ss += findUnuseds("p")
    ss += findUnuseds("o")
    ss += findUnuseds("w")  
    ss += findUnuseds("x")
    //
    ss = ss.trimLeft()
    //
    if (ss == "") { ss = "No unused classes were found." }
    //
    presentCss("unused classes", ss.trimLeft())
    //
    //
    function findUnuseds(prefix) {
        //
        let s = ""
        //
        const dict = dictByRuleKind(prefix)
        //
        for (const key of Object.keys(dict)) {
            //
            if (key.startsWith("-")  ||  key.endsWith("**")) { continue }
            //
            const rule = prefix + ":" + key
            //        
            if (useds.includes(rule)) { continue }
            //
            if (prefix == "c") { if (useds.includes("b:" + key)) { continue } }
            //
            s += "\n    " + key
        }
        //
        if (s == "") { return s } else { return "\n\n" + titleForRule[prefix] + s } 
    }
}

///////////////////////////////////////////////////////////////////////////////

function showRedundantClasses() {
    //
    const kinds = "cdfhmpowx"
    //
    let s = ""
    //
    for (const kind of kinds) { s += redundantClassesIn(kind) }
    //
    if (s == "") { s = "No redundant classes were found." }
    //
    presentCss("redundant classes", s.trimLeft())
}
    
function redundantClassesIn(kind) {
    //
    const srcdict = dictByRuleKind(kind)
    //
    const keys = Object.keys(srcdict)
    //
    const values = [ ]
    //
    for (const key of keys) { values.push(JSON.stringify(srcdict[key])) }
    //
    const alreadyCaught = [ ] // indexes
    //
    let ss = ""
    //
    let baseIndex = -1
    //
    while (true) {
        //
        baseIndex += 1
        //
        if (baseIndex > values.length - 2) { break }
        //
        if (keys[baseIndex].endsWith("**")) { continue }
        //
        if (alreadyCaught.includes(baseIndex)) { continue }
        //
        const baseValue = values[baseIndex]
        //
        let s = ""
        //
        for (let n = baseIndex + 1; n < values.length; n++) {
        //
            if (keys[n].endsWith("**")) { continue }
            //
            if (baseValue != values[n]) { continue }
            //
            if (s == "") { s = "\n" + keys[baseIndex] }
            //
            s += " == " + keys[n]
            // 
            alreadyCaught.push(n)
        }
        //
        if (s != "") { ss += "\n\n" + titleForRule[kind] + s }    
    }
    //
    return ss
}

///////////////////////////////////////////////////////////////////////////////

function replaceClass() {
    //
    const kinds = [ "b", "c", "d", "f", "h", "m", "o", "p", "w", "x" ]
    //
    const texts = [ ]
    //
    for (const kind of kinds) { texts.push(titleForRule[kind]) }
    //
    const options = {
        //
        "values": kinds,
        "texts": texts,
        "classname": ""    
    }
    //
    customChoose("Choose the kind of class to be replaced in nodes.", replaceClass2, options)
}

function replaceClass2(kind) {
    //
    if (kind == null) { return }
    //
    const dict = dictByRuleKind(kind)
    //
    const names = Object.keys(dict)
    //
    let name1 = ""
    //
    let name2 = ""
    //
    const options = {
        //
        "values": names,
        "texts": names,
        "classname": ""    
    }
    //
    customChoose("Choose the class to BE REPLACED in nodes.", getName1, options)
    //
    //
    function getName1(answer) { 
        //
        if (answer == null) { return }
        //
        name1 = answer
        //
        customChoose("Choose the class that will REMAIN in nodes.", getName2, options)
    }
    //
    //
    function getName2(answer) { 
        //
        if (answer == null) { return }
        //
        name2 = answer
        //
        if (name1 == name2) { customError("Aborting: the same class was chosen."); return }
        //
        renameRuleInNodes(kind + ":" + name1, kind + ":" + name2)
    }
}

