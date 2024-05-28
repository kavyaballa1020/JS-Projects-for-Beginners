window.addEventListener('load', () => {
    const preload = document.querySelector(".preload");
    setTimeout(() => {
        preload.classList.add('preload-finish');
        document.body.style.overflow = 'auto';
    }, 2000);
});

document.querySelector('.btn').addEventListener('click', (event) => {
    event.preventDefault();
    const imageScreen = document.querySelector('.image-screen');
    imageScreen.classList.remove('hidden');
    document.querySelector('.home').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.home').style.display = 'none';
    }, 1000);
});
