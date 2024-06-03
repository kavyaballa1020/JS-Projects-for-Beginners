document.addEventListener('DOMContentLoaded', function() {
    // Disable right-click on the left side content
    document.querySelector('.left').addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    // Disable keyboard shortcuts for copy (Ctrl+C), cut (Ctrl+X), and select all (Ctrl+A) on the left side content
    document.querySelector('.left').addEventListener('keydown', function(e) {
        if (e.ctrlKey && (e.key === 'c' || e.key === 'x' || e.key === 'a')) {
            e.preventDefault();
        }
    });

    // Disable paste (Ctrl+V) in the right side container
    document.querySelector('.right').addEventListener('paste', function(e) {
        e.preventDefault();
    });
});