
"use strict"

const languages = [

    "af", "sq", "ar-SA", "ar-IQ", "ar-EG", "ar-LY", "ar-DZ", "ar-MA", "ar-TN", "ar-OM",
    "ar-YE", "ar-SY", "ar-JO", "ar-LB", "ar-KW", "ar-AE", "ar-BH", "ar-QA", "eu", "bg",
    "be", "ca", "zh-TW", "zh-CN", "zh-HK", "zh-SG", "hr", "cs", "da", "nl", "nl-BE", "en",
    "en-US", "en-EG", "en-AU", "en-GB", "en-CA", "en-NZ", "en-IE", "en-ZA", "en-JM",
    "en-BZ", "en-TT", "et", "fo", "fa", "fi", "fr", "fr-BE", "fr-CA", "fr-CH", "fr-LU",
    "gd", "gd-IE", "de", "de-CH", "de-AT", "de-LU", "de-LI", "el", "he", "hi", "hu",
    "is", "id", "it", "it-CH", "ja", "ko", "lv", "lt", "mk", "mt", "no", "pl",
    "pt-BR", "pt", "rm", "ro", "ro-MO", "ru", "ru-MI", "sz", "sr", "sk", "sl", "sb",
    "es", "es-AR", "es-GT", "es-CR", "es-PA", "es-DO", "es-MX", "es-VE", "es-CO",
    "es-PE", "es-EC", "es-CL", "es-UY", "es-PY", "es-BO", "es-SV", "es-HN", "es-NI",
    "es-PR", "sx", "sv", "sv-FI", "th", "ts", "tn", "tr", "uk", "ur", "ve", "vi", "xh",
    "ji", "zu"
]

const analyticsPlaceholder = 
`(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'XXXXXXX', 'auto');
ga('send', 'pageview');`
        

const fontImportPlaceholder = 
`@import url('https://fonts.googleapis.com/css?family=Faster+One|Freckle+Face|Hanalei|Plaster|Press+Start+2P|Shojumaru|VT323&display=swap');`

const fontFacePlaceholder =
`@font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 200;
    src: url(https://fonts.gstatic.com/s/montserrat/v24/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}` 

///////////////////////////////////////////////////////////////////////////////

const pageHead = createDiv("dn w wx1000 shell") 

const head_remark = createSimpleInput("", function() { webpage.remark = this.value }, "Optional remark (like copyright).")

const head_language = createSelector("wa wm80", function() { webpage.language = this.value })

const head_title = createSimpleInput("", function() { webpage.title = this.value }, "My Webpage")

const head_favicon = createSimpleInput("", function() { webpage.favicon = this.value }, "images/favicon.png")

const head_description = createTextArea("", function() { webpage.description = this.value }, "My cool stuff.")

const head_analytics = createTextArea("fs12", function() { webpage.analytics = this.value }, analyticsPlaceholder)

const head_fontImport = createTextArea("fs12", function() { webpage.fontImport = this.value }, fontImportPlaceholder)

const head_fontFace = createTextArea("fs12", function() { webpage.fontFace = this.value }, fontFacePlaceholder)

///////////////////////////////////////////////////////////////////////////////

function initPageHead() {
    //
    mainDivision.appendChild(pageHead)
    //
    pageHead.appendChild(head_remark)
    //
    appendBreak(pageHead, 1)
    //
    pageHead.appendChild(createLabel("remark", "mt3"))
    //
    appendBreak(pageHead, 3)
    //
    pageHead.appendChild(head_language)
    //
    appendBreak(pageHead, 1)
    //
    pageHead.appendChild(createLabel("lang", "mt3"))
    //
    fillSelector(head_language, languages)
    //
    head_language.value = "en" 
    //
    appendBreak(pageHead, 3)
    //
    pageHead.appendChild(head_title)
    //
    appendBreak(pageHead, 1)
    //
    pageHead.appendChild(createLabel("title", "mt3"))
    //
    appendBreak(pageHead, 3)
    //
    pageHead.appendChild(head_favicon)
    //
    appendBreak(pageHead, 1)
    //
    pageHead.appendChild(createLabel("favicon", "mt3"))
    //
    appendBreak(pageHead, 3)
    //
    pageHead.appendChild(head_description)
    //
    appendBreak(pageHead, 1)
    //
    pageHead.appendChild(createLabel("description", "mt3"))
    //
    head_description.rows = 3 
    //
    appendBreak(pageHead, 3)  
    //
    pageHead.appendChild(head_analytics)
    //
    appendBreak(pageHead, 1)
    //
    pageHead.appendChild(createLabel("analytics", "mt3"))
    //
    head_analytics.rows = 5  
    //
    appendBreak(pageHead, 3)  
    //
    pageHead.appendChild(head_fontImport)
    //
    appendBreak(pageHead, 1)
    //
    pageHead.appendChild(createLabel("custom fonts (@import)"))
    //
    head_fontImport.rows = 5  
    //
    appendBreak(pageHead, 3)  
    //
    pageHead.appendChild(head_fontFace)
    //
    appendBreak(pageHead, 1)
    //
    pageHead.appendChild(createLabel("custom fonts (@font-face)", "mt3"))
    //
    head_fontFace.rows = 8  
    //
    appendBreak(pageHead, 3)  
    //
    pageHead.appendChild(createLabel("The placeholders show how to fill the fields (without tags).", "taj"))
}

