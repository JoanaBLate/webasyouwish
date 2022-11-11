
"use strict"

const chessUrl = '"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/bAEMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIADIAMgMBEQACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAABwUIBAn/xAAgEAABBAAHAQAAAAAAAAAAAAAAAgMEBQEVNVV1lLTT/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAEDBP/EAB4RAQEAAAcBAQAAAAAAAAAAAAABAhExUXGRsSFB/9oADAMBAAIRAxEAPwD7sHQ5wABfqbR6rjYPlaMMWt5vrfDpOJ40iKAAObzoc4AAv1No9VxsHytGGLW831vh0nE8aRFAAHN50OcAAX6m0eq42D5WjDFreb63w6TieNIigADNyan2qt6MX5Fzu97qZTadQyan2qt6MX5DO73umU2nUMmp9qrejF+Qzu97plNp1Ehs7OyjWVhHj2E5iOxOlssMMy32mWWWn3ENNNNIcShtptCUobbQlKUJTglOGGGGGBrJLJnJfk/GVtluVs+39eHObjdbLvSvqXKbTqJnd73TObjdbLvSvqMptOoZ3e90zm43Wy70r6jKbTqGd3vdX4wbgACA3OsWvJTvU6b4dJxPGGLW831mlQAAdIHO6AABAbnWLXkp3qdN8Ok4njDFreb6zSoAAOkDndAAAgNzrFryU71Om+HScTxhi1vN9ZpUAAH/2Q=="'

var newtabScrollY = 0

///////////////////////////////////////////////////////////////////////////////

function preview() {    
    //    
    try {
        //
        previewCore()
    }
    catch (e) {
        //
        corrupted(e); return
    }
}

function previewCore() {
    //
    const newtab = window.open()
    //
    const width = parseInt(preview_screen.value)
    //
    const html = createHtml(width)
    //
    newtab.document.documentElement.innerHTML = html
    //
    newtab.document.title = width + "px Preview"
    //
    newtab.scrollTo(0, newtabScrollY)
    //
    newtab.onscroll = function () { newtabScrollY = newtab.scrollY }
    //
    newtab.document.onkeydown = function (e) { if (e.key == " "  ||  e.key == "Escape") { newtab.close() } }
    //
    const delay = parseInt(preview_delay.value)
    //
    if (isNaN(delay)) { return }
    //
    setTimeout(function() { newtab.close() }, delay * 1000)
}
