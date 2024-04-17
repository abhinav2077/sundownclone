const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

const fixed = document.querySelector("#fixed-image")

const elemC = document.querySelector("#elem-container")
elemC.addEventListener('mouseenter', ()=>{
    fixed.style.display = "block";
})
elemC.addEventListener('mouseleave', ()=>{
    fixed.style.display = "none";
})

var elems = document.querySelectorAll('.elem')
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 50,
        freeMode: true,
      });
}
swiperAnimation()

var page1 = document.querySelector("#page1")
var cursor = document.querySelector("#cursor")

page1.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })
})
page1.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1
    })
})

page1.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0
    })
})

var menu = document.querySelector("#nav h3")
var full = document.querySelector("#full-scr")
var navimg = document.querySelector("#nav img")
var flag = 0
menu.addEventListener("click",function(){
    if(flag == 0){
        full.style.top = 0
        navimg.style.opacity = 0
        flag = 1
    }else{
        full.style.top = "-100%"
        navimg.style.opacity = 1
        flag = 0
    }
})

var loader = document.querySelector("#loader")

setTimeout(function(){
    loader.style.top = "-100%"
},3200)


