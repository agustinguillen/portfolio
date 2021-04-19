$.getJSON("https://agustinguillen.github.io/portfolio/lang.json", function(json){
    
   $('.traducir').click(function(){

       var lang = $(this).attr('id');

       $('.lang').each(function(index, value){
           $(this).text(json[lang][$(this).attr('key')])
       })
   })
  });