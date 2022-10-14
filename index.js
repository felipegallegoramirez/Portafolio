const estudios1= document.querySelector("#estu1")
const estudios2= document.querySelector("#estu2")
const estudios3= document.querySelector("#estu3")
const estudios4= document.querySelector("#estu4")


const estutext= document.querySelector("#estu_text")
const estutitle= document.querySelector("#estu_title")


estudios1.addEventListener("click",(()=>{
    estutitle.innerHTML="Universitario"
    estutext.innerHTML="asd"
}), false);

estudios2.addEventListener("click",(()=>{
    estutitle.innerHTML="Diplimado"
    estutext.innerHTML="asd"
}), false);

estudios3.addEventListener("click",(()=>{
    estutitle.innerHTML="Colegio"
    estutext.innerHTML="asd"
}), false);

estudios4.addEventListener("click",(()=>{
    estutitle.innerHTML="Logros"
    estutext.innerHTML="asd"
}), false);

/*
                <li><a href="#Estudios">Estudios</a></li>
                <li><a href="#Fortalezas">Fortalezas</a></li>
                <li><a href="#Proyectos">Proyectos</a></li>
                <li><a href="#Contacto">Contacto</a></li>
*/


const sec1= document.querySelector("#Estudios")
const sec2= document.querySelector("#estu2")
const sec3= document.querySelector("#estu3")
const sec4= document.querySelector("#estu4")

sec2.addEventListener("scroll",(()=>{
    console.log("me estas viendo")
}))