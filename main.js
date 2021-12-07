const pythonEditor = CodeMirror.fromTextArea(
  document.getElementById("python"),
  {
    mode: "python",
    lineNumbers: true,
    theme: "material-darker",
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
  theme: "material-darker",
  autoCloseBrackets: true,
});

const cplusEditor = CodeMirror.fromTextArea(document.getElementById("cpp"), {
  mode: "text/x-c++src",
  lineNumbers: true,
  theme: "material-darker",
  autoCloseBrackets: true,
});
