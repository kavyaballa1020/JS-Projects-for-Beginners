window.addEventListener('load', () => {
    const preload = document.querySelector(".preload");

    setTimeout(() => {
        preload.classList.add('preload-finish');
    }, 2000); 
});

document.querySelector('.btn').addEventListener('click', (event) => {
    event.preventDefault();
    const hiddenImage = document.querySelector('.hidden-image');
    hiddenImage.style.display = 'block';
});
