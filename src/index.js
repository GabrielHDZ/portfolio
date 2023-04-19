
window.onscroll = () => {
    document.getElementById("scroll-number").textContent = (document.documentElement.scrollTop);

};

window.addEventListener('mouseup', (e) => {
    console.log(e.button);
})

/* const normalizePozition = (mouseX, mouseY) => {
    // ? compute what is the mouse position relative to the container element (scope)
    const {
        left: scopeOffsetX,
        top: scopeOffsetY,
    } = scope.getBoundingClientRect();

    const scopeX = mouseX - scopeOffsetX;
    const scopeY = mouseY - scopeOffsetY;

    // ? check if the element will go out of bounds
    const outOfBoundsOnX =
        scopeX + contextMenu.clientWidth > scope.clientWidth;

    const outOfBoundsOnY =
        scopeY + contextMenu.clientHeight > scope.clientHeight;

    let normalizedX = mouseX;
    let normalizedY = mouseY;

    // ? normalzie on X
    if (outOfBoundsOnX) {
        normalizedX =
            scopeOffsetX + scope.clientWidth - contextMenu.clientWidth;
    }
    if (outOfBoundsOnY) {
        normalizedY =
            scopeOffsetY + scope.clientHeight - contextMenu.clientHeight;
    }
    return { normalizedX, normalizedY };
} */

const contextMenu = document.getElementById('context-menu');
const scope = document.querySelector("body");
scope.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    const { clientX: mouseX, clientY: mouseY } = e;
    contextMenu.style.top = `${mouseY}px`;
    contextMenu.style.left = `${mouseX}px`;
    /* const { offsetX: mouseX, offsetY: mouseY } = e;
    const { normalizedX, normalizedY } = normalizePozition(mouseX, mouseY);
    contextMenu.style.top = `${normalizedY}px`;
    contextMenu.style.left = `${normalizedX}px`;
 */
    contextMenu.classList.remove('visible');
    setTimeout(() => {
        contextMenu.classList.add('visible');

    })
});
scope.addEventListener('click', (e) => {
    if (e.target.offsetParent != contextMenu) {
        contextMenu.classList.remove('visible');

    }
})
contextMenu.addEventListener('click', (e) => {
    contextMenu.classList.remove('visible');
})


/* This code is adding an event listener to the `matchMedia` method of the `window` object. The
`matchMedia` method is used to check if the user's device has a preference for a light or dark color
scheme. The event listener listens for changes in the user's color scheme preference and updates the
`fill` attribute of all `path` elements on the page accordingly. If the user's preference is for a
dark color scheme, the `fill` attribute is set to white, and if the preference is for a light color
scheme, the `fill` attribute is set to black. */
window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
    let paths = document.querySelectorAll("path");
    event.matches ? paths.forEach((e) => { e.setAttribute("fill", "white"); })
        : paths.forEach((e) => { e.setAttribute("fill", "black"); })
})

