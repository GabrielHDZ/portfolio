document.querySelector('#presentacion').style.display='block';

const SecActive=(rep)=>{
    const secciones=document.querySelectorAll('.seccion');
    // Change the text of multiple elements with a loop
    secciones.forEach(element => {
    element.style.display='none';
    });
    let seccion=rep.hash.slice(1);
    document.getElementById(seccion).style.display='block';
    
}
