document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.left').addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    document.querySelector('.right').addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    document.querySelector('.left').addEventListener('keydown', function(e) {
        if (e.ctrlKey && (e.key === 'c' || e.key === 'x' || e.key === 'a')) {
            e.preventDefault();
        }
    });

    document.querySelector('.right').addEventListener('paste', function(e) {
        e.preventDefault();
    });

    document.addEventListener('copy', function(e) {
        e.preventDefault(); 
        alert('Copying is disabled on this webpage.');
    });
});

/* 
    var allowPaste = function(e){
    e.stopImmediatePropagation();
    return true;
  };
  document.addEventListener('paste', allowPaste, true);
  
  document.addEventListener('contextmenu', function(e) {
    e.stopImmediatePropagation();
    return true;
  }, true);

  document.addEventListener('copy', function(e) {
    e.stopImmediatePropagation();
    return true;
}, true);
  
  (function() {
    var css = '.left { user-select: auto !important; -webkit-user-select: auto !important; -moz-user-select: auto !important; -ms-user-select: auto !important; }',
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');
  
    style.type = 'text/css';
    if (style.styleSheet){
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  
    head.appendChild(style);
  })();
  */