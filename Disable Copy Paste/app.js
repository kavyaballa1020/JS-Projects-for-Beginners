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
});