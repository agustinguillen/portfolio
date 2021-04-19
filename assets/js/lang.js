$.getJSON("https://agustinguillen.github.io/portfolio/lang.json", function(json){
    //Lenguaje por defecto de la página sessionStorage.setItem("lang", "idioma")"
    
   $('#traducir').click(function(){
       console.log("al menos el boton xd");
       let lang = $(this).attr('id');
       $('lang').each(function(index, value){
           $(this).html(json[lang][$(this).att('key')])
       })
   })
  });//Get json AJAX