///////////////////////////////////////////////////////////////////////////////

function showPageHead() { 
    //
    showPage(pageHead, bgColorMain)
    //
    h1return.onclick = checkRemark
    //
    h1title.innerHTML = "head&nbsp;"
    //
    head_remark.value = webpage.remark
    //
    head_language.value = webpage.language
    //
    head_title.value = webpage.title
    //
    head_favicon.value = webpage.favicon
    //
    head_description.value = webpage.description
    //
    head_analytics.value = webpage.analytics
    //
    head_fontImport.value = webpage.fontImport
    //
    head_fontFace.value = webpage.fontFace    
}

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

function checkRemark() {
    //
    const obj = head_remark
    //
    let fix = obj.value.trim()
    //    
    while (fix.includes("-->")) { fix = fix.replace("-->", "-- >") }
    //
    if (obj.value == fix) { checkTitle(); return }
    //
    obj.value = fix
    //    
    webpage.remark = fix
    //
    customAlert("Value of Remark was adjusted.")
}

function checkTitle() { // quotes inside title will be replaced later: wysiwyg
    //
    const obj = head_title
    //
    const fix = obj.value.trim()
    //    
    if (obj.value == fix) { checkFavicon(); return }
    //
    obj.value = fix
    //    
    webpage.title = fix
    //
    customAlert("Value of Title was adjusted.")
}

function checkFavicon() {
    //
    const obj = head_favicon
    //
    const fix = noTagReally(obj.value.trim()).split(" ").join("")
    //    
    if (obj.value == fix) { checkDescription(); return }
    //
    obj.value = fix
    //    
    webpage.favicon = fix
    //
    customAlert("Value of Favicon was adjusted.")
}

function checkDescription() {
    //
    const obj = head_description
    //
    const fix = noQuoteNoBreak(obj.value.trim())
    //    
    if (obj.value == fix) { checkAnalytics(); return }
    //
    obj.value = fix
    //
    webpage.description = fix
    //
    customAlert("Value of Description was adjusted.")
}

///////////////////////////////////////////////////////////////////////////////

function checkAnalytics() { 
    //
    tagCheck(head_analytics.value.trim(), "<script>", "Analytics", checkAnalytics2)
}

function checkAnalytics2(fix) { 
    //
    const obj = head_analytics
    //    
    if (obj.value == fix) { checkFontImport(); return }
    //
    obj.value = fix
    //
    webpage.analytics = fix
    //
    customAlert("Value of Analytics was adjusted.")
}

///////////////////////////////////////////////////////////////////////////////

function checkFontImport() { 
    //
    tagCheck(head_fontImport.value.trim(), "<style>", "@import", checkFontImport2)
}

function checkFontImport2(fix) { 
    //
    const obj = head_fontImport
    //    
    if (obj.value == fix) { checkFontFace(); return }
    //
    obj.value = fix
    //
    webpage.fontImport = fix
    //
    customAlert("Value of @import was adjusted.")
}

///////////////////////////////////////////////////////////////////////////////

function checkFontFace() { 
    //
    tagCheck(head_fontFace.value.trim(), "<style>", "@font-face", checkFontFace2)
}

function checkFontFace2(fix) { 
    //
    const obj = head_fontFace
    //    
    if (obj.value == fix) { showPageManager(); return }
    //
    obj.value = fix
    //
    webpage.fontFace = fix
    //
    customAlert("Value of @font-face was adjusted.")
}

///////////////////////////////////////////////////////////////////////////////
 
function tagCheck(trim, tag, name, callback) {
    //
    if (trim == "") { callback(""); return }
    //
    if (trim.includes(tag)) { customError(name + " must NOT include: " + noTag(tag) ); return }
    //
    const tag2 = tag.replace("<", "</")
    //
    if (trim.includes(tag2)) { customError(name + " must NOT include: " + noTag(tag2) ); return }
    //
    if (trim.split(" ").join("").includes("</")) { customError("Bad value for " + name); return }
    //
    callback(trim)
}

