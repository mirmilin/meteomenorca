$( document ).ready(function(){

    /*Predefinido por materialize para inicializar menu en disp. móviles*/
   $(".button-collapse").sideNav();
   /*Imagen de fondo según hora del día*/
   $('html').css('background', 'url(assets/images/'+ponerFondoSegunHora()+'.jpg) no-repeat center center fixed');

})

function ponerFondoSegunHora(){
  var img = "";
  var temps = new Date();
  var hora = temps.getHours();

  if ((hora > 19 && hora <= 23) || (hora < 6)){
    return "vespre";
  }else if (hora > 6 && hora < 10) {
    return "sortida";
  }else if (hora > 10 && hora < 17) {
    return "dia";
  }else if (hora > 17 && hora < 19) {
    var num = Math.floor(Math.random() * 2) + 1;
    return "posta"+num;
  }else{
    return false;
  }
}
