var quill = new Quill('#editor-container', {  
    modules: {
      toolbar: '#toolbar-container'
    },
    placeholder: 'Selected GIF images',
    theme: 'snow' 
});

var Parchment = Quill.import("parchment");
  
let CustomClass = new Parchment.Attributor.Class('custom', 'ql-custom', {
  scope: Parchment.Scope.INLINE
});

Quill.register(CustomClass, true);
  
var customButton = document.getElementById('custom-button');
customButton.addEventListener('click', function() {
  let searchString = document.getElementById('user-search').value;
  getGifs(searchString);
});

