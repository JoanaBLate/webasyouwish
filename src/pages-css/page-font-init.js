
"use strict"

const pageFont = createDiv("dn w320 tac") 

const font_fonts = createSelector("w300", function() { showPageFont() }) // captures the event

const font_clone = createButton("clone", "w80 mr30", cloneFont)

const font_apply = createButton("apply", "w80 mr30", applyFont)

const font_delete = createButton("delete", "w80", deleteFont)

const font_family = createSelector("w300", function() { currentFont.family = this.value }) 

const font_weight = createSelector("w130", function() { currentFont.weight = this.value }) 

const font_size = createSelector("w130", function() { currentFont.size = this.value }) 

const font_italic = createHtmlElement("input")

const font_strike = createHtmlElement("input")

const font_screen = createSelector("w300", function() { currentFont.screen = parseInt(this.value) })

///////////////////////////////////////////////////////////////////////////////

function initPageFont() {    
    //
    fillSelector(font_family, fontFamilies)
    //
    fillSelector(font_weight, fontWeights)
    //
    fillSelector(font_size, fontSizes)
    //
    font_italic.type = "checkbox"
    //
    font_italic.onchange = function() { currentFont.italic = this.checked }
    // 
    font_strike.type = "checkbox"
    //
    font_strike.onchange = function() { currentFont.strike = this.checked }
    //
    fillSelector(font_screen, allWidths, allScreens)
    //
    //
    mainDivision.appendChild(pageFont)
    //
    pageFont.appendChild(font_fonts)
    //
    pageFont.appendChild(createLabel("name", "mt3"))
    //
    appendBreak(pageFont, 2)
    //
    pageFont.appendChild(font_clone)
    //
    pageFont.appendChild(font_apply)
    //
    pageFont.appendChild(font_delete)
    //
    appendBreak(pageFont, 2)
    //
    const html = "Only <i>**temporary**</i> can be edited. Cannot delete <i>-class</i>, <i>**temporary**</i> or any class that is in use."
    //
    pageFont.appendChild(createLabel(html, "w300 mt10 taj"))
    //
    appendBreak(pageFont, 3)
    //
    pageFont.appendChild(font_family)
    //
    pageFont.appendChild(createLabel("font family", "mt3"))
    //
    appendBreak(pageFont, 2)
    //
    const left = createDiv("wa tac mr40")
    //
    pageFont.appendChild(left)
    //
    left.appendChild(font_weight)
    //
    appendBreak(left, 1)
    //
    left.appendChild(createLabel("font weight", "mt3"))
    //
    appendBreak(left, 2)
    //   
    left.appendChild(font_italic)
    //
    left.appendChild(createLabel("&nbsp;&nbsp; italic"))
    //
    const right = createDiv("wa tac")
    //
    pageFont.appendChild(right)
    //
    right.appendChild(font_size)
    //
    appendBreak(right, 1)
    //
    right.appendChild(createLabel("font size", "mt3"))
    //
    appendBreak(right, 2)
    //   
    right.appendChild(font_strike)
    //
    right.appendChild(createLabel("&nbsp;&nbsp; strike"))
    //
    //
    appendBreak(pageFont, 3)
    //
    pageFont.appendChild(font_screen)
    //
    pageFont.appendChild(createLabel("window inner width", "mt3"))
    //
    appendBreak(pageFont, 2)
    //
    const html2 = "The rules apply when the inner width of the browser window is the selected one or greater. Rules for larger windows may override them."
    //
    pageFont.appendChild(createLabel(html2, "taj w300"))
}

