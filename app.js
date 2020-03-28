document.addEventListener('DOMContentLoaded',function(){

    // init
    document.title = env.title;
    $('.title').html(env.title);
    $('.subtitle').html(env.subtitle);
    $('.body').html(env.body);

    // vars
    let animationendFlag = false;

    // load images
    const img = new Image();
    img.src = env.bgImages[randomNum(0, env.bgImages.length - 1)];

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
        bg.css('background-image', "url('" + img.src + "')");
        bgCover.addClass('animated fadeOut slower');
    }, false);
});

function randomNum(minNum,maxNum){
    switch(arguments.length){
        case 1:
            return parseInt(Math.random()*minNum+1,10);
            break;
        case 2:
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
            break;
        default:
            return 0;
            break;
    }
}
