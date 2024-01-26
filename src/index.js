window.addEventListener('mouseup', (e) => {
    console.log(e.button);
})

const contextMenu = document.getElementById('context-menu');
document.querySelector("body").addEventListener("contextmenu", (e) => {
    e.preventDefault();
    const { clientX, clientY } = e;
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const menuWidth = contextMenu.offsetWidth;
    const menuHeight = contextMenu.offsetHeight;
    const positionX = clientX > windowWidth - menuWidth ? windowWidth - menuWidth : clientX;
    const positionY = clientY > windowHeight - menuHeight ? windowHeight - menuHeight : clientY;
    console.log(positionX);
    contextMenu.style.top = `${positionY - 30}px`;
    contextMenu.style.left = `${positionX - 45}px`;
    contextMenu.classList.remove('visible');
    setTimeout(() => {
        contextMenu.classList.add('visible');
    });
});

window.addEventListener('scroll', () => {
    contextMenu.classList.remove('visible');
});

document.querySelector("body").addEventListener('click', (e) => {
    if (e.target.offsetParent != contextMenu) {
        contextMenu.classList.remove('visible');
    }
})
contextMenu.addEventListener('click', (e) => {
    contextMenu.classList.remove('visible');
})



