
"use strict"

const const100 = [ ]

const px100 = [ ]

const pc100 = [ ]

const pcAuto = [ "auto" ]

const pcNone = [ "none" ]

const px2000 = [ ]

const pxVh = [ "100vh" ]

const pxAuto = [ "auto" ]

const pxNone = [ "none" ]

const pxAutoVh = [ "auto", "100vh" ]

const pxNoneVh = [ "none", "100vh" ]

///////////////////////////////////////////////////////////////////////////////

function initDimensions() {
    //
    for (let n = 0; n < 101; n++) { 
        //
        const100.push(n)
        //
        px100.push(n + "px")
        //
        pc100.push(n + "%") 
    }
    //
    //
    for (let n = 0; n < 151; n++) { px2000.push(n + "px") }
    //
    for (let n = 155; n < 501; n += 5) { px2000.push(n + "px") }
    //
    for (let n = 510; n < 2001; n += 10) { px2000.push(n + "px") }
    //
    //
    for (const val of pc100) {
        //
        pcAuto.push(val)
        //
        pcNone.push(val)
    }
    //
    for (const val of px2000) {
        //
        pxVh.push(val)
        //
        pxAuto.push(val)
        //
        pxNone.push(val)
        //
        pxAutoVh.push(val)
        //
        pxNoneVh.push(val)
    }
}

