
const estudios1= document.querySelector("#estu1")
const estudios2= document.querySelector("#estu2")
const estudios3= document.querySelector("#estu3")
const estudios4= document.querySelector("#estu4")


const estutext= document.querySelector("#estu_text")
const estutitle= document.querySelector("#estu_title")
co();
def();

estudios1.addEventListener("click",def, false);

function def(){
    estutitle.innerHTML="Universitario"
    estutext.innerHTML=`
    <b>2024 > Politecnico Grancolombiano.</b> <br> 
    Ingenieria en Sistemas. <br> <br>
    <b>2021 - 2023 > Politecnico Grancolombiano.</b> <br> 
    Tecnologia en Administracion de sistemas. <br> <br>
    `
    co()
    estudios1.classList.add("foo")
}

estudios2.addEventListener("click",(()=>{
    estutitle.innerHTML="Diplimado"
    estutext.innerHTML=`
    <b>2021 > Mision Tic universidad de caldas</b> <br> 
    Diplomado 800 horas en habilidades de programacion enfasis en programacion web.  <br> <br>
    <b>2022 > Industria de talentos</b> <br> 
    Diplomado en inteligencia artificial<br> <br>
    `
    co()
    estudios2.classList.add("foo")
}), false);

estudios3.addEventListener("click",(()=>{
    estutitle.innerHTML="Colegio"
    estutext.innerHTML=`
    <b>2020 > Colegio Empresarial</b> <br> 
    Mediatecnica en sistemas
    `
    co()
    estudios3.classList.add("foo")
}), false);

estudios4.addEventListener("click",(()=>{
    estutitle.innerHTML="Logros"
    estutext.innerHTML=`
    <b>2020 > Fedesoft </b> <br> 
    Finalista en el IV Concurso nacional de programación 2020 con el proyecto WorldLO <br> <br>
    <b>2018 > Pygmalion</b> <br> 
    Ganador concuro robotica Uvas<br> <br>
    `
    co()
    estudios4.classList.add("foo")
}), false);

/*
                <li><a href="#Estudios">Estudios</a></li>
                <li><a href="#Fortalezas">Fortalezas</a></li>
                <li><a href="#Proyectos">Proyectos</a></li>
                <li><a href="#Contacto">Contacto</a></li>
*/



 function co(){
    estudios1.classList.remove("foo");
    estudios2.classList.remove("foo");
    estudios3.classList.remove("foo");
    estudios4.classList.remove("foo");
 }