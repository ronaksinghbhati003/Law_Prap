let show =document.getElementById('showHide');
let toggle= true;
show.nextElementSibling.addEventListener("click",()=>{
    if(toggle){
        show.type="text";
        show.nextElementSibling.innerHTML=`<i class="fa-solid fa-eye"></i>`;
        toggle=false;
    }
    else{
        show.type="password";
        show.nextElementSibling.innerHTML=`<i class="fa-solid fa-eye-slash"></i>`;
        toggle=true;
    }
})

$('#mentorSlides').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    center:true,
    autoplay:true,
    autoplayTimeout:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})
$('#Judiciary').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    center:false,
    autoplay:false,
    dots:false,
    autoplayTimeout:1000,
    responsive:{
        0:{
            items:1,
            touchDrag  : true,
            mouseDrag  : true,
        },
        600:{
            items:2,
            touchDrag  : true,
            mouseDrag  : true,
            autoplay:true
        },
        1000:{
            items:4,
            touchDrag  : false,
            mouseDrag  : false
        }
    }
})
$('#program').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    center:false,
    autoplay:false,
    dots:false,
    autoplayTimeout:1000,
    responsive:{
        0:{
            items:1,
            touchDrag  : true,
            mouseDrag  : true,
            center:false,
        },
        600:{
            items:2,
            touchDrag  : true,
            mouseDrag  : true,
            autoplay:true,
            center:true,
        },
        1000:{
            items:3,
            touchDrag  : false,
            mouseDrag  : false
        }
    }
})