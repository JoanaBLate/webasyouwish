
"use strict"
    
function createWebpageBlank() {
    //
    return JSON.stringify(createWebpageObj("-blank"))
}

///////////////////////////////////////////////////////////////////////////////

function createWebpageDemo1() {
    //
    return `{"name":"-demo1","remark":"(just a remark)","language":"en","title":"WAYW Demo","favicon":"","description":"WAYW very simple demo.","analytics":"","fontImport":"@import url('https://fonts.googleapis.com/css2?family=Averia+Sans+Libre:wght@700&display=swap');","fontFace":"","bodyJsFiles":"","colors":{"rgb 238 229 170":"#eee5aa"},"displays":{"flexrow w sa c c 0px 0px":{"display":"flex row","textAlign":"left","vertAlign":"top","flexWrap":"wrap","justCont":"space-around","alignItems":"center","alignCont":"center","rowGap":"0px","columnGap":"0px","alignSelf":"auto","flexGrow":0,"screen":0},"flexrow w c c c 0px 0px":{"display":"flex row","textAlign":"left","vertAlign":"top","flexWrap":"wrap","justCont":"center","alignItems":"center","alignCont":"center","rowGap":"0px","columnGap":"0px","alignSelf":"auto","flexGrow":0,"screen":0},"inline-block center top":{"display":"inline-block","textAlign":"center","vertAlign":"top","flexWrap":"wrap","justCont":"center","alignItems":"center","alignCont":"center","rowGap":"0px","columnGap":"0px","alignSelf":"auto","flexGrow":0,"screen":0}},"fonts":{"26px normal i serif":{"family":"serif","weight":"normal","size":"26px","italic":true,"strike":false,"screen":0},"35px 900 serif":{"family":"serif","weight":"900","size":"35px","italic":false,"strike":false,"screen":0}},"heights":{"auto 220px _":{"height":"auto","minHeight":"220px","maxHeight":"none","screen":0},"100px _ _":{"height":"100px","minHeight":"0px","maxHeight":"none","screen":0}},"keyframes":{},"margins":{},"paddings":{"5px 0px 5px 0px":{"top":"5px","right":"0px","bottom":"5px","left":"0px","screen":0},"20px 10px 20px 10px":{"top":"20px","right":"10px","bottom":"20px","left":"10px","screen":0},"10px 0px 10px 0px":{"top":"10px","right":"0px","bottom":"10px","left":"0px","screen":0}},"overflows":{},"widths":{"90px _ _":{"width":"90px","minWidth":"0px","maxWidth":"none","screen":0},"5% _ _":{"width":"5%","minWidth":"0px","maxWidth":"none","screen":0},"320px _ _":{"width":"320px","minWidth":"0px","maxWidth":"none","screen":0},"100px _ _":{"width":"100px","minWidth":"0px","maxWidth":"none","screen":0}},"xrules":{"averia":{"pure":"font-family: 'Averia Sans Libre', cursive;","link":"","visited":"","hover":"","active":"","disabled":"","screen":0},"button-link":{"pure":"padding: 3px 5px;\\nfont-weight: 600;\\ncolor: beige;\\nbackground-color: #666666;\\ntext-decoration: none;\\noutline: none;\\nborder: 1px solid transparent; \\nborder-radius: 3px;","link":"","visited":"","hover":"color: dimgrey;\\nbackground-color: silver;\\nborder: 1px solid black;","active":"color: silver;\\nbackground-color: dimgrey;\\nborder: 1px solid black;","disabled":"","screen":0}},"body":{"name":"","type":"body","rules":["b:-black"],"children":[{"name":"","type":"remark","text":"This simple demo is going to be improved."},{"name":"header","type":"frame","rules":["b:rgb 238 229 170","c:-firebrick","p:10px 0px 10px 0px"],"children":[{"name":"","type":"div","subtype":"","rules":["d:flexrow w c c c 0px 0px","f:35px 900 serif","x:averia"],"children":[{"name":"logo","type":"img","subtype":"","rules":["w:90px _ _"],"title":"Golden Lamp","alt":"Golden Lamp","src":"images/golden-lamp.png","previewSrc":"https://www.webasyouwish.com/images/golden-lamp.png"},{"name":"","type":"div","subtype":"","rules":["w:5% _ _"],"children":[]},{"name":"title","type":"text","text":"Web As You Wish"}]}]},{"name":"","type":"frame","rules":["b:-white","c:-silver","f:26px normal i serif","p:5px 0px 5px 0px"],"children":[{"name":"","type":"div","subtype":"","rules":["d:inline-block center top"],"children":[{"name":"","type":"text","text":"simple demo"}]}]},{"name":"main","type":"frame","rules":[],"children":[{"name":"","type":"div","subtype":"","rules":["d:flexrow w sa c c 0px 0px"],"children":[{"name":"spin","type":"div","subtype":"","rules":["b:-black","c:-white","d:flexrow w sa c c 0px 0px","h:auto 220px _","w:320px _ _"],"children":[{"name":"","type":"text","text":"Just an animation."},{"name":"","type":"img","subtype":"","rules":["w:100px _ _","x:-spin"],"title":"Spiral","alt":"Spiral","src":"images/spiral.png","previewSrc":"https://www.webasyouwish.com/images/spiral.png"}]},{"name":"wa","type":"div","subtype":"","rules":["b:-black","c:-white","d:flexrow w sa c c 0px 0px","h:auto 220px _","w:320px _ _"],"children":[{"name":"","type":"text","text":"Click the icon."},{"name":"","type":"whatsapp","subtype":"","number":"1122333333333","message":"Hello!","rules":["h:100px _ _","w:100px _ _","x:-bounce"]}]}]},{"name":"","type":"div","subtype":"","rules":["d:flexrow w sa c c 0px 0px"],"children":[]}]},{"name":"footer","type":"frame","rules":["b:-white","p:20px 10px 20px 10px"],"children":[{"name":"","type":"div","subtype":"","rules":["d:inline-block center top"],"children":[{"name":"say-click","type":"button","subtype":"","innerHtml":"simple button","rules":["x:-dark-button"],"onclick":"console.log('clicked')"},{"name":"","type":"br","subtype":"","count":2,"rules":[]},{"name":"","type":"a","subtype":"","innerHtml":"standard link ","href":"https://www.example.com","newtab":true,"rules":[]},{"name":"","type":"br","subtype":"","count":2,"rules":[]},{"name":"","type":"a","subtype":"","innerHtml":"button-like link","href":"https://www.example.com","newtab":true,"rules":["x:button-link"]}]}]}]}}`
}

