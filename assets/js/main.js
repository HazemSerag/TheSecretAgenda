
$( document ).ready(function() {

    document.body.style.display='block';
    
    document.getElementById("favv").click();

    var toggle=0;
var msgs=['I love your company <i class="fas fa-heart" style="color: #ff4141"></i>','I love your company <i class="fas fa-heart" style="color: #ff4141"></i>','I love your company <i class="fas fa-heart" style="color: #ff4141"></i>','I love your company <i class="fas fa-heart" style="color: #ff4141"></i>','I love your company <i class="fas fa-heart" style="color: #ff4141"></i>','I love your company <i class="fas fa-heart" style="color: #ff4141"></i>','I love your company <i class="fas fa-heart" style="color: #ff4141"></i>','I love your company <i class="fas fa-heart" style="color: #ff4141"></i>','I love your company <i class="fas fa-heart" style="color: #ff4141"></i>','I love your company <i class="fas fa-heart" style="color: #ff4141"></i>','I love your company <i class="fas fa-heart" style="color: #ff4141"></i>','I love your company <i class="fas fa-heart" style="color: #ff4141"></i>','I love your company <i class="fas fa-heart" style="color: #ff4141"></i>','I love your company <i class="fas fa-heart" style="color: #ff4141"></i>','I love your company <i class="fas fa-heart" style="color: #ff4141"></i>','I love your company <i class="fas fa-heart" style="color: #ff4141"></i>','I love your company <i class="fas fa-heart" style="color: #ff4141"></i>','I love your company <i class="fas fa-heart" style="color: #ff4141"></i>','I love your company <i class="fas fa-heart" style="color: #ff4141"></i>','I love your company <i class="fas fa-heart" style="color: #ff4141"></i>','I love your company <i class="fas fa-heart" style="color: #ff4141"></i>','I love your company <i class="fas fa-heart" style="color: #ff4141"></i>','I love your company <i class="fas fa-heart" style="color: #ff4141"></i>','I love your company <i class="fas fa-heart" style="color: #ff4141"></i>','I love your company <i class="fas fa-heart" style="color: #ff4141"></i>','I love your company <i class="fas fa-heart" style="color: #ff4141"></i>','I love your company <i class="fas fa-heart" style="color: #ff4141"></i>','I love your company <i class="fas fa-heart" style="color: #ff4141"></i>','I love your company <i class="fas fa-heart" style="color: #ff4141"></i>','I love your company <i class="fas fa-heart" style="color: #ff4141"></i>','I love your company <i class="fas fa-heart" style="color: #ff4141"></i>'];
function reasons(){
    var d = new Date();
    day=d.getDate();
    
    document.getElementById('msgDay').innerHTML=msgs[day-1];
}

var music= document.getElementById("audio"); 


        $('.foods').hide();
        $('.spot').hide();
        $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
            if ($(".filter-button").removeClass("active")) {
                $(this).removeClass("active");
                }
        $(this).addClass("active");
            
            
        });

    $("#storyB").click(function() {
        $('html, body').animate({
            scrollTop: $("#story").offset().top
        }, 1250);
    });
    $("#galleryB").click(function() {
        $('html, body').animate({
            scrollTop: $("#gallery").offset().top
        }, 1250);
    });
    $("#quotesB").click(function() {
        $('html, body').animate({
            scrollTop: $("#quotes").offset().top
        }, 1250);
    });

    reasons();


    function checkAnime(){
    if(pageYOffset>350 && pageYOffset<950){
        $('.birthday').addClass('animated zoomIn showAndDelay')
    }else if(pageYOffset>950){
        $('#Reem').addClass('animated fadeInLeft showAndDelay');
        $('#Hazem').addClass('animated fadeInRight showAndDelay');
    }else{}
        window.requestAnimationFrame(checkAnime);
    }
    checkAnime();
    var width=$(window).width();
    if( width > 992){


        $(window).scroll(function() {

            if ($(this).scrollTop() > 2) { // this refers to window
            $('.items').css('text-align','right');

        }else{}
        });
    };
    var play=0;
    $('#pl').click(function(){
        play++;
        if(play%2!=0){
            $('#audio').attr("src","assets/img/Sea.mp3mute=1");
            $('#pl').removeClass('fa-pause');
            $('#pl').addClass('fa-play');
        }else{
            $('#audio').attr("src","assets/img/Sea.mp3");
            $('#pl').removeClass('fa-play');
            $('#pl').addClass('fa-pause');

        }
    });
    $("#men").click(function( event ) {
        toggle++;
        if(toggle%2!=0){
   
        
            $(".menu").css({
            '-webkit-animation': 'expand .5s ease-in-out forwards',
            'animation': 'expand .5s ease-in-out forwards'
         });
         $("#men").removeClass("fa-bars");
         $("#men").addClass("fa-times");
        $(".items").css({'display':'block'});
        }
        else{
       
            $(".menu").css({
                '-webkit-animation': 'shrink .2s ease-in-out backwards',
                'animation': 'shrink .2s ease-in-out backwards'
             });
            $(".items").css({'display':'none'});
            $("#men").removeClass("fa-times");
            $("#men").addClass("fa-bars");

        }
    });
    // end collapse
    
    var c=document.getElementById("im");
    var ctx=c.getContext("2d");  

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
        }


    c.addEventListener("mousemove", function(e) {
      console.log('ifeel');
        // var x = 1366-e.clientX;
        var x = e.clientX;

        
         var t=0,m=0,n=0,xh=0,yh=0;
        // var y = 653-e.clientY;
        var y = e.clientY;

        // for(i=0;i<3;i++){
            var s=3*Math.random();        
            solidHeart('#dc3545',"#FFFFFF",x,y,s);
            // solidHeart('hsla(42,65%,45%,.6)','purple',x,y,s);
            // solidHeart('hsla(327,42%,9%,.5)',x+3    0,y+10);
            
        // }
                console.log(s);
                setTimeout(function(){
                    ctx.beginPath();
                    ctx.clearRect(x-(s*10),y-(s*8),s*25,s*25);
                    },400);
        
            // heart('hsla(42,65%,45%,.5)');
            // setTimeout(function(){

            //     heart('rgba(255,255,255,255)');
            //     },300);
            //     setTimeout(function(){
            //         ctx.beginPath();
            //         ctx.clearRect(0,0,c.width,c.height);
            //         },1000);
        // }
    
        var k=0;
        
        function solidHeart(color,st,x,y,s){
            ctx.beginPath();
            ctx.fillStyle=color;
            ctx.strokestyle=st;
            // var s=2;
            //Heart Shape
            ctx,moveTo(x,y);
            ctx.bezierCurveTo(x,y-.3*(s),x-.5*(s),y-1.5*(s),x-2.5*(s),y-1.5*(s));
            ctx.bezierCurveTo(x-5.5*(s),y-1.5*(s),x-5.5*(s),y+2.25*(s),x-5.5*(s),y+2.25*(s));
            ctx.bezierCurveTo(x-5.5*(s),y+4.0*(s),x-3.5*(s),y+6.2*(s),x,y+8.0*(s));
            ctx.bezierCurveTo(x+3.5*(s),y+6.25*(s),x+5.5*(s),y+4.0*(s),x+5.5*(s),y+2.25*(s));
            ctx.bezierCurveTo(x+5.5*(s),y+2.25*(s),x+5.5*(s),y-1.5*(s),x+2.5*(s),y-1.5*(s));
            ctx.bezierCurveTo(x+1.0*(s),y-1.5*(s),x,y-.3*(s),x,y);
            ctx.fill();
            // ctx.stroke();
            // setTimeout(function(){
            //     ctx.beginPath();
            //     ctx.clearRect(x-50,y-25,s*50,s*50);
            //     },500);
        
        }
        


        function erase(k){
            k+=(1/30);                                  
            heart('white');        
            console.log(k);
            if(k>=1.2){window.cancelAnimationFrame(erase);
              ctx.beginPath();
            ctx.clearRect(0,0,c.width,c.height);
            }
            else{
            window.requestAnimationFrame(erase);
            }
        }    
    function heart(color){
        
        for(j=0;j<40;j++){
        m=1;
        t-=.1 ;
        n+=1;
        r=100+(1/1000)*Math.tanh(1000*Math.sin(n*t));
        xh=m*16*Math.pow(Math.sin(t),3)
        yh=m*13*Math.cos(t)-m*5*Math.cos(2*t)-m*2*Math.cos(3*t)-m*Math.cos(4*t)
        ctx.beginPath()
        ctx.fillStyle=color;
        ctx.arc(x+xh,y+yh,1,0,2*Math.PI,false);
        ctx.fill();                
}};


//     function heartW(k){
//         for(j=0;j<40;j++){
//         m=1;
//         t-=.1 ;
//         n+=1;
//         r=100+(1/1000)*Math.tanh(1000*Math.sin(n*t));
//         xh=m*16*Math.pow(Math.sin(t),3)
//         yh=m*13*Math.cos(t)-m*5*Math.cos(2*t)-m*2*Math.cos(3*t)-m*Math.cos(4*t)
//         ctx.beginPath()
//         ctx.fillStyle='hsla(360,65%,100%,1)';
//         ctx.arc(x+xh,y+yh,1,0,2*Math.PI,false)
//         ctx.fill();                
// }};

//     window.setTimeout(function(){
//         var k=0;
//         function erase(){
//         k+=(1/30);                                  
//         heart('white');        
//         console.log(k);
//         if(k>=1.2){window.cancelAnimationFrame(erase);
//           ctx.beginPath();
//         ctx.clearRect(0,0,c.width,c.height);
//       }
//         else{
//         window.requestAnimationFrame(erase);
//         }
//     }
//     erase();

//     }
//         ,300);
});



});


