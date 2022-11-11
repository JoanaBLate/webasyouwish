
"use strict"

const fontFamilies = [ "inherit", "serif", "sans-serif", "monospace" ]

const fontWeights = [ "100", "200", "300", "normal", "500", "600", "bold", "800", "900" ]

const fontSizes = [ 
    //
    "8px", "9px", "10px", "11px", "12px", "13px", "14px", "15px", "16px", "17px", "18px", 
    "19px", "20px", "21px", "22px", "23px", "24px", "25px", "26px", "27px", "28px", "29px", 
    "30px", "35px", "40px", "45px", "50px", "55px", "60px", "65px", "70px", "75px", "80px"
]

var dataFonts = { }

///////////////////////////////////////////////////////////////////////////////

function resetDataFonts() {
    //
    dataFonts = { }
    //
    dataFonts["-default"] = createFontObj()
    //
    dataFonts["**temporary**"] = createFontObj()
    //
    for (const key of Object.keys(webpage.fonts)) { dataFonts[key] = webpage.fonts[key] }
}

///////////////////////////////////////////////////////////////////////////////

function fillFontSelector(selector, favorite) {
    //
    let chosen = selector.value
    //
    if (favorite) { chosen = favorite } // doesn't accept ""
    //
    const keys = Object.keys(dataFonts)
    //
    simpleSort(keys)
    //
    fillSelector(selector, keys)
    //
    if (! keys.includes(chosen)) { chosen = keys[0] } // '-default' always present
    //
    selector.value = chosen
    //
    return chosen
}

///////////////////////////////////////////////////////////////////////////////

function isFontUsed(name) {
    //
    return isRuleUsed("f:" + name)
}

///////////////////////////////////////////////////////////////////////////////
/*
function renameFontInNodes(oldname, newname) {
    //
    renameRuleInNodes("f:" + oldname, "f:" + newname)
}
*/

