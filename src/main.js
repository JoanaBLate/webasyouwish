
"use strict"

const allScreens = [

    "0px", "320px (IPhone 5)", "360px (Galaxy S3)", "375px (IPhone 6/7/8)",
    "412px (Google Pixel)", "480px (Nokia N9)", "540px (Surface Duo)",
    "768px (IPad)", "800px (Kindle Fire HDX)", "1024px (Nest Hub)",
    "1280px (old laptop)", "1366px (modern laptop)", "1536px (large desktop screen)",
    "1920px (larger desktop screen)"
]

const allWidths = [ 0, 320, 360, 375, 412, 480, 540, 768, 800, 1024, 1280, 1366, 1536, 1920 ]

var currentPage = null

var previousPage = null

var preferPageCss = false

const h1return = document.querySelector("#h1-return")

const h1title = document.querySelector("#h1-title")

const mainDivision = document.querySelectorAll("main")[0]

const footer = document.querySelectorAll("footer")[0]

const navigation = document.querySelectorAll("nav")[0]

const fileSelector = document.querySelector("#file-selector")

const bgColorMain = "rgb(0,50,50)"

const bgColorCss = "rgb(140,60,30)" // rgb(100,50,20) rgb(30,110,60) 

const bgColorData = "rgb(10,70,20)" // rgb(30,40,50)

///////////////////////////////////////////////////////////////////////////////

function corrupted(e) { 
    //
    console.log(e)
    //
    customError("Current definition/webpage is corrupted.", function() {
        //
        if (currentPage != pageManager) { showPageManager() }
    }) 
}

///////////////////////////////////////////////////////////////////////////////

function main() {
    //
    initDimensions()
    //
    initWebpages()
    //
    initPageManager()
    //
    initPageDownload()
    //
    initPagePresent()
    //
    initPagePreview()
    //
    initPageHead()
    //
    initPageScripts()
    //
    initPageBody()
    //
    initPageCss()
    //
    initPageKeyframe()
    //
    initPageColor()
    //
    initPageDisplay()
    //
    initPageFont()
    //
    initPageHeight()
    //
    initPageMargin()
    //
    initPagePadding()
    //
    initPageOverflow()
    //
    initPageWidth()
    //
    initPageXRule()
    //
    initPageRemark()
    //
    initPageButton()
    //
    initPageImage()
    //
    initPageText()
    //
    initPageLink()
    //
    initPageWhatsApp()
    //
    initPageBreak()
    //
    selectThisWebpage("-blank")
    //
    window.onbeforeunload = function () { return "leaving?" } 
    //
    document.onkeydown = keyDownHandler
} 

///////////////////////////////////////////////////////////////////////////////

function showPage(page, bgColor) {
    //
    if (page == currentPage) { return } // just a page refresh 
    //
    previousPage = currentPage
    //
    if (previousPage) { currentPage.style.display = "none" } // currentPage is null at start
    //
    currentPage = page
    //
    window.scrollTo(0, 0)
    //
    currentPage.style.display = "inline-block"
    //
    if (bgColor) { document.body.style.backgroundColor = bgColor }
    //
    footer.style.display = shallShowFooter() ? "inline-block" : "none"
}

function shallShowFooter() {
    //
    if (currentPage == pageManager) { return false }
    //
    if (currentPage == pageDownload) { return false }
    //
    if (currentPage == pageHead) { return false }
    //
    if (currentPage == pageScripts) { return false }
    //
    if (currentPage == pagePreview) { return false }
    //
    if (currentPage == pagePresent) { return false }
    //
    return true
}

///////////////////////////////////////////////////////////////////////////////

function keyDownHandler(e) {
    //
    const key = e.key.toLowerCase()
    //
    if (key == " ") { return callbackForSpace() }
    //
    if (key == "escape") { h1return.click(); return false }
    //
    if (key == "enter" && currentPage == pageManager) { manager_body.click(); return false}
}

///////////////////////////////////////////////////////////////////////////////

function callbackForSpace() {
    //
    if (spaceCallbackOk()) {  preview(true); return false } else { return true }
}

function spaceCallbackOk() {
    //
    if (currentPage == pageColor) { return true }
    //
    if (currentPage == pageText) {
        //
        return document.activeElement != text_board
    }
    //
    const focused = document.activeElement.tagName.toLowerCase()
    //
    if (focused == "input") { return false }
    //
    if (focused == "textarea") { return false }
    //
    const pages = [ pageManager, pageDownload, pageHead ]
    //
    if (pages.includes(currentPage)) { return false }
    //
    return true
}

