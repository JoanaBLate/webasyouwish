
"use strict"

const pageImage = createDiv("dn w wx600 shell tac") 

const image_frame = createDiv("image-frame")

const image_image = createHtmlElement("img", null, "image")

const image_preview_src = createSimpleInput("w", function() { currentNode.previewSrc=noTagReally(this.value) }, 
                                            //    
                                            "https://www.example.com/images/my-image.png")
                                                    
const image_title = createSimpleInput("w", function() { currentNode.title=noTagReally(this.value) }, "My image")
                                                    
const image_alt = createSimpleInput("w", function() { currentNode.alt=noTagReally(this.value) }, "My image")
                                                    
const image_src = createSimpleInput("w", function() { currentNode.src=noTagReally(this.value) }, "images/my-image.png")

///////////////////////////////////////////////////////////////////////////////

function initPageImage() {    
    //
    image_image.title = "image"
    //
    image_image.alt = "image"  
    //
    image_preview_src.onchange = function() { showPageImage() } 
    //
    //
    mainDivision.appendChild(pageImage)
    //
    pageImage.appendChild(image_frame)
    //
    image_frame.appendChild(image_image)
    //
    appendBreak(pageImage, 1)
    //
    pageImage.appendChild(createLabel("preview-image", "mt3"))
    //
    appendBreak(pageImage, 3)
    //
    pageImage.appendChild(image_preview_src)
    //
    pageImage.appendChild(createLabel("*external* address for preview", "mt3"))
    //
    appendBreak(pageImage, 1)
    //
    pageImage.appendChild(createLabel("(after filling this address, click elsewhere)", "cgry"))
    //
    appendBreak(pageImage, 3)
    //
    pageImage.appendChild(image_title)
    //
    pageImage.appendChild(createLabel("title", "mt3"))
    //
    appendBreak(pageImage, 3)
    //
    pageImage.appendChild(image_alt)
    //
    pageImage.appendChild(createLabel("alternative text", "mt3"))
    //
    appendBreak(pageImage, 3)
    //
    pageImage.appendChild(image_src)
    //
    pageImage.appendChild(createLabel("address in resulting webpage", "mt3"))
}
  
///////////////////////////////////////////////////////////////////////////////

function showPageImage() {
    //
    showPage(pageImage, bgColorData)
    //
    h1return.onclick = function() { showPageBody() }
    //
    h1title.innerHTML = "img&nbsp;"
    //
    image_image.src = currentNode.previewSrc
    //
    image_preview_src.value = currentNode.previewSrc
    //
    image_title.value = currentNode.title
    //
    image_alt.value = currentNode.alt
    //
    image_src.value = currentNode.src
}

