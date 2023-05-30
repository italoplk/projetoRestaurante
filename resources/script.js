
document.getElementById("hamburguer").addEventListener("click", function(){

    document.querySelector(".main-nav").classList.toggle("ativado");
    document.querySelector("#hamburguer").classList.toggle("rota");

    document.querySelector(".ion-navicon-round").classList.toggle("mudacor");

});


