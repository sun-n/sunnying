$(".sub").hide();
$(".menu>li").mouseover(function(){
$(this).children(".sub").stop().show();
$(".header").addClass("hover");
})
$(".menu>li").mouseout(function(){
 $(this).children(".sub").stop().hide();
 $(".header").removeClass("hover");
})
//m_menu,sub
$(".m_sub").hide();
$(".m_menu>li").click(function(){
$(this).toggleClass(".m_active");
$(this).siblings().removeClass(".m_active");
$(this).children(".m_sub").slideToggle(250);
$(this).siblings().children(".m_sub").slideUp(100);
})

//m_nav
$(".m_nav").hide();
$(".m_btn").click(function(){
$(".m_nav").fadeIn(300);
$(".m_nav_wrap").addClass(".m_nav_wrap_active")
})

$(".m_close").click(function(){
$(".m_nav").fadeOut(300);
$(".m_nav_wrap").removeClass(".m_nav_wrap_active")
})

//.con1box2 슬라이드
const slider1=new Swiper('.con1box2 .swiper', {
loop:true,
navigation:{
 prevEl: ".prev_btn",
 nextEl: ".next_btn",
},
pagination:{el:'.con1box2 .swiper-pagination',type:'fraction'}
})

//site slide
const site=new Swiper('.site .swiper',{
loop:true,
slidesPerView:"auto",
navigation:{
 preEl: '.site_prev',
 nextEl: '.site_next',
},
autoplay:{delay:2500,disableOnlnteraction: false,}
})

$(".site_pause").click(function(){
$(".site_pause").hide();
$(".site_play").show();
site.autoplay.stop();
})
$(".site_play").click(function(){
 $(".site_pause").show();
 $(".site_play").hide();
 site.autoplay.start();
 })