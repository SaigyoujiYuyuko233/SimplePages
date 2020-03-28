document.addEventListener('DOMContentLoaded',function(){

    // vars
    let animationendFlag = false;

    // load images
    const img = new Image();
    img.src = "bg.png";

    // background
    const bgCover = $('.background-cover');
    const bg = $(".background");

    // display images
    const element =  document.querySelector('.header');

    element.addEventListener('animationend', function() {
        animationendFlag = true;
    });

    img.addEventListener('load', function () {
        console.log("load");
        bg.css('background-image', img.baseURI);
        bgCover.addClass('animated fadeOut slower');
    }, false);
});
