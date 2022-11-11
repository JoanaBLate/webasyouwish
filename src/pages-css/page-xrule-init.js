
"use strict"

const pageXRule = createDiv("dn w wx600 shell tac") 

const xrule_xrules = createSelector("w300", function() { showPageXRule() }) // captures the event

const xrule_clone = createButton("clone", "w80 mr30", cloneXRule)

const xrule_rename = createButton("apply", "w80 mr30", renameXRule)

const xrule_delete = createButton("delete", "w80", deleteXRule)

const xrule_pure = createTextArea("pseudo-class", function() { currentXRule.pure = noTagReally(this.value) })

const xrule_link = createTextArea("pseudo-class", function() { currentXRule.link = noTagReally(this.value) })

const xrule_visited = createTextArea("pseudo-class", function() { currentXRule.visited = noTagReally(this.value) })

const xrule_hover = createTextArea("pseudo-class", function() { currentXRule.hover = noTagReally(this.value) })

const xrule_active = createTextArea("pseudo-class", function() { currentXRule.active = noTagReally(this.value) })

const xrule_disabled = createTextArea("pseudo-class", function() { currentXRule.disabled = noTagReally(this.value) })

const xrule_screen = createSelector("w300", function() { currentXRule.screen = parseInt(this.value) })

///////////////////////////////////////////////////////////////////////////////

function initPageXRule() {    
    //
    xrule_pure.rows = 2   
    //
    xrule_link.rows = 2   
    //
    xrule_visited.rows = 2
    //
    xrule_hover.rows = 2 
    //
    xrule_active.rows = 2   
    //
    xrule_disabled.rows = 2
    //
    fillSelector(xrule_screen, allWidths, allScreens)
    //
    //
    mainDivision.appendChild(pageXRule)
    //
    pageXRule.appendChild(xrule_xrules)
    //
    appendBreak(pageXRule, 1)
    //
    pageXRule.appendChild(createLabel("name", "mt3"))
    //
    appendBreak(pageXRule, 2)
    //
    pageXRule.appendChild(xrule_clone)
    //
    pageXRule.appendChild(xrule_rename)
    //
    pageXRule.appendChild(xrule_delete)
    //
    appendBreak(pageXRule, 2)
    const html = "Only <i>**temporary**</i> can be edited. Cannot delete <i>-class</i>, <i>**temporary**</i> or any class that is in use."
    //
    pageXRule.appendChild(createLabel(html, "w300 mt10 taj"))
    //
    appendBreak(pageXRule, 3)
    //
    pageXRule.appendChild(xrule_pure)
    //
    pageXRule.appendChild(createLabel("(pure)", "mt3"))
    //
    appendBreak(pageXRule, 3)
    //
    pageXRule.appendChild(xrule_link)
    //
    pageXRule.appendChild(createLabel(":link", "mt3"))
    //
    appendBreak(pageXRule, 3)
    //
    pageXRule.appendChild(xrule_visited)
    //
    pageXRule.appendChild(createLabel(":visited", "mt3"))
    //
    appendBreak(pageXRule, 3)
    //
    pageXRule.appendChild(xrule_hover)
    //
    pageXRule.appendChild(createLabel(":hover", "mt3"))
    //
    appendBreak(pageXRule, 3)
    //
    pageXRule.appendChild(xrule_active)
    //
    pageXRule.appendChild(createLabel(":active", "mt3"))
    //
    appendBreak(pageXRule, 3)
    //
    pageXRule.appendChild(xrule_disabled)
    //
    pageXRule.appendChild(createLabel(":disabled", "mt3"))
    //
    appendBreak(pageXRule, 3)
    //
    pageXRule.appendChild(xrule_screen)
    //
    appendBreak(pageXRule, 1)
    //
    pageXRule.appendChild(createLabel("window inner width", "mt3"))
    //
    appendBreak(pageXRule, 2)
    //
    const html2 = "The rules apply when the inner width of the browser window is the selected one or greater. Rules for larger windows may override them."
    //
    pageXRule.appendChild(createLabel(html2, "taj w300"))
}
  
