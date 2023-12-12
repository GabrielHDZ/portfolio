/* This code is adding an event listener to the `matchMedia` method of the `window` object. The
`matchMedia` method is used to check if the user's device has a preference for a light or dark color
scheme. The event listener listens for changes in the user's color scheme preference and updates the
`fill` attribute of all `path` elements on the page accordingly. If the user's preference is for a
dark color scheme, the `fill` attribute is set to white, and if the preference is for a light color
scheme, the `fill` attribute is set to black. */
/* window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
    let paths = document.querySelectorAll("path");
    event.matches ? paths.forEach((nodo) => { nodo.setAttribute("fill", "white"); })
        : paths.forEach((nodo) => { nodo.setAttribute("fill", "black"); })
}); */

//contador aun falta desarrollo
/* window.onscroll = () => {
    document.getElementById("scroll-number").textContent = (document.documentElement.scrollTop);
}; */

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



