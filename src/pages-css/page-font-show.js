
"use strict"

var currentFont = null

///////////////////////////////////////////////////////////////////////////////

function showPageFont(favorite) {
    //
    showPage(pageFont, bgColorCss)
    //
    h1return.onclick = function() { if (preferPageCss) { showPageCss() } else { showPageBody() } }
    //
    h1title.innerHTML = "font&nbsp;"
    //
    const name = fillFontSelector(font_fonts, favorite)
    //
    currentFont = dataFonts[name]
    //
    font_family.value = currentFont.family
    //
    font_weight.value = currentFont.weight
    //
    font_size.value = currentFont.size
    //
    font_italic.checked = currentFont.italic
    //
    font_strike.checked = currentFont.strike
    //
    font_screen.value = currentFont.screen
    //
    setPageFontDisableds(name)
}

///////////////////////////////////////////////////////////////////////////////

function setPageFontDisableds(name) {
    //
    font_clone.disabled = (name == "**temporary**")
    //
    font_apply.disabled = (name != "**temporary**")
    //
    font_delete.disabled = (name == "**temporary**"  ||  name.startsWith("-")  ||  isFontUsed(name))
    //
    const disabled = (name != "**temporary**")
    //
    font_family.disabled = disabled
    //
    font_weight.disabled = disabled
    //
    font_size.disabled = disabled
    //
    font_italic.disabled = disabled
    //
    font_strike.disabled = disabled
    //
    font_screen.disabled = disabled
}

///////////////////////////////////////////////////////////////////////////////

function cloneFont() {
    //
    const name = "**temporary**"
    //
    dataFonts[name] = cloneObj(currentFont)
    //
    showPageFont(name)
}

///////////////////////////////////////////////////////////////////////////////

function applyFont() { // keeps **temporary**: some node may be using it
    //
    let name = currentFont.size + " " + currentFont.weight 
    //
    if (currentFont.italic) { name += " i" }
    //
    if (currentFont.strike) { name += " s" }
    //
    if (currentFont.screen != 0) { name += " " + screenAsLetter(currentFont.screen) }
    //
    name += " " + currentFont.family
    //
    dataFonts[name] = cloneObj(currentFont)
    //
    showPageFont(name)
    //
    replaceTemporaryInNodes("f:", name)
}

///////////////////////////////////////////////////////////////////////////////

function deleteFont() {
    //
    const name = font_fonts.value
    //
    const msg = "Shall *DELETE* the font <b>" + name + "</b> ?"
    //
    safeConfirm(msg, function() { delete dataFonts[name]; showPageFont() })
}

