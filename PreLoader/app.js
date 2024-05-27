window.addEventListener('load', () => {
    const preload = document.querySelector(".preload");

    setTimeout(() => {
        preload.classList.add('preload-finish');
    }, 3000); 
});