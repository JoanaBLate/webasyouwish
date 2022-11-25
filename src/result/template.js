
"use strict"

const templatePreview =
`
        /* preview */
        html {
            background-image: url(@chessUrl@);
            background-repeat: repeat;
            background-position: center top;
        }
        body {
            width: @width@px;
            height: 100vh;
            background-color: white;
        }`

///////////////////////////////////////////////////////////////////////////////

const templateCssReset =
`
        /** reset **/
        :root {
            font-size: 16px;
        }
        html, body, body * {
            border: 0;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: sans-serif;
            vertical-align: top;
        }
        body {
            margin: 0 auto;
        }
        div, hr, h1, h2, h3, h4, h5, h6 {
            display: inline-block;
            width: 100%;
            overflow: auto;
            text-align: left;
        }
        span, a, p, img, label, button, input {
            overflow: hidden;
            display: inline-block;
        }
        textarea {
            resize: none;
        }
        button, select, textarea, input {
            padding: 5px;
            outline: none;
            font-size: 16px;
            font-weight: 500;
            color: black;
            background-color: white;
        }
        button {
            padding: 5px 0;
            width: 130px;
            border-radius: 3px;
            border: 1px solid grey;
            background-color: rgb(245,245,235);
        }
        button:hover {
            background-color: rgb(230,230,230);
        }
        button:active {
            border: 1px solid black;
            color: lightgrey;
            background-color: grey;
        }
        button:disabled {
            border: 1px solid rgb(80,80,80);
            color: rgb(100,100,100);
            background-color: rgb(190,190,190);
        }
        /** webpage **/`
        
///////////////////////////////////////////////////////////////////////////////

const templateCssRule =
`
        .@alias@ { /* @name@ */
            @data@
        }`       

///////////////////////////////////////////////////////////////////////////////

const templateCssDisplayNone =
`
        .@alias@ { /* @name@ */
            display: none;
        }`

const templateCssDisplayInlineBlock =
`
        .@alias@ { /* @name@ */
            display: inline-block;
            text-align: @textAlign@;
            vertical-align: @verticalAlign@;
        }`

const templateCssDisplayFlexContainer =
`
        .@alias@ { /* @name@ */
            display: flex;
            flex-direction: @flexDirection@;
            flex-wrap: @flexWrap@;
            justify-content: @justCont@;
            align-items: @alignItems@;
            align-content: @alignCont@;
            row-gap: @rowGap@;
            column-gap: @columnGap@;
        }`

const templateCssDisplayFlexItem =
`
        .@alias@ { /* @name@ */
            align-self: @alignSelf@;
            flex-grow: @flexGrow@;
        }`

///////////////////////////////////////////////////////////////////////////////

const templateCssFont =
`
        .@alias@ { /* @name@ */
            font-family: @fontFamily@;
            font-weight: @fontWeight@;
            font-size: @fontSize@;
            font-style: @fontStyle@;
            text-decoration: @textDecoration@;
        }`               
        
///////////////////////////////////////////////////////////////////////////////

const templateCssHeight =
`
        .@alias@ { /* @name@ */
            height: @height@;
            min-height: @minHeight@;
            max-height: @maxHeight@;
        }`

///////////////////////////////////////////////////////////////////////////////
        
const templateCssMargin =
`
        .@alias@ { /* @name@ */
            margin: @value@;
        }`
        
///////////////////////////////////////////////////////////////////////////////

const templateCssPadding =
`
        .@alias@ { /* @name@ */
            padding: @value@;
        }`
          
///////////////////////////////////////////////////////////////////////////////

const templateCssOverflow =
`
        .@alias@ { /* @name@ */
            overflow-x: @overflowX@;
            overflow-y: @overflowY@;
        }`     

///////////////////////////////////////////////////////////////////////////////

const templateCssWidth =
`
        .@alias@ { /* @name@ */
            width: @width@;
            min-width: @minWidth@;
            max-width: @maxWidth@;
        }`

///////////////////////////////////////////////////////////////////////////////

const templateCssRulesByScreenOuter =
`
        @media (min-width: @minWidth@px) {@innerRules@
        }`

///////////////////////////////////////////////////////////////////////////////

const templateCssKeyframe =
`
        @keyframes @name@ {
            @data@
        }`
        
///////////////////////////////////////////////////////////////////////////////

const templateCssWhatsAppSvg =
`
        .-wa-icon { 
            width: 100%;
            height: 100%;
            min-width: 30px;
            min-height: 30px;
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center center;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;' viewBox='0 0 24 24'%3E%3Cpath d='M4.018,17.048c-0.96,-1.484 -1.518,-3.253 -1.518,-5.151c0,-5.243 4.257,-9.5 9.5,-9.5c5.243,0 9.5,4.257 9.5,9.5c0,5.243 -4.257,9.5 -9.5,9.5c-1.777,0 -3.44,-0.489 -4.863,-1.339l-4.637,1.545l1.518,-4.555Z' style='fill:%23f3f3f3;' /%3E%3Cpath d='M5.795,16.304c-0.886,-1.244 -1.407,-2.765 -1.407,-4.407c0,-4.201 3.411,-7.612 7.612,-7.612c4.201,0 7.612,3.411 7.612,7.612c0,4.201 -3.411,7.611 -7.612,7.611c-1.59,0 -3.066,-0.488 -4.288,-1.323l-2.862,0.954l0.945,-2.835Z' style='fill:%2300a82d;' /%3E%3Cpath d='M9.714,13.873c-1.124,-1.374 -1.874,-3.056 -2.109,-4.88c-0.063,-0.508 0.106,-1.018 0.461,-1.387c0.355,-0.369 0.858,-0.558 1.368,-0.515l0.049,0.005c0,0 0.561,0.15 0.868,0.233c0.122,0.033 0.219,0.124 0.26,0.243c0.138,0.41 0.464,1.373 0.618,1.826c0.05,0.147 0.004,0.31 -0.114,0.41c-0.233,0.196 -0.618,0.52 -0.858,0.723c-0.129,0.109 -0.17,0.29 -0.1,0.443c0.279,0.608 0.635,1.176 1.057,1.69c0.434,0.502 0.933,0.949 1.485,1.327c0.14,0.095 0.325,0.085 0.454,-0.024c0.241,-0.202 0.626,-0.526 0.858,-0.722c0.119,-0.1 0.287,-0.117 0.424,-0.043c0.42,0.228 1.314,0.712 1.694,0.918c0.111,0.06 0.185,0.172 0.196,0.297c0.029,0.317 0.083,0.895 0.083,0.895l-0.004,0.049c-0.044,0.51 -0.315,0.974 -0.739,1.261c-0.424,0.288 -0.955,0.368 -1.445,0.22c-1.772,-0.545 -3.313,-1.581 -4.479,-2.937l-0.027,-0.032Z' style='fill:%23f3f3f3;' /%3E%3C/svg%3E");
        }`

///////////////////////////////////////////////////////////////////////////////

const whatsappSet1 = // without starting <a 

` target="_blank" href="https://web.whatsapp.com/send?phone=@phoneNumber@&text=@message@">`

const whatsappSet2 = // without  ending >

`    <span class="-wa-icon"></span>        
</a`

///////////////////////////////////////////////////////////////////////////////

const templateCssKeyframeSpin = 

`  0% { transform: rotate(360deg); }
100% { transform: rotate(0deg); }`

///////////////////////////////////////////////////////////////////////////////

const templateCssKeyframeBounce = 

`35% { transform: scale(1); }
45% { transform: scale(1.5); }
55% { transform: scale(1); }
65% { transform: scale(1.3); }
75% { transform: scale(1); }`

