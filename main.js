const pythonEditor = CodeMirror.fromTextArea(document.getElementById("python"),{
	mode: "python",
	lineNumbers:true,
	theme:"monokai"
});
const htmlEditor = CodeMirror.fromTextArea(document.getElementById("html"), {
	mode:"xml",
	lineNumbers:true,
	theme:"monokai",
	autoCloseTags:true
})