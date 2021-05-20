const pythonEditor = CodeMirror.fromTextArea(
  document.getElementById("python"),
  {
    mode: "python",
    lineNumbers: true,
    theme: "base16-dark",
    autoCloseBrackets: true,
  }
);

// const htmlEditor = CodeMirror.fromTextArea(document.getElementById("html"), {
//   mode: "xml",
//   lineNumbers: true,
//   theme: "base16-dark",
//   autoCloseTags: true,
// });

const jsEditor = CodeMirror.fromTextArea(document.getElementById("js"), {
  mode: "javascript",
  lineNumbers: true,
  theme: "base16-dark",
  autoCloseBrackets: true,
});
