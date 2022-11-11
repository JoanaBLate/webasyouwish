
"use strict"

const pageCss = createDiv("dn w320 tac") 

const pageCssFlex = createDiv("w300 flexrow jcbet rowgap30") 

const css_color = createButton("color", "pv8", showPageColor)

const css_display = createButton("display", "pv8", showPageDisplay)

const css_font = createButton("font", "pv8", showPageFont)

const css_height = createButton("height", "pv8", showPageHeight)

const css_margin = createButton("margin", "pv8", showPageMargin)

const css_padding = createButton("padding", "pv8", showPagePadding)

const css_overflow = createButton("overflow", "pv8", showPageOverflow)

const css_width = createButton("width", "pv8", showPageWidth)

const css_xrule = createButton("X class", "pv8", showPageXRule)

const css_keyframe = createButton("keyframe", "pv8", showPageKeyframe)

const css_unused = createButton("unused custom classes", "w300 pv8", showUnusedClasses)

const css_redundant = createButton("redundant classes", "w300 pv8", showRedundantClasses)

const css_replace = createButton("replace class in nodes", "w300 pv8", replaceClass)

///////////////////////////////////////////////////////////////////////////////

function initPageCss() {
    //
    mainDivision.appendChild(pageCss)
    //
    pageCss.appendChild(pageCssFlex)
    //
    pageCssFlex.appendChild(css_color)
    //
    pageCssFlex.appendChild(css_font)
    //
    pageCssFlex.appendChild(css_width)
    //
    pageCssFlex.appendChild(css_height)
    //
    pageCssFlex.appendChild(css_margin)
    //
    pageCssFlex.appendChild(css_padding)
    //
    pageCssFlex.appendChild(css_display)
    //
    pageCssFlex.appendChild(css_overflow)
    //
    pageCssFlex.appendChild(css_keyframe)
    //
    pageCssFlex.appendChild(css_xrule)
    //
    pageCssFlex.appendChild(css_unused)
    //
    pageCssFlex.appendChild(css_redundant)
    //
    pageCssFlex.appendChild(css_replace)
}

///////////////////////////////////////////////////////////////////////////////

function showPageCss() {
    //
    preferPageCss = true
    //
    showPage(pageCss, bgColorCss)
    //
    h1return.onclick = function() { showPageManager() }
    //
    h1title.innerHTML = "CSS&nbsp;"
}

