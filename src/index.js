//document.querySelectorAll("section").style.display = 'block';

window.onscroll = () => {
    document.getElementById("scroll-number").textContent = (document.documentElement.scrollTop);

};

window.addEventListener('mouseup', (e) => {
    console.log(e.button);
})

const normalizePozition = (mouseX, mouseY) => {
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


}
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



const SecActive = (rep) => {
    /* //obtenemos un NodeList del DOM
    const NodeList = document.querySelectorAll('.seccion');
    // Change the text of multiple elements with a loop
    NodeList.forEach(e => {
        e.style.display = 'none';
    });
    let seccion = rep.hash.slice(1);
    document.getElementById(seccion).style.display = 'block'; */
}

const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

if (darkThemeMq.matches) {
    document.getElementById('path').setAttribute("fill", "white");
    document.getElementById('path1').setAttribute("fill", "white");
    document.getElementById('path2').setAttribute("fill", "white");
    document.getElementById('path3').setAttribute("fill", "white");
} else {
    // Theme set to light.
    document.getElementById('path').setAttribute("fill", "black");
    document.getElementById('path1').setAttribute("fill", "black");
    document.getElementById('path2').setAttribute("fill", "black");
    document.getElementById('path3').setAttribute("fill", "black");
}
;