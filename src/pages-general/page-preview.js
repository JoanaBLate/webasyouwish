
"use strict"

const pagePreview = createDiv("dn w320 shell tac") 
                                                    
var preview_screen = createSelector("w", null)

var preview_delay = createSelector("w130 tar", null)
                                   
///////////////////////////////////////////////////////////////////////////////

function initPagePreview() {
    //    
    fillSelector(preview_screen, allWidths.slice(1), allScreens.slice(1))
    //
    fillSelector(preview_delay, ["don't close"].concat(const100))
    //
    //
    mainDivision.appendChild(pagePreview, bgColorMain)
    //
    pagePreview.appendChild(preview_screen)
    //
    appendBreak(pagePreview, 1)
    //
    pagePreview.appendChild(createLabel("window inner width", "mt3"))
    //
    appendBreak(pagePreview, 4)
    //
    pagePreview.appendChild(createButton("show preview\nin other tab", "", function() { preview(false) }))
    //
    appendBreak(pagePreview, 4)
    //
    pagePreview.appendChild(preview_delay)
    //
    appendBreak(pagePreview, 1)
    //
    pagePreview.appendChild(createLabel("seconds before closing a preview tab", "mt3"))
    //
    appendBreak(pagePreview, 3)
    //
    pagePreview.appendChild(createLabel("Your browser must allow pop-up windows from <i>webasyouwish.com</i> .", "w taj"))
    //
    appendBreak(pagePreview, 2)
    //
    pagePreview.appendChild(createLabel("Don't refresh the resulting page: create another one instead.", "w taj"))
    //
    appendBreak(pagePreview, 2)
    //
    pagePreview.appendChild(createLabel("The chessboard as background appears only in the preview.", "w taj"))
    //
    appendBreak(pagePreview, 2)
    //
    pagePreview.appendChild(createLabel("In the sections with the preview button, pressing spacebar opens the preview tab.", "w taj"))
    //
    appendBreak(pagePreview, 2)
    //
    pagePreview.appendChild(createLabel("Pressing spacebar closes the preview tab.", "w taj"))
}

///////////////////////////////////////////////////////////////////////////////

function showPagePreview() {
    //
    showPage(pagePreview, bgColorMain)
    //
    h1return.onclick = returnFromPagePreview
    //
    h1title.innerHTML = "preview&nbsp;"
}

function returnFromPagePreview() {
    //
    if (previousPage == pageCss) { showPageCss(); return }
    //
    if (previousPage == pageColor) { showPageColor(); return }
    //
    if (previousPage == pageDisplay) { showPageDisplay(); return }
    //
    if (previousPage == pageFont) { showPageFont(); return }
    //
    if (previousPage == pageHeight) { showPageHeight(); return }
    //
    if (previousPage == pageKeyframe) { showPageKeyframe(); return }
    //
    if (previousPage == pageMargin) { showPageMargin(); return }
    //
    if (previousPage == pagePadding) { showPagePadding(); return }
    //
    if (previousPage == pageOverflow) { showPageOverflow(); return }
    //
    if (previousPage == pageWidth) { showPageWidth(); return }
    //
    if (previousPage == pageXRule) { showPageXRule(); return }
    //
    if (previousPage == pageBreak) { showPageBreak(); return }
    //
    if (previousPage == pageImage) { showPageImage(); return }
    //
    if (previousPage == pageLink) { showPageLink(); return }
    //
    if (previousPage == pageText) { showPageText(); return }
    //
    showPageBody()
}

