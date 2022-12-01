//document.querySelectorAll("section").style.display = 'block';





window.onscroll = () => {
    document.getElementById("scroll-number").textContent = (document.documentElement.scrollTop);

};



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