const pythonEditor = CodeMirror.fromTextArea(document.getElementById("python"),{
	mode: "python",
	lineNumbers:true,
	theme:"monokai",
	autoCloseBrackets:true,
});
const pythonEditorVim = CodeMirror.fromTextArea(document.getElementById("python-vim"),{
	mode: "python",
	lineNumbers:true,
	theme:"monokai",
	autoCloseBrackets:true,
	keyMap:"vim"
});
const htmlEditor = CodeMirror.fromTextArea(document.getElementById("html"), {
	mode:"xml",
	lineNumbers:true,
	theme:"monokai",
	autoCloseTags:true
})