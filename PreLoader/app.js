window.addEventListener('load', () => {
    const preload = document.querySelector(".preload");

    setTimeout(() => {
        preload.classList.add('preload-finish');
    }, 2000); 
});

document.querySelector('.btn').addEventListener('click', (event) => {
    event.preventDefault();
    const imageScreen = document.querySelector('.image-screen');
    imageScreen.classList.remove('hidden');
});
