document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.left').addEventListener('contextmenu', function(e) {
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
    // Allow pasting
// var allowPaste = function(e){
//     e.stopImmediatePropagation();
//     return true;
//   };
//   document.addEventListener('paste', allowPaste, true);
  
//   // Allow context menu
//   document.addEventListener('contextmenu', function(e) {
//     e.stopImmediatePropagation();
//     // Optionally, you can add additional logic here if needed
//     return true;
//   }, true);
//   // Function to enable text selection
// function enableTextSelection(element) {
//     element.style.userSelect = 'auto';
//     element.style.webkitUserSelect = 'auto';
//     element.style.mozUserSelect = 'auto';
//     element.style.msUserSelect = 'auto';
// }

// // Example usage: Enable text selection on the element with the 'left' class
// const leftElement = document.querySelector('.left');
// enableTextSelection(leftElement);

});