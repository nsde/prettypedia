completions = {
    "(": ")",
    "[": "]",
    "{": "}",
    "'": "'",
    '"': '"',
    "„": "“",
    "“": "”",
    "»": "«"
}

function moveCaret(win, charCount) {
    var sel, range;

    if (win.getSelection) {
        sel = win.getSelection();
        if (sel.rangeCount > 0) {
            var textNode = sel.focusNode;
            var newOffset = sel.focusOffset + charCount;
            sel.collapse(textNode, Math.min(textNode.length, newOffset));
        }

    } else if ((sel = win.document.selection) ) {
        if (sel.type != "Control") {
            range = sel.createRange();
            range.move("character", charCount);
            range.select();
        }
    }
}

function insertTextAtCursor(text) { 
    var sel, range; 
    sel = window.getSelection();
    range = sel.getRangeAt(0); 
    range.deleteContents(); 

    var textNode = document.createTextNode(text);
    range.insertNode(textNode);
    range.setStartAfter(textNode);
    sel.removeAllRanges();
    sel.addRange(range);   
    
    range.setStart(textNode, 2)
}

$('#aero').focus();

document.getElementById("aero").onkeypress = function(e) {
    if (e.key in completions) {
        e.preventDefault();
        insertTextAtCursor(e.key + completions[e.key]);
        document.getElementById("aero").focus();
        // moveCaret(window, -1);
    }
};