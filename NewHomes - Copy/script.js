$(document).ready(function() {
    let html;

    $('#grad, #naselba, #adresa').change(function(){
        let grad = $('#grad').val();
        let naselba = $('#naselba').val();
        let adresa = $('#adresa').val();


        console.log(grad);
        console.log(naselba);
        console.log(adresa);
        html =``;
        $('.map').empty();

        html =`<div style="width: 100%">
            <iframe width="100%" height="160" 
            src="https://maps.google.com/maps?width=100%&amp;height=160&amp;hl=en&amp;q=${grad}%2C%20${naselba}%2C%20${adresa}+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=8&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.maps.ie/draw-radius-circle-map/">
            km radius map</a>
            </iframe>
            </div><br />`;

        $('.map').append(html);
    });

    
    let cena = `<div class="dropdown show">
    <a class="btn btn-success dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Цена според
    </a>    
    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" id="niska">Најниска кон највисока</a>
    <a class="dropdown-item" href="#" value="sobi">Највисока кон најниска</a>
    <a class="dropdown-item" href="#" value="greenje">Опсег од-до</a>
  </div>`

  let button = `<button type="button" class="btn btn-outline-success">Light</button>`

$("#cena").click(function(){
    console.log("true");
        $("#opcija2").empty();
        $("#opcija2").append(cena);
              
    
});

$("#niska").click(function(){
    console.log("true");
    $("#opcija3").empty();
    $("#opcija3").append(button);
    
});


$('body').scrollspy({target:'#main-nav'});

$("#main-nav a").on("click",function(e){
if(this.hash !== ""){
    e.preventDefault();
    const hash = this.hash;
    $("html, body").animate({
        scrollTop: $(hash).offset().top
    }, 900, function(){
        window.location.hash = hash;
    
    });
}

});


















  


});