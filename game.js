$('.top').on('click', function(){
    $('.image').animate({
        top: "-=200px"

    })
})

$('.bottom').on('click', function(){
    $('.image').animate({
        top: "+=200px"

    })
})

$('.left').on('click', function(){
    $('.image').animate({
        left: "-=200px"

    })
})

$('.right').on('click', function(){
    $('.image').animate({
        left: "+=200px"

    })
})

$('.visible_1').on('click', function(){
    $('.image').animate({
        opacity: '1.0',

    })
})

$('.invisible').on('click', function(){
    $('.image').animate({
        
        opacity: '0.08',
    })
})

$('.grow').on('click', function(){
    $('.image').animate({
        width: '350px',
        height: '400px',

    })
})

$('.shrink').on('click', function(){
    $('.image').animate({
        width: '100px',
        height: '200px',

    })
})

$('.normal').on('click', function(){
    $('.image').animate({
        width: '200px',
        height: '250px',

    })
})

$('.other').on('click', function(){
    $('.image').animate({
        width: '200px',
        height: '250px',
        opacity: '1.0',
        top: "180px", 
        left: "780px"
       
    })
})
var audioElement = document.createElement("audio");
 audioElement.setAttribute("src", "./song.wav");
$('.btn_music').on('click', function(){
    audioElement.play();
})

$('.btn_pause').on('click', function(){
    audioElement.pause();
})

    