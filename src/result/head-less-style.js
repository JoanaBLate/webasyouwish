
"use strict"

function createHtmlHead() {
    //
    const s = "" +
    //
    createHeadStart() +
    //
    createHeadRemark() +
    //
    createHeadAfterRemark() +
    //
    createHeadTitle() +
    //
    createHeadDescription() +
    //
    createHeadViewport() +
    //
    createHeadFavicon() +
    //
    createHeadFontImport() +
    //
    createHeadFontFace() +
    //
    createHeadStyleOpen() +
    //
    createHeadCss() +
    //
    createHeadPreviewCss() +
    //
    createHeadStyleEnd() +
    //
    createHeadAnalytics() +
    //
    createHeadEnd()
    //
    return s
}

///////////////////////////////////////////////////////////////////////////////

function createHeadStart() {
    //
    return "" +
    //
    "<!DOCTYPE html>\n" +
    "<!--  # This webpage was generated using Web As You Wish (www.webasyouwish.com) # -->"
}

///////////////////////////////////////////////////////////////////////////////

function createHeadRemark() {
    //
    if (webpage.remark == "") { return "" }
    //
    return "\n<!-- " + webpage.remark + " -->"
}

///////////////////////////////////////////////////////////////////////////////

function createHeadAfterRemark() {
    //
    return "" +
    //
    '\n<html lang="' + webpage.language + '">' +
    '\n<head>' +
    '\n    <meta charset="utf-8">'
}

///////////////////////////////////////////////////////////////////////////////

function createHeadTitle() {
    //
    const value = noTag(webpage.title).trimRight()
    //
    return "\n    <title>" + value + "</title>"
}

///////////////////////////////////////////////////////////////////////////////

function createHeadDescription() {
    //
    const value = webpage.description.trimRight()
    //
    if (value == "") { return "" }
    //
    return '\n    <meta name="description" content="' + value + '">'
}

///////////////////////////////////////////////////////////////////////////////

function createHeadViewport() {
    //
    return '\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">'
}

///////////////////////////////////////////////////////////////////////////////

function createHeadFavicon() {
    //
    const value = webpage.favicon.trimRight()
    //
    if (value == "") { return "" }
    //
    return '\n    <link rel="icon" href="' + value + '">'
}

///////////////////////////////////////////////////////////////////////////////

function createHeadFontImport() {
    //
    const value = webpage.fontImport.trimRight()
    //
    if (value == "") { return "" }
    //
    return "\n    <style>\n" + cleanIndent(value, 8) + "\n    </style>"
}

///////////////////////////////////////////////////////////////////////////////

function createHeadFontFace() {
    //
    const value = webpage.fontFace.trimRight()
    //
    if (value == "") { return "" }
    //
    return "\n    <style>\n" + indentFontFace(value, 8) + "\n    </style>"
}

///////////////////////////////////////////////////////////////////////////////

function createHeadStyleOpen() {
    //
    return "\n    <style>"
}

///////////////////////////////////////////////////////////////////////////////

function createHeadPreviewCss() {
    //
    if (! previewWidth) { return "" }
    //
    return templatePreview.replace("@chessUrl@", chessUrl).replace("@width@", previewWidth)
}

///////////////////////////////////////////////////////////////////////////////

function createHeadStyleEnd() {
    //
    return "\n    </style>"
}

///////////////////////////////////////////////////////////////////////////////

function createHeadAnalytics() {
    //
    const value = webpage.analytics.trimRight()
    //
    if (value == "") { return "" }
    //
    return "\n    <script>\n" + cleanIndent(value, 8) + "\n    <" + "/script>"
}

///////////////////////////////////////////////////////////////////////////////

function createHeadEnd() {
    //
    return "\n</head>"
}

