
"use strict"

const pageWhatsApp = createDiv("dn w wx600 shell tac") 
                                                    
const whatsapp_number = createSimpleInput("w", function() { currentNode.number=noTagReally(this.value) }, "1122333333333")
                                                    
const whatsapp_message = createSimpleInput("w", function() { currentNode.message=this.value }, "Hi! I want information.")
                                   
///////////////////////////////////////////////////////////////////////////////

function initPageWhatsApp() {
    //
    whatsapp_number.onchange = function() { whatsapp_number.value = currentNode.number }
    //
    whatsapp_message.onchange = function() { whatsapp_message.value = currentNode.message }
    //
    mainDivision.appendChild(pageWhatsApp)
    //
    pageWhatsApp.appendChild(whatsapp_number)
    //
    appendBreak(pageWhatsApp, 1)
    //
    pageWhatsApp.appendChild(createLabel("whatsapp number", "mt3"))
    //
    appendBreak(pageWhatsApp, 3)
    //
    pageWhatsApp.appendChild(whatsapp_message)
    //
    appendBreak(pageWhatsApp, 1)
    //
    pageWhatsApp.appendChild(createLabel("whatsapp message", "mt3"))
}
  
///////////////////////////////////////////////////////////////////////////////

function showPageWhatsApp() {
    //
    showPage(pageWhatsApp, bgColorData)
    //
    h1return.onclick = function() { showPageBody() }
    //
    h1title.innerHTML = "whatsapp&nbsp;"
    //
    whatsapp_number.value = currentNode.number
    //
    whatsapp_message.value = currentNode.message
}

