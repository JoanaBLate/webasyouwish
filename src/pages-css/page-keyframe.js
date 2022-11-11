

"use strict"

const pageKeyframe = createDiv("dn w wx600 shell tac") 

const keyframe_keyframes = createSelector("w300", function() { showPageKeyframe() }) // captures the event

const keyframe_clone = createButton("clone", "w80 mr30", cloneKeyframe)

const keyframe_rename = createButton("apply", "w80 mr30", renameKeyframe)

const keyframe_delete = createButton("delete", "w80", deleteKeyframe)

const keyframe_data = createTextArea("pseudo-class", function() { currentKeyframe.data = noTagReally(this.value) })

var currentKeyframe = null

///////////////////////////////////////////////////////////////////////////////

function initPageKeyframe() {    
    //
    keyframe_data.rows = 4   
    //
    mainDivision.appendChild(pageKeyframe)
    //
    pageKeyframe.appendChild(keyframe_keyframes)
    //
    appendBreak(pageKeyframe, 1)
    //
    pageKeyframe.appendChild(createLabel("name", "mt3"))
    //
    appendBreak(pageKeyframe, 2)
    //
    pageKeyframe.appendChild(keyframe_clone)
    //
    pageKeyframe.appendChild(keyframe_rename)
    //
    pageKeyframe.appendChild(keyframe_delete)
    //
    appendBreak(pageKeyframe, 2)
    //
    const html = "Only <i>**temporary**</i> can be edited. Cannot delete <i>-keyframe</i> or <i>**temporary**</i>. Currently WAYW is <b>NOT</b> protecting used keyframes from being deleted. You have to *manually* adjust your X classes after renaming or deleting a keyframe set."
    //
    pageKeyframe.appendChild(createLabel(html, "w300 mt10 taj"))
    //
    appendBreak(pageKeyframe, 3)
    //
    pageKeyframe.appendChild(keyframe_data)
    //
    pageKeyframe.appendChild(createLabel("data", "mt3"))
}
  
///////////////////////////////////////////////////////////////////////////////

function showPageKeyframe(favorite) {
    //
    showPage(pageKeyframe, bgColorCss)
    //
    h1return.onclick = function() { if (preferPageCss) { showPageCss() } else { showPageBody() } }
    //
    h1title.innerHTML = "keyframe&nbsp;"
    //
    const name = fillKeyframeSelector(keyframe_keyframes, favorite)
    //
    currentKeyframe = dataKeyframes[name]
    //
    keyframe_data.value = currentKeyframe.data
    //
    adjustTextAreaRows(keyframe_data)
    //    
    keyframe_clone.disabled = (name == "**temporary**")
    //
    keyframe_delete.disabled = (name == "**temporary**"  ||  name.startsWith("-"))
    //
    const disabled = (name != "**temporary**")
    //
    keyframe_rename.disabled = disabled
    //
    keyframe_data.disabled = disabled
}

/////////////////////////////////////////////////////////////////////////////

function cloneKeyframe() {
    //
    const name = "**temporary**"
    //
    dataKeyframes[name] = cloneObj(currentKeyframe)
    //
    showPageKeyframe(name)
}

///////////////////////////////////////////////////////////////////////////////

function renameKeyframe() {
    //
    namePrompt("Enter a name for the keyframe.", renameKeyframe2)
}

function renameKeyframe2(name) {
    //
    if (name == null) { return }
    //
    if (name == "") { customError("Name cannot be blank.", renameKeyframe); return }
    //
    if (dataKeyframes[name] != undefined) { 
        //
        customError("This name is already used by a keyframe.", renameKeyframe); return 
    }
    //
    dataKeyframes[name] = cloneObj(currentKeyframe)
    //
    showPageKeyframe(name)
}

///////////////////////////////////////////////////////////////////////////////

function deleteKeyframe() {
    //
    const name = keyframe_keyframes.value
    //
    const msg = "Shall *DELETE* the keyframe <b>" + name + "</b> ?"
    //
    safeConfirm(msg, function() { delete dataKeyframes[name]; showPageKeyframe() })
}

