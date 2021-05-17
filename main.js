const pythonEditor = CodeMirror.fromTextArea(document.getElementById("python"),{
	mode: "python",
	lineNumbers:true,
	theme:"dracula"
});
const htmlEditor = CodeMirror.fromTextArea(document.getElementById("html"), {
	mode:"xml",
	lineNumbers:true,
	theme:"dracula",
	autoCloseTags:true
